// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, $, undefined ) {

    /**
     * Entity/Component Manager constructor
     *
     * @constructor
     * @name ECManager
     * @param {object} sceneMgr Pointer to scene manager.
     */

    var ECManager = namespace.ECManager = function ( sceneMgr ) {

        this.sceneManager = sceneMgr;
        this.entities = {};


        var connection = this.connection = sceneMgr.websocket,
            self = this;

        if ( connection ) {
            connection.bindEvent( "EntityAdded", function ( data ) {
                //console.log( data );
                namespace.util.log( "Got new Entity " + "( id: " + data['entityId'] + ", name: " + data['name'] +
                    ", components: " + data['numReplComps'] + " )" );

                if ( data['entityId'] !== undefined ) {
                    var e = self.createEntity( data['entityId'] ),
                        component;

                    if ( data.hasOwnProperty( 'components' ) ) {
                        for ( var id in data['components'] ) {
                            component = self.createComponent( id, data['components'][id] );
                            if ( component ) {
                                component.setParentEnt( e );
                                //console.log( component );
                                e.addComponent( component );
                            }
                        }
                    }
                }

            } );

            connection.bindEvent( "ComponentsRemoved", function ( data ) {
                console.log( "ComponentsRemoved:" );
                console.log( data );
                //namespace.util.log("Got 'ComponentsRemoved'-event, entity id: " + data.entityId);

            } );

            connection.bindEvent( "ComponentsAdded", function ( data ) {
                console.log( "ComponentsAdded:" );
                console.log( data );
                //namespace.util.log("Got 'ComponentsAdded'-event, entity id: " + data.entityId);

            } );

            connection.bindEvent( "AttributesRemoved", function ( data ) {
                console.log( "AttributesRemoved:" );
                console.log( data );
                //namespace.util.log("Got 'Entity Added'-event, entity id: " + data);

            } );

            connection.bindEvent( "AttributesAdded", function ( data ) {
                console.log( "AttributesAdded:" );
                console.log( data );
                //namespace.util.log("Got 'AttributesAdded'-event, entity id: " + data.entityId);


            } );

            connection.bindEvent( "AttributesChanged", function ( data ) {
                //console.log( "AttributesChanged:" );
                //console.log( data );
                //namespace.util.log("Got 'AttributesChanged'-event, entity id: " + data.entityId);
                var ent, attrs = data['attrs'], cId, comp;
                ent = self.getEntity( data['entityId'] );
                if ( ent ) {
                    for ( var i in attrs ) {
                        cId = attrs[i]['compId'];
                        comp = ent.getComponentById( cId );
                        if ( comp ) {
                            comp.updateAttribute( i, attrs[i] );
                        }
                    }
                }

            } );
        } else {
            throw new Error( ["ECManager: Could not get WebSocket connection pointer."] );
        }
    };


    ECManager.prototype = {
        //Defines a new entity object
        createEntity: function ( id ) {
            var entities = this.entities;
            //console.log("Creating entity", id);
            if ( !entities.hasOwnProperty( id ) ) {
                entities[id] = new namespace.Entity( id );

                entities[id].componentAdded.add( function ( c ) {
                    console.log( "Component", c.id, "added to entity:", c.parent.id );
                } );

                return entities[id];
            }

            return false;
        },

        createComponent: function ( id, data ) {
            var component, typeId, name, attributes,
                sceneManager = this.sceneManager, components = namespace.ECOMPONENTS;

            if(!components){
                console.error("ECManager: Component storage namespace.ECOMPONENTS was not available," +
                    " unable to create component object.");
                return false;
            }

            if ( !id || !data['typeId'] ) {
                return false;
            }

            if ( data['attributes'] === null || Object.keys( data['attributes'] ).length === 0 ) {
                return false;
            }

            attributes = data['attributes'];
            typeId = data['typeId'];
            name = data['name'] || "";

            if ( components.hasOwnProperty( typeId ) ) {
                component = new components[typeId]( sceneManager );
            }

            if ( component ) {
                component.id = id;
                component.name = name;
                for ( var cid in attributes ) {
                    component.addAttribute( cid, attributes[cid] );
                }

            }

            return component;

        },
        addEntity: function ( entity ) {
            var id = entity.id, entities = this.entities;
            //console.log( id );
            if ( !entities.hasOwnProperty( id ) ) {
                entities[id] = entity;
            }
        },

        removeEntity: function ( id ) {
            //TODO: Remove from scene and from hierarchy
        },

        getEntity: function ( id ) {
            var entities = this.entities;
            if ( entities.hasOwnProperty( id ) ) {
                return entities[id];
            }
            return false;
        }

    };


}( window['webtundra'] = window['webtundra'] || {}, jQuery ));