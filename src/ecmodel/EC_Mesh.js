// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * @author Toni Dahl
 */


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

    ECMesh = namespace.ECMesh = function ( framework ) {

        namespace.Component.call( this, framework ); //Inherit component properties

        // Default attributes
        this.createAttribute( "transform", [0, 0, 0, 0, 0, 0, 1, 1, 1], 'transform' );
        this.createAttribute( "meshref", "", 'assetref', "meshRef" );
        this.createAttribute( "castshadows", true, 'bool', "castShadows" );
        this.createAttribute( "drawdistance", 0, 'real', "drawDistance" );

        // Signals
        this.meshChanged = new namespace.Signal();
        this.materialChanged = new namespace.Signal();

        // Other properties

        this.assetManager = framework.assetManager;
        this.sceneManager = framework.sceneManager;

        this.placeable = null;
        this.offsetNode = new THREE.Object3D();
        this.mesh = null;
        this.storage = null;
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
                if ( this.autoSetPlaceable() ) {
                    this.loadMesh();
                } else {
                    this.parent.componentAdded.add( function ( c ) {
                        if ( c instanceof namespace.ECPlaceable ) {
                            self.loadMesh();
                            console.log( "ECMesh: ECplaceable addded to parent entity", self.parent.id );
                        }
                    } );
                }

            },


            onMeshLoaded: function () {
                this.setMesh();

            },

            setPlaceable: function ( placeable ) {
                if ( placeable instanceof namespace.ECPlaceable ) {
                    this.placeable = placeable;
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
                var meshRef = this.meshRef, assetManager = this.assetManager,
                    self = this, request, mesh;

                if ( meshRef === "" ) {
                    return;
                }

                request = assetManager.requestAsset( meshRef, 'mesh', this.storage );
                if ( request ) {
                    request.add( function ( asset ) {
                        if ( asset ) {
                            self.mesh = asset;
                            self.onMeshLoaded();
                        }
                    } );
                } else {
                    mesh = assetManager.getAsset( meshRef, 'mesh' );
                    if ( mesh ) {
                        this.mesh = mesh;
                        this.onMeshLoaded();
                    }
                }

                //test
               // assetManager.requestAsset( meshRef, 'material', this.storage );

            },

            prepareMesh: function ( meshData ) {
                var assetManager = this.assetManager, meshNode = new THREE.Object3D(), materialRef, materialFileRef,

                    material, waitingForMaterial = false, hasMaterials, newMesh, geometryGroup, geomGroupLen,
                    geometry, materialRdy, i;

                if ( !meshData ) {
                    return false;
                }

                geometryGroup = meshData.geometryGroup;
                geomGroupLen = meshData.geometryGroup.length;
                materialRdy = meshData.materialReady;
                hasMaterials = meshData.hasMaterials;

                for ( i = geomGroupLen; i--; ) {
                    geometry = geometryGroup[i].geometry;
                    materialRef = geometryGroup[i].materialRef;
                    materialFileRef = geometryGroup[i].materialFileRef;

                    // If the mesh refers to materials, use them. Otherwise use default material.
                    if ( hasMaterials ) {
                        material = assetManager.getAsset(materialRef, 'material');
                    }

                    // Setting default material
                    if ( !material ) {
                        material = new THREE.MeshPhongMaterial( { wireframe: false,  color: 0x39FF14} );
                        waitingForMaterial = true;
                    }

                    // Forcing double sided materials for now so optimized oulu3D scene would look better
                    //material.side = THREE.DoubleSide;

                    // Setting mesh properties
                    newMesh = new THREE.Mesh( geometry, material );
                    newMesh.occluder = true;
                    newMesh.occludable = THREE.EdgeOccludable;
                    newMesh.meshRef = this.meshRef;
                    newMesh.materialRef = materialRef;
                    newMesh.castShadow = this.castShadows;
                    newMesh.receiveShadow = this.castShadows;


                    // If mesh uses material, but it has not yet been processed, wait until it is processed and change the default material
                    if ( hasMaterials && waitingForMaterial) {
                        (function ( mesh, signal ) {
                            signal.add( function ( mat ) {
                                if(!mesh.materialRef || !mat || mat.name !== mesh.materialRef){
                                    return;
                                }

                                mesh.material = mat;

                                //Geometry must be updated after changing the material
                                mesh.geometry.buffersNeedUpdate = true;
                                mesh.geometry.uvsNeedUpdate = true;

                                //mesh.material.side = THREE.BackSide;

                                mesh.material.needsUpdate = true;
                            } );
                        }( newMesh, materialRdy ));

                    }

                    meshNode.add( newMesh );
                }

                return meshNode;
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

                sceneNode.remove(this.offsetNode);
                this.attached = false;

            }
        }
    );


}( window['webtundra'] = window['webtundra'] || {} ));
