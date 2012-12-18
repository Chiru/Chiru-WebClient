(function ( namespace, $, undefined ) {

    /**
     * Creates a scene manager object
     *
     * @constructor
     * @this {SceneManager}
     * @type {Function}
     * @param {object} container Container DOM element for webgl renderer
     */

    var SceneManager = namespace.SceneManager = function ( container, options ) {
        this.time = Date.now();
        this.container = container;
        this.controls = null;
        this.renderer = null;
        this.scene = null;
        this.camera = null;
        this.loadedObjects = [];

        this.sceneParams = {
            resolution: 1
        };

        this.websocket = null;
        // In final solution the storage url will come through a websocket, but it's now defined here for testing
        this.assetManager = new webnaali.AssetManager( {}, "http://localhost:8000/scenes/avatar/" );
        this.ecModel = new webnaali.ECModel( this.assetManager );

        this.initScene();
    };


    SceneManager.prototype.renderLoop = function () {
        var self = this;

        (function loop() {
            window.requestAnimationFrame( loop );

            self.controls.isOnObject( false );


            self.controls.rayCaster.ray.origin.copy( self.controls.getObject().position );
            self.controls.rayCaster.ray.origin.y -= 10;

            var intersections = self.controls.rayCaster.intersectObjects( self.loadedObjects ),
                distance;

            if ( intersections.length > 0 ) {

                distance = intersections[ 0 ].distance;

                if ( distance > 0 && distance < 10 ) {

                    self.controls.isOnObject( true );

                }

            }
            self.controls.update( Date.now() - self.time );

            self.renderer.render( self.scene, self.camera );

            self.time = Date.now();
        }());


    };


    SceneManager.prototype.bindConnection = function ( socket ) {

        if ( socket !== undefined ) {
            this.websocket = socket;


            // Binding events

            try {
                this.websocket.bindEvent( "connected", function ( url ) {
                    console.log( "WebSocket connection opened." );
                } );

                this.websocket.bindEvent( "disconnected", function ( e ) {
                    console.log( "WebSocket closed." );

                } );

                this.websocket.bindEvent( "reconnecting", function ( e ) {
                    console.log( "Attempting to reconnect to " + e.host + " (Attempt: " + e.attempt + ")" );

                } );

                this.websocket.bindEvent( "error", function ( e ) {
                    console.log( "WebSocket error" + e );
                } );


                this.websocket.bindEvent( "scene", function ( xml ) {

                    this.parseScene( xml );

                } );

                return true;

            } catch (e) {
                console.error( 'ERROR:', e.stack );
            }

        }

        return false;

    };

    SceneManager.prototype.windowResize = function () {
        var callback = function () {
            var res = this.sceneParams.resolution;
            this.renderer.setSize( window.innerWidth * res, window.innerHeight * res );

            this.camera.aspect = ((window.innerWidth * res) / (window.innerHeight * res));
            this.camera.updateProjectionMatrix();

        }.bind( this );
        window.addEventListener( 'resize', callback, false );

        return {
            stop: function () {
                window.removeEventListener( 'resize', callback );
            }
        };
    };


    SceneManager.prototype.parseScene = function ( xml ) {
        var that = this;

        var sceneParser = new webnaali.SceneParser( this.ecModel );
        this.ecModel.meshAdded.add( function ( component ) {
            that.addToScene( component.mesh );
        } );
        sceneParser.parse( xml );

        sceneParser = null;


    };

    SceneManager.prototype.clearScene = function ( filter ) {
        var obj, scene = this.scene, i;

        if ( filter === undefined ) {
            filter = THREE.Object3D;
        }

        //Removes all objects (but not camera/lights)
        for ( i = scene.children.length - 1; i >= 0; i - 1 ) {
            obj = scene.children[i];
            if ( obj instanceof filter ) {
                scene.remove( obj );
            }
        }
    };

    SceneManager.prototype.cleanMemory = function ( freeMemory, cleanAll ) {
        if ( freeMemory === undefined ) {
            freeMemory = true;
        }

        if ( cleanAll === undefined ) {
            cleanAll = false;
        }

        var objects = this.loadedObjects,
            that = this, len;

        if ( freeMemory ) {

            len = 4;
            if ( cleanAll ) {
                len = 0;
            }

            if ( objects.length > len ) {
                while ( objects.length > len ) {
                    //console.log("removing object: " + objects[0].name)

                    removeFromScene( objects[0] );

                    this.renderer.deallocateObject( objects[0] );
                    objects.splice( 0, 1 );

                }
            }
            this.renderer.clear();

        } else {
            objects.forEach( function ( object ) {
                that.renderer.deallocateObject( object );
            } );
            this.renderer.clear();
        }
    };


    SceneManager.prepareAsset = function ( entId ) {

        var ecMesh = this.ecModel.entities[entId].components['EC_Mesh'],
            transform = ecMesh.transform,
            scale;
    };

    SceneManager.prototype.addToScene = function ( object ) {

        this.scene.add( object );
        this.loadedObjects.push( object );

    };

    SceneManager.prototype.initScene = function () {

        var body = document.body,
            that = this,
            dirLight;

        body.addEventListener( 'click', function ( event ) {
            // Ask the browser to lock the pointer
            body.requestPointerLock = body.requestPointerLock || body.mozRequestPointerLock || body.webkitRequestPointerLock;

            if ( /Firefox/i.test( navigator.userAgent ) ) {

                var fullscreenchange = function ( event ) {

                    if ( document.fullscreenElement === body || document.mozFullscreenElement === body ||
                        document.mozFullScreenElement === body ) {

                        document.removeEventListener( 'fullscreenchange', fullscreenchange );
                        document.removeEventListener( 'mozfullscreenchange', fullscreenchange );

                        body.requestPointerLock();
                    }

                };

                document.addEventListener( 'fullscreenchange', fullscreenchange, false );
                document.addEventListener( 'mozfullscreenchange', fullscreenchange, false );

                body.requestFullscreen = body.requestFullscreen || body.mozRequestFullscreen ||
                    body.mozRequestFullScreen || body.webkitRequestFullscreen;

                body.requestFullscreen();

            } else {

                body.requestPointerLock();

            }
            that.controls.enabled = true;
        }, false );


        this.renderer = new THREE.WebGLRenderer( {
            antiAlias: true, // to get smoother output
            preserveDrawingBuffer: false, // true to allow screen shot
            precision: 'highp'
        } );

        this.renderer.setClearColorHex( 0xBBBBBB, 1 );
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.container.appendChild( this.renderer.domElement );


        this.scene = new THREE.Scene();

        /** TEMP SCENE **/
        this.scene.fog = new THREE.FogExp2( 0x000000, 0.00000025 );

        // Camera
        this.camera = new THREE.PerspectiveCamera( 45, (window.innerWidth / window.innerHeight), 1, 5000 );
        this.camera.lookAt( this.scene.position );

        this.scene.add( this.camera );


        // Lights

        dirLight = new THREE.DirectionalLight( 0xffffff );
        dirLight.intensity = 2;
        dirLight.position.set( 17, 10, 15 );
        dirLight.lookAt( this.scene.position );
        this.scene.add( dirLight );
        this.scene.add( new THREE.AmbientLight( 0xffffff ) );

        // Controls
        this.controls = new THREE.PointerLockControls( this.camera );
        this.scene.add( this.controls.getObject() );

        this.controls.rayCaster = new THREE.Raycaster();
        this.controls.rayCaster.ray.direction.set( 0, -1, 0 );


        //Windows resize listener
        this.windowResize();

        var vertex = "varying vec3 vNormal;void main() { vNormal = normal;gl_Position = projectionMatrix *modelViewMatrix *vec4(position,1.0);}";
        var fragment = "varying vec3 vNormal;void main() {vec3 light = vec3(0.5,0.2,1.0);light = normalize(light);float dProd = max(0.0, dot(vNormal, light));gl_FragColor = vec4(dProd, dProd, dProd, 1.0);}";
        var material = new THREE.ShaderMaterial( {
            vertexShader: vertex,
            fragmentShader: fragment
        } );

        var mesh = new THREE.Mesh( new THREE.TorusKnotGeometry( 200, 50, 64, 10 ), material );
        this.loadedObjects.push( mesh );
        this.scene.add( mesh );

        // Adding this here temporarily for testing
        this.parseScene();

    };

    SceneManager.prototype.start = function () {
        try {
            this.renderLoop();
            this.websocket.connect();
        } catch (e) {
            console.error( 'ERROR:', e.stack );
        }
    };

}( window.webnaali = window.webnaali || {}, jQuery ));


