// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * @author Toni Dahl
 */


(function ( namespace, undefined ) {

    var ECAnimationController, util;

    util = namespace.util;

    //TODO:

    ECAnimationController = namespace.ECAnimationController = function ( framework ) {
        //Inherit component properties
        namespace.Component.call( this, framework );

        // Default attributes

    };

    namespace.storeComponent( 14, "EC_AnimationController", ECAnimationController );


    ECAnimationController.prototype = util.extend( Object.create( namespace.Component.prototype ),
        {

        } // Prototype end

    );


}( window['webtundra'] = window['webtundra'] || {} ));
