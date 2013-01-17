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
    namespace.ENUMS = {};

    // Basic methods

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






    // ENUMS
    namespace.ENUMS.ATTRIBUTES = namespace.util.createEnum(
        'none', 'string', 'int', 'real', 'color', 'float2', 'float3','float4', 'bool', 'uint', 'quat',
        'assetref', 'assetreflist', 'entityref', 'qvariant', 'qvariantlist', 'transform', 'qpoint',
        'numattributetypes'
    );

    // Three.js Settings

    THREE.Object3D.defaultEulerOrder = 'ZYX';


    namespace.util.log( 'WebNaali v' + namespace.VERSION );

}( window['webnaali'] = window['webnaali'] || {}, jQuery ));