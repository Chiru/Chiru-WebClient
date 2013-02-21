// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, undefined ) {

    var util = namespace.util;

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
        this.localEntities = {};
        this.numLocalEntities = 0;
        this.entityCreated = new namespace.Signal();


        var connection = this.connection = sceneMgr.websocket,
            self = this, e, id, component;

        if ( connection ) {
            connection.bindEvent( "EntityAdded", function ( data ) {
                namespace.util.log( "Got new Entity " + "( id: " + data['entityId'] + ", name: " + data['name'] +
                    ", components: " + data['numReplComps'] + " )" );

                self.parseEntity( data );

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
        createEntity: function ( id, name ) {
            var entities = this.entities;
            //console.log("Creating entity", id);
            if ( !entities.hasOwnProperty( id ) ) {
                entities[id] = new namespace.Entity( id, name );

                entities[id].componentAdded.add( function ( c ) {

                    // Debug print
                    console.log( "Component", c.id, "added to entity:", c.parent.id );
                } );

                return entities[id];
            }

            return false;
        },

        createLocalEntity: function ( name, components ) {
            var entities = this.localEntities, e,  id = this.numLocalEntities, i, comp, numComps;

            e = new namespace.Entity( this.numLocalEntities, name );
            this.numLocalEntities += 1;

            if(components && util.toType(components) === 'array'){
                numComps = components.length;
                for(i = numComps; i--;){
                    comp = this.createComponent(components[i]);
                    if(comp){
                        e.addComponent(comp, id);
                    }
                }
            }

            entities[id] = e;

            return entities[id];
        },

        parseEntity: function( json ) {
            var e, component, id;
            if ( json['entityId'] ) {
                e = this.createEntity( json['entityId'] );

                if ( json.hasOwnProperty( 'components' ) ) {
                    for ( id in json['components'] ) {
                        component = this.parseComponent( id, json['components'][id] );
                        if ( component ) {
                            component.setParentEnt( e );
                            //console.log( component );
                            e.addComponent( component, id );
                        }
                    }
                }

                // Emitting entity created signal
                this.entityCreated.dispatch( e );
            }
        },

        parseComponent: function ( id, data ) {
            var component, typeId, name, attributes,
                sceneManager = this.sceneManager, components = namespace.ECOMPONENTS;

            if ( !id || !data['typeId'] ) {
                return false;
            }

            if ( data['attributes'] === null || Object.keys( data['attributes'] ).length === 0 ) {
                return false;
            }

            attributes = data['attributes'];
            typeId = data['typeId'];
            name = data['name'] || "";

            component = this.createComponent( typeId );

            if ( component ) {
                component.id = id;
                component.name = name;
                for ( var cid in attributes ) {
                    component.updateAttribute( cid, attributes[cid] );
                }
            }
            //console.log(component)

            return component;

        },

        createComponent: function ( type ) {
            var components = namespace.ECOMPONENTS, isTypeId, i;

            if ( !components ) {
                console.error( "ECManager: Component storage namespace.ECOMPONENTS was not available," +
                    " unable to create component object." );
                return false;
            }

            isTypeId = !isNaN(type);

            if ( isTypeId ) {
                if ( components.hasOwnProperty( type + '' ) ) {
                    return new components[type].Constructor( this.sceneManager );
                }
                console.error("ECManager: Error while creating component; Unknown type id:", type );
                return false;

            } else if ( type instanceof namespace.Component ) {
                return type( this.sceneManager );

            } else if ( !isTypeId && type.indexOf("EC_") !== -1) {
                for ( i in components ) {
                    if ( components[i].typeName === type ) {
                        return new components[i].Constructor( this.sceneManager );
                    }
                }
                console.error("ECManager: Error while creating component; Unknown type name:", type );
                return false;

            } else {
                console.error("ECManager: Error while creating component; Unknown type:", type );
                return false;
            }

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


}( window['webtundra'] = window['webtundra'] || {} ));