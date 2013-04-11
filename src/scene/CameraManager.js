// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * @author Toni Dahl
 */

(function ( namespace, undefined ) {

    var CameraManager, util;

    util = namespace.util;


    CameraManager = namespace.CameraManager = function ( framework ) {
        var ecManager;

        if ( !framework ) {
            throw new Error( "CameraManager: Could not get framework object." );
        }

        ecManager = framework.sceneManager.ecManager;

        if(ecManager){
            ecManager.entityCreated.add( onEntityCreated, this);
        }

        function onEntityCreated( entity ) {
            var name = entity.name, e;

            if ( name ) {
                if ( name.toLowerCase() === "freelookcameraspawnpos" ) {
                    //console.warn("Got freelook camera spawn position")
                    e = createCameraEntity( "freelookcamera" );
                    e.placeable.transform = entity.placeable.transform;
                    e.controls.getController().reset();
                }
            }
        }

        function createCameraEntity( type ) {
            var ent, controller, name = type.toLowerCase();

            ent = ecManager.getEntity( name, true );

            if ( ent ) {
                return ent;
            } else {

                if ( name === "freelookcamera" ) {
                    ent = ecManager.createLocalEntity( "freelookcamera", ["EC_Placeable", "EC_Name", "EC_Camera", "EC_Controls"] );
                    //console.warn( "CameraManager: Creating FreelookCamera." );
                    ent.name = "freelookcamera";
                    ent.controls.setControls("freelook");
                    controller = ent.controls.getController();
                    controller.movementSpeed = 20;

                    return ent;
                }
            }

            return false;
        }


        return {
            onEntityCreated: onEntityCreated,
            createCameraEntity: createCameraEntity

        };

    };


}( window['webtundra'] = window['webtundra'] || {} ));
