(function ( namespace, $, undefined ) {

    var ECMesh = namespace.ECMesh = function ( sceneMgr ) {

        namespace.Component.call(this, sceneMgr); //Inherit component properties

        // ECMesh specific properties
        this.meshChanged = new Signal();
        this.materialChanged = new Signal();
        this.placeable = null;
        this.castShadows = false;
        this.meshRef = null;
        this.mesh = null;
        this.meshMaterial = null;

    };

    //Inherit component prototype methods
    ECMesh.prototype = Object.create(namespace.Component.prototype);


    ECMesh.prototype.onAttributeUpdated = function (attr, state) {
        //console.log("Attribute", attr['name'], "of component", this.id, "added/updated.");
        switch ( attr['name'] ) {
        case 'transform':
            break;
        case 'meshref':
            this.meshRef = attr['val'];
            break;
        case 'castshadows':
            this.castShadows = attr['val'];
            break;
        default:
            break;
        }

    };

    ECMesh.prototype.onParentAdded = function ( parent ) {
        this.setMesh();
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
            placeable = this.parent.getComponent( '20' );
            if ( placeable ) {
                this.placeable = placeable;
                return true;
            }
        }
        return false;
    };



    ECMesh.prototype.setMesh = function ( ) {
        if (this.placeable === null ) {
            this.autoSetPlaceable();
        }
        this.getMesh();
        this.meshChanged.dispatch();
    };

    ECMesh.prototype.getMesh = function () {
        var self = this;
        if(this.meshRef === null ) {
            return false;
        }

        this.assetManager.requestAsset( this.meshRef ).add( function ( asset ) {
            self.mesh = asset;

        } );

        return true;
    };


}( window.webnaali = window.webnaali || {}, jQuery ));
