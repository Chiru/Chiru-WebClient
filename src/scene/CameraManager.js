// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, undefined ) {

    var CameraManager, util;

    util = namespace.util;


    CameraManager = namespace.CameraManager = function ( sceneMgr ) {
        var sceneManager, ecManager;

        if ( !sceneMgr ) {
            throw new Error( "CameraManager: Could not get SceneManager object." );
        }

        sceneManager = sceneMgr;
        ecManager = sceneMgr.ecManager;


        function onEntityCreated( entity ) {
            var name = entity.name, e;

            if ( name ) {
                if ( name.toLowerCase() === "freelookcameraspawnpos" ) {
                    e = createCameraEntity("freelookcamera");
                }
            }
        }

        function createCameraEntity( type ) {
            var ent;

            if ( type.toLowerCase() === "freelookcamera" ) {
                ent = ecManager.createLocalEntity( "freelookcamera", ["EC_Placeable", "EC_Name", "EC_Camera"] );
                console.warn( "CameraManager: Creating FreelookCamera." );
                console.warn( ent );
                ent.name = "freelookcamera";

                return ent;
            }

            return false;
        }


        return {
            onEntityCreated: onEntityCreated,
            createCameraEntity: createCameraEntity

        };

    };


}( window['webtundra'] = window['webtundra'] || {} ));
