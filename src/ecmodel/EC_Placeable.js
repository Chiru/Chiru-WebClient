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
        this.createAttribute( "transform", [0, 0, 0, 0, 0, 0, 1, 1, 1], 'transform' );
        this.createAttribute( "showboundingbox", false, 'bool' );
        this.createAttribute( "visible", true, 'bool' );

        // Other properties
        this.parentMesh = null;
        this.parentPlaceable = null;
        this.attached = false;
        this.sceneNode = new THREE.Object3D();

        //TODO: Create better handling of transformations using matrices
        /*
         this.transformMat = new THREE.Matrix4();
         this.rotationMat = new THREE.Matrix4();
         this.rotation = new THREE.Vector3();
         this.position = new THREE.Vector3();
         this.scale = new THREE.Vector3();
         */


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

                    if ( attr['name'] === 'transform' ) {
                        this.updateSceneNode();
                    }
            },

            attach: function () {
                var parent;

                parent = this.parent;
                if ( parent ) {
                    parent.placeable = this;
                    console.log( "Adding placeable to scene" )
                    this.updateSceneNode();

                    this.sceneManager.addToScene( this.sceneNode );
                    this.attached = true;
                }
            },

            setVisibility: function (bool) {
                this.sceneNode.visible = bool;

            },

            getSceneNode: function () {
                if ( this.sceneNode !== null ) {
                    return this.sceneNode;
                }
                return false;
            },

            setPosition: function ( x, y, z ) {
                var trans = this.transform;
                trans[0] = x;
                trans[1] = y;
                trans[2] = z;
                this.transform = trans;
            },

            setRotation: function ( x, y, z ) {
                var trans = this.transform;
                trans[3] = x;
                trans[4] = y;
                trans[5] = z;
                this.transform = trans;
            },

            setScale: function(x,y,z) {
                var trans = this.transform;
                trans[6] = x;
                trans[7] = y;
                trans[8] = z;
                this.transform = trans;
            },

            updateSceneNode: function(){
                var trans = this.transform, node = this.sceneNode;

                node.position.set( trans[0], trans[1], trans[2] );
                node.rotation.set( trans[3] * (Math.PI / 180), trans[4] * (Math.PI / 180), trans[5] * (Math.PI / 180) );
                node.scale.set( trans[6], trans[7], trans[8] );
            }



        }
    );


}( window['webtundra'] = window['webtundra'] || {} ));
