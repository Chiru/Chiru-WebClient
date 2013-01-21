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

        return this.scene = new namespace.SceneManager( options );
    };

    namespace.initConnection = function ( host, port, options ) {
        var socket = new namespace.WSManager( host, port, options );

        if ( this.scene !== undefined ) {
            this.scene.bindConnection( socket );
        } else {
            console.error( " ERROR: Create a scene before creating a WebSocket connection. " );
        }
        return socket;
    };

    namespace.start = function () {
        if ( this.scene !== undefined ) {
            this.scene.start();
        } else {
            console.error( " ERROR: Create a scene manager before starting the client. " );
        }
    };



    namespace.util.log( namespace.NAME + ' v' + namespace.VERSION );

}( window['webtundra'] = window['webtundra'] || {}, jQuery ));