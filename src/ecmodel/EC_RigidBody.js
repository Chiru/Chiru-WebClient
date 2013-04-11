// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * @author Toni Dahl
 */


(function ( namespace, undefined ) {

    var ECRigidBody, util;

    util = namespace.util;

    //TODO:

    ECRigidBody = namespace.ECRigidBody = function ( framework ) {
        //Inherit component properties
        namespace.Component.call( this, framework );

        // Default attributes


    };

    namespace.storeComponent( 23, "EC_RigidBody", ECRigidBody );


    ECRigidBody.prototype = util.extend( Object.create( namespace.Component.prototype ),
        {



        } // Prototype end
    );


}( window['webtundra'] = window['webtundra'] || {} ));
