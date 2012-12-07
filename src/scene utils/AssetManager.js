var AssetManager = function ( gui, websocket ) {
    //Ref to GUI
    this.GUI = gui;

    //Ref to websocket manager
    this.websocket = websocket;

    this.remoteStorage = "http://localhost:8000/models/outdoor";

    this.requestQueue = [];
    


};


AssetManager.prototype.requestAsset = function ( assetName, customUrl ) {

    // Collada loader/parser
    var url = this.remoteStorage + assetName;
    if ( typeof(customUrl) !== 'undefined' ) {
        url = customUrl;
        var parsed = parseUri( url );
        this.remoteStorage = "http://" + parsed.host;
        assetName = parsed.file;
    }

    console.log("Requesting: " + this.remoteStorage + assetName);

    var trigger;

    if ( document.implementation && document.implementation.createDocument ) {

        var request = new XMLHttpRequest();
        request.overrideMimeType( 'text/xml' );

        // Linking request with GUI, so it can be aborted
        //this.GUI.loadDiag.xhr = request;

        request.onreadystatechange = function () {

            if ( request.readyState === 4 ) {
                clearInterval( trigger );
                trigger = null;
                _objController.loading = false;

                if ( request.status === 200 ) {

                    if ( request.responseXML ) {
                        console.log('Download complete');

                        //The final download progress update
                        console.log( Math.ceil( (request.responseText.length / 1000024) * 100 ) / 100 );

                        //Gives the program some time to breath after download so it has time to update the viewport
                        setTimeout( function () {
                            processCollada( request.responseXML, assetName );
                        }, 500 );

                    } else {
                        console.log( 'error', "Empty XML received!" );
                        request = null;
                    }
                } else if ( request.status === 404 ) {
                    console.log( 'error', "File not found from: " + url );
                    request = null;
                }

            } else if ( request.readyState === 2 ) {
                console.log( 'Loading asset' );
                _objController.loading = true;
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
            console.log( 'error', "Failed to download: " + url );
        };

        request.open( "GET", url, true );
        try {
            request.send( null );
        } catch (e) {
            console.log( 'error', e.message + ", when requesting: " + url );
        }

    } else {
        console.log( 'error', "Your browser can't handle XML." );
    }
};

AssetManager.prototype.processAsset = processAsset = function ( xml, type, name ) {
    var loadedObjects = _sceneController.loadedObjects;
    var loader = new THREE.ColladaLoader();

    loader.options.convertUpAxis = true;
    loader.parse( xml, function colladaReady( collada ) {
        var model = collada.scene;
        //Changing colormode of the collada model
        setColorMode( model, _sceneController.sceneParams.colorMode );

        model.name = name;

        // Removing earlier object from scene
        if ( loadedObjects.length > 0 ) {
            clearScene();
        }

        // Adding the new object to memory and in scene
        loadedObjects.push( model );
        console.log( model );
        addToScene( model );

        model.traverse( function ( obj ) {
            if ( obj instanceof THREE.Mesh )
                _sceneController.meshes.push( obj );
        } );

        console.log( _sceneController.meshes );

        model = null;

        //Freeing memory by removing and de-allocating unneeded objects
        cleanMemory();

        //console.log(_sceneController.renderer.info.memory)
        loader = null;

        this.GUI.loadDiag.changeState( 'ready' );

    }, this.remoteStorage );
};