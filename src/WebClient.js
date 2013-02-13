// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * Container for all classes, top level functions, etc.
 *
 * @version 0.1
 * @namespace webtundra
 * @memberOf window
 **/


(function ( namespace, undefined ) {

    // Attributes
    namespace.VERSION = '0.1 dev';
    namespace.NAME = 'WebTundra';
    namespace.ENUMS = {};
    namespace.ECOMPONENTS = {};

    // Basic methods
    namespace.initScene = function ( options ) {
        try {
            return this.scene = new namespace.SceneManager( options );
        } catch (e) {
            console.log( e.stack );
            return false;
        }
    };

    namespace.initConnection = function ( host, port, options ) {
        var socket;

        try {
            socket = new namespace.WSManager( host, port, options );
        } catch (e) {
            console.error( 'ERROR:', e.stack );
        }

        return socket;
    };


    /**
     * Function for storing the Entity Component constructors into easily available storage object. ECManager creates
     * entity component objects by searching the constructor functions of the components from this storage.
     *
     * @name storeComponent
     * @function
     * @memberOf webtundra
     * @param {Integer | String} id Unique id for the Entity Component constructor function.
     * @param {function} constructor Component constructor function.
     */

    namespace.storeComponent = function (id, constructor) {

        var types = this.ECOMPONENTS = this.ECOMPONENTS || {};

        if(!types.hasOwnProperty(id)){
            types[id] = constructor;
        }
    };

}( window['webtundra'] = window['webtundra'] || {} ));