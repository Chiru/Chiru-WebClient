// For conditions of distribution and use, see copyright notice in LICENSE
(function ( namespace, undefined ) {

    var Renderer = function ( options ) {
        //TODO: Include renderer spefici functions here and do refactoring. This is not currently in use!
        // Sets the WebGL canvas resolution (5-10 fps render speed increase with lower resolution)
        function setRenderQuality( quality ) {
            if ( typeof(quality) === 'undefined' )
                quality = 'high';

            var renderer = _sceneController.renderer;

            if ( quality == 'high' ) {
                renderer.setSize( _container.innerWidth(), _container.innerHeight() );
                renderer.domElement.style.width = null;
                renderer.domElement.style.height = null;
                _sceneController.sceneParams.resolution = 1;
            } else {
                renderer.setSize( _container.innerWidth() / 2, _container.innerHeight() / 2 );
                renderer.domElement.style.width = _container.innerWidth() + 'px';
                renderer.domElement.style.height = _container.innerHeight() + 'px';
                _sceneController.sceneParams.resolution = 0.5;
            }
        }

    }
}( window['webtundra'] = window.webtundra || {} ));