// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * @author Toni Dahl
 */


(function ( namespace, undefined ) {
    var utils = namespace.util;

    var AssetManager = namespace.AssetManager = function ( storageUrl, meshType ) {

        var meshTypes, meshAssets, textureAssets, materialAssets,
             requestQueue, remoteStorage, assetParser, publicMethods;

        // Exposed methods
        publicMethods = {
            requestAsset: requestAsset,
            getAsset: getAsset,
            cleanFileName: cleanFileName,
            setRemoteStorage: setRemoteStorage
        };

        meshTypes = {
            'ogre': {meshFileExt: 'mesh.xml', matFileExt: 'material'},
            'collada': {meshFileExt: 'dae', matFileExt: null}
        };

        if(!meshTypes.hasOwnProperty(meshType)){
            throw new Error(["AssetManager: Unsupported mesh type: " + meshType]);
        }

        meshAssets = {};
        textureAssets = {};
        materialAssets = {};

        remoteStorage = storageUrl || null;
        assetParser = new namespace.AssetParser(meshType, publicMethods);


        /**
         *
         * @type {Object}
         */
        requestQueue = {
            queue: [],
            requests: {}
        };

        /**
         *
         * @param name
         */

        function removeRequest ( name ) {
            var requests = requestQueue.requests, queue = requestQueue.queue, queueLen = queue.length, i;

            if ( requests.hasOwnProperty( name ) ) {
                queue.splice(queue.indexOf(name), 1);
                delete requests[name];
                //console.log( "Request:", name, "deleted" );
            }

            if ( queue.length === 0 ) {
                console.log( "All requests processed!" );
            }
        }


        /**
         *
         */
        function processDelayFunc() {
            processAsset( arguments[0], arguments[1], arguments[2], arguments[3] );
        }


        /**
         *
         * @param options
         * @return {*}
         */

        function createRequest ( options ) {

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
            request.url = opts.url;

            if ( typeof opts.mimeType === 'string' ) {
                request.overrideMimeType( opts.mimeType );
            }

            request.onreadystatechange = function () {

                if ( request.readyState === 4 ) {
                    if ( request.status === 200 ) {

                        console.log( opts.assetName, "downloaded." );

                        request.downloaded = true;

                        //TODO: Convert this to queue system where assets are processed one by one after download is complete
                        //self.processAsset( request, assetReadySig, opts.assetName, opts.assetType );

                        //Gives the program some time to breath after download to increase responsiveness

                        setTimeout( processDelayFunc, 100 * queueLen, request,
                            assetReadySig, opts.assetName, opts.assetType);



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
        }


        /**
         *
         * @param url
         */

        function setRemoteStorage ( url ) {
            console.log( "Setting remote asset storage to: " + url );
            utils.log( "Setting remote asset storage to: " + url );
            remoteStorage = url;
        }


        /**
         *
         * @param fileRef
         * @param forceType
         * @return {*}
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

        function getBaseFileName(fileName){
            if(typeof fileName === 'string'){
                return fileName.split( '.' )[0];
            }

            return false;
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
            var request, asset, responseType = "", mimeType = null;

            if ( typeof type === 'string' ) {
                type = type.toLowerCase();

                switch (type) {
                case 'mesh':
                {
                    if ( meshAssets.hasOwnProperty( assetName ) ) {
                        console.log( "Mesh:", assetName, "already downloaded" );
                        return false;
                    }

                    if ( !document.implementation || !document.implementation.createDocument ) {
                        throw new Error( ["AssetManager: Your browser can't process XML!"] );
                    }
                    assetName = cleanFileName( assetName, meshTypes[meshType].meshFileExt );

                    mimeType = 'text/xml';

                }
                    break;
                case 'material':
                {
                    if ( materialAssets.hasOwnProperty( assetName ) ) {
                        console.log( "Material:", assetName, "already downloaded" );
                        return false;
                    }

                    if ( !document.implementation || !document.implementation.createDocument ) {
                        throw new Error( ["AssetManager: Your browser can't process XML!"] );
                    }
                    assetName = cleanFileName( assetName, meshTypes[meshType].matFileExt, true );

                    mimeType = 'text/plain';

                }
                    break;
                case 'texture':
                {
                    if ( textureAssets.hasOwnProperty( assetName ) ) {
                        console.log( "Texture:", assetName, "already downloaded" );
                        return false;
                    }

                    responseType = "arraybuffer";
                    assetName = cleanFileName( assetName );
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

            if(!storage || typeof storage !== "string"){
                storage = remoteStorage;
            }


            request = createRequest( {
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
            console.log("Processing mesh", name);

                var xml = request.responseXML,
                meshGroup, self = this;

            meshGroup = assetParser.parseMesh( xml, name, request.url );

            if ( !meshAssets.hasOwnProperty( name ) ) {
                meshAssets[name] = meshGroup;
            }

            if ( signal instanceof namespace.Signal ) {
                signal.dispatch( meshAssets[name] );
            }

            removeRequest( name );

            //console.timeEnd( 'Processing time' );

            console.log( "Processing complete." );
            console.log(meshGroup)

        }

        /**
         *
         * @param request
         * @param signal
         * @param name
         */
        function processTexture( request, signal, name ) {
            console.log("Processing texture", name);

            var buffer = request.response,
                dds = THREE.ImageUtils.parseDDS( buffer, true ),
                self = this;

            dds.name = name;

            if ( !textureAssets.hasOwnProperty( name ) ) {
                textureAssets[name] = dds;
            }

            if ( signal instanceof namespace.Signal ) {
                signal.dispatch( textureAssets[name] );
            }

            removeRequest( name );


        }

        /**
         *
         * @param request
         * @param signal
         * @param name
         */
        function processMaterial( request, signal, name ) {
            console.log("Processing material", name);

            var data = request.responseText,
                materialGroup, self = this;

            materialGroup = assetParser.parseMaterial( data, name, request.url );

            if ( !materialAssets.hasOwnProperty( name ) ) {
                materialAssets[name] = materialGroup;
            }

            if ( signal instanceof namespace.Signal ) {
                signal.dispatch( materialAssets[name] );
            }

            removeRequest( name );

            //console.timeEnd( 'Processing time' );

            console.log( "Processing complete." );
            //console.log(materialGroup)

        }

        /**
         *
         * @param assetRef
         * @param type
         * @return {*}
         */
        function getAsset( assetRef, type ) {
            if ( type === 'mesh' ) {
                if ( meshAssets.hasOwnProperty( assetRef ) ) {
                    return meshAssets[assetRef];
                }
            } else if ( type === 'texture' ) {
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

        function saveAsset(assetRef, data, type) {
            if ( type === 'mesh' ) {
                if ( meshAssets.hasOwnProperty( assetRef ) ) {
                    return meshAssets[assetRef];
                }
            } else if ( type === 'texture' ) {
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


        // ### Exposed methods ###
        return publicMethods;
    };



}( window['webtundra'] = window['webtundra'] || {} ));