/**
 * Global namespace that holds highest level functionality
 * @namespace webnaali
 * @version 0.1 dev
 *
 */

(function ( namespace, $, undefined ) {

    // Attributes
    namespace.VERSION = '0.1 dev';
    namespace.NAME = 'WebNaali';


    // Basic methods

    namespace.log = function ( msg ) {
        var str;
        if ( typeof(msg) === 'string' ) {
            str = msg;
        } else if ( typeof(msg) === 'object' ) {
            str = JSON.stringify(msg);
        }else {
            str = "ERROR: Use Strings or Objects with log().";
        }
        var el = document.getElementById( "log" );
        if ( el !== null ) {
            el.innerHTML +=
                "&nbsp[" + new Date().toTimeString().replace( /.*(\d{2}:\d{2}:\d{2}).*/, "$1" ) + "] " + str + "<br>";
            el.scrollTop = el.scrollHeight;
        } else {
            console.log( msg );
        }
    };

    namespace.initScene = function ( container, options ) {
       return this.scene = new namespace.SceneManager( container );
    };

    namespace.initConnection = function ( host, port, options ) {
        var socket = new namespace.WSManager( host, port, options );

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


    namespace.log( 'WebNaali v' + namespace.VERSION );


}( window['webnaali'] = window['webnaali'] || {}, jQuery ));