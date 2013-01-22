// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, $, undefined ) {

    /**
     * ECPlaceable constructor
     *
     * @constructor
     * @augments Component
     * @name ECPlaceable
     * @param {object} sceneMgr Pointer to scene manager.
     */

    var ECPlaceable = namespace.ECPlaceable = function ( sceneMgr ) {

        namespace.Component.call( this, sceneMgr ); //Inherit component properties

        // ECPlaceable specific properties
        this.parentMesh = null;
        this.parentPlaceable = null;
        this.visible = true;
        this.transform = null;
        this.attached = false;
        this.sceneNode = new THREE.Object3D();


    };


    //Inherit component prototype methods
    ECPlaceable.prototype = Object.create( namespace.Component.prototype );

    ECPlaceable.prototype.onComponentAdded = function () {

    };


    ECPlaceable.prototype.onParentAdded = function ( parent ) {
        this.attach();
    };

    ECPlaceable.prototype.onAttributeUpdated = function ( attr, state ) {
        var i, node = this.sceneNode;
        if ( attr['name'] === 'transform' ) {
            if ( state === 0 ) {
                console.log( "Placeable: transform attr added", state );
                this.transform = attr;
            }
            var transVal = this.transform['val'];
            node.position.set( transVal[0], transVal[1], transVal[2] );
            node.rotation.set(transVal[3]*(Math.PI/180), transVal[4]*(Math.PI/180), transVal[5]*(Math.PI/180));
            node.scale.set( transVal[6], transVal[7], transVal[8] );
        }
    };

    ECPlaceable.prototype.attach = function () {
        var parent, parentMesh, self = this;

        parent = this.parent;
        if ( parent ) {
            parentMesh = parent.getComponent( namespace.ECMesh );

            if ( parentMesh ) {
                this.parentMesh = parentMesh;
                this.attached = true;
            } else {
                parent.componentAdded.add( function ( c ) {
                    if ( c instanceof namespace.ECMesh ) {
                        self.parentMesh = c;
                        self.attached = true;
                    }
                } );
            }
        }
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
            return;
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

    ECPlaceable.prototype.getSceneNode = function () {
        if ( this.sceneNode !== null ) {
            return this.sceneNode;
        }
        return false;
    };


}( window['webtundra'] = window['webtundra'] || {}, jQuery ));
