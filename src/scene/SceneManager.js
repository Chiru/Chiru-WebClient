// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, $, undefined ) {

    // Util shortcuts
    var extend = namespace.util.extend;

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
                websocket: null
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
        this.camera = null;
        this.loadedObjects = [];

        this.websocket = opts.websocket;
        // In future implementation the storage url will come through a websocket, but it's now defined here for testing
        this.assetManager = new namespace.AssetManager( {}, "http://localhost:8000/scenes/avatar/" );

        this.ecManager = new namespace.ECManager( this );


        this.init();
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

        var self = this;

        if ( socket !== undefined ) {
            this.websocket = socket;


            // Binding events

            try {


                return true;

            } catch (e) {
                console.error( 'ERROR:', e.stack );
            }

        }

        return false;

    };

    SceneManager.prototype.windowResize = function () {
        var callback = function () {
            this.renderer.setSize( $( this.container ).innerWidth(), $( this.container ).innerHeight() );

            this.camera.aspect = $( this.container ).innerWidth() / $( this.container ).innerHeight();
            this.camera.updateProjectionMatrix();

        }.bind( this );
        window.addEventListener( 'resize', callback, false );

        return {
            stop: function () {
                window.removeEventListener( 'resize', callback );
            }
        };
    };

    /*
     SceneManager.prototype.parseScene = function ( xml ) {
     var that = this;

     var sceneParser = new namespace.SceneParser( this.ecManager );
     this.ecManager.meshAdded.add( function ( component ) {
     that.addToScene( component.mesh );
     console.log( "added to scene" )
     } );
     sceneParser.parse( xml );

     sceneParser = null;


     };
     */
    SceneManager.prototype.clearScene = function ( filter ) {
        //TODO: Clean this up

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
        // TODO: Clean this up

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

                    this.removeFromScene( objects[0] );

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

    SceneManager.prototype.addToScene = function ( object ) {

        this.scene.add( object );
        console.log( object )

    };

    SceneManager.prototype.removeFromScene = function ( object ) {

        this.scene.remove( object );

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

    SceneManager.prototype.getSceneObject = function ( callBack ) {
        if ( typeof callBack !== "function" ) {
            return false;
        }

        var children = this.scene.children,
            childLength = this.scene.children.length,
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

        var body = document.body, renderer, scene, camera, controls,
            container = this.container, self = this;


        scene = this.scene = new THREE.Scene();

        // Camera

        camera = this.camera = new THREE.PerspectiveCamera( 45, ( $( container ).innerWidth() / $( container ).innerHeight()), 1, 4000 );
        camera.lookAt( scene.position );
        scene.add( camera );


        // Renderer settings
        renderer = this.renderer = new THREE.WebGLRenderer( {
            antialias: true,
            clearColor: 0x87CEEB,
            clearAlpha: 1,
            preserveDrawingBuffer: false
        } );
        renderer.gammaInput = true;
        renderer.gammaOutput = true;
        /*
        renderer.shadowMapEnabled = true;
        renderer.shadowMapSoft = true;
        renderer.shadowMapCascade = false;
        */
        //renderer.physicallyBasedShading = true;

        renderer.setSize( $( this.container ).innerWidth(), $( this.container ).innerHeight() );
        container.appendChild( this.renderer.domElement );


        // Controls
        controls = this.controls = new THREE.PointerLockControls( this.camera );
        scene.add( this.controls.getObject() );

        controls.rayCaster = new THREE.Raycaster();
        controls.rayCaster.ray.direction.set( 0, -1, 0 );

        controls.enabled = false;

        function pointerLockChange() {
            if ( document.mozPointerLockElement === body ||
                document.webkitPointerLockElement === body ||
                document.pointerLockElement === body ) {
                self.controls.enabled = true;
            } else {
                self.controls.enabled = false;
            }
        }

        document.addEventListener( 'webkitpointerlockchange', pointerLockChange, false );
        body.addEventListener( 'click', function ( event ) {
            if ( document.mozPointerLockElement !== body &&
                document.webkitPointerLockElement !== body &&
                document.pointerLockElement !== body ) {
                body.requestPointerLock = body.requestPointerLock || body.mozRequestPointerLock || body.webkitRequestPointerLock;
                body.requestPointerLock();
            }

        }, false );

        //Windows resize listener
        this.windowResize();

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

}( window['webtundra'] = window['webtundra'] || {}, jQuery ));


