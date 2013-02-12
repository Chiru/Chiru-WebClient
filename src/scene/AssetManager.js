// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, $, undefined ) {
    var utils = namespace.util;

    var AssetManager = namespace.AssetManager = function ( gui, remoteStorage ) {
        //Ref to GUI
        this.GUI = gui;
        this.meshType = 'dae';
        this.remoteStorage = remoteStorage;

        this.meshAssets = {};
        this.textureAssets = {};
        this.materialAssets = {};

        var requestQueue = {
            queue: [],
            requests: {}
        };

        this.removeRequest = function ( name ) {
            var requests = requestQueue.requests, queue = requestQueue.queue;

            if ( requests.hasOwnProperty( name ) ) {
                queue.splice( queue.indexOf( name ), 1 );
                delete requests[name];
                //console.log( "Request:", name, "deleted" );
            }

            if ( queue.length === 0 ) {
                console.log( "All requests processed!" );
            }
        };

        this.createRequest = function ( options ) {

            var defaults = {
                    url: '',
                    responseType: '',
                    mimeType: null,
                    assetName: null,
                    assetType: null
                },
                opts, request, trigger = null, queue = requestQueue.queue, queueLen = queue.length,
                requests = requestQueue.requests, assetReady = new namespace.Signal(),
                self = this, i;

            // Setting options
            opts = utils.extend( {}, defaults, options );

            if ( opts.assetName === null || opts.assetType === null ) {
                return false;
            }

            // Checking if duplicate request exists already in the queue
            for ( i = queueLen; i--; ) {
                if ( queue[i].assetName === opts.assetName ) {
                    return queue[i].signal;
                }
            }

            request = new XMLHttpRequest();
            if ( !requests.hasOwnProperty( opts.assetName ) ) {
                requests[opts.assetName] = request;

                queue.push( {assetName: opts.assetName, signal: assetReady} );
            }


            request.open( "GET", opts.url, true );
            request.responseType = opts.responseType;
            request.assetName = opts.assetName;

            if ( typeof opts.mimeType === 'string' ) {
                request.overrideMimeType( opts.mimeType );
            }

            request.onreadystatechange = function () {

                if ( request.readyState === 4 ) {
                    //clearInterval( trigger );
                    //trigger = null;

                    if ( request.status === 200 ) {


                        console.log( opts.assetName, "downloaded." );

                        //The final download progress update
                        //console.log( Math.ceil( (request.responseText.length / 1000024) * 100 ) / 100 );

                        //Gives the program some time to breath after download so it has time to update the viewport
                        //setTimeout( function () {
                        request.downloaded = true;
                        self.processAsset( request, assetReady, opts.assetName, opts.assetType );
                        //}, 500 );


                    } else if ( request.status === 404 ) {
                        console.log( 'error', "File not found from: " + opts.url );
                        //request = null;
                    }

                } else if ( request.readyState === 2 ) {
                    console.log( 'Loading asset: ' + opts.assetName );

                    /*
                     trigger = setInterval( function () {
                     if ( request.readyState === 3 ) {
                     //console.log( Math.ceil( (request.responseText.length / 1000024) * 100 ) / 100 );
                     }
                     }, 200 );
                     */
                }
            };

            request.onabort = function () {
                //clearInterval( trigger );
                //trigger = null;
                request = null;
            };

            request.onerror = function ( e ) {
                //clearInterval( trigger );
                //trigger = null;
                request = null;
                console.log( 'error', "Failed to download: " + opts.url );
            };


            try {
                console.log( "Requesting: " + opts.url );
                request.send( null );

            } catch (e) {
                console.log( 'error', e.message + ", when requesting: " + opts.url );
            }


            return assetReady;
        };


    };

    AssetManager.prototype.setRemoteStorage = function ( url ) {
        console.log( "Setting remote asset storage to: " + url );
        utils.log( "Setting remote asset storage to: " + url );
        this.remoteStorage = url;
    };

    AssetManager.prototype.cleanFileName = function ( assetFileName, forceType ) {

        var fileName = assetFileName.split( '//' ).pop().split( '.' ),
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
        var trigger, request, asset, responseType = "", mimeType = null,
            self = this;

        if ( typeof type === 'string' ) {
            type = type.toLowerCase();

            switch (type) {
            case 'mesh':
            {
                if ( !document.implementation || !document.implementation.createDocument ) {
                    throw new Error( ["AssetManager: Your browser can't process XML!"] );
                }
                assetName = this.cleanFileName( assetName, this.meshType );

                mimeType = 'text/xml';

            }
                break;
            case 'material':
            case 'texture':
            {
                responseType = "arraybuffer";
                assetName = this.cleanFileName( assetName );
            }
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


        request = this.createRequest( {
            url: this.remoteStorage + relPath + assetName,
            responseType: responseType,
            mimeType: mimeType,
            assetName: assetName,
            assetType: type
        } );


        return request;

    };

    AssetManager.prototype.processAsset = function ( request, signal, name, type ) {
        switch (type) {
        case 'mesh':
            this.processMesh( request, signal, name );
            break;
        case 'texture':
            this.processTexture( request, signal, name );
            break;
        case 'material':
            this.processMaterial( request, signal, name );
            break;

        }
    };

    AssetManager.prototype.processMesh = function ( request, signal, name ) {
        var loader = new THREE.ColladaLoader(), material, geometry, xml = request.responseXML,
            scene, meshGroup = [], self = this, result, index;

        //console.time( 'Processing time' );
        console.log( "Processing", name, "..." );
        //loader.options.convertUpAxis = true;

        result = loader.parse( xml, undefined, this.remoteStorage );
        console.log( "Asset parsed. Post-processing..." );
        scene = result.scene;

        //console.log( scene );

        scene.traverse( function ( child ) {
            if ( child instanceof THREE.Mesh ) {
                meshGroup.push( [child.geometry.clone(), child.material.clone()] );
            }
        } );


        if ( !this.meshAssets.hasOwnProperty( name ) ) {
            meshGroup.name = name;
            self.meshAssets[name] = meshGroup;
        }
        if ( signal instanceof namespace.Signal ) {
            signal.dispatch( self.meshAssets[name] );
        }

        this.removeRequest( name );

        scene = null;
        result = null;
        loader = null;

        //console.timeEnd( 'Processing time' );

        console.log( "Processing complete." );

    };

    AssetManager.prototype.processTexture = function ( request, signal, name ) {
        var buffer = request.response,
            dds = THREE.ImageUtils.parseDDS( buffer, true ),
            self = this;

        dds.name = name;

        if ( !self.textureAssets.hasOwnProperty( name ) ) {
            self.textureAssets[name] = dds;
        }

        if ( signal instanceof namespace.Signal ) {
            signal.dispatch( self.textureAssets[name] );
        }

    };

    AssetManager.prototype.processMaterial = function ( request, name ) {

    };

    AssetManager.prototype.getAsset = function ( assetRef, type ) {
        if ( this.meshAssets.hasOwnProperty( assetRef ) ) {
            return this.meshAssets[assetRef];
        }
        return false;
    };

}( window['webtundra'] = window['webtundra'] || {}, jQuery ));