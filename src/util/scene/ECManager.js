(function ( namespace, $, undefined ) {

    var ECManager = namespace.ECManager = function ( sceneMgr ) {

        var entities = {},
        sceneManager = sceneMgr;


        return {


            //Defines a new entity object
            createEntity: function ( id ) {
                //console.log("Creating entity", id);
                if ( !entities.hasOwnProperty( id ) ) {
                    entities[id] = new namespace.Entity( id );

                    entities[id].componentAdded.add(function (c) {
                       console.log("Component", c.id, "added to entity:",c.parent.id);
                    });

                    return entities[id];
                }

                return false;
            },

            createComponent: function ( id, data ) {
                var component, typeId, name, attributes;

                if ( !id || !data['typeId'] ) {
                    return false;
                }

                if ( data['attributes'] === null || Object.keys(data['attributes']).length === 0 ) {
                    return false;
                }

                attributes = data['attributes'];
                typeId = data['typeId'];
                name = data['name'] || "";

                switch ( typeId )
                {

                // EC_Mesh
                case '17':
                {
                    console.log("Creating ECMesh")
                    component = new namespace.ECMesh( sceneManager );
                    component.meshChanged.add(function() {
                        console.log("Mesh of ECMesh component of entity", component.parent.id, "changed")
                    });

                }
                    break;

                // EC_Placeable
                case '20':
                {

                    console.log("Creating ECPlaceable")
                    component = new namespace.ECPlaceable( id );
                }

                    break;

                default:
                    component = false;

                }

                if ( component ) {
                    component.id = id;
                    component.name = name;
                    for(var cid in attributes ) {
                        component.addAttribute(cid, attributes[cid]);
                    }

                }

                return component;

            },

            addEntity: function ( entity ) {
                var id = entity.id;
                //console.log( id );
                if ( !entities.hasOwnProperty( id ) ) {
                    entities[id] = entity;
                }
            },

            removeEntity: function ( id ) {
                //TODO: Remove from scene and from hierarchy
            },
            listEntities: function () {
                return entities;
            },

            getEntity: function ( id ) {
                if ( entities['id'] !== undefined ) {
                    return entities['id'];
                }
                return false;
            }
        };
    };

}( window.webnaali = window.webnaali || {}, jQuery ));