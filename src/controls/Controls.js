// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * @author Toni Dahl
 */

(function ( namespace, undefined ) {

    var Controls, util;

    util = namespace.util;


    Controls = namespace.Controls = function ( sceneMgr ) {

        var controls = {
            "freelook": namespace.FreeLookControls,
            "avatar":namespace.AvatarControls
        };

        function setControls( controller ) {
            if ( controller ) {
                if(sceneMgr.controls){
                    sceneMgr.controls.disable();
                }
                sceneMgr.controls = controller;
                controller.enable();
            }
        }

        function createController( placeable, type ) {
            var controller = false;

            if(controls.hasOwnProperty(type)){
                controller = new controls[type](placeable, sceneMgr);
            }

            return controller;
        }

        return {
            setControls: setControls,
            createController: createController
        };

    };


}( window['webtundra'] = window['webtundra'] || {} ));
