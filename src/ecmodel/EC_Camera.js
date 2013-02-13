// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, undefined ) {

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
    namespace.storeComponent(15, ECCamera);

    ECCamera.prototype = Object.create( namespace.Component.prototype );


    ECCamera.prototype.onParentAdded = function ( parent ) {
    };
    ECCamera.prototype.onAttributeUpdated = function ( attr, state ) {
    };

    // Attach camera to placeable component
    ECCamera.prototype.attachCamera = function () {};
    // Detach camera from placeable component
    ECCamera.prototype.detachCamera = function () {};
    ECCamera.prototype.setActive = function () {};
    ECCamera.prototype.isActive = function () {};
    ECCamera.prototype.getCameraObject = function () {
        if(this.camera){
            return this.camera;
        }
        return false;
    };
    ECCamera.prototype.setFov = function ( fov ) {
      if(typeof fov === "number" && this.camera) {
        this.camera.fov = fov;
      }

    };

    ECCamera.prototype.setFarClipDist = function (far) {
        if(typeof far === "number" && this.camera) {
            this.camera.far = far;
        }
    };
    ECCamera.prototype.setNearClipDist = function (near) {
        if(typeof near === "number" && this.camera) {
            this.camera.near = near;
        }
    };
    ECCamera.prototype.startViewTracking = function () {};
    ECCamera.prototype.isEntityVisible = function () {};
    ECCamera.prototype.visibleEntities = function () {};




}( window['webtundra'] = window['webtundra'] || {} ));
