// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, undefined ) {

    // Util shortcuts
    var extend = namespace.util.extend,
        innerWidth = namespace.util.innerWidth,
        innerHeight = namespace.util.innerHeight;


    /**
     * Creates a scene manager object
     *
     * @constructor
     * @name SceneManager
     * @type Function
     * @param {object} container Container DOM element for WebGL renderer.
     */

    var SceneManager = namespace['SceneManager'] = function ( options ) {

        var defaults = {
                eulerOrder: 'ZYX',
                container: document.body,
                websocket: null,
                remoteStorage: 'http://127.0.0.1:8000/'
            },
            opts;

        // Setting options
        opts = extend( {}, defaults, options );

        // Three.js settings
        THREE.Object3D.defaultEulerOrder = opts.eulerOrder;


        this.time = Date.now();
        this.container = opts.container;
        this.controls = null;
        this.renderer = null;
        this.scene = null;
        this.skyBoxScene = null;
        this.mainCamera = null;
        this.skyBoxCamera = null;
        this.loadedObjects = [];
        this.remoteStorage = opts.remoteStorage;

        this.websocket = opts.websocket;

        this.assetManager = new namespace.AssetManager( {}, this.remoteStorage );

        this.ecManager = new namespace.ECManager( this );


        this.init();
    };

    SceneManager.prototype.onEntityCreated = function ( entity ){
        var name = entity.name, ecManager = this.ecManager, e, comp;

        if(name){
            if(name === "freelookcameraspawnpos"){
                e = ecManager.createLocalEntity("freelookcamera", ["EC_Placeable", "EC_Name", "EC_Camera"]);
                console.error(e);
            }
        }
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

            /*
             self.camera.position.y = 10;
             self.camera.position.x = Math.floor(Math.cos( self.time*0.0005) * 200);
             self.camera.position.z = Math.floor(Math.sin( self.time *0.0005) * 200);
             self.camera.lookAt( new THREE.Vector3(0,0,0) );
             */
            self.controls.update( Date.now() - self.time );


            self.skyBoxCamera.rotation.setEulerFromRotationMatrix(
                self.mainCamera.parent.matrixWorld,
                //self.camera.matrixWorld,
                THREE.Object3D.defaultEulerOrder
            );

            self.renderer.render( self.skyBoxScene, self.skyBoxCamera );
            self.renderer.render( self.scene, self.mainCamera );

            self.time = Date.now();
        }());


    };

    SceneManager.prototype.windowResize = function () {
        var callback = function () {
            this.renderer.setSize( innerWidth( this.container ), innerHeight( this.container ) );

            this.mainCamera.aspect = innerWidth( this.container ) / innerHeight( this.container );
            this.mainCamera.updateProjectionMatrix();
            this.skyBoxCamera.aspect = this.mainCamera.aspect;
            this.skyBoxCamera.updateProjectionMatrix();

        }.bind( this );
        window.addEventListener( 'resize', callback, false );

        return {
            stop: function () {
                window.removeEventListener( 'resize', callback );
            }
        };
    };

    SceneManager.prototype.addToScene = function ( object ) {
        var self = this;
        this.scene.add( object );
        object.traverse( function ( child ) {
            if ( child instanceof THREE.Mesh ) {
                self.loadedObjects.push( child );
            }

        } );
        //console.log( object )

    };

    SceneManager.prototype.removeFromScene = function ( object ) {

        this.scene.remove( object );

    };

    SceneManager.prototype.changeMainCamera = function ( camera ) {
        if(camera instanceof THREE.Camera){
            this.mainCamera = camera;
        }
    };

    SceneManager.prototype.addSkyBox = function ( skyBox ) {
        var scene = this.skyBoxScene;
        if ( scene ) {
            if ( this.getSceneObject( function ( obj ) {
                return obj.name === 'skyBox';
            }, scene ) ) {
                return;
            }
            skyBox.name = 'skyBox';
            scene.add( skyBox );
        }
    };

    SceneManager.prototype.removeSkyBox = function ( skyBox ) {
        var scene = this.skyBoxScene, sky;
        if ( this.skyBoxScene ) {
            sky = this.getSceneObject( function ( obj ) {
                return obj.name === 'skyBox';
            }, scene );

            if ( sky ) {
                scene.remove( sky );
            }
        }
    };

    SceneManager.prototype.setAmbientLight = function ( color ) {
        if ( namespace.util.toType( color ) !== 'array' ) {
            return;
        }

        var scene = this.scene, light;
        if ( scene ) {
            light = this.getSceneObject( function ( obj ) {
                return obj instanceof THREE.AmbientLight;
            } );

            if ( light ) {
                light.color.setRGB( color[0], color[1], color[2] );
            } else {
                light = new THREE.AmbientLight();
                light.color.setRGB( color[0], color[1], color[2] );
                scene.add( light );
            }
        }

    };

    SceneManager.prototype.getSceneObject = function ( callBack, scene ) {
        if ( typeof callBack !== "function" ) {
            return false;
        }

        if ( !scene ) {
            scene = this.scene;
        }

        var children = scene.children,
            childLength = scene.children.length,
            obj, i;

        if ( children ) {
            for ( i = childLength; i--; ) {
                obj = children[i];
                if ( callBack( obj ) ) {
                    return obj;
                }
            }
        }
        return false;

    };


    SceneManager.prototype.init = function () {

        var body = document.body, renderer, scene, skyBoxScene, camera, skyBoxCamera, controls,
            container = this.container, websocket = this.websocket,
            assetManager = this.assetManager, self = this;


        // *** SCENE AND SKYBOX ***
        scene = this.scene = new THREE.Scene();
        skyBoxScene = this.skyBoxScene = new THREE.Scene();


        // *** CAMERAS ***

        camera = this.mainCamera = new THREE.PerspectiveCamera( 35, ( innerWidth( container ) / innerHeight( container )), 1, 10000 );
        camera.lookAt( scene.position );
        skyBoxCamera = this.skyBoxCamera = new THREE.PerspectiveCamera( 35, (innerWidth( container ) / innerHeight( container )), 1, 10000 );
        skyBoxCamera.lookAt( scene.position );


        // *** RENDERER ***
        renderer = this.renderer = new THREE.WebGLRenderer( {
            antialias: true,
            clearColor: 0x87CEEB,
            clearAlpha: 1,
            preserveDrawingBuffer: false
        } );
        //renderer.setFaceCulling( THREE.CullFaceNone );
        renderer.autoClear = false;
        renderer.gammaInput = true;
        renderer.gammaOutput = true;
        /*
         renderer.shadowMapEnabled = true;
         renderer.shadowMapSoft = true;
         renderer.shadowMapCascade = false;
         */
        //renderer.physicallyBasedShading = true;

        renderer.setSize( innerWidth( this.container ), innerHeight( this.container ) );
        container.appendChild( this.renderer.domElement );


        // *** CONTROLS ***

        controls = this.controls = new THREE.PointerLockControls( this.mainCamera );
        scene.add( this.controls.getObject() );

        controls.rayCaster = new THREE.Raycaster();
        controls.rayCaster.ray.direction.set( 0, -1, 0 );

        controls.enabled = false;

        function pointerLockChange() {
            if ( document.mozPointerLockElement === body ||
                document.webkitPointerLockElement === body ||
                document.pointerLockElement === body ) {
                self.controls.enabled = true;
                return;
            }
            self.controls.enabled = false;
        }

        function fullScreenChange() {
            if ( document.webkitFullscreenElement === body ||
                document.mozFullscreenElement === body ||
                document.mozFullScreenElement === body ) { // Older API upper case 'S'.
                // Element is fullscreen, now we can request pointer lock
                body.requestPointerLock = body.requestPointerLock ||
                    body.mozRequestPointerLock ||
                    body.webkitRequestPointerLock;
                body.requestPointerLock();
            }
        }

        document.addEventListener( 'webkitpointerlockchange', pointerLockChange, false );
        document.addEventListener( 'mozpointerlockchange', pointerLockChange, false );
        document.addEventListener( 'pointerlockchange', pointerLockChange, false );
        document.addEventListener( 'fullscreenchange', fullScreenChange, false );
        document.addEventListener( 'mozfullscreenchange', fullScreenChange, false );
        document.addEventListener( 'webkitfullscreenchange', fullScreenChange, false );

        body.addEventListener( 'click', function ( event ) {
            if ( body.webkitRequestPointerLock ) {
                if ( document.mozPointerLockElement !== body &&
                    document.webkitPointerLockElement !== body &&
                    document.pointerLockElement !== body ) {
                    body.requestPointerLock = body.requestPointerLock ||
                        body.mozRequestPointerLock ||
                        body.webkitRequestPointerLock;
                    body.requestPointerLock();
                }
            } else {
                body.requestFullscreen = body.requestFullscreen ||
                    body.mozRequestFullscreen ||
                    body.mozRequestFullScreen || // Older API upper case 'S'.
                    body.webkitRequestFullscreen;
                body.requestFullscreen();
            }

        }, false );



        // *** SIGNAL LISTENERS ***
        //Windows resize listener
        this.windowResize();
        this.ecManager.entityCreated.add(this.onEntityCreated, this);

        if ( websocket ) {
            websocket.bindEvent( "RemoteStorage", function ( data ) {
                assetManager.setRemoteStorage( data );
            } );
        }

        // *** HELPERS FOR DEVELOPING ***
        var axes = new THREE.AxisHelper( 50 );
        axes.position.y = 10;
        scene.add( axes );

    };

    SceneManager.prototype.start = function () {
        try {
            if ( !this.websocket ) {
                throw new Error( ["Invalid WebSocket connection."] );
            }
            this.renderLoop();
            this.websocket.connect();
        } catch (e) {
            console.error( 'SceneManager:', e.stack );
        }
    };

}( window['webtundra'] = window['webtundra'] || {} ));


