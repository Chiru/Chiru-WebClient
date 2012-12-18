/**
 * Global namespace that holds highest level functionality
 * @namespace webnaali
 * @version 0.1 dev
 *
 */

(function ( namespace, $, undefined ) {
    // Attributes
    namespace.VERSION = '0.1 dev';

    // Basic methods

    namespace.initScene = function ( container, options ) {
        return this.scene = new this.SceneManager( container );
    };

    namespace.initConnection = function ( host, port, options ) {
        var socket = new this.WSManager( host, port, options );

        if ( this.scene !== undefined ) {
            this.scene.bindConnection( socket );
        } else {
            console.error( " ERROR: Create scene before creating a WebSocket connection. " );
        }
        return socket;
    };

    namespace.start = function () {
        if ( this.scene !== undefined ) {
            this.scene.start();
        } else {
            console.error( " ERROR: Create a scene before starting the client. " );
        }
    };


}(window.webnaali = window.webnaali || {}, jQuery ));