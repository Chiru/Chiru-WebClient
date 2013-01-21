// For conditions of distribution and use, see copyright notice in LICENSE


var Renderer = function(options) {

    function setColorMode( o3d, colorMode ) {

        var children = o3d.children, geometry = o3d.geometry;

        for ( var i = 0, il = children.length; i < il; i++ ) {
            setColorMode( children[ i ], colorMode );
        }

        if ( geometry ) {
            //o3d.material.shading = THREE.FlatShading
            var mode = THREE.VertexColors;
            if ( colorMode === THREE.NoColors ||
                colorMode === THREE.FaceColors ||
                colorMode === THREE.VertexColors ) {
                mode = colorMode;
            }
            o3d.material.vertexColors = parseInt( mode );
            o3d.material.needsUpdate = true;
        }
    }

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