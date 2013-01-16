(function ( namespace, $, undefined ) {

    var ECPlaceable = namespace.ECPlaceable = function ( sceneMgr ) {

        namespace.Component.call( this, sceneMgr ); //Inherit component properties

        // ECPlaceable specific properties
        this.parentMesh = null;
        this.parentPlaceable = null;
        this.visible = true;
        this.transform = null;


    };


    //Inherit component prototype methods
    ECPlaceable.prototype = Object.create( namespace.Component.prototype );

    ECPlaceable.prototype.onComponentAdded = function () {

    };

    ECPlaceable.prototype.onAttributeUpdated = function ( attr, state ) {
        if ( attr['name'] === 'transform' ) {
            if ( state === 0 ) {
                console.log( "Placeable: transform attr added", state );
                this.transform = attr;
            }
        }
    };

    ECPlaceable.prototype.onParentAdded = function ( parent ) {

    };

    ECPlaceable.prototype.setPosition = function ( x, y, z ) {
        var trans = this.transform;
        if ( !trans ) {
            return;
        }

        if ( trans instanceof Array && trans.length === 9 ) {
            trans.splice( 0, 3, x, y, z );
        }

    };
    ECPlaceable.prototype.setRotation = function ( x, y, z ) {
        var trans = this.transform;
        if ( !trans ) {
            return;
        }

        if ( trans instanceof Array && trans.length === 9 ) {
            trans.splice( 3, 3, x, y, z );
        }
    };
    ECPlaceable.prototype.setScale = function ( x, y, z ) {
        var trans = this.transform;
        if ( !trans ) {
            return false;
        }

        if ( trans instanceof Array && trans.length === 9 ) {
            trans.splice( 6, 3, x, y, z );
        }
    };

    ECPlaceable.prototype.setTransform = function ( transArr ) {
        var trans = this.transform, i;
        if ( !trans ) {
            return;
        }
        if ( trans instanceof Array && transArr instanceof Array && trans.length === 9 && transArr.length === 9 ) {
            for ( i = trans.length; i--; ) {
                trans[i] = transArr[i];
            }
        }

    };

    ECPlaceable.prototype.toggleVisibility = function () {

    };


}( window.webnaali = window.webnaali || {}, jQuery ));
