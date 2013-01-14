(function ( namespace, $, undefined ) {

    var AssetManager = namespace.AssetManager = function ( gui, remoteStorage ) {
        //Ref to GUI
        this.GUI = gui;
        this.forceType = 'dae';
        this.remoteStorage = remoteStorage;

        this.loadedAssets = {};


    };

    AssetManager.prototype.setRemoteStorage = function ( url ) {
        this.remoteStorage = url;
    };

    AssetManager.prototype.cleanFileName = function ( assetFileName ) {

        var fileName = assetFileName.split( '.' ),
            type = fileName.slice( -1 )[0];

        if ( type.toLowerCase() !== this.forceType ) {
            fileName[fileName.length - 1] = this.forceType;
            assetFileName = fileName.join( '.' );
        }

        return assetFileName;
    };

    AssetManager.prototype.requestAsset = function ( assetName, relPath ) {
        var trigger, request, asset,
            that = this;

        if ( relPath === undefined ) {
            relPath = '';
        }

        assetName = this.cleanFileName( assetName );

        if(this.loadedAssets.hasOwnProperty(assetName)) {
            console.log("Asset:",assetName, "already downloaded");
            return false;
        }

        console.log( "Requesting: " + this.remoteStorage + relPath + assetName );


        if ( document.implementation && document.implementation.createDocument ) {

            request = new XMLHttpRequest();
            request.overrideMimeType( 'text/xml' );

            request.onreadystatechange = function () {

                if ( request.readyState === 4 ) {
                    clearInterval( trigger );
                    trigger = null;

                    if ( request.status === 200 ) {

                        if ( request.responseXML ) {
                            console.log( 'Download complete' );

                            //The final download progress update
                            console.log( Math.ceil( (request.responseText.length / 1000024) * 100 ) / 100 );

                            //Gives the program some time to breath after download so it has time to update the viewport
                            setTimeout( function () {
                                that.processAsset( request, assetName );
                            }, 500 );

                        } else {
                            console.log( 'error', "Empty XML received!" );
                            request = null;
                        }
                    } else if ( request.status === 404 ) {
                        console.log( 'error', "File not found from: " + this.remoteStorage + relPath );
                        request = null;
                    }

                } else if ( request.readyState === 2 ) {
                    console.log( 'Loading asset' );

                    trigger = setInterval( function () {
                        if ( request.readyState === 3 ) {
                            console.log( Math.ceil( (request.responseText.length / 1000024) * 100 ) / 100 );
                        }
                    }, 200 );
                }
            };


            request.onabort = function () {
                clearInterval( trigger );
                trigger = null;
                request = null;
            };

            request.onerror = function ( e ) {
                clearInterval( trigger );
                trigger = null;
                request = null;
                console.log( 'error', "Failed to download: " + this.remoteStorage + relPath + assetName );
            };

            request.open( "GET", this.remoteStorage + assetName, true );
            try {
                request.send( null );
            } catch (e) {
                console.log( 'error', e.message + ", when requesting: " + url );
            }

        } else {
            console.log( 'error', "Your browser can't handle XML." );
        }

        request.assetReady = new Signal();

        return request.assetReady;

    };

    AssetManager.prototype.processAsset = function ( request, name ) {

        var loader = new THREE.ColladaLoader(), xml = request.responseXML,
            model, self = this;

        loader.options.convertUpAxis = true;
        loader.parse( xml, function colladaReady( collada ) {
            model = collada.scene;

            model.name = name;

            loader = null;

            console.log( "asset","(",model.name,") processed." );

            if(!self.loadedAssets.hasOwnProperty(name)) {
                self.loadedAssets[name] = model;
            }

            request.assetReady.dispatch(self.loadedAssets[name]);

        }, this.remoteStorage );
    };

    AssetManager.prototype.getAsset = function ( assetRef ) {
        if(this.loadedAssets.hasOwnProperty(assetRef)) {
            return this.loadedAssets[assetRef];
        }
        return false;
    }

}( window.webnaali = window.webnaali || {}, jQuery ));