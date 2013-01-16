(function ( namespace, $, undefined ) {

    var ECMesh = namespace.ECMesh = function ( sceneMgr ) {

        namespace.Component.call( this, sceneMgr ); //Inherit component properties

        // ECMesh specific properties
        this.meshChanged = new Signal();
        this.materialChanged = new Signal();
        this.placeable = null;
        this.castShadows = false;
        this.meshRef = null;
        this.mesh = null;
        this.meshMaterial = null;
        this.transform = null;

    };

    //Inherit component prototype methods
    ECMesh.prototype = Object.create( namespace.Component.prototype );


    ECMesh.prototype.onAttributeUpdated = function ( attr, state ) {
        //console.log("Attribute", attr['name'], "of component", this.id, "added/updated.");
        switch (attr['name']) {
        case 'transform':
        {
            if ( attr['val'] instanceof Array && attr['val'].length === 9 ) {
                this.transform = attr['val'];
            }
        }
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
        var self = this;
        this.parent.componentAdded.add( function ( c ) {
            if ( c instanceof namespace.ECPlaceable ) {
                self.setMesh();
                console.log( "ECMesh: ECplaceable addded to parent entity", self.parent.id );
            }
        } );
    };

    ECMesh.prototype.transformMesh = function () {
        var trans, transOffset,
            mPos, mRot, mScale;

        // Transforming only if ECplaceable is set
        if ( this.placeable ) {
            transOffset = this.transform;
            mPos = this.mesh['position'];
            mRot = this.mesh['rotation'];
            mScale = this.mesh['scale'];

            console.log( "Transforming mesh" )
            trans = this.placeable.getAttribute( 'transform' );
            if ( trans ) {
                mPos.set( trans[0] + transOffset[0], trans[1] + transOffset[1], trans[2] + transOffset[2] );
                mRot.set( trans[3] + transOffset[3], trans[4] + transOffset[4], trans[5] + transOffset[5] );
                mScale.set( trans[6] * transOffset[6], trans[7] * transOffset[7], trans[8] + transOffset[8] );
            }
        }
    };

    ECMesh.prototype.onMeshLoaded = function () {

        this.transformMesh();
        this.mesh['castShadow'] = this.castShadows;

        this.sceneManager.meshChanged.dispatch( this.mesh );
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


    ECMesh.prototype.setMesh = function () {
        var self = this, request;
        if ( this.meshRef === null ) {
            return;
        }

        if ( this.placeable === null ) {
            this.autoSetPlaceable();
        }

        request = this.assetManager.requestAsset( this.meshRef );
        if ( request ) {
            request.add( function ( asset ) {
                self.mesh = asset;
                self.onMeshLoaded();
            } );
        } else {
            this.mesh = this.assetManager.getAsset( this.meshRef );
            this.onMeshLoaded();
        }
    };

    ECMesh.prototype.getMesh = function () {
        if ( this.mesh ) {
            return this.mesh;
        }
        return false;
    };


}( window.webnaali = window.webnaali || {}, jQuery ));
