// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * @author Toni Dahl
 */

(function ( namespace, undefined ) {

    var Controls, util;

    util = namespace.util;


    Controls = namespace.Controls = function ( framework ) {

        var controls = {
            "freelook": namespace.FreeLookControls,
            "avatar":namespace.AvatarControls
            }, sceneManager = framework.sceneManager;

        function setControls( controller ) {
            if ( controller ) {
                if(sceneManager.controls){
                    console.warn("disabling controls")
                    sceneManager.controls.disable();
                }

                sceneManager.controls = controller;
                controller.enable();
            }
        }

        function createController( placeable, type ) {
            var controller = false;

            if(controls.hasOwnProperty(type)){
                controller = new controls[type](placeable, framework);
            }

            return controller;
        }

        return {
            setControls: setControls,
            createController: createController
        };

    };


}( window['webtundra'] = window['webtundra'] || {} ));
