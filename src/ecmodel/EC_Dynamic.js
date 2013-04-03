// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * @author Toni Dahl
 */


(function ( namespace, undefined ) {

    var ECDynamic, util;

    util = namespace.util;

    //TODO:

    ECDynamic = namespace.ECDynamic = function ( sceneMgr ) {
        //Inherit component properties
        namespace.Component.call( this, sceneMgr );

        // Default attributes


    };

    namespace.storeComponent( 25, "EC_Dynamic", ECDynamic );


    ECDynamic.prototype = util.extend( Object.create( namespace.Component.prototype ),
        {



        } // Prototype end
    );


}( window['webtundra'] = window['webtundra'] || {} ));
