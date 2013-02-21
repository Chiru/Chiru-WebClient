// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, undefined ) {

    var ECCamera, util, innerWidth, innerHeight;

    util = namespace.util;
    innerWidth = util.innerWidth;
    innerHeight = util.innerHeight;

    ECCamera = namespace.ECCamera = function ( sceneMgr ) {

        namespace.Component.call( this, sceneMgr ); //Inherit component properties

        this.camera = null;
        this.upVector = null;
        this.nearPlane = null;
        this.farPlane = null;
        this.verticalFov = null;
        this.aspectRatio = null;
        this.placeable = null;


    };

    namespace.storeComponent( 15, "EC_Camera", ECCamera );


    ECCamera.prototype = util.extend( Object.create( namespace.Component.prototype ),
        {

            onParentAdded: function ( parent ) {
                this.initialize();
            },
            onAttributeUpdated: function ( attr, state ) {
            },

            initialize: function () {
                var camera = this.camera;

                if ( !this.parent instanceof namespace.Entity ) {
                    return;
                }

                if ( !camera ) {
                    camera = this.camera = new THREE.PerspectiveCamera();

                    this.setFarClipDist( this.farPlane || 5000 );
                    this.setNearClipDist( this.nearPlane || 0.1 );
                    this.setFov( this.fov || 45 );
                    this.setAspectRatio( this.getAspectRatio() );
                }

            },


            // Attach camera to placeable component
            attachCamera: function () {
            },

            // Detach camera from placeable component
            detachCamera: function () {
            },

            setActive: function () {
            },

            isActive: function () {
            },

            getAspectRatio: function () {
                var container = this.sceneManager.container, aspect = this.aspectRatio,
                    str, arFloat, width, height;

                if ( aspect && typeof aspect === "string" ) {
                    if ( aspect.indexOf( ":" ) === -1 ) {
                        arFloat = parseFloat( aspect );

                        return arFloat > 0 ? aspect : 1;
                    } else {
                        str = aspect.split( ":" );

                        if ( str.length === 2 ) {
                            width = parseFloat( str[0] );
                            height = parseFloat( str[0] );

                            return (width > 0 && height > 0) ? (width / height) : 1;

                        }
                    }
                }

                if ( container ) {
                    return innerWidth( container ) / innerHeight( container );
                }

                return 1.0;
            },


            getCameraObject: function () {
                if ( this.camera ) {
                    return this.camera;
                }
                return false;
            },

            setFov: function ( fov ) {
                var camera = this.camera;

                if ( typeof fov === "number" && camera ) {
                    camera.fov = fov;
                    camera.updateProjectionMatrix();
                }

            },

            setFarClipDist: function ( far ) {
                var camera = this.camera;

                if ( typeof far === "number" && camera ) {
                    camera.far = far;
                    camera.updateProjectionMatrix();

                }
            },
            setNearClipDist: function ( near ) {
                var camera = this.camera;

                if ( typeof near === "number" && camera ) {
                    camera.near = near;
                    camera.updateProjectionMatrix();

                }
            },

            setAspectRatio: function ( aspect ) {
                var camera = this.camera;

                if ( typeof aspect === "number" && camera ) {
                    camera.aspect = aspect;
                    camera.updateProjectionMatrix();

                }
            },

            startViewTracking: function () {
            },

            isEntityVisible: function () {
            },

            visibleEntities: function () {
            }
        }
    );


}( window['webtundra'] = window['webtundra'] || {} ));
