// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, undefined ) {
    var utils = namespace.util;

    var AssetManager = namespace.AssetManager = function ( gui, remoteStorage ) {
        //Ref to GUI
        this.GUI = gui;
        this.meshType = 'dae';
        this.remoteStorage = remoteStorage;

        this.meshAssets = {};
        this.textureAssets = {};
        this.materialAssets = {};

        /*
        // Passed to settimeout function
        var assetProcessDelay = function () {
            this.processAsset( arguments[0], arguments[1], arguments[2], arguments[3] );
        }.bind( this );
        */

        /**
         *
         * @type {Object}
         */
        var requestQueue = {
            queue: [],
            requests: {}
        };

        /**
         *
         * @param name
         */

        this.removeRequest = function ( name ) {
            var requests = requestQueue.requests, queue = requestQueue.queue, queueLen = queue.length, i;

            if ( requests.hasOwnProperty( name ) ) {
                queue.splice(queue.indexOf(name), 1);
                delete requests[name];
                console.log( "Request:", name, "deleted" );
            }

            if ( queue.length === 0 ) {
                console.log( "All requests processed!" );
            }
        };


        /**
         *
         * @param options
         * @return {*}
         */

        this.createRequest = function ( options ) {

            var defaults = {
                    url: '',
                    responseType: '',
                    mimeType: null,
                    assetName: null,
                    assetType: null
                },
                opts, request, trigger = null, queue = requestQueue.queue, queueLen = queue.length,
                requests = requestQueue.requests, assetReadySig = new namespace.Signal(),
                self = this, i;

            // Setting options
            opts = utils.extend( {}, defaults, options );

            if ( opts.assetName === null || opts.assetType === null ) {
                return false;
            }


            // Checking if duplicate request exists already in the queue, or creating a new request
            if ( !requests.hasOwnProperty( opts.assetName ) ) {
                request = new XMLHttpRequest();
                requests[opts.assetName] = {request: request, signal: assetReadySig};
                queue.push(opts.assetName);
            } else{
                // Returning the signal-object corresponding to requested asset that is already downloading
                return requests[opts.assetName].signal;
            }


            request.open( "GET", opts.url, true );
            request.responseType = opts.responseType;
            request.assetName = opts.assetName;

            if ( typeof opts.mimeType === 'string' ) {
                request.overrideMimeType( opts.mimeType );
            }

            request.onreadystatechange = function () {

                if ( request.readyState === 4 ) {
                    if ( request.status === 200 ) {

                        console.log( opts.assetName, "downloaded." );

                        request.downloaded = true;

                        //TODO: Convert this to queue system where assets are processed one by one after download is complete
                        self.processAsset( request, assetReadySig, opts.assetName, opts.assetType );

                        //Gives the program some time to breath after download to increase responsiveness
                        /*
                        setTimeout( assetProcessDelay, 1000 * queueLen, request,
                            assetReady, opts.assetName, opts.assetType);
                        */


                    } else if ( request.status === 404 ) {
                        console.log( 'error', "File not found from: " + opts.url );
                    }

                }
            };

            request.onabort = function () {
            };

            request.onerror = function ( e ) {
                console.log( 'error', "Failed to download: " + opts.url );
            };


            try {
                console.log( "Requesting: " + opts.url );
                request.send( null );

            } catch (e) {
                console.log( 'error', e.message + ", when requesting: " + opts.url );
            }


            return assetReadySig;
        };


    };

    /**
     *
     * @param url
     */

    AssetManager.prototype.setRemoteStorage = function ( url ) {
        console.log( "Setting remote asset storage to: " + url );
        utils.log( "Setting remote asset storage to: " + url );
        this.remoteStorage = url;
    };


    /**
     *
     * @param assetFileName
     * @param forceType
     * @return {*}
     */
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


    /**
     *
     * @param assetName
     * @param type
     * @param relPath
     * @return {*}
     */
    AssetManager.prototype.requestAsset = function ( assetName, type, relPath ) {
        var request, asset, responseType = "", mimeType = null;

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

    /**
     *
     * @param request
     * @param signal
     * @param name
     * @param type
     */

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

    /**
     *
     * @param request
     * @param signal
     * @param name
     */
    AssetManager.prototype.processMesh = function ( request, signal, name ) {
        var loader = new THREE.ColladaLoader(), material, geometry, xml = request.responseXML,
            scene, meshGroup = [], self = this, result, index;

        //console.time( 'Processing time' );
        console.log( "Processing", name, "..." );
        //loader.options.convertUpAxis = true;

        result = loader.parse( xml, undefined, this.remoteStorage );
        console.log( "Asset parsed. Post-processing..." );
        scene = result.scene;

        scene.traverse( function ( child ) {
            if ( child instanceof THREE.Mesh ) {
                meshGroup.push( [child.geometry.clone(), child.material.clone()] );
            }
        } );


        if ( !this.meshAssets.hasOwnProperty( name ) ) {
            meshGroup.name = name;
            this.meshAssets[name] = meshGroup;
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

    /**
     *
     * @param request
     * @param signal
     * @param name
     */
    AssetManager.prototype.processTexture = function ( request, signal, name ) {
        var buffer = request.response,
            dds = THREE.ImageUtils.parseDDS( buffer, true ),
            self = this;

        dds.name = name;

        if ( !this.textureAssets.hasOwnProperty( name ) ) {
            this.textureAssets[name] = dds;
        }

        if ( signal instanceof namespace.Signal ) {
            signal.dispatch( self.textureAssets[name] );
        }

        this.removeRequest( name );


    };

    /**
     *
     * @param request
     * @param signal
     * @param name
     */
    AssetManager.prototype.processMaterial = function ( request, signal, name ) {

    };

    /**
     *
     * @param assetRef
     * @param type
     * @return {*}
     */
    AssetManager.prototype.getAsset = function ( assetRef, type ) {
        if ( this.meshAssets.hasOwnProperty( assetRef ) ) {
            return this.meshAssets[assetRef];
        }
        return false;
    };

}( window['webtundra'] = window['webtundra'] || {} ));