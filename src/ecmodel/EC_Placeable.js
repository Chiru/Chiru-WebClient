// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, undefined ) {
    var ECPlaceable, util;


    util = namespace.util;


    /**
     * ECPlaceable constructor
     *
     * @constructor
     * @augments Component
     * @name ECPlaceable
     * @param {object} sceneMgr Pointer to scene manager.
     */

    ECPlaceable = namespace.ECPlaceable = function ( sceneMgr ) {

        namespace.Component.call( this, sceneMgr ); //Inherit component properties

        // Default attributes
        this.createAttribute("transform", [0,0,0,0,0,0,1,1,1], 'transform');
        this.createAttribute("showboundingbox", false, 'bool');
        this.createAttribute("visible", true, 'bool');

        // Other properties
        this.parentMesh = null;
        this.parentPlaceable = null;
        this.attached = false;
        this.sceneNode = new THREE.Object3D();


    };

    namespace.storeComponent( 20, "EC_Placeable", ECPlaceable );


    //Inherit component prototype methods
    ECPlaceable.prototype = util.extend( Object.create( namespace.Component.prototype ),
        {
            onComponentAdded: function () {

            },


            onParentAdded: function ( parent ) {
                this.attach();
            },

            onAttributeUpdated: function ( attr ) {
                var  node, trans;
                if ( attr['name'] === 'transform' ) {

                    trans = attr['val'];
                    node = this.sceneNode;
                    node.position.set( trans[0], trans[1], trans[2] );
                    node.rotation.set( trans[3] * (Math.PI / 180), trans[4] * (Math.PI / 180), trans[5] * (Math.PI / 180) );
                    node.scale.set( trans[6], trans[7], trans[8] );
                }
            },

            attach: function () {
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
            },

            toggleVisibility: function () {

            },

            getSceneNode: function () {
                if ( this.sceneNode !== null ) {
                    return this.sceneNode;
                }
                return false;
            }
        }
    );


}( window['webtundra'] = window['webtundra'] || {} ));
