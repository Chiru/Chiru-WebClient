// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * @author Toni Dahl
 */


(function ( namespace, undefined ) {
    var utils = namespace.util;

    var AssetManager = namespace.AssetManager = function ( framework, options ) {
        var defaults = {
                remoteStorage: 'http://127.0.0.1:8000/',
                meshType: 'ogre'
            },
            opts = utils.extend( {}, defaults, options );

        // Storage objects for assets and requests
        var meshAssets = {}, textureAssets = {}, materialAssets = {}, requestQueue = { queue: [], requests: {}};

        // Asset and request type definitions
        var meshTypes = {
                'ogre': {meshFileExt: 'mesh.xml', matFileExt: 'material'},
                'collada': {meshFileExt: 'dae', matFileExt: null}
            },
            textureTypes = ['dds', 'jpg', 'jpeg', 'png', 'gif'],
            requestTypes = utils.createEnum( 'xhr', 'image' );


        var GUIProgressIndicator, self = this;

        if ( !meshTypes.hasOwnProperty( opts.meshType ) ) {
            throw new Error( ["AssetManager: Unsupported mesh type: " + opts.meshType] );
        }


        this.remoteStorage = opts.remoteStorage;

        this.assetParser = new namespace.AssetParser( opts.meshType, this );

        // Signals
        this.assetsReady = new namespace.Signal();
        this.loadProgress = new namespace.Signal();


        // API
        this.requestAsset = requestAsset;
        this.getAsset = getAsset;
        this.cleanFileName = cleanFileName;
        this.getBaseFileName = getBaseFileName;
        this.setRemoteStorage = setRemoteStorage;

        GUIProgressIndicator = namespace.GUI.getGUIComponent( 'loader' );

        framework.connection.bindEvent( "RemoteStorage", setRemoteStorage );


         function processDelayFunc() {
            processAsset( arguments[0], arguments[1], arguments[2], arguments[3] );
        }

        /**
         *
         * @param name
         */

        function removeRequest ( name ) {
            var requests = requestQueue.requests, queue = requestQueue.queue, i;

            if ( requests.hasOwnProperty( name ) ) {
                queue.splice( queue.indexOf( name ), 1 );
                delete requests[name];
                //console.log( "Request:", name, "deleted" );

                // Showing progress in the GUI
                if ( GUIProgressIndicator ) {
                    GUIProgressIndicator.updateProgress();
                    self.loadProgress.dispatch( queue.length );
                }
            }

            if ( queue.length === 0 ) {
                console.log( "All requests processed!" );
                self.assetsReady.dispatch();

            }
        }


        /**
         *
         * @param options
         * @return {*}
         */

        function createRequest ( options ) {

            var defaults = {
                    url: '',
                    requestType: 'xhr',
                    responseType: '',
                    mimeType: null,
                    assetName: null,
                    assetType: null
                },
                opts, request, queue = requestQueue.queue, queueLen = queue.length,
                requests = requestQueue.requests, assetReadySig = new namespace.Signal();

            // Setting options
            opts = utils.extend( {}, defaults, options );

            if ( opts.assetName === null || opts.assetType === null ) {
                return false;
            }


            // Checking if duplicate request exists already in the queue, or creating a new request
            if ( !requests.hasOwnProperty( opts.assetName ) ) {
                if ( opts.requestType === requestTypes.xhr ) {
                    request = new XMLHttpRequest();
                } else if ( opts.requestType === requestTypes.image ) {
                    request = new Image();
                }
                requests[opts.assetName] = {request: request, signal: assetReadySig};
                queue.push( opts.assetName );
            } else {
                // Returning the signal-object corresponding to requested asset that is already downloading
                return requests[opts.assetName].signal;
            }


            if ( opts.requestType === requestTypes.xhr ) {
                request.open( "GET", opts.url, true );
                request.responseType = opts.responseType;
                request.assetName = opts.assetName;
                request.url = opts.url;

                if ( typeof opts.mimeType === 'string' ) {
                    request.overrideMimeType( opts.mimeType );
                }

                request.onreadystatechange = function () {

                    if ( request.readyState === 4 ) {
                        if ( request.status === 200 ) {

                            console.log( opts.assetName, "downloaded." );

                            request.downloaded = true;

                            //Gives the program some time to breath after download to increase responsiveness

                            setTimeout( processDelayFunc, 100 * queueLen, request,
                                assetReadySig, opts.assetName, opts.assetType );

                        } else if ( request.status === 404 ) {
                            console.log( 'error', "File not found from: " + opts.url );
                            removeRequest( request.assetName );
                        }

                    }
                };
            } else if ( opts.requestType === requestTypes.image ) {
                request.onload = function () {
                    console.log( opts.assetName, "downloaded." );

                    request.downloaded = true;

                    //Gives the program some time to breath after download to increase responsiveness

                    setTimeout( processDelayFunc, 100 * queueLen, request,
                        assetReadySig, opts.assetName, opts.assetType );
                };
            }


            request.onabort = function () {
                removeRequest( request.assetName );
            };

            request.onerror = function ( e ) {
                console.log( 'error', "Failed to download: " + opts.url );
                removeRequest( request.assetName );
            };


            try {
                console.log( "Requesting: " + opts.url );
                if ( opts.requestType === requestTypes.xhr ) {
                    request.send( null );
                } else if ( opts.requestType === requestTypes.image ) {
                    request.src = opts.url;
                }

                if ( GUIProgressIndicator ) {
                    GUIProgressIndicator.setTotal();
                }

            } catch (e) {
                console.error( "AssetManager:", "Error", e.message + ", when requesting: " + opts.url );
            }


            return assetReadySig;
        }

        /**
         *
         * @param assetName
         * @param type
         * @param storage
         * @param relPath
         * @return {*}
         */
        function requestAsset( assetName, type, storage, relPath ) {
            var request, asset, fileFormat, requestType, responseType = "", mimeType = null;

            if ( typeof type !== 'string' ) {
                throw new Error( ["AssetManager: Requested asset type must be a string."] );

            }
            type = type.toLowerCase();

            if ( type === 'mesh' ) {
                assetName = cleanFileName( assetName, meshTypes[opts.meshType].meshFileExt );

                if ( meshAssets.hasOwnProperty( assetName ) ) {
                    //console.log( "Mesh:", assetName, "already downloaded" );
                    return false;
                }

                if ( !document.implementation || !document.implementation.createDocument ) {
                    throw new Error( ["AssetManager: Your browser can't process XML!"] );
                }

                mimeType = 'text/xml';
                requestType = requestTypes.xhr;

            } else if ( type === 'material' ) {
                assetName = cleanFileName( assetName, meshTypes[opts.meshType].matFileExt, true );

                if ( materialAssets.hasOwnProperty( assetName ) ) {
                    //console.log( "Material:", assetName, "already downloaded" );
                    return false;
                }

                if ( !document.implementation || !document.implementation.createDocument ) {
                    throw new Error( ["AssetManager: Your browser can't process XML!"] );
                }

                mimeType = 'text/plain';
                requestType = requestTypes.xhr;

            } else if ( type === 'texture' ) {
                assetName = cleanFileName( assetName );

                if ( textureAssets.hasOwnProperty( assetName ) ) {
                    //console.log( "Texture:", assetName, "already downloaded" );
                    return false;
                }

                fileFormat = assetName.split( '.' ).pop().toLowerCase();

                if ( textureTypes.indexOf( fileFormat ) !== -1 ) {
                    if ( fileFormat === 'dds' ) {
                        responseType = 'arraybuffer';
                        requestType = requestTypes.xhr;
                    } else {
                        requestType = requestTypes.image;
                    }
                } else {
                    console.warn( "AssetManager: Texture format", fileFormat, " is not supported. Ignored", assetName );
                    return false;

                }

            } else {
                console.warn( "AssetManager: Invalid asset type requested: ", type );
                return false;
            }


            if ( !relPath ) {
                relPath = '';
            }

            if ( !storage || typeof storage !== "string" ) {
                storage = self.remoteStorage;
            }


            request = createRequest( {
                requestType: requestType,
                url: storage + relPath + assetName,
                responseType: responseType,
                mimeType: mimeType,
                assetName: assetName,
                assetType: type
            } );


            return request;
        }

        /**
         *
         * @param url
         */

        function setRemoteStorage( url ) {
            console.log( "Setting remote asset storage to: " + url );
            utils.log( "Setting remote asset storage to: " + url );
            self.remoteStorage = url;
        }


        /**
         *
         * @param fileRef
         * @param forceType
         * @param useBaseName
         * @returns {*}
         */
        function cleanFileName( fileRef, forceType, useBaseName ) {
            var fileName, type;

            if ( !fileRef ) {
                console.error( "AssetManager:", "Got empty Asset filename." );
                return '';
            }

            fileName = fileRef.split( '//' ).pop();

            if ( useBaseName ) {
                fileName = getBaseFileName( fileName );
            }

            if ( forceType ) {
                fileName = fileName.split( '.' );
                if ( fileName.length > 1 ) {
                    type = fileName.slice( -1 )[0];

                    if ( type.toLowerCase() !== forceType ) {
                        fileName[fileName.length - 1] = forceType;
                        fileRef = fileName.join( '.' );
                    }
                } else {
                    fileRef = fileName[0] + '.' + forceType;
                }
            }


            return fileRef;
        }

        function getBaseFileName( fileName ) {
            if ( typeof fileName === 'string' ) {
                return fileName.split( '.' )[0];
            }

            return false;
        }


        /**
         *
         * @param request
         * @param signal
         * @param name
         * @param type
         */

        function processAsset( request, signal, name, type ) {

            switch (type) {
            case 'mesh':
                processMesh( request, signal, name );
                break;
            case 'texture':
                processTexture( request, signal, name );
                break;
            case 'material':
                processMaterial( request, signal, name );
                break;

            }
        }

        /**
         *
         * @param request
         * @param signal
         * @param name
         */
        function processMesh( request, signal, name ) {
            console.log( "Processing mesh", name );

            var xml = request.responseXML, meshGroup;

            meshGroup = self.assetParser.parseMesh( xml, name, request.url );

            if ( !meshAssets.hasOwnProperty( name ) ) {
                meshAssets[name] = meshGroup;
            }

            if ( signal instanceof namespace.Signal ) {
                signal.dispatch( meshAssets[name] );
            }

            removeRequest( name );

            //console.timeEnd( 'Processing time' );

            console.log( "Mesh", name, "processed!" );
            //console.log(meshGroup)

        }

        /**
         *
         * @param request
         * @param signal
         * @param name
         */
        function processTexture( request, signal, name ) {
            var texture;

            console.log( "Processing texture", name );

            texture = self.assetParser.parseTexture( request, name, request.url );

            removeRequest( name );

            if ( !textureAssets.hasOwnProperty( name ) ) {
                textureAssets[name] = texture;
            }

            if ( signal instanceof namespace.Signal ) {
                signal.dispatch( textureAssets[name] );
            }


            console.log( "Texture", name, "processed!" );

        }

        /**
         *
         * @param request
         * @param signal
         * @param name
         */
        function processMaterial( request, signal, name ) {
            console.log( "Processing material", name );

            var data = request.responseText,
                materialGroup, matRef;

            materialGroup = self.assetParser.parseMaterial( data, name, request.url );
            for ( matRef in materialGroup ) {
                if ( !materialAssets.hasOwnProperty( matRef ) ) {
                    materialAssets[matRef] = materialGroup[matRef];
                    if ( signal instanceof namespace.Signal ) {
                        signal.dispatch( materialAssets[matRef] );
                    }
                }
            }

            removeRequest( name );

            console.log( "Material", name, "processed!" );

        }

        /**
         *
         * @param assetRef
         * @param type
         * @return {*}
         */
        function getAsset( assetRef, type ) {
            if ( type === 'mesh' ) {
                assetRef = cleanFileName( assetRef, meshTypes[opts.meshType].meshFileExt );
                if ( meshAssets.hasOwnProperty( assetRef ) ) {
                    return meshAssets[assetRef];
                }
            } else if ( type === 'texture' ) {
                assetRef = cleanFileName( assetRef );
                if ( textureAssets.hasOwnProperty( assetRef ) ) {
                    return textureAssets[assetRef];
                }
            } else if ( type === 'material' ) {
                if ( materialAssets.hasOwnProperty( assetRef ) ) {
                    return materialAssets[assetRef];
                }
            }
            return false;
        }

        function saveAsset( assetRef, data, type ) {
            if ( type === 'mesh' ) {
                if ( !meshAssets.hasOwnProperty( assetRef ) ) {
                }
            } else if ( type === 'texture' ) {
                if ( !textureAssets.hasOwnProperty( assetRef ) ) {
                }
            } else if ( type === 'material' ) {
                if ( !materialAssets.hasOwnProperty( assetRef ) ) {
                }
            }
            return false;
        }

    };


}( window['webtundra'] = window['webtundra'] || {} ));