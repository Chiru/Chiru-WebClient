// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * @author Toni Dahl
 */


(function ( namespace, undefined ) {

    var ECInputMapper, util;

    util = namespace.util;

    //TODO:

    ECInputMapper = namespace.ECDynamic = function ( framework ) {
        //Inherit component properties
        namespace.Component.call( this, framework );

        this.actionMappings = {};
        this.context = null;


    };

    namespace.storeComponent( 13, "EC_InputMapper", ECInputMapper );


    ECInputMapper.prototype = util.extend( Object.create( namespace.Component.prototype ),
        {
            onAttributeUpdated: function(attr){

            },

            registerMapping: function(keyCodes, name, eventType){

            },
            removeMapping: function(keyCodes, eventType) {

            },

            handleKeyEvent: function(event) {

            },
            handleMouseEvent: function(event) {

            }



        } // Prototype end
    );


}( window['webtundra'] = window['webtundra'] || {} ));
