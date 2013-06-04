// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * @author Toni Dahl
 */


(function ( namespace, undefined ) {

    var ECControls, util, innerWidth, innerHeight;

    util = namespace.util;

    ECControls = namespace.ECControls = function ( framework ) {

        namespace.Component.call( this, framework ); //Inherit component properties

        // Other properties
        this.sceneManager = framework.sceneManager;

        this.placeable = null;
        this.controller = null;

        this.container = framework.renderer.container;

        /*
        this.placeableListener = function(attr){
            if(attr['name'] === 'transform') {
                //TODO: Send attributesUpdated message to server through the web client sync manager

                framework.connection.sendMessage('{"event":"AttributesChanged", "data":' +
                    '{"entityId":'+this.parent.id+''+
                    ',"attrs":{'+
                    '"'+this.id+'":{'+
                    '"0":'+JSON.stringify(this.placeable.transform)+
                    '}'+
                    '}'+
                    '}'+
                '}');
            }
        };
        */
    };

    namespace.storeComponent( 100, "EC_Controls", ECControls );


    ECControls.prototype = util.extend( Object.create( namespace.Component.prototype ),
        {

            onParentAdded: function ( parent ) {
                var self = this;
                if ( !parent.placeable ) {
                    this.parent.componentAdded.add( function ( c ) {
                        if ( c instanceof namespace.ECPlaceable ) {
                            self.placeable = c;
                            self.parent.controls = self;
                        }
                    } );
                } else {
                    this.placeable = parent.placeable;
                    this.parent.controls = self;

                }
            },

            onAttributeUpdated: function ( attr ) {
            },

            setControls: function ( type ) {
                var placeable = this.placeable, controlManager = this.sceneManager.controlManager;

                if ( placeable && controlManager && !this.isActive() ) {
                    if ( type === "freelook" ) {
                        this.name = "freelook";
                        this.controller = controlManager.createController( placeable, type );

                        //placeable.attributeUpdated.add(this.placeableListener,this);
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

                if(controller){
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
