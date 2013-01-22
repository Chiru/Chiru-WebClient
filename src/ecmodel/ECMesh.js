// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, $, undefined ) {

    /**
     * ECMesh constructor
     *
     * @constructor
     * @augments Component
     * @name ECMesh
     * @param {object} sceneMgr Pointer to scene manager.
     */

    var ECMesh = namespace.ECMesh = function ( sceneMgr ) {

        namespace.Component.call( this, sceneMgr ); //Inherit component properties

        // ECMesh specific properties
        this.meshChanged = new namespace.Signal();
        this.materialChanged = new namespace.Signal();
        this.meshRef = null;
        this.placeable = null;
        this.castShadows = false;
        this.offsetNode = new THREE.Object3D();
        this.mesh = null;
        this.transform = null;
        this.attached = false;

    };

    //Inherit component prototype methods
    ECMesh.prototype = Object.create( namespace.Component.prototype );


    ECMesh.prototype.onAttributeUpdated = function ( attr, state ) {
        //console.log("Attribute", attr['name'], "of component", this.id, "added/updated.");
        switch (attr['name']) {
        case 'transform':
        {
            if ( attr['val'] instanceof Array && attr['val'].length === 9 ) {
                if ( state === 0 ) {
                    this.transform = attr;
                } else if ( state === 1 ) {

                }
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
                self.loadMesh();
                console.log( "ECMesh: ECplaceable addded to parent entity", self.parent.id );
            }
        } );
    };


    ECMesh.prototype.onMeshLoaded = function () {
        this.setMesh();

    };

    ECMesh.prototype.setPlaceable = function ( ECPlaceable ) {
        if ( ECPlaceable instanceof namespace.ECPlaceable ) {
            this.placeable = ECPlaceable;
        }
    };

    ECMesh.prototype.autoSetPlaceable = function () {
        if ( this.parent !== null ) {
            var placeable;
            placeable = this.parent.getComponent( namespace.ECPlaceable );
            this.setPlaceable( placeable );
            return true;

        }
        return false;
    };


    ECMesh.prototype.loadMesh = function () {

        if ( this.meshRef === null ) {
            return;
        }

        var assetManager = this.sceneManager.assetManager,
            self = this, request, mesh;


        request = assetManager.requestAsset( this.meshRef );
        if ( request ) {
            request.add( function ( asset ) {
                if ( asset ) {
                    self.mesh = asset;
                    self.onMeshLoaded();
                }
            } );
        } else {
            mesh = assetManager.getAsset( this.meshRef );
            if ( mesh ) {
                this.mesh = mesh;
                this.onMeshLoaded();
            }
        }
    };

    ECMesh.prototype.prepareMesh = function ( mesh ) {
        var node, meshChildren, meshChildLen, newMesh, i;


        if ( !mesh ) {
            return false;
        }

        if ( mesh.geometry && mesh.material ) {
            newMesh = new THREE.Mesh( mesh.geometry, mesh.material );
        } else {
            return false;
        }

        if ( this.mesh.children && this.mesh.children.length > 0 ) {
            meshChildren = this.mesh.children;
            meshChildLen = this.mesh.children.length;

            for ( i = meshChildLen; i--; ) {
                if ( meshChildren[i].geometry && meshChildren[i].material ) {
                    newMesh.add( new THREE.Mesh( meshChildren[i].geometry, meshChildren[i].material ) );
                }
            }
        }

        return newMesh;

    };

    ECMesh.prototype.setMesh = function () {
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
        node['castShadow'] = this.castShadows;
        transVal = this.transform['val'];
        node.position.set( transVal[0], transVal[1], transVal[2] );
        node.rotation.set( transVal[3] * (Math.PI / 180), transVal[4] * (Math.PI / 180), transVal[5] * (Math.PI / 180) );
        node.scale.set( transVal[6], transVal[7], transVal[8] );
        this.attachMesh();
        return true;


    };

    ECMesh.prototype.attachMesh = function () {
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
            this.sceneManager.addToScene( sceneNode );
            this.attached = true;
        }


    };

    ECMesh.prototype.detachFromScene = function () {
        if ( !this.attached || this.sceneObject === null ) {
            return;
        }

        this.sceneManager.removeFromScene( this.sceneObject );
        this.attached = false;

    };

    ECMesh.prototype.setRotation = function ( x, y, z ) {
        var trans = this.transform;
        if ( !trans ) {
            return;
        }

        if ( trans instanceof Array && trans.length === 9 ) {
            trans.splice( 3, 3, x, y, z );
        }
    };
    ECMesh.prototype.setScale = function ( x, y, z ) {
        var trans = this.transform;
        if ( !trans ) {
            return;
        }

        if ( trans instanceof Array && trans.length === 9 ) {
            trans.splice( 6, 3, x, y, z );
        }
    };

    ECMesh.prototype.setTransform = function ( transArr ) {
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


}( window['webtundra'] = window['webtundra'] || {}, jQuery ));
