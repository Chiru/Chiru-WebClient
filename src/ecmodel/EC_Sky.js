// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * @author Toni Dahl
 */


(function ( namespace, undefined ) {

    var ECSky, util;

    util = namespace.util;

    /**
     * ECMaterial constructor
     *
     * @constructor
     * @augments Component
     * @name ECSky
     * @type Function
     * @param {object} sceneMgr Pointer to scene manager.
     */

    ECSky = namespace.ECSky = function ( sceneMgr ) {
        //Inherit component properties
        namespace.Component.call( this, sceneMgr );

        // Default attributes
        //this.createAttribute("material", "RexSkyBox", 'assetref');
        this.createAttribute( "texture", ["rex_sky_front.dds",
                                          "rex_sky_back.dds",
                                          "rex_sky_left.dds",
                                          "rex_sky_right.dds",
                                          "rex_sky_top.dds",
                                          "rex_sky_bot.dds" ], 'assetreflist', "textureRefs" );
        this.createAttribute( "distance", 3, 'real' );
        this.createAttribute( "orientation", [0.0, 0.0, 0.0, 1.0], 'quat' );
        this.createAttribute( "drawfirst", true, 'bool', "drawFirst" );


        // Other properties
        this.defaultTextures = ["rex_sky_front.dds",
                                "rex_sky_back.dds",
                                "rex_sky_left.dds",
                                "rex_sky_right.dds",
                                "rex_sky_top.dds",
                                "rex_sky_bot.dds"];
        this.defaultPath = "default_assets/textures/";
        this.textureAssets = [];
        this.cubeTexture = null;
        this.skyBox = null;

    };

    namespace.storeComponent( 10, "EC_Sky", ECSky );


    ECSky.prototype = util.extend( Object.create( namespace.Component.prototype ),
        {

            onAttributeUpdated: function ( attr ) {
                if ( attr['name'] === "texture" ) {
                    var textures = this.defaultTextures;

                    if ( !this.textureRefs.every( function ( e ) {
                            return textures.indexOf( e ) !== -1;
                        }
                    ) ) {
                        console.warn("EC_Sky: Using different skybox textures than default. " +
                            "Trying to request them from remote storage.");
                        this.defaultPath = "";
                    }
                }

            },

            onParentAdded: function ( parent ) {
                this.getTextures();
            },

            onTextureAssetLoaded: function ( texture ) {
                if ( this.textureAssets.length === 6 ) {
                    console.log( "ECSky: All textures loaded. Creating Sky..." );
                    this.cubeTexture = this.createCubeTexture( this.textureAssets );
                    this.createSky( this.cubeTexture );
                }

            },

            disableSky: function () {

            },


            createSky: function ( cubeTexture ) {
                var shader, material, skyBox, geometry, distance = this.distance;
                //inverse = this.sceneManager.camera.inverse;

                if(!cubeTexture){
                    return;
                }

                //shader = THREE.ShaderLib[ "cube" ];
                //cubeTexture.mapping = new THREE.UVMapping();
                //shader.uniforms[ "tCube" ].value = cubeTexture;
                 /*
                 shader.vertexShader = [
                     "varying vec3 vWorldPosition;",

                     "void main() {",

                     "vec4 worldPosition = modelMatrix * vec4( position, 1.0 );",
                     "vWorldPosition = worldPosition.xyz;",

                     "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

                     "}"
                 ].join( "\n" );

                 shader.fragmentShader = [
                     "uniform samplerCube tCube;",
                     "uniform float tFlip;",

                     "varying vec3 vWorldPosition;",

                     "void main() {",

                     "gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );",

                     "}"
                 ].join( "\n" );
                */
                /*material = new THREE.ShaderMaterial( {

                    fragmentShader: shader.fragmentShader,
                    vertexShader: shader.vertexShader,
                    uniforms: shader.uniforms,
                    depthWrite: false,
                    side: THREE.BackSide

                } );*/

                material = new THREE.MeshFaceMaterial( cubeTexture );
                material.depthWrite = false;
                material.side = THREE.BackSide;
                console.log(material)

                geometry = new THREE.CubeGeometry( distance, distance, distance );
                skyBox = this.skyBox = new THREE.Mesh( geometry, material );

                // This has no effect for the top face uv mapping for some reason, hence it has wrong orientation
                skyBox.geometry.faceVertexUvs[0][2] = [new THREE.Vector2(0, 0), new THREE.Vector2(0, 1),
                                                       new THREE.Vector2(1, 1), new THREE.Vector2(1, 0)];
                skyBox.geometry.uvsNeedUpdate = true;

                //this.sceneManager.camera.add(skyBox)
                this.sceneManager.addSkyBox( skyBox );


            },

            createCubeTexture: function ( textures ) {
                var ordered = [], texturesLen = textures.length, name, i, order;


                function checkOrder( name ) {
                    if ( typeof name !== 'string' && name !== '' ) {
                        console.error( "ECSky: Invalid SkyBox texture name!" );
                        return false;
                    }

                    if ( name.indexOf( "front" ) !== -1 ) {
                        return 0;
                    } else if ( name.indexOf( "back" ) !== -1 ) {
                        return 1;
                    } else if ( name.indexOf( "top" ) !== -1 ) {
                        return 2;
                    } else if ( name.indexOf( "bot" ) !== -1 ) {
                        return 3;
                    } else if ( name.indexOf( "left" ) !== -1 ) {
                        return 4;
                    } else if ( name.indexOf( "right" ) !== -1 ) {
                        return 5;
                    } else {
                        console.error( "ECSky: Invalid SkyBox texture: " + name );
                        return false;
                    }
                }

                for ( i = texturesLen; i--; ) {
                    order = checkOrder( textures[i].name );

                    if (!order) {
                        return false;
                    }

                    ordered[order] = textures[i];
                }

                return ordered;
            },


            getTextures: function () {
                var request, texture, i,
                    refs = this.textureRefs,
                    refsLen = refs.length,
                    assetManager = this.sceneManager.assetManager,
                    assets = this.textureAssets,
                    self = this;


                if ( !assetManager ) {
                    throw new Error( ["ECSky: Could not get AssetManager object, texture load failed;"] );
                }


                if ( refs && refsLen === 6 ) {

                    var callBack = function ( asset ) {
                        if ( asset ) {
                            assets.push( asset );
                            self.onTextureAssetLoaded( asset );
                        }
                    };

                    for ( i = refsLen; i--; ) {
                        request = assetManager.requestAsset( refs[i], 'texture', this.defaultPath );
                        if ( request ) {
                            request.add( callBack );
                        } else {
                            texture = assetManager.getAsset( refs[i], 'texture', this.defaultPath );
                            if ( texture ) {
                                assets.push( texture );
                                self.onTextureAssetLoaded( texture );
                            }
                        }
                    }
                }

            }

        } // Prototype end
    );


}( window['webtundra'] = window['webtundra'] || {} ));
