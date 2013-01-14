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
                    for(var id in attributes ) {
                        component.addAttribute(id, attributes[id]);
                    }

                }

                return component;

            },

            componentAdded: function ( component ) {
                var that = this;

                switch (component['typeId']) {
                case '20':
                {
                    (function () {
                        console.log( 'ADDED EC PLACEABLE' );
                        that.meshAdded.addOnce( function ( c ) {
                            if ( c.mesh !== undefined ) {
                                var asset = c.mesh;
                                if ( component.attributes === undefined ) {
                                    return;
                                }
                                var attributes = component.attributes;
                                var trans = attributes['0'].data.split( ',' );
                                console.log(c.id)
                                for ( var i = trans.length; i--; ) trans[i] = Number( trans[i] );

                                asset.position.set( asset.position.x + trans[0], asset.position.y + trans[1], asset.position.z + trans[2] );
                                asset.rotation.set( asset.rotation.x + trans[3] *
                                    Math.PI / 180, asset.rotation.y + trans[4] * Math.PI / 180, asset.rotation.z + trans[5] * Math.PI / 180 );
                                asset.scale.set( asset.scale.x * trans[6], asset.scale.y * trans[7], asset.scale.z * trans[8] );
                            }
                        } );
                    }());


                }
                    break;

                case '23':
                {
                    console.log( 'ADDED EC RigidBody' );

                }
                    break;
                }
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