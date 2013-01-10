(function ( namespace, $, undefined ) {

    var ECMesh = namespace.ECMesh = function ( assetMgr ) {


        this.meshChanged = new Signal();
        this.materialChanged = new Signal();
        this.placeable = null;
        this.parent = null;
        this.castShadows = false;
        this.meshRef = null;
        this.meshMaterial = null;
        this.attributes = {};

    };

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

    ECMesh.prototype.setParentEnt = function ( parent ) {
        if ( parent ) {
            this.parent = parent;
        }
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

    ECMesh.prototype.getAttribute = function ( name ) {
        for(var id in this.attributes) {
            if(this.attributes[id].name === name) {
                return this.attributes[id];
            }
        }
        return false;

    };


}( window.webnaali = window.webnaali || {}, jQuery ));
