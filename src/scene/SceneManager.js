(function ( namespace, $, undefined ) {

    /**
     * Creates a scene manager object
     *
     * @constructor
     * @name SceneManager
     * @type Function
     * @param {object} container Container DOM element for WebGL renderer.
     */

    var SceneManager = namespace['SceneManager'] = function ( container, options ) {
        this.time = Date.now();
        this.container = container;
        this.controls = null;
        this.renderer = null;
        this.scene = null;
        this.camera = null;
        this.loadedObjects = [];

        this.websocket = null;
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
                this.websocket.bindEvent( "connected", function ( url ) {
                    console.log( "WebSocket connection opened." );
                } );

                this.websocket.bindEvent( "disconnected", function ( e ) {
                    console.log( "WebSocket closed." );
                    /*
                     self.websocket.parseMessage(JSON.stringify({event:'EntityAdded',
                     data: {entityId: '1',
                     components:{1:
                     {typeId: '17', id:'1',
                     attributes:
                     {1:{name:"Mesh ref", val:"WoodPallet.mesh"}, 0:{name:"Transform", val:"0,0,0,0,0,0,0.14,0.2,0.14", typeId: '16'}}},
                     2:{typeId: '20', id:'1',
                     attributes:
                     {0:{name: "Transform", val:"0,-5,0,0,0,0,100,1,100"}}}
                     }
                     }
                     }))
                     self.websocket.parseMessage(JSON.stringify({event:'EntityAdded',
                     data: {entityId: '2',
                     components:{1:
                     {typeId: '17', id:'1',
                     attributes:
                     {1:{name: "Mesh ref", val:"fish.mesh"}, 0:{name: "Transform", val:"0,0,0,0,0,0,1,1,1", typeId: '16'}}},
                     2:{typeId: '20', id:'1',
                     attributes:
                     {0:{name: "Transform", val:"1.45201,-4.65185,5.40487,-47.8323,42.1262,-145.378,1,1,1"}}}
                     }
                     }
                     }))
                     */

                } );

                this.websocket.bindEvent( "reconnecting", function ( e ) {
                    console.log( "Attempting to reconnect to " + e.host + " (Attempt: " + e.attempt + ")" );

                } );

                this.websocket.bindEvent( "error", function ( e ) {
                    console.log( "WebSocket error" + e );
                } );


                this.websocket.bindEvent( "EntityAdded", function ( data ) {
                    console.log( data );
                    namespace.util.log( "Got 'EntityAdded'-event, entity id: " + data );

                    if ( data['entityId'] !== undefined ) {
                        var e = self.ecManager.createEntity( data['entityId'] ),
                            component;

                        if ( data.hasOwnProperty( 'components' ) ) {
                            for ( var id in data['components'] ) {
                                component = self.ecManager.createComponent( id, data['components'][id] );
                                if ( component ) {
                                    component.setParentEnt( e );
                                    console.log( component );
                                    e.addComponent( component );
                                }
                            }
                        }
                    }
                    console.log( self.ecManager.listEntities() );

                } );

                this.websocket.bindEvent( "ComponentsRemoved", function ( data ) {
                    console.log( "ComponentsRemoved:" );
                    console.log( data );
                    //namespace.util.log("Got 'ComponentsRemoved'-event, entity id: " + data.entityId);

                } );

                this.websocket.bindEvent( "ComponentsAdded", function ( data ) {
                    console.log( "ComponentsAdded:" );
                    console.log( data );
                    //namespace.util.log("Got 'ComponentsAdded'-event, entity id: " + data.entityId);

                } );

                this.websocket.bindEvent( "AttributesRemoved", function ( data ) {
                    console.log( "AttributesRemoved:" );
                    console.log( data );
                    //namespace.util.log("Got 'Entity Added'-event, entity id: " + data);

                } );

                this.websocket.bindEvent( "AttributesAdded", function ( data ) {
                    console.log( "AttributesAdded:" );
                    console.log( data );
                    //namespace.util.log("Got 'AttributesAdded'-event, entity id: " + data.entityId);


                } );

                this.websocket.bindEvent( "AttributesChanged", function ( data ) {
                    //console.log( "AttributesChanged:" );
                    //console.log( data );
                    //namespace.util.log("Got 'AttributesChanged'-event, entity id: " + data.entityId);
                    var ent, attrs = data['attrs'], cId, comp;
                    ent = self.ecManager.getEntity( data['entityId'] );
                    if ( ent ) {
                        for ( var i in attrs ) {
                            cId = attrs[i]['compId'];
                            comp = ent.getComponentById( cId );
                            if ( comp ) {
                                comp.updateAttribute( i, attrs[i] );
                            }
                        }
                    }


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

    SceneManager.prototype.init = function () {

        var body = document.body,
            self = this,
            dirLight;


        this.renderer = new THREE.WebGLRenderer( {
            antiAlias: true, // to get smoother output
            preserveDrawingBuffer: false, // true to allow screen shot
            precision: 'highp'
        } );

        this.renderer.setClearColorHex( 0xBBBBBB, 1 );
        this.renderer.setSize( $( this.container ).innerWidth(), $( this.container ).innerHeight() );
        this.container.appendChild( this.renderer.domElement );


        this.scene = new THREE.Scene();

        /** TEMP SCENE **/
        this.scene.fog = new THREE.FogExp2( 0x000000, 0.00000025 );

        // Camera
        this.camera = new THREE.PerspectiveCamera( 45, ( $( this.container ).innerWidth() / $( this.container ).innerHeight()), 1, 5000 );
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

        this.controls.enabled = false;

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


        // Just testing custom shaders
        var vertex = "varying vec3 vNormal;void main() { vNormal = normal;gl_Position = projectionMatrix *modelViewMatrix *vec4(position,1.0);}";
        var fragment = "varying vec3 vNormal;void main() {vec3 light = vec3(0.5,0.2,1.0);light = normalize(light);float dProd = max(0.0, dot(vNormal, light));gl_FragColor = vec4(dProd, dProd, dProd, 1.0);}";
        var material = new THREE.ShaderMaterial( {
            vertexShader: vertex,
            fragmentShader: fragment
        } );

        var mesh = new THREE.Mesh( new THREE.TorusKnotGeometry( 200, 50, 64, 10 ), material );
        this.loadedObjects.push( mesh );
        this.scene.add( mesh );

    };

    SceneManager.prototype.start = function () {
        try {
            this.renderLoop();
            this.websocket.connect();
        } catch (e) {
            console.error( 'ERROR:', e.stack );
        }
    };

}( window['webnaali'] = window['webnaali'] || {}, jQuery ));


