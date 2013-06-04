// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * @author Toni Dahl
 */

(function ( namespace, undefined ) {

    var util = namespace.util,
        extend = namespace.util.extend,
        innerWidth = namespace.util.innerWidth,
        innerHeight = namespace.util.innerHeight;

    var Renderer = namespace.Renderer = function ( framework, options ) {

        var defaults = {
                eulerOrder: 'ZYX',
                container: document.body,
                antialias: true,
                shadows: true,
                softShadows: false,
                resolution: 'high',
                precision: 'highp'
            },

        // Setting options
            opts = extend( {}, defaults, options ),
            delta, clock, scene, skyBoxScene, sceneManager, skyBoxCamera, renderer, stats, self = this;

        THREE.Object3D.defaultEulerOrder = opts.eulerOrder;

        this.renderer = null;
        this.resolution = 1;
        this.mainCamera = null;
        this.skyBoxCamera = null;
        this.container = opts.container;
        this.cameraManager = null;
        this.stats = null;

        this.windowResizeListener = null;

        clock = new THREE.Clock();

        this.init = function () {
            var i;
            sceneManager = framework.sceneManager;
            scene = sceneManager.scene;
            skyBoxScene = sceneManager.skyBoxScene;

            this.cameraManager = new namespace.CameraManager( framework );

            // *** Dummy lights ***
            for ( i = 5; i--; ) {
                scene.add( new THREE.PointLight( null, 0 ) );
                scene.add( new THREE.SpotLight( null, 0 ) );
            }
            scene.add( new THREE.DirectionalLight( null, 0 ) );
            scene.add( new THREE.AmbientLight( null, 0 ) );

            renderer = this.renderer = new THREE.WebGLRenderer( {
                antialias: opts.antialias,
                clearColor: 0x87CEEB,
                clearAlpha: 1,
                preserveDrawingBuffer: false,
                precision: opts.precision
            } );

            this.container.appendChild( renderer.domElement );

            this.setResolution( opts.resolution );

            renderer.autoClear = false;
            //renderer.gammaInput = true;
            //renderer.gammaOutput = true;
            if ( opts.shadows ) {
                renderer.shadowMapAutoUpdate = true;
                renderer.shadowMapEnabled = true;


                if ( opts.softShadows ) {
                    renderer.shadowMapSoft = true;
                    renderer.shadowMapType = THREE.PCFSoftShadowMap;
                }
            }

            renderer.shadowMapCascade = false;
            renderer.shadowMapCullFace = THREE.CullFaceNone;

            renderer.physicallyBasedShading = true;

            // *** CAMERAS ***
            skyBoxCamera = this.skyBoxCamera = new THREE.PerspectiveCamera( 35, (innerWidth( this.container ) /
                innerHeight( this.container )), 1, 1000 );
            skyBoxCamera.lookAt( scene.position );

            this.setMainCamera();
            cameraPlaceable = sceneManager.ecManager.getEntity("freelookcamera", true).placeable;


            // ** FPS Meter ***

           /* stats = this.stats = new Stats();
            stats.setMode(0); // 0: fps, 1: ms
            //stats.recordFPSValues(10, 1000);
            stats.recordFPSValues(null, 500);
            document.body.appendChild(stats.domElement);
            stats.domElement.style.position = 'absolute';
            stats.domElement.style.left = '2px';
            stats.domElement.style.top = '2px';
            */


            // *** Listeners ***

            // Window resize listener
            this.windowResizeListener = this.listenWindowResize ();

            // Starting the render loop when assets have been loaded
            framework.assetManager.assetsReady.add( this.renderLoop, this );
           /* framework.assetManager.assetsReady.add( function() {
                console.warn("Scene info: faces:", renderer.info.render.faces, "vertices:", renderer.info.render.vertices);
            }, this );
            */

        };

        this.renderLoop = function () {
           // stats.begin();
            delta = clock.getDelta();

            framework.sceneManager.update( delta );

            skyBoxCamera.rotation.setEulerFromRotationMatrix(
                self.mainCamera.parent.matrixWorld,
                THREE.Object3D.defaultEulerOrder);

            renderer.render( skyBoxScene, skyBoxCamera );
            renderer.render( scene, self.mainCamera );

            window.requestAnimationFrame( self.renderLoop );

            //stats.end();

        };


        this.addSkyBox = function ( skyBox ) {
            if ( skyBoxScene ) {
                if ( sceneManager.getSceneObject( function ( obj ) {
                    return obj.name === 'skyBox';
                }, skyBoxScene ) ) {
                    return false;
                }
                skyBox.name = 'skyBox';
                skyBoxScene.add( skyBox );

                return true;
            }
        };

        this.removeSkyBox = function ( skyBox ) {
            var sky;

            if ( skyBoxScene ) {
                sky = sceneManager.getSceneObject( function ( obj ) {
                    return obj.name === 'skyBox';
                }, skyBoxScene );

                if ( sky ) {
                    this.skyBoxScene.remove( sky );
                }
            }
        };

        this.setAmbientLight = function ( color ) {
            if ( namespace.util.toType( color ) !== 'array' ) {
                return;
            }

            var light;
            if ( scene ) {
                light = sceneManager.getSceneObject( function ( obj ) {
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

        this.createLight = function ( type ) {
            var light;

            if ( type === 0 ) {
                light = sceneManager.getSceneObject( function ( obj ) {
                    return obj instanceof THREE.PointLight && obj.parent instanceof THREE.Scene;
                } );

            } else if ( type === 1 ) {
                light = sceneManager.getSceneObject( function ( obj ) {
                    return obj instanceof THREE.SpotLight && obj.parent instanceof THREE.Scene;
                } );
            } else if ( type === 2 ) {
                light = sceneManager.getSceneObject( function ( obj ) {
                    return obj instanceof THREE.DirectionalLight && obj.parent instanceof THREE.Scene;
                } );
            } else if ( type === 3 ) {
                light = sceneManager.getSceneObject( function ( obj ) {
                    return obj instanceof THREE.AmbientLight && obj.parent instanceof THREE.Scene;
                } );
            } else {
                return false;
            }

            return light;
        };

        this.setMainCamera = function ( cameraEntity ) {
            var entity, camComp, camera, camControls;

            if ( cameraEntity === undefined ) {
                entity = this.cameraManager.createCameraEntity( "freelookcamera" );
            } else if ( cameraEntity instanceof namespace.Entity ) {
                entity = cameraEntity;
            }

            if ( entity ) {
                camComp = entity.getComponent( namespace.ECCamera );
                if ( camComp ) {
                    camera = camComp.getCameraObject();
                    camControls = entity.controls;

                    if ( !camControls.isActive() ) {
                        camControls.setActive();
                    }

                    if ( camera instanceof THREE.PerspectiveCamera ) {
                        this.mainCamera = camera;
                        this.skyBoxCamera.fov = camera.fov;
                        this.skyBoxCamera.aspect = camera.aspect;
                        this.skyBoxCamera.near = camera.near;
                        this.skyBoxCamera.far = camera.far;
                        this.skyBoxCamera.updateProjectionMatrix();
                    }
                }
            }

        };


        this.setResolution = function ( resolution ) {
            if ( typeof(resolution) === 'string' ) {
                if ( resolution === 'high' ) {
                    this.resolution = 1;
                } else {
                    this.resolution = 0.5;
                }
            } else if ( typeof(resolution) === 'number' ) {
                this.resolution = resolution;

            } else {
                return;
            }


            util.log( "Setting rendering resolution to: " + resolution );

            if ( this.resolution < 1 ) {
                this.renderer.setSize( innerWidth( this.container ) * this.resolution, innerHeight( this.container ) * this.resolution );
                this.renderer.domElement.style.width = innerWidth( this.container ) + 'px';
                this.renderer.domElement.style.height = innerHeight( this.container ) + 'px';
            } else {
                this.renderer.setSize( innerWidth( this.container ), innerHeight( this.container ) );
                this.renderer.domElement.style.width = null;
                this.renderer.domElement.style.height = null;
            }

        };


        this.listenWindowResize = function() {
            var callback = function () {
                this.renderer.setSize( innerWidth( this.container ) * this.resolution , innerHeight( this.container ) * this.resolution );
                if(this.resolution < 1 ){
                    this.renderer.domElement.style.width = innerWidth( this.container ) + 'px';
                    this.renderer.domElement.style.height = innerHeight( this.container ) + 'px';
                } else {
                    this.renderer.domElement.style.width = null;
                    this.renderer.domElement.style.height = null;
                }

                this.mainCamera.aspect = innerWidth( this.container ) / innerHeight( this.container );
                this.mainCamera.updateProjectionMatrix();
                this.skyBoxCamera.aspect = this.mainCamera.aspect;
                this.skyBoxCamera.updateProjectionMatrix();

            }.bind( this );

            if(this.windowResizeListener){
                this.windowResizeListener.stop();
            }
            window.addEventListener( 'resize', callback, false );

            return {
                stop: function () {
                    window.removeEventListener( 'resize', callback, false );
                }
            };
        };

    };
}( window['webtundra'] = window.webtundra || {} ));