// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, $, undefined ) {

    var AssetManager = namespace.AssetManager = function ( gui, remoteStorage ) {
        //Ref to GUI
        this.GUI = gui;
        this.meshType = 'dae';
        this.remoteStorage = remoteStorage;

        this.meshAssets = {};
        this.textureAssets = {};
        this.materialAssets = {};


    };

    AssetManager.prototype.setRemoteStorage = function ( url ) {
        this.remoteStorage = url;
    };

    AssetManager.prototype.cleanFileName = function ( assetFileName, forceType ) {

        var fileName = assetFileName.split( '.' ),
            type = fileName.slice( -1 )[0];

        if ( forceType ) {
            if ( type.toLowerCase() !== forceType ) {
                fileName[fileName.length - 1] = forceType;
                assetFileName = fileName.join( '.' );
            }
        }

        return assetFileName;
    };


    AssetManager.prototype.requestAsset = function ( assetName, type, relPath ) {
        var trigger, request, asset,
            self = this;

        if ( typeof type === 'string' ) {
            type = type.toLowerCase();

            switch (type) {
            case 'mesh':
                if ( !document.implementation || !document.implementation.createDocument ) {
                    throw new Error( ["AssetManager: Your browser can't process XML!"] );
                }
                assetName = this.cleanFileName( assetName, this.meshType );
                break;
            case 'material':
            case 'texture':
                assetName = this.cleanFileName( assetName );
                break;
            default:
                throw new Error( ["AssetManager: Invalid asset type requested: " + type] );
            }

        } else {
            throw new Error( ["AssetManager: Requested asset type must be a string."] );
        }

        if ( !relPath ) {
            relPath = '';
        }


        if ( this.meshAssets.hasOwnProperty( assetName ) ) {
            console.log( "Asset:", assetName, "already downloaded" );
            return false;
        }

        console.log( "Requesting: " + this.remoteStorage + relPath + assetName );


        request = new XMLHttpRequest();

        if ( type === 'mesh' ) {
            request.overrideMimeType( 'text/xml' );
        }

        request.onreadystatechange = function () {

            if ( request.readyState === 4 ) {
                clearInterval( trigger );
                trigger = null;

                if ( request.status === 200 ) {


                    console.log( 'Download complete' );

                    //The final download progress update
                    //console.log( Math.ceil( (request.responseText.length / 1000024) * 100 ) / 100 );

                    //Gives the program some time to breath after download so it has time to update the viewport
                    setTimeout( function () {
                        self.processAsset( request, assetName, type );
                    }, 500 );


                } else if ( request.status === 404 ) {
                    console.log( 'error', "File not found from: " + self.remoteStorage + relPath );
                    //request = null;
                }

            } else if ( request.readyState === 2 ) {
                console.log( 'Loading asset' );

                trigger = setInterval( function () {
                    if ( request.readyState === 3 ) {
                        //console.log( Math.ceil( (request.responseText.length / 1000024) * 100 ) / 100 );
                    }
                }, 200 );
            }
        };


        request.onabort = function () {
            clearInterval( trigger );
            trigger = null;
            //request = null;
        };

        request.onerror = function ( e ) {
            clearInterval( trigger );
            trigger = null;
            //request = null;
            console.log( 'error', "Failed to download: " + self.remoteStorage + relPath + assetName );
        };

        request.assetReady = new namespace.Signal();

        request.open( "GET", this.remoteStorage + relPath + assetName, true );
        try {
            request.send( null );
        } catch (e) {
            console.log( 'error', e.message + ", when requesting: " + url );
        }

        if ( type === 'texture' ) {
            request.responseType = "arraybuffer";
        }

        return request.assetReady;

    };

    AssetManager.prototype.processAsset = function ( request, name, type ) {
        switch (type) {
        case 'mesh':
            this.processMesh( request, name );
            break;
        case 'texture':
            this.processTexture( request, name );
            break;
        case 'material':
            this.processMaterial( request, name );
            break;

        }
    };

    AssetManager.prototype.processMesh = function ( request, name ) {

        var loader = new THREE.ColladaLoader(), xml = request.responseXML,
            scene, mesh, self = this;

        //loader.options.convertUpAxis = true;
        loader.parse( xml, function colladaReady( collada ) {
            scene = collada.scene;
            if ( scene && scene.children && scene.children.length > 0 ) {
                mesh = scene.children[0];
                if ( mesh ) {
                    mesh.name = name;
                }
            }

            loader = null;

            if ( !self.meshAssets.hasOwnProperty( name ) ) {
                self.meshAssets[name] = mesh;
            }

            request.assetReady.dispatch( self.meshAssets[name] );

        }, this.remoteStorage );
    };

    AssetManager.prototype.processTexture = function ( request, name ) {
        var buffer = request.response,
            dds = THREE.ImageUtils.parseDDS( buffer, true ),
            self = this;

        dds.name = name;

        if ( !self.textureAssets.hasOwnProperty( name ) ) {
            self.textureAssets[name] = dds;
        }

        request.assetReady.dispatch( self.textureAssets[name] );

    };

    AssetManager.prototype.processMaterial = function ( request, name ) {

    };

    AssetManager.prototype.getAsset = function ( assetRef, type ) {
        if ( this.meshAssets.hasOwnProperty( assetRef ) ) {
            return this.meshAssets[assetRef];
        }
        return false;
    }

}( window['webtundra'] = window['webtundra'] || {}, jQuery ));