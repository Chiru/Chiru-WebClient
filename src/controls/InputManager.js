// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * @author Toni Dahl
 */

(function ( namespace, undefined ) {

    var InputManager, util;

    util = namespace.util;


    InputManager = namespace.InputManager = function ( container ) {

        if ( !container ) {
            throw new Error( "InputManager: Could not get container object." );
        }

        var keyCodes = {
                space: 32,
                enter: 13,
                ctrl: 17,
                shift: 16,
                esc: 27,
                up: 38,
                down: 40,
                left: 37,
                right: 39,
                w: 87,
                a: 65,
                s: 83,
                d: 68
            },
            keysDown = {},

            mouse = { x: 0, y: 0, wheelY: 0, relativeY: 0, relativeX: 0, button: -1},
            mouseButtons = {left: 0, right: 1, middle: 2};

        var mouseMove = new namespace.Signal(),
            mouseDown = new namespace.Signal(),
            mouseUp = new namespace.Signal(),
            mouseScroll = new namespace.Signal(),
            keyUp = new namespace.Signal(),
            keyDown = new namespace.Signal();



        function onMouseMove(event){
            event.preventDefault();
            event.stopPropagation();


            mouseMove.dispatch();

        }
        function onMouseDown(event) {
            event.preventDefault();
            event.stopPropagation();

            mouse.button = event.button;

            mouseDown.dispatch();
        }

        function onMouseUp(event) {
            event.preventDefault();
            event.stopPropagation();

            mouse.button = -1;

            mouseUp.dispatch();
        }

        function onMouseScroll(event) {
            event.preventDefault();
            event.stopPropagation();

            // Webkit
            if ( event.wheelDeltaY ) {
                mouse.wheelY -= event.wheelDeltaY;

            // Opera
            } else if ( event.wheelDelta ) {
                mouse.wheelY  -= event.wheelDelta;

            // Firefox
            } else if ( event.detail ) {
                mouse.wheelY  -= event.detail;

            }

            mouseScroll.dispatch();
        }

        function onKeyDown(event){
            keysDown[event.keyCode] = true;
            keyDown.dispatch(event.keyCode);
        }

        function onKeyUp(event) {
            keysDown[event.keyCode] = false;
            keyUp.dispatch(event.keyCode);
        }

        function onContextMenu( event ) {
            event.preventDefault();
        }

        function enableInput() {
            container.addEventListener( 'contextmenu', onContextMenu, false );
            container.addEventListener( 'mousemove', onMouseMove, false );
            container.addEventListener( 'mousedown', onMouseDown, false );
            container.addEventListener( 'mouseup', onMouseUp, false );
            container.addEventListener( 'mousewheel', onMouseScroll, false );
            container.addEventListener( 'DOMMouseScroll', onMouseScroll, false);
            container.addEventListener( 'keydown',  onKeyDown, false );
            container.addEventListener( 'keyup', onKeyUp, false );
        }

        function disableInput() {
            container.removeEventListener( 'contextmenu', onContextMenu, false );
            container.removeEventListener( 'mousemove', onMouseMove, false );
            container.removeEventListener( 'mousedown', onMouseDown, false );
            container.removeEventListener( 'mouseup',  onMouseUp, false );
            container.addEventListener( 'mousewheel', onMouseScroll, false );
            container.addEventListener( 'DOMMouseScroll', onMouseScroll, false);
            container.removeEventListener( 'keydown', onKeyDown, false );
            container.removeEventListener( 'keyup', onKeyUp, false );
        }


        function changeContext(context){
            if (context instanceof window.Element){
                disableInput();
                container = context;
                enableInput();
                return true;
            }
            return false;
        }

        function isKeyDown( key ) {
            return !!this.keysDown[key];
        }


        // ### API ###

        return {

            // Trigger signals
            mouseMove: mouseMove,
            mouseDown: mouseDown,
            mouseUp: mouseUp,
            mouseScroll: mouseScroll,
            keyDown: keyDown,
            keyUp: keyUp,

            // Input data
            keyCodes: keyCodes,
            mouseButtons: mouseButtons,
            keysDown: keysDown,
            mouse: mouse,

            // Methods
            enableInput: enableInput,
            disableInput: disableInput,
            changeInputContext: changeContext,
            isKeyDown: isKeyDown

        };


    };


}( window['webtundra'] = window['webtundra'] || {} ));
