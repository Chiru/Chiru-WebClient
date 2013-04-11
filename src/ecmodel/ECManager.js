// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * @author Toni Dahl
 */


(function ( namespace, undefined ) {

    var util = namespace.util;

    /**
     * Entity/Component Manager constructor
     *
     * @constructor
     * @name ECManager
     * @param {object} sceneMgr Pointer to scene manager.
     */

    var ECManager = namespace.ECManager = function ( frameWork ) {

        this.framework = frameWork;

        this.entities = {};
        this.localEntities = {};
        this.numLocalEntities = 0;
        this.entityCreated = new namespace.Signal();


        var connection = this.connection = frameWork.connection,
            self = this;

        if ( connection ) {
            connection.bindEvent( "EntityAdded", function ( data ) {
                /*namespace.util.log( "Got new Entity " + "( id: " + data['entityID'] + ", name: " + data['name'] +
                    ", components: " + data['numReplComps'] + " )" );*/
                self.parseEntity( data );
                console.log(data)

            } );
            connection.bindEvent( "EntityRemoved", function ( data ) {
                namespace.util.log( "Server removed Entity " + data['entityID'] );
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

                var ent, attrData = data['attrs'], attrs, attrId, compId, comp;

                ent = self.getEntity( data['entityId'] );

                if ( ent ) {
                    for ( compId in attrData ) {
                        comp = ent.getComponentById( compId );

                        if ( comp ) {
                            attrs = attrData[compId];

                            for ( attrId in attrs ) {
                                comp.updateAttribute( attrId, attrs[attrId] );
                            }
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

                /*entities[id].componentAdded.add( function ( c ) {

                    // Debug print
                    console.log( "Component", c.id, "added to entity:", c.parent.id );
                } );*/

                return entities[id];
            }

            return false;
        },

        createLocalEntity: function ( name, components ) {
            var entities = this.localEntities, e, id = this.numLocalEntities, i, comp, numComps;

            e = new namespace.Entity( this.numLocalEntities, name, true );
            this.numLocalEntities += 1;

            if ( components && util.toType( components ) === 'array' ) {
                numComps = components.length;
                for ( i = numComps; i--; ) {
                    comp = this.createComponent( components[i] );

                    if ( comp ) {
                        e.addComponent( comp, i );
                    }
                }
            }

            entities[id] = e;

            return entities[id];
        },

        parseEntity: function ( json ) {
            var e, component, i, components = json['components'], id = json['entityID'];

            if ( id ) {
                e = this.createEntity( id, json['name'] );

                if ( components ) {
                    for ( i in components ) {
                        component = this.parseComponent( i, components[i] );
                        if ( component ) {
                            //console.log( component );
                            e.addComponent( component, i );
                        }
                    }
                }
                //console.log(e)
                // Emitting entity created signal
                this.entityCreated.dispatch( e );
            }
        },

        parseComponent: function ( id, data ) {
            var component, typeId, name, attributes, attrId;

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

                for ( attrId in attributes ) {
                    if(component instanceof namespace.ECDynamic){
                        component.createAttribute(attributes[attrId]['name'], attributes[attrId]['val'],
                            attributes[attrId]['typeId'], null, attrId);
                        console.warn(attributes[attrId])
                    } else {
                        component.updateAttribute( attrId, attributes[attrId]['val'], attributes[attrId]['name'] );
                    }
                }
            }
            //console.log(component)

            return component;

        },

        createComponent: function ( type ) {
            var components = namespace.ECOMPONENTS, isTypeId, i;

            if ( !components ) {
                console.warn( "ECManager: Component storage namespace.ECOMPONENTS was not available," +
                    " unable to create component object." );
                return false;
            }

            isTypeId = !isNaN( type );

            if ( isTypeId ) {
                if ( components.hasOwnProperty( type + '' ) ) {
                    return new components[type].Constructor( this.framework );
                }
                console.warn( "ECManager: Error while creating component; Unknown type id:", type );
                return false;

            } else if ( type instanceof namespace.Component ) {
                return type( this.framework );

            } else if ( !isTypeId && type.indexOf( "EC_" ) !== -1 ) {
                for ( i in components ) {
                    if ( components[i].typeName === type ) {
                        return new components[i].Constructor( this.framework );
                    }
                }
                console.warn( "ECManager: Error while creating component; Unknown type name:", type );
                return false;

            } else {
                console.warn( "ECManager: Error while creating component; Unknown type:", type );
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

        getEntity: function ( id, local ) {
            var entities, index, ent;

            if ( id === undefined ) {
                return false;
            }

            if ( local ) {
                entities = this.localEntities;
            } else {
                entities = this.entities;
            }


            if ( !isNaN( id ) ) {
                if ( entities.hasOwnProperty( id ) ) {
                    return entities[id];
                }
            } else if ( typeof id === "string" ) {
                for ( index in entities ) {
                    ent = entities[index];

                    if ( ent.name === id ) {
                        return ent;
                    }
                }
            }

            return false;
        }

    };


}( window['webtundra'] = window['webtundra'] || {} ));