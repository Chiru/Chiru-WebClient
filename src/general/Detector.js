/**
 * @author alteredq / http://alteredqualia.com/
 * @author mr.doob / http://mrdoob.com/
 */

(function ( namespace, $, undefined ) {

    var Detector = namespace['Detector'] = {

        canvas: !!window.CanvasRenderingContext2D,
        webgl: (function () {
            try {
                return !!window['WebGLRenderingContext'] && !!document.createElement( 'canvas' ).getContext( 'experimental-webgl' );
            } catch (e) {
                return false;
            }
        })(),
        workers: !!window.Worker,
        fileapi: window.File && window.FileReader && window.FileList && window.Blob,


        getWebGLError: function ( type, gpuError, browserError ) {
            if ( !this.webgl ) {

                var error = window.WebGLRenderingContext ? gpuError : browserError;

                if ( type === 'element' ) {
                    var element = document.createElement( 'div' );
                    element.id = 'webgl-error-message';
                    element.style.fontFamily = 'monospace';
                    element.style.fontSize = '13px';
                    element.style.fontWeight = 'normal';
                    element.style.textAlign = 'center';
                    element.style.background = '#fff';
                    element.style.color = '#000';
                    element.style.padding = '1.5em';
                    element.style.width = '400px';
                    element.style.margin = '5em auto 0';

                    element.innerHTML = error;

                    return element;

                } else {
                    return error;
                }
            }

            return false;

        },

        throwWebGLError: function ( parameters ) {

            parameters = parameters || {};

            var defaults =
                {
                    parent: document.body,
                    type: 'element',
                    gpuErrorMsg: [
                        'Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />',
                        'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'
                    ].join( '\n' ),
                    browserErrorMsg: [
                        'Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>',
                        'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'
                    ].join( '\n' )
                },
                settings = $.extend( {}, defaults, parameters ), element;

            if ( settings.type === 'element' ) {
                element = Detector.getWebGLError( settings.type, settings.gpuErrorMsg, settings.browserErrorMsg );
                settings.parent.appendChild( element );

            } else if ( settings.type === 'alert' ) {
                alert( Detector.getWebGLError( settings.type, settings.gpuErrorMsg, settings.browserErrorMsg ) );
            }
        }
    };

}( window['webtundra'] = window['webtundra'] || {}, jQuery ));