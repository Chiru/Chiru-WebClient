// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, undefined ) {

    var innerWidth = namespace.util.innerWidth,
        innerHeight = namespace.util.innerHeight;

    var ECCamera = namespace.ECCamera = function ( sceneMgr ) {

        namespace.Component.call( this, sceneMgr ); //Inherit component properties

        this.camera = null;
        this.upVector = null;
        this.nearPlane = null;
        this.farPlane = null;
        this.verticalFov = null;
        this.aspectRatio = null;
        this.placeable = null;


    };

    namespace.storeComponent( 15, ECCamera );


    ECCamera.prototype = Object.create( namespace.Component.prototype );


    ECCamera.prototype.onParentAdded = function ( parent ) {
        this.initialize();
    };
    ECCamera.prototype.onAttributeUpdated = function ( attr, state ) {
    };

    ECCamera.prototype.initialize = function () {
        var camera = this.camera;

        if ( !this.parent instanceof namespace.Entity ) {
            return;
        }

        if ( !camera ) {
            camera = this.camera = new THREE.PerspectiveCamera();

            this.setFarClipDist( this.farPlane || 5000 );
            this.setNearClipDist( this.nearPlane || 0.1 );
            this.setFov( this.fov || 45 );
            this.setAspectRatio( this.getAspectRatio() );
        }

    };


    // Attach camera to placeable component
    ECCamera.prototype.attachCamera = function () {
    };

    // Detach camera from placeable component
    ECCamera.prototype.detachCamera = function () {
    };

    ECCamera.prototype.setActive = function () {
    };

    ECCamera.prototype.isActive = function () {
    };

    ECCamera.prototype.getAspectRatio = function () {
        var container = this.sceneManager.container, aspect = this.aspectRatio,
            str, arFloat, width, height;

        if ( aspect && typeof aspect === "string" ) {
            if ( aspect.indexOf( ":" ) === -1 ) {
                arFloat = parseFloat( aspect );

                return arFloat > 0 ? aspect : 1;
            } else {
                str = aspect.split( ":" );

                if ( str.length === 2 ) {
                    width = parseFloat( str[0] );
                    height = parseFloat( str[0] );

                    return (width > 0 && height > 0) ? (width / height) : 1;

                }
            }
        }

        if ( container ) {
            return innerWidth( container ) / innerHeight( container );
        }

        return 1.0;
    };


    ECCamera.prototype.getCameraObject = function () {
        if ( this.camera ) {
            return this.camera;
        }
        return false;
    };
    ECCamera.prototype.setFov = function ( fov ) {
        var camera = this.camera;

        if ( typeof fov === "number" && camera ) {
            camera.fov = fov;
            camera.updateProjectionMatrix();
        }

    };

    ECCamera.prototype.setFarClipDist = function ( far ) {
        var camera = this.camera;

        if ( typeof far === "number" && camera ) {
            camera.far = far;
            camera.updateProjectionMatrix();

        }
    };
    ECCamera.prototype.setNearClipDist = function ( near ) {
        var camera = this.camera;

        if ( typeof near === "number" && camera ) {
            camera.near = near;
            camera.updateProjectionMatrix();

        }
    };

    ECCamera.prototype.setAspectRatio = function ( aspect ){
        var camera = this.camera;

        if ( typeof aspect === "number" && camera ) {
            camera.aspect = aspect;
            camera.updateProjectionMatrix();

        }
    };
    ECCamera.prototype.startViewTracking = function () {
    };
    ECCamera.prototype.isEntityVisible = function () {
    };
    ECCamera.prototype.visibleEntities = function () {
    };


}( window['webtundra'] = window['webtundra'] || {} ));
