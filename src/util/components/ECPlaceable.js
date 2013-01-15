(function ( namespace, $, undefined ) {

    var ECPlaceable = namespace.ECPlaceable = function ( sceneMgr ) {

        namespace.Component.call(this, sceneMgr); //Inherit component properties

        // ECPlaceable specific properties
        this.parentMesh = null;
        this.parentPlaceable = null;
        this.visible = true;
        this.transform = null;


    };


    //Inherit component prototype methods
    ECPlaceable.prototype = Object.create(namespace.Component.prototype);

    ECPlaceable.prototype.onComponentAdded = function () {

    };

    ECPlaceable.prototype.onAttributeUpdated = function (attr, state) {
        if (attr.name === 'transform') {
            
        }
    };

    ECPlaceable.prototype.onParentAdded = function ( parent ) {

    };

    ECPlaceable.prototype.setPosition = function () {

    };
    ECPlaceable.prototype.setRotation = function () {

    };
    ECPlaceable.prototype.setScale = function () {

    };

    ECPlaceable.prototype.setTransform = function () {

    };


}( window.webnaali = window.webnaali || {}, jQuery ));
