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
        this.storagePath = this.defaultPath;
        this.texturesLoaded = 0;
        this.texturesNeeded = [];

        this.cubeMaterial = null;
        this.skyBox = null;

    };

    namespace.storeComponent( 10, "EC_Sky", ECSky );


    ECSky.prototype = util.extend( Object.create( namespace.Component.prototype ),
        {

            onAttributeUpdated: function ( attr ) {
                if ( attr['name'] === "texture" ) {
                    var textures = this.defaultTextures, refs = this.textureRefs;

                    this.texturesNeeded =  refs.filter(function(elem, pos) {
                        return refs.indexOf(elem) === pos;
                    });

                    if ( !refs.every( function ( e ) {
                            return textures.indexOf( e ) !== -1;
                        }
                    ) ) {
                        console.warn("EC_Sky: Using different skybox textures than default. " +
                            "Trying to request them from the remote storage.");
                        this.storagePath = "";
                    }else{
                        this.storagePath = this.defaultPath;
                    }
                    console.warn(this.texturesNeeded)
                    this.getTextures();
                }

            },

            onParentAdded: function ( parent ) {
            },

            onTextureAssetLoaded: function ( texture ) {
                console.warn(texture)
                if ( this.texturesLoaded === this.texturesNeeded.length ) {
                    console.log( "ECSky: All textures loaded. Creating Sky..." );
                    this.texturesLoaded = 0;
                    this.createSky(this.createFaceMaterials());
                }

            },

            disableSky: function () {

            },


            createSky: function (faceMaterials) {
                var shader, material, skyBox, geometry, distance = this.distance;
                console.warn(faceMaterials)
                if(!faceMaterials){
                    return;
                }

                material = this.cubeMaterial =  new THREE.MeshFaceMaterial( faceMaterials );

                if ( !this.skyBox ) {
                    geometry = new THREE.CubeGeometry( distance, distance, distance );
                    skyBox = this.skyBox = new THREE.Mesh( geometry, material );

                    skyBox.geometry.faceVertexUvs[0][0] = [new THREE.Vector2( 0, 0 ), new THREE.Vector2( 0, 1 ),
                                                           new THREE.Vector2( 1, 1 ), new THREE.Vector2( 1, 0 )];
                    skyBox.geometry.faceVertexUvs[0][1] = [new THREE.Vector2( 0, 0 ), new THREE.Vector2( 0, 1 ),
                                                           new THREE.Vector2( 1, 1 ), new THREE.Vector2( 1, 0 )];
                    skyBox.geometry.faceVertexUvs[0][2] = [new THREE.Vector2( 1, 0 ), new THREE.Vector2( 0, 0 ),
                                                           new THREE.Vector2( 0, 1 ), new THREE.Vector2( 1, 1 )];
                    skyBox.geometry.faceVertexUvs[0][3] = [new THREE.Vector2( 1, 0 ), new THREE.Vector2( 0, 0 ),
                                                           new THREE.Vector2( 0, 1 ), new THREE.Vector2( 1, 1 )];
                    skyBox.geometry.faceVertexUvs[0][4] = [new THREE.Vector2( 0, 0 ), new THREE.Vector2( 0, 1 ),
                                                           new THREE.Vector2( 1, 1 ), new THREE.Vector2( 1, 0 )];
                    skyBox.geometry.faceVertexUvs[0][5] = [new THREE.Vector2( 0, 0 ), new THREE.Vector2( 0, 1 ),
                                                           new THREE.Vector2( 1, 1 ), new THREE.Vector2( 1, 0 )];
                    skyBox.geometry.uvsNeedUpdate = true;

                    this.skyBox = skyBox;
                    this.sceneManager.addSkyBox( skyBox );
                } else {
                    this.skyBox.material = material;
                    this.skyBox.uvsNeedUpdate = true;
                }


            },

            checkTextureOrder: function ( name, index ) {
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
                    if(index === 0){
                        return 0;
                    } else if ( index === 1 ){
                        return 1;
                    } else if ( index === 2 ){
                        return 4;
                    } else if ( index === 3 ) {
                        return 5;
                    } else if ( index === 4) {
                        return 2;
                    } else if ( index === 5) {
                        return 3;
                    } else {
                        return -1;
                    }
                }
            },

            createFaceMaterials: function ( ) {
                var ordered = [],  texture, refs = this.textureRefs, assetManager = this.sceneManager.assetManager,
                    i, order;

                for ( i = refs.length; i--; ) {
                    texture = assetManager.getAsset( refs[i], 'texture', this.storagePath );

                    if ( texture ) {
                        order = this.checkTextureOrder( texture.name, i );

                        if ( order === -1 ) {
                            continue;
                        }

                        ordered[order] = new THREE.MeshBasicMaterial( {map: texture, side: THREE.BackSide, depthWrite: false} );
                    }
                }

                return ordered;
            },


            getTextures: function () {
                var request, texture, i,
                    refs = this.texturesNeeded,
                    assetManager = this.sceneManager.assetManager,
                    self = this;

                if ( !assetManager ) {
                    throw new Error( ["ECSky: Could not get AssetManager object, texture load failed;"] );
                }

                if ( refs ) {

                    var callBack = function ( asset ) {
                        if ( asset ) {
                            self.texturesLoaded += 1;
                            self.onTextureAssetLoaded( asset );
                        }
                    };

                    for ( i = refs.length; i--; ) {
                        request = assetManager.requestAsset( refs[i], 'texture', this.storagePath );
                        if ( request ) {
                            request.add( callBack );
                        } else {
                            texture = assetManager.getAsset( refs[i], 'texture', this.storagePath );
                            if ( texture ) {
                                this.texturesLoaded += 1;
                                this.onTextureAssetLoaded( texture );
                            }
                        }
                    }
                }
            }

        } // Prototype end
    );


}( window['webtundra'] = window['webtundra'] || {} ));
