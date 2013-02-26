// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, undefined ) {

    var ECControls, util, innerWidth, innerHeight;

    util = namespace.util;

    ECControls = namespace.ECControls = function ( sceneMgr ) {

        namespace.Component.call( this, sceneMgr ); //Inherit component properties

        // Other properties
        this.placeable = null;
        this.controller = null;
        this.container = sceneMgr.container;

    };

    namespace.storeComponent( 100, "EC_Controls", ECControls );


    ECControls.prototype = util.extend( Object.create( namespace.Component.prototype ),
        {

            onParentAdded: function ( parent ) {
                var self = this;
                this.parent.componentAdded.add( function ( c ) {
                    if ( c instanceof namespace.ECPlaceable ) {
                        self.placeable = c;
                        self.parent.controls = self;
                    }
                } );
            },

            onAttributeUpdated: function ( attr ) {
            },

            setControls: function ( type ) {
                var placeable = this.placeable, controlManager = this.sceneManager.controlManager;

                if ( placeable && controlManager && !this.isActive() ) {
                    if ( type === "freelook" ) {
                        this.name = "freelook";
                        this.controller = controlManager.createController( placeable, type );
                    }
                }
            },

            getController: function () {
                if ( this.controller ) {
                    return this.controller;
                }
                return false;
            },

            isActive: function () {
                var controller = this.controller, controls = this.sceneManager.controls;

                if ( controller && controls ) {
                    return controller === controls;
                }
                return false;
            },
            setActive: function () {
                if ( !this.isActive() && this.controller) {
                    this.sceneManager.controlManager.setControls( this.controller );
                }
            }




        }
    );


}( window['webtundra'] = window['webtundra'] || {} ));
