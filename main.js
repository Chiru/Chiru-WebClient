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


    //Initializing the websocket connection and adding some basic events
    namespace.ws = webtundra.initConnection( /*'130.231.12.58'*/wsAddress.split(":")[0], wsAddress.split(":")[1], {allowReconnect: false} );
    namespace.ws.bindEvent( "connected", function ( url ) {
        console.log( "WebSocket connection opened." );
    } );

    namespace.ws.bindEvent( "disconnected", function ( e ) {
        console.log( "WebSocket closed." );
        /*
         self.websocket.parseMessage(JSON.stringify({event:'EntityAdded',
         data: {entityId: '1',
         components:{1:
         {typeId: '17', id:'1',
         attributes:
         {1:{name:"Mesh ref", val:"WoodPallet.mesh"}, 0:{name:"Transform", val:"0,0,0,0,0,0,0.14,0.2,0.14", typeId: '16'}}},
         2:{typeId: '20', id:'1',
         attributes:
         {0:{name: "Transform", val:"0,-5,0,0,0,0,100,1,100"}}}
         }
         }
         }))
         self.websocket.parseMessage(JSON.stringify({event:'EntityAdded',
         data: {entityId: '2',
         components:{1:
         {typeId: '17', id:'1',
         attributes:
         {1:{name: "Mesh ref", val:"fish.mesh"}, 0:{name: "Transform", val:"0,0,0,0,0,0,1,1,1", typeId: '16'}}},
         2:{typeId: '20', id:'1',
         attributes:
         {0:{name: "Transform", val:"1.45201,-4.65185,5.40487,-47.8323,42.1262,-145.378,1,1,1"}}}
         }
         }
         }))
         */

    } );

    namespace.ws.bindEvent( "reconnecting", function ( e ) {
        console.log( "Attempting to reconnect to " + e.host + " (Attempt: " + e.attempt + ")" );

    } );

    namespace.ws.bindEvent( "error", function ( e ) {
        console.log( "WebSocket error" + e );
    } );


    //Initializing the scene manager
    namespace.scene = webtundra.initScene( {container: namespace.container, websocket: namespace.ws} );


    // Starting the scene manager
    namespace.scene.start();


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



    //Testing OgreXML parsing
/*
    var ogreparser = webtundra.OgreXMLParser, pos, geom;

    function load( url, callback ) {
        var request = new XMLHttpRequest();

        request.open( "GET", url, false );

        request.onreadystatechange = function () {

            if ( request.readyState === 4 ) {

                if ( request.status === 200 ) {
                    console.log( "Downloaded." );

                    if ( request.responseXML ) {
                        callback( request.responseXML );
                    } else if ( request.responseText ) {
                        callback( request.responseText );
                    }

                }
            }
        };
        request.send( null );

    }
    function processDelay(xml){
        geom = ogreparser.parseMeshXML( xml );

        load( '/scenes/avatar/default.material', processMaterial );
    }

    function processMesh( xml ) {

        setTimeout(processDelay, 1000*pos, xml);

    }

    function processMaterial( string ) {
        var mat, mesh;
        mat = ogreparser.parseMaterial( string );
        mesh = new THREE.Mesh( geom[0], mat );
        mesh.position.set( 0, mesh.id, 0 );

        console.log( mesh );

        namespace.scene.addToScene( mesh );

    }

    function parseTest() {
        load( '/scenes/avatar/fish.mesh.xml', processMesh );


    }

    for ( var i = 100; i--; ) {
        pos = i;
        parseTest();
    }
*/

}( window.myNamespace = window.myNamespace || {} ));


