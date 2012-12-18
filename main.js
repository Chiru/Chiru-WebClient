
if ( !Detector.webgl ) {
    Detector.addGetWebGLMessage();
}

var sManager = null;
var time = Date.now();

//Initializes the renderer, camera, etc.
function init() {

    // Defining the rendering container
    var body = document.body, container;

    container = document.createElement( 'div' );
    body.appendChild( container );

    sManager = new webnaali.SceneManager( container );

}


//The animation loop
function loop() {
    window.requestAnimationFrame( loop );
    sManager.update();



}

//Initialize the WebGL renderer and scene
init();

//Start the animation loop
loop();

