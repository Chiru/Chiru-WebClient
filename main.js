// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * Example file
 * The actual WebNaali library is used here by the end users
 *
 * @author Toni Dahl
 *
 */



(function ( namespace, undefined ) {
    var wsAddress, wsIp, wsPort;

    // Checking if WebGL context is available
    if ( !webtundra.Detector.webgl ) {
        webtundra.Detector.throwWebGLError();
        return;
    }


    // Getting the webgl container
    namespace.container = document.getElementById( 'webglContainer' );


    wsAddress = prompt("Enter Tundra server WebSocket address and port","192.168.0.50:9002");
    if (!wsAddress)
    {
       return;
    }


    // ### Initializing GUI ###

    namespace.progressIndicator = webtundra.GUI.createGUIComponent( 'progressIndicator', {
        context: document.getElementById( 'loadingScreen' )
    } );

    // ### Initializing the WebSocket manager ###

    webtundra.setupConnection( {
        host: wsAddress.split(":")[0],
        port:wsAddress.split(":")[1],
        allowReconnect: false
    } );


     webtundra.setupRenderer(
        {
            container: namespace.container,
            shadows: false,
            resolution: 'high',
            precision: 'highp'
        } );

    webtundra.setupAssetManager(
        {
            meshType: 'ogre'
        } );

    // ### Initializing the scene manager ###
    webtundra.setupScene(
        {

        } );


    // ### Starting the client ###
    webtundra.startClient();



    // Printing some WebGL info
    console.log( "Supported WebGL extensions:" );
    console.log( namespace.container.children[0].getContext( 'experimental-webgl' ).getSupportedExtensions() );

    /** Worker test
     var script =
     "self.onmessage = function(event) {" +
                // "self.postMessage(THREE.REVISION);" +
    "var data = event.data;"+
    "if (data.url) {"+
        "var url = data.url;"+
        "var index = url.indexOf('index.html');"+
        "if (index != -1) {"+
            "url = url.substring(0, index);"+
        "}"+
        "importScripts(url + '/src/libs/three.js');"+
         "self.postMessage();"+
    "}"+
                "self.postMessage('kill');" +
                "};";

     namespace.worker = webtundra.Workers.spawnWorker( script );
     namespace.worker.onmessage = function ( event ) {
            if ( event.data === 'kill' ) {
                console.log( 'worker ' + this.id + ' sent message: ' + event.data );
                //Let worker2 do the killing
                namespace.worker2.postMessage( '' );
            } else {
                console.log( 'worker ' + this.id + ' echoed message: ' + event.data );
            }
        };
     var scriptId = namespace.worker.scriptId;
     namespace.worker2 = webtundra.Workers.spawnWorker( '', scriptId );
     namespace.worker2.onmessage = function ( event ) {
            if ( event.data === 'kill' ) {
                console.log( 'worker ' + this.id + ' sent message: ' + event.data );
                //Deal the final blow: remove a worker script -> kills all workers related to that script
                webtundra.Workers.removeScript( scriptId );
            } else {
                console.log( 'worker ' + this.id + ' echoed message: ' + event.data );
            }
        };
     namespace.worker.postMessage(  {url:document.location.href});
     */


}( window.myNamespace = window.myNamespace || {} ));


