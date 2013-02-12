// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, undefined ) {

    /**
     * ECMaterial constructor
     *
     * @constructor
     * @augments Component
     * @name ECMaterial
     * @type Function
     * @param {object} sceneMgr Pointer to scene manager.
     */

    var ECMaterial = namespace.ECMaterial = function ( sceneMgr ) {
        //Inherit component properties
        namespace.Component.call( this, sceneMgr );



    };

    namespace.storeComponent(31, ECMaterial);

    ECMaterial.prototype = Object.create( namespace.Component.prototype );


}( window['webtundra'] = window['webtundra'] || {} ));
