// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * Example file
 * The actual WebNaali library is used here by the end users
 *
 */



(function ( namespace, undefined ) {

    // Checking if WebGL context is available
    if ( !webtundra.Detector.webgl ) {
        webtundra.Detector.throwWebGLError();
        return;
    }

    // Defining the rendering container
    var body = document.body, container;

    container = document.getElementById( 'webglContainer' );

    webtundra.initScene( {container: container} );
    webtundra.initConnection( '127.0.0.1', '9002', {allowReconnect: false} );
    webtundra.start();

    /** Worker example
     var script =
     "self.onmessage = function(event) {" +
                // "self.postMessage(THREE.REVISION);" +
                "self.postMessage('kill');" +
                "};";

     namespace.worker = webnaali.Workers.spawnWorker( script );
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
     namespace.worker2 = webnaali.Workers.spawnWorker( '', scriptId );
     namespace.worker2.onmessage = function ( event ) {
            if ( event.data === 'kill' ) {
                console.log( 'worker ' + this.id + ' sent message: ' + event.data );
                //Deal the final blow: remove a worker script -> kills all workers related to that script
                webnaali.Workers.removeScript( scriptId );
            } else {
                console.log( 'worker ' + this.id + ' echoed message: ' + event.data );
            }
        };
     namespace.worker.postMessage( '' );
     **/


}( window.myNamespace = window.myNamespace || {} ));


