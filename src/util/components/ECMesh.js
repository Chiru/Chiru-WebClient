(function ( namespace, $, undefined ) {

    var ECMesh = namespace.ECMesh = function ( ) {

        namespace.Component.call(this); //Inherit component properties

        // ECMesh specific properties
        this.meshChanged = new Signal();
        this.materialChanged = new Signal();
        this.placeable = null;
        this.castShadows = false;
        this.meshRef = null;
        this.meshMaterial = null;

    };

    //Inherit component prototype methods
    ECMesh.prototype = Object.create(namespace.Component.prototype);



    ECMesh.prototype.onMeshLoaded = function () {

    };

    ECMesh.prototype.setPlaceable = function ( ECPlaceable ) {
        if ( ECPlaceable ) {
            this.placeable = ECPlaceable;
        }
    };

    ECMesh.prototype.autoSetPlaceable = function () {
        if ( this.parent !== null ) {
            var placeable;
            placeable = this.parent.getComponent( 20 );
            if ( placeable ) {
                this.placeable = placeable;
                return true;
            }
        }
        return false;
    };



    ECMesh.prototype.setMesh = function ( mesh ) {
        if (this.placeable === null ) {
            this.autoSetPlaceable();
        }
        this.meshChanged.dispatch();
    };

    ECMesh.prototype.getMesh = function () {

    };

    ECMesh.prototype.onAttributeUpdated  = function ( id ) {

    };


}( window.webnaali = window.webnaali || {}, jQuery ));
