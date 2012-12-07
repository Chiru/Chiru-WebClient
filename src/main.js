(function () {

    if ( !Detector.webgl )
        Detector.addGetWebGLMessage();

    var _container, _objController = new THREE.Object3D(),
        _sceneController = {
            loadedObjects:[], // List of downloaded collada files
            meshes:[],
            renderer:null, // WebGL renderer
            camera:null,
            pointLight:null,
            scene:null, // ThreeJS Scene
            sceneParams:{ // Parameters related to scene rendering
                'colorMode':THREE.VertexColors, // Default color mode for loaded collada files
                'resolution':1 // Default WebGL canvas resolution
            },
            controls:null, // Camera controls
            clock:new THREE.Clock(),
            ray:null
        };
    var time = Date.now();

    var _connection = {
        serverFiles:[], // List of collada files stored in remote storage
        origStorageUrl:"", // Original & unchanged storage url
        storageUrl:"./models/outdoor/", //  Url of the remote storage folder (this will change depending if we use proxy or not)
        wsManager:null, // WebSocket connection manager object
        ip:"127.0.0.1", // WebSocket server ip
        port:"9002", // WebSocket server port
        customUrl:""
    };

    // Sets the WebGL canvas resolution (5-10 fps render speed increase with lower resolution)
    function setRenderQuality( quality ) {
        if ( typeof(quality) === 'undefined' )
            quality = 'high';

        var renderer = _sceneController.renderer;

        if ( quality == 'high' ) {
            renderer.setSize( _container.innerWidth(), _container.innerHeight() );
            renderer.domElement.style.width = null;
            renderer.domElement.style.height = null;
            _sceneController.sceneParams.resolution = 1;
        } else {
            renderer.setSize( _container.innerWidth() / 2, _container.innerHeight() / 2 );
            renderer.domElement.style.width = _container.innerWidth() + 'px';
            renderer.domElement.style.height = _container.innerHeight() + 'px';
            _sceneController.sceneParams.resolution = 0.5;
        }
    }


    // Gets the url from browser's address-bar and parses it
    function parseUrl( url ) {
        var parsed = parseUri( url );

        //Parsing ip and port from address bar (uses ?ip=IP&port=PORT)
        if ( parsed.queryKey ) {
            var keys = parsed.queryKey;
            console.log( parsed );
            if ( keys.ip )
                _connection.ip = keys.ip;

            if ( keys.port )
                _connection.port = keys.port;

            //For testing
            if ( keys.mobile )
                window.mobile = keys.mobile === '1';

            if ( keys.url )
                _connection.customUrl = keys.url;
        }
    }

    // Does changes to url in browser address bar
    function insertToUrl( key, value ) {
        key = encodeURIComponent( key );
        value = encodeURIComponent( value );

        var kvp = window.location.search.substr( 1 ).split( '&' );
        if ( kvp == '' ) {
            window.history.replaceState( 'Object', 'Title', '?' + key + '=' + value )

        } else {
            var i = kvp.length;
            var x;
            while ( i-- ) {
                x = kvp[i].split( '=' );

                if ( x[0] === key ) {
                    x[1] = value;
                    kvp[i] = x.join( '=' );
                    break;
                }
            }

            if ( i < 0 ) {
                kvp[kvp.length] = [key, value].join( '=' );
            }

            window.history.replaceState( 'Object', 'Title', '?' + kvp.join( '&' ) )
        }
    }

    // Parses remote storage url
    function parseStorageUrl( url ) {
        var parsed = parseUri( url );

        //Adding trailing slash to directory path if it is missing
        if ( parsed.directory.indexOf( '/', parsed.directory.length - 1 ) === -1 )
            parsed.directory += '/';

        // Setting up hardcoded proxy for demo stuff
        var proxy = "chiru.cie.fi:8000/";
        if ( _connection.useProxy )
            parsed.host = proxy + "?" + parsed.host;

        _connection.storageUrl = "http://" + parsed['host'] + parsed.directory;

    }


    //Function that changes the camera aspect ratio and renderer size when window is resized
    function windowResize( renderer, camera ) {
        var callback = function () {
            var res = _sceneController.sceneParams.resolution;
            renderer.setSize( _container.innerWidth() * res, _container.innerHeight() * res );
            if ( renderer.domElement.style.width || renderer.domElement.style.height ) {
                renderer.domElement.style.width = _container.innerWidth() + 'px';
                renderer.domElement.style.height = _container.innerHeight() + 'px';
            }

            camera.aspect = ((_container.innerWidth() * res) / (_container.innerHeight() * res));
            camera.updateProjectionMatrix();
            _sceneController.controls.handleResize();
        };
        window.addEventListener( 'resize', callback, false );

        return {
            stop:function () {
                window.removeEventListener( 'resize', callback );
            }
        }
    }

    function setColorMode( o3d, colorMode ) {

        var children = o3d.children, geometry = o3d.geometry;

        for ( var i = 0, il = children.length; i < il; i++ ) {
            setColorMode( children[ i ], colorMode );
        }

        if ( geometry ) {
            //o3d.material.shading = THREE.FlatShading
            var mode = THREE.VertexColors;
            if ( colorMode === THREE.NoColors ||
                colorMode === THREE.FaceColors ||
                colorMode === THREE.VertexColors ) {
                mode = colorMode;
            }
            o3d.material.vertexColors = parseInt( mode );
            o3d.material.needsUpdate = true;
        }
    }

    // Initializing the WebSocket and WebSocket events
    function initWSConnection() {
        console.log( "Websocket ip: " + _connection.ip + " and port: " + _connection.port );

        //Opening a websocket connection
        _connection.wsManager = new WSManager( _connection.ip, _connection.port );

        // Binding events
        _connection.wsManager.bind( "newCollada", function ( colladaName ) {
            if ( !(colladaName in _connection.serverFiles) ) {
                //console.log("A new collada was added in remote storage: " + colladaName)
                _connection.serverFiles.push( colladaName );

                _gui.fileList.addItem( colladaName );

                _gui.confirmDiag.dialog( "open" );
                _gui.confirmDiag.fileName.text( colladaName );
            }
        } );

        _connection.wsManager.bind( "colladaList", function ( data ) {
            _connection.serverFiles.length = 0;
            _gui.fileList.empty();

            _connection.serverFiles = data['list'].split( ", " );
            _connection.serverFiles.sort();

            _connection.serverFiles.forEach( function ( name ) {
                _gui.fileList.addItem( name );
            } );
            _connection.origStorageUrl = data['storageUrl'];
            parseStorageUrl( _connection.origStorageUrl );

        } );

        _connection.wsManager.bind( "connected", function ( url ) {
            console.log( "WebSocket connection opened." );
            _gui.warnings.displayMsg( "WebSocket connection opened to: " + url, {showTime:5000} );
        } );

        _connection.wsManager.bind( "disconnected", function ( e ) {
            console.log( "WebSocket closed." );
            _gui.warnings.displayMsg( "WebSocket connection to " + e.url + " " + e.reason + ".", {type:'warning'} );

        } );

        _connection.wsManager.bind( "reconnecting", function ( e ) {
            _gui.warnings.displayMsg( "Attempting to reconnect to " + e.host + " (Attempt: " + e.attempt + ")", {type:'warning'} );

        } );

        _connection.wsManager.bind( "error", function ( e ) {
            _gui.warnings.displayMsg( "WebSocket error: " + e, {type:'error'} )
        } );

        // Opening the WebSocket connection
        _connection.wsManager.connect();

    }


    // Adds a ThreeJS object to the scene
    function addToScene( object ) {
        _sceneController.scene.add( object );
    }

    // Removes a ThreeJS object from the scene
    function removeFromScene( object ) {
        _sceneController.scene.remove( object );
    }


    // Removes all the objects from the scene (but does not de-allocate)
    function clearScene() {
        var obj, i,
            scene = _sceneController.scene;

        //Removes all objects (but not the floor/camera)
        for ( i = scene.children.length - 1; i >= 0; i-- ) {
            obj = scene.children[i];
            if ( !(obj instanceof THREE.Camera || obj instanceof THREE.Mesh || obj instanceof THREE.Light) )
                scene.remove( obj );
        }
    }

    // Removes unneeded objects from scene and de-allocates them
    function cleanMemory( freeMemory, cleanAll ) {
        if ( typeof(freeMemory) === 'undefined' )
            freeMemory = true;
        if ( typeof(cleanAll) === 'undefined' )
            cleanAll = false;

        var objects = _sceneController.loadedObjects;

        if ( freeMemory ) {

            var len = 4;
            if ( cleanAll )
                len = 0;

            if ( objects.length > len ) {
                while ( objects.length > len ) {
                    //console.log("removing object: " + objects[0].name)

                    removeFromScene( objects[0] );

                    _sceneController.renderer.deallocateObject( objects[0] );

                    _gui.fileList.toggleLoaded( objects[0].name );
                    objects.splice( 0, 1 );

                }
            }
            _sceneController.renderer.clear();

        } else {
            objects.forEach( function ( object ) {
                _sceneController.renderer.deallocateObject( object );
            } );
            _sceneController.renderer.clear();
        }
    }


    //Initializes the renderer, camera, etc.
    function init() {
        var body = document.body;
        parseUrl( location );

        _container = document.createElement( 'div' );
        body.appendChild( _container );
        body.addEventListener( 'click', function ( event ) {
            // Ask the browser to lock the pointer
            body.requestPointerLock = body.requestPointerLock || body.mozRequestPointerLock || body.webkitRequestPointerLock;

            if ( /Firefox/i.test( navigator.userAgent ) ) {

                var fullscreenchange = function ( event ) {

                    if ( document.fullscreenElement === body || document.mozFullscreenElement === body || document.mozFullScreenElement === body ) {

                        document.removeEventListener( 'fullscreenchange', fullscreenchange );
                        document.removeEventListener( 'mozfullscreenchange', fullscreenchange );

                        body.requestPointerLock();
                    }

                };

                document.addEventListener( 'fullscreenchange', fullscreenchange, false );
                document.addEventListener( 'mozfullscreenchange', fullscreenchange, false );

                body.requestFullscreen = element.requestFullscreen || body.mozRequestFullscreen || body.mozRequestFullScreen || body.webkitRequestFullscreen;

                body.requestFullscreen();

            } else {

                body.requestPointerLock();

            }
            _sceneController.controls.enabled = true
        }, false );

        var renderer = _sceneController.renderer = new THREE.WebGLRenderer( {
            antiAlias:true, // to get smoother output
            preserveDrawingBuffer:false, // true to allow screen shot
            precision:'highp'
        } );

        //renderer.setSize($("#content").width(), $("#content").height())
        renderer.setClearColorHex( 0xBBBBBB, 1 );
        renderer.setSize( window.innerWidth, window.innerHeight );
        _container.appendChild( renderer.domElement );

        var scene = _sceneController.scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2( 0x000000, 0.00000025 );

        // Camera
        var camera = _sceneController.camera = new THREE.PerspectiveCamera( 45, (window.innerWidth / window.innerHeight), 1, 5000 )
        //camera.position.set(17, 10, 15)
        camera.lookAt( scene.position );

        scene.add( camera );

        // Lights
        var pointLight = _sceneController.pointLight = new THREE.DirectionalLight( 0xffffff );
        pointLight.intensity = 2;
        pointLight.position.set( 17, 10, 15 );
        pointLight.lookAt( scene.position );
        scene.add( pointLight );
        scene.add( new THREE.AmbientLight( 0xffffff ) );

        var controls = _sceneController.controls = new THREE.PointerLockControls( _sceneController.camera );
        scene.add( _sceneController.controls.getObject() );

        _sceneController.ray = new THREE.Raycaster();
        _sceneController.ray.ray.direction.set( 0, -1, 0 );


        //Windows resize listener
        windowResize( _sceneController.renderer, _sceneController.camera );


    }


// GUI BINDINGS (Binds webgl stuff to gui controls)
    function guiBindings() {
        _gui.confirmDiag.bind( 'ok', function () {
            requestCollada( _gui.confirmDiag.fileName.text() );
        } );

        //Fullscreen activation key
        if ( THREEx.FullScreen.available() ) {
            THREEx.FullScreen.bindKey( { charCode:'f'.charCodeAt( 0 )} );
        }

    }

//The animation loop
    function loop() {
        requestAnimationFrame( loop );
        _sceneController.controls.isOnObject( false );


        _sceneController.ray.ray.origin.copy( _sceneController.controls.getObject().position );
        _sceneController.ray.ray.origin.y -= 10;

        var intersections = _sceneController.ray.intersectObjects( _sceneController.meshes );

        if ( intersections.length > 0 ) {

            var distance = intersections[ 0 ].distance;

            if ( distance > 0 && distance < 10 ) {

                _sceneController.controls.isOnObject( true );

            }

        }
        _sceneController.controls.update( Date.now() - time );

        _sceneController.renderer.render( _sceneController.scene, _sceneController.camera );
        time = Date.now();


    }

//Initialize the WebGL renderer and scene
    init();

//Binds the gui to the WebGL control values
    guiBindings();

//Initialize WebSocket connection
    if ( _connection.customUrl.length === 0 )
        initWSConnection();

//Start the animation loop
    loop();


    if ( _connection.customUrl.length > 0 )
        requestCollada( _connection.customUrl );

});