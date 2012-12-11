var SceneManager = function (container) {
        this.time = Date.now();
        this.container = container;
        this.controls = null;
        this.renderer = null;
        this.scene = null;
        this.camera = null;

        this.sceneParams = {
            resolution: 1
        };

        this.ecModel = new ECModel();
        this.assetManager = new AssetManager();

        this.loadedObjects = [];



    this.initScene();
};


SceneManager.prototype.update = function( delta ) {

    this.controls.isOnObject( false );


    this.controls.rayCaster.ray.origin.copy( this.controls.getObject().position );
    this.controls.rayCaster.ray.origin.y -= 10;

    var intersections = this.controls.rayCaster.intersectObjects( this.loadedObjects );

    if ( intersections.length > 0 ) {

        var distance = intersections[ 0 ].distance;

        if ( distance > 0 && distance < 10 ) {

            this.controls.isOnObject( true );

        }

    }
    this.controls.update( Date.now() - this.time );

    this.renderer.render( this.scene, this.camera );

    this.time = Date.now();


};


SceneManager.prototype.windowResize = function( ) {
    var callback = function () {
        var res = this.sceneParams.resolution;
        this.renderer.setSize( window.innerWidth * res, window.innerHeight * res );
        if ( this.renderer.domElement.style.width || this.renderer.domElement.style.height ) {
            this.renderer.domElement.style.width = window.innerWidth + 'px';
            this.renderer.domElement.style.height = window.innerHeight + 'px';
        }

        this.camera.aspect = ((window.innerWidth * res) / (window.innerHeight * res));
        this.camera.updateProjectionMatrix();

    }.bind(this);
    window.addEventListener( 'resize', callback, false );

    return {
        stop:function () {
            window.removeEventListener( 'resize', callback );
        }
    };
};



SceneManager.prototype.parseSceneXML = function () {




};

SceneManager.prototype.clearScene = function ( filter ) {
    var obj, scene = this.scene;

    if ( typeof(filter) === undefined ){ filter = THREE.Object3D }

    //Removes all objects (but not camera/lights)
    for ( var i = scene.children.length - 1; i >= 0; i-- ) {
        obj = scene.children[i];
        if ( obj instanceof filter )
        {
            scene.remove( obj );
        }
    }
};

SceneManager.prototype.cleanMemory = function ( freeMemory, cleanAll ) {
    if ( typeof(freeMemory) === 'undefined' )
    {
        freeMemory = true;
    }

    if ( typeof(cleanAll) === 'undefined' )
    {
        cleanAll = false;
    }

    var objects = this.loadedObjects;
    var that = this;

    if ( freeMemory ) {

        var len = 4;
        if ( cleanAll )
        {
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


SceneManager.prototype.initScene = function () {

    var body = document.body;
    var that = this;

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


    this.renderer =  new THREE.WebGLRenderer( {
        antiAlias:true, // to get smoother output
        preserveDrawingBuffer:false, // true to allow screen shot
        precision:'highp'
    } );

    this.renderer.setClearColorHex( 0xBBBBBB, 1 );
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.container.appendChild( this.renderer.domElement );


    this.scene =  new THREE.Scene();
    this.scene.fog = new THREE.FogExp2( 0x000000, 0.00000025 );

    // Camera
    this.camera = new THREE.PerspectiveCamera( 45, (window.innerWidth / window.innerHeight), 1, 5000 );
    this.camera.lookAt( this.scene.position );

    this.scene.add( this.camera );


    // Lights
    var dirLight = new THREE.DirectionalLight( 0xffffff );
    dirLight.intensity = 2;
    dirLight.position.set( 17, 10, 15 );
    dirLight.lookAt( this.scene.position );
    this.scene.add( dirLight );
    this.scene.add( new THREE.AmbientLight( 0xffffff ) );

    // Controls
    this.controls =  new THREE.PointerLockControls( this.camera );
    this.scene.add( this.controls.getObject() );

    this.controls.rayCaster = new THREE.Raycaster();
    this.controls.rayCaster.ray.direction.set( 0, -1, 0 );


    //Windows resize listener
    this.windowResize();

    var vertex = "varying vec3 vNormal;void main() { vNormal = normal;gl_Position = projectionMatrix *modelViewMatrix *vec4(position,1.0);}";
    var fragment = "varying vec3 vNormal;void main() {vec3 light = vec3(0.5,0.2,1.0);light = normalize(light);float dProd = max(0.0, dot(vNormal, light));gl_FragColor = vec4(dProd, dProd, dProd, 1.0);}";
    var material = new THREE.ShaderMaterial({
        vertexShader: vertex,
        fragmentShader: fragment
    });

    var mesh = new THREE.Mesh(new THREE.TorusKnotGeometry(200,50,64,10), material);
    this.loadedObjects.push(mesh);
    this.scene.add(mesh);

    this.renderer.render(this.scene, this.camera)

};


