/**
 * The actual WebNaali API is used here by the end users
 *
 */



(function ( namespace, $, undefined ) {

    // Checking if WebGL context is available
    if ( !webnaali.Detector.webgl ) {
        webnaali.Detector.throwWebGLError();
        return;
    }

    // Defining the rendering container
    var body = document.body, container;

    container = document.createElement( 'div' );
    body.appendChild( container );

    webnaali.initScene( container, {} );
    webnaali.initConnection('127.0.0.1', '9002', {allowReconnect: false});
    webnaali.start();

    webnaali.MeshParser.spawnWorker();


}( window.myNamespace = window.myNamespace || {}, jQuery ));


