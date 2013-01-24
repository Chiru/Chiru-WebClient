// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, undefined ) {

    /**
     * ECMaterial constructor
     *
     * @constructor
     * @augments Component
     * @name ECSky
     * @type Function
     * @param {object} sceneMgr Pointer to scene manager.
     */

    var ECSky = namespace.ECSky = function ( sceneMgr ) {
        //Inherit component properties
        namespace.Component.call( this, sceneMgr );

        this.materialRef = null;
        this.textureRefs = null;
        this.distance = null;
        this.orientation = null;
        this.drawFirst = null;

        this.textureAssets = [];
        this.cubeTexture = null;

    };

    ECSky.prototype = Object.create( namespace.Component.prototype );

    ECSky.prototype.onAttributeUpdated = function ( attr, state ) {
        var name = attr.name;
        if ( state === 0 ) {
            if ( name === 'material' ) {
                this.materialRef = attr;
            } else if ( name === 'texture' ) {
                this.textureRefs = attr;

            } else if ( name === 'distance' ) {
                this.distance = attr;

            } else if ( name === 'orientation' ) {
                this.orientation = attr;

            } else if ( name === 'drawfirst' ) {
                this.drawFirst = attr;

            }
        }
        if ( state === 1 ) {

        }
    };

    ECSky.prototype.onParentAdded = function ( parent ) {
        this.getTextures();
    };

    ECSky.prototype.onTextureAssetLoaded = function ( texture ) {
        if ( this.textureAssets.length === 6 ) {
            console.log( "ECSky: All textures loaded. Creating Sky..." );
            this.cubeTexture = this.createCubeTexture( this.textureAssets );
            this.createSky( this.cubeTexture );
        }

    };

    ECSky.prototype.disableSky = function () {

    };

    ECSky.prototype.createSky = function ( cubeTexture ) {
        var shader, material, skyBox;

        shader = THREE.ShaderLib[ "cube" ];
        shader.uniforms[ "tCube" ].value = cubeTexture;

        material = new THREE.ShaderMaterial( {

            fragmentShader: shader.fragmentShader,
            vertexShader: shader.vertexShader,
            uniforms: shader.uniforms,
            side: THREE.BackSide

        } );

        skyBox = new THREE.Mesh( new THREE.CubeGeometry( 5000, 5000, 5000, 1, 1, 1 ), material );
        //this.sceneManager.camera.add(skyBox)
        this.sceneManager.addToScene( skyBox );


    };


    ECSky.prototype.getTextures = function () {
        var request, texture, i,
            refs = this.textureRefs['val'],
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
                request = assetManager.requestAsset( refs[i], 'texture', '../textures/' );
                if ( request ) {
                    request.add( callBack );
                } else {
                    texture = assetManager.getAsset( refs[i], 'texture', '../textures/' );
                    if ( texture ) {
                        assets.push( texture );
                        self.onTextureAssetLoaded( texture );
                    }
                }
            }
        }

    };

    ECSky.prototype.createCubeTexture = function ( textures ) {
        var images = [], texture = new THREE.CompressedTexture(), dds,
            texturesLen = textures.length, name, i;


        function checkOrder( name ) {
            if ( typeof name !== 'string' && name !== '' ) {
                throw new Error( ["ECSky: Invalid SkyBox texture name!"] );
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
                throw new Error( ["ECSky: Invalid SkyBox texture: " + name] );
            }
        }

        for ( i = texturesLen; i--; ) {
            dds = textures[i];
            name = dds.name;

            images[checkOrder( name )] =
            {
                format: dds.format,
                mipmaps: dds.mipmaps,
                width: dds.width,
                height: dds.height
            };
        }

        texture.generateMipmaps = false;
        texture.image = images;
        texture.flipY = false;
        texture.format = dds.format;
        texture.needsUpdate = true;
        texture.minFilter = texture.magFilter = THREE.LinearFilter;
        texture.anisotropy = 4;

        return texture;
    };


}( window['webtundra'] = window['webtundra'] || {} ));
