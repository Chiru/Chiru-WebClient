// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * Container for all classes, top level functions, etc.
 *
 * @version 0.1
 * @namespace webtundra
 * @memberOf window
 * @author Toni Dahl
 **/


(function ( namespace, undefined ) {

    // Attributes
    namespace.VERSION = '1.0 beta';
    namespace.NAME = 'WebTundra';
    namespace.ENUMS = {};
    namespace.ECOMPONENTS = {};

    // API

    namespace.setupRenderer = function ( options ) {
       return namespace.Framework.setOptions(options, 'renderer');
    };

    namespace.setupScene = function ( options ){
        return namespace.Framework.setOptions(options, 'scene');

    };

    namespace.setupAssetManager = function ( options ){
        return namespace.Framework.setOptions(options, 'assets');

    };

    namespace.setupSyncManager = function ( options ){
        return namespace.Framework.setOptions(options, 'sync');

    };

    namespace.setupConnection = function ( options ){
        return namespace.Framework.setOptions(options, 'connection');

    };

    namespace.startClient = function(){
        namespace.Framework.start();
    };


    /**
     * Function for storing the Entity Component constructor-typeId pairs into easily available storage object. ECManager creates
     * entity component objects by searching the constructor functions of the components from this storage.
     *
     * @name storeComponent
     * @function
     * @memberOf webtundra
     * @param {Integer | String} id Unique id for the Entity Component constructor function.
     * @param typeName
     * @param {Function} constructor Component constructor function.
     */

    namespace.storeComponent = function (id, typeName, constructor) {

        var types = this.ECOMPONENTS = this.ECOMPONENTS || {};

        if(!types.hasOwnProperty(id)){
            types[id] = {Constructor: constructor, typeName: typeName};
        }
    };

}( window['webtundra'] = window['webtundra'] || {} ));