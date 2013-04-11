// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * @author Toni Dahl
 */


(function ( namespace, undefined ) {

    var ECMaterial, util;

    util = namespace.util;

    /**
     * ECMaterial constructor
     *
     * @constructor
     * @augments Component
     * @name ECMaterial
     * @type Function
     * @param {object} sceneMgr Pointer to scene manager.
     */

    // TODO:

    ECMaterial = namespace.ECMaterial = function ( framework ) {
        //Inherit component properties
        namespace.Component.call( this, framework );


    };

    namespace.storeComponent( 31, "EC_Material", ECMaterial );

    ECMaterial.prototype = util.extend( Object.create( namespace.Component.prototype ),
        {

        }
    );


}( window['webtundra'] = window['webtundra'] || {} ));
