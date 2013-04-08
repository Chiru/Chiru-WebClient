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
        this.texturesNeeded = [];
        this.changedTextures = [];
        this.faceTextures = {'0': null, '1': null, '2': null, '3': null, '4': null, '5': null};
        this.skyBox = null;

        this.createSky();
    };

    namespace.storeComponent( 10, "EC_Sky", ECSky );


    ECSky.prototype = util.extend( Object.create( namespace.Component.prototype ),
        {

            onAttributeUpdated: function ( attr ) {
                if ( attr['name'] === "texture" ) {
                    var textures = this.defaultTextures, refs = this.textureRefs, oldTextures = this.texturesLoaded;

                    if ( !refs.every( function ( e ) {return textures.indexOf( e ) !== -1; }) ) {
                        console.warn("EC_Sky: Using different skybox textures than default. " +
                            "Trying to request them from the remote storage.");
                        this.storagePath = "";
                    }else{
                        this.storagePath = this.defaultPath;
                    }

                    this.changedTextures.length = 0;

                    this.getChangedTextures();
                    this.getTextures();
                }

            },

            onParentAdded: function ( parent ) {

            },

            onTextureAssetLoaded: function ( texture ) {
                var index = this.texturesNeeded.indexOf(texture.name);
                if(index !== -1){
                    this.texturesNeeded.splice(index, 1);
                }

                if ( this.texturesNeeded.length === 0 ) {
                    console.log( "ECSky: All textures loaded. Creating Sky..." );
                    this.texturesLoaded = 0;
                    this.changeFaceTextures();
                }

            },

            disableSky: function () {

            },


            createSky: function () {
                var skyMaterial, faceMaterials = [6], skyBox, geometry, defaultTexture, distance = this.distance, i;

                if ( !this.skyBox ) {
                    defaultTexture = THREE.ImageUtils.generateDataTexture( 1, 1, 0x87CEEB );

                    for ( i = 6; i--; ) {
                        faceMaterials[i] = new THREE.MeshBasicMaterial( {map: defaultTexture, side: THREE.BackSide, depthWrite: false} );
                    }

                    skyMaterial = new THREE.MeshFaceMaterial( faceMaterials );


                    geometry = new THREE.CubeGeometry( distance, distance, distance );
                    skyBox = this.skyBox = new THREE.Mesh( geometry, skyMaterial );

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

                }
            },

            getChangedTextures: function(){
                var refs = this.textureRefs, faceTextures = this.faceTextures, i, changed = [];

                for( i = refs.length; i--;){
                    if(faceTextures[i] !== refs[i]){
                        faceTextures[i] = refs[i];
                        changed.push(i);
                    }
                }

                this.changedTextures = changed;
            },

            getTextureOrder: function ( index ) {

                    if ( index === 0 ) {
                        return 0;
                    } else if ( index === 1 ) {
                        return 1;
                    } else if ( index === 2 ) {
                        return 4;
                    } else if ( index === 3 ) {
                        return 5;
                    } else if ( index === 4 ) {
                        return 2;
                    } else if ( index === 5 ) {
                        return 3;
                    } else {
                       return -1;
                    }
            },

            changeFaceTextures: function ( ) {
                var changedTextures = this.changedTextures, skyBoxMaterial, texture,
                    faceTextures = this.faceTextures, assetManager = this.sceneManager.assetManager, i, faceIndex, order;

                if(!this.skyBox){
                    return;
                }

                skyBoxMaterial = this.skyBox.material.materials;

                for ( i = changedTextures.length; i--; ) {
                    faceIndex = changedTextures[i];

                    texture = assetManager.getAsset( faceTextures[faceIndex], 'texture', this.storagePath );

                    if ( texture ) {
                        order = this.getTextureOrder(faceIndex);
                        skyBoxMaterial[order].map = texture;
                        skyBoxMaterial[order].needsUpdate = true;

                    }
                }

            },


            getTextures: function () {
                var request, texture, texturesNeeded, changedTextures = this.changedTextures, temp,
                    textureRefs = this.textureRefs, assetManager = this.sceneManager.assetManager,
                    self = this, callBack, i;

                if ( !assetManager ) {
                    throw new Error( ["ECSky: Could not get AssetManager object, texture load failed;"] );
                }

                temp = textureRefs.filter( function ( el, index ) {
                    return changedTextures.indexOf(index)!== -1;
                } );

                this.texturesNeeded.length = 0;


                texturesNeeded = this.texturesNeeded = temp.filter( function( el, index){
                    return temp.indexOf( el ) === index;
                });

                temp.length = 0;

                callBack = function ( asset ) {
                    if ( asset ) {
                        self.onTextureAssetLoaded( asset );
                    }
                };

                for ( i = texturesNeeded.length; i--; ) {
                    request = assetManager.requestAsset( texturesNeeded[i], 'texture', this.storagePath );
                    if ( request ) {
                        request.add( callBack );
                    } else {
                        texture = assetManager.getAsset( texturesNeeded[i], 'texture', this.storagePath );
                        if ( texture ) {
                            this.onTextureAssetLoaded( texture );
                        }
                    }
                }
            }

        } // Prototype end
    );


}( window['webtundra'] = window['webtundra'] || {} ));
