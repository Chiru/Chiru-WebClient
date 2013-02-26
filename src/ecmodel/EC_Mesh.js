// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, undefined ) {
    var util, ECMesh;

    util = namespace.util;

    /**
     * ECMesh constructor
     *
     * @constructor
     * @augments Component
     * @name ECMesh
     * @param {object} sceneMgr Pointer to scene manager.
     */

    ECMesh = namespace.ECMesh = function ( sceneMgr ) {

        namespace.Component.call( this, sceneMgr ); //Inherit component properties

        // Default attributes
        this.createAttribute("transform", [0,0,0,0,0,0,1,1,1], 'transform');
        this.createAttribute("meshref", "", 'assetref', "meshRef");
        this.createAttribute("castshadows", false, 'bool', "castShadows");

        // Signals
        this.meshChanged = new namespace.Signal();
        this.materialChanged = new namespace.Signal();

        // Other properties
        this.placeable = null;
        this.offsetNode = new THREE.Object3D();
        this.mesh = null;
        this.attached = false;

    };

    namespace.storeComponent( 17, "EC_Mesh", ECMesh );


    //Inherit component prototype methods
    ECMesh.prototype = util.extend( Object.create( namespace.Component.prototype ),
        {

            onAttributeUpdated: function ( attr ) {

            },

            onParentAdded: function ( parent ) {
                var self = this;
                this.parent.componentAdded.add( function ( c ) {
                    if ( c instanceof namespace.ECPlaceable ) {
                        self.loadMesh();
                        console.log( "ECMesh: ECplaceable addded to parent entity", self.parent.id );
                    }
                } );
            },


            onMeshLoaded: function () {
                this.setMesh();

            },

            setPlaceable: function ( ECPlaceable ) {
                if ( ECPlaceable instanceof namespace.ECPlaceable ) {
                    this.placeable = ECPlaceable;
                }
            },

            autoSetPlaceable: function () {
                if ( this.parent !== null ) {
                    var placeable;
                    placeable = this.parent.getComponent( namespace.ECPlaceable );
                    this.setPlaceable( placeable );
                    return true;

                }
                return false;
            },


            loadMesh: function () {
                var meshRef = this.meshRef, assetManager = this.sceneManager.assetManager,
                    self = this, request, mesh;

                if ( meshRef === "" ) {
                    return;
                }

                request = assetManager.requestAsset( meshRef, 'mesh' );
                if ( request ) {
                    request.add( function ( asset ) {
                        if ( asset ) {
                            self.mesh = asset;
                            self.onMeshLoaded();
                        }
                    } );
                } else {
                    mesh = assetManager.getAsset( meshRef );
                    if ( mesh ) {
                        this.mesh = mesh;
                        this.onMeshLoaded();
                    }
                }
            },

            prepareMesh: function ( mesh ) {
                var group = new THREE.Object3D(), newMesh, groupLen, i;

                if ( !mesh ) {
                    return false;
                }
                groupLen = mesh.length;
                for ( i = groupLen; i--; ) {

                    newMesh = new THREE.Mesh( mesh[i][0], mesh[i][1] );
                    newMesh['castShadow'] = this.castShadows;
                    newMesh['receiveShadow'] = this.castShadows;
                    newMesh.material.side = THREE.DoubleSide;
                    group.add( newMesh );

                }

                return group;
            },

            setMesh: function () {
                var mesh, transVal, node;
                if ( this.mesh === null ) {
                    return false;
                }


                if ( this.placeable === null ) {
                    this.autoSetPlaceable();
                }

                node = this.offsetNode;
                mesh = this.prepareMesh( this.mesh );

                if ( !mesh ) {
                    return false;
                }


                node.add( mesh );

                transVal = this.transform;
                node.position.set( transVal[0], transVal[1], transVal[2] );
                node.rotation.set( transVal[3] * (Math.PI / 180), transVal[4] * (Math.PI / 180), transVal[5] * (Math.PI / 180) );
                node.scale.set( transVal[6], transVal[7], transVal[8] );
                this.attachMesh();
                return true;


            },

            attachMesh: function () {
                var sceneNode, placeable, offsetNode;
                placeable = this.placeable;
                offsetNode = this.offsetNode;

                if ( this.attached || placeable === null ) {
                    return;
                }

                sceneNode = placeable.getSceneNode();
                if ( sceneNode ) {
                    offsetNode.visible = placeable.visible;
                    sceneNode.add( offsetNode );
                    this.attached = true;
                }


            },

            detachFromScene: function () {
                var sceneNode, placeable = this.placeable;
                if ( !this.attached || placeable === null ) {
                    return;
                }
                sceneNode = placeable.getSceneNode();

                this.sceneManager.removeFromScene( sceneNode );
                this.attached = false;

            }
        }
    );


}( window['webtundra'] = window['webtundra'] || {} ));
