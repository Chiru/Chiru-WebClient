// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * Container for all classes, top level functions, etc.
 *
 * @version 0.1
 * @namespace webtundra
 * @memberOf window
 **/


(function ( namespace, $, undefined ) {

    // Attributes
    namespace.VERSION = '0.1 dev';
    namespace.NAME = 'WebTundra';
    namespace.ENUMS = {};

    // Basic methods
    namespace.initScene = function ( options ) {
        try {
            return this.scene = new namespace.SceneManager( options );
        } catch (e) {
            console.log( e.stack );
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


    namespace.util.log( namespace.NAME + ' v' + namespace.VERSION );

}( window['webtundra'] = window['webtundra'] || {}, jQuery ));