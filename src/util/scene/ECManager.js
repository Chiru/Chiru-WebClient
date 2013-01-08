(function ( namespace, $, undefined ) {

    var ECManager = namespace.ECManager = function ( assetMgr ) {

        var entities = {};
        var components = {};
        var assetManager = assetMgr;

        var Entity = function ( id ) {
            this.id = id;
            this.components = {};
            console.debug( this );
        };

        var Component = function ( type, parent, id ) {
            this.id = id;
            this.type = type || '-1';
            this.parent = parent || '';
            this.attributes = {};

        };

        Component.prototype.addAttribute = function ( name, value ) {
            if ( name !== undefined && name !== '' && value !== undefined ) {
                this[name] = value;
            }
        };

        return {
            meshAdded: new Signal(),

            //Defines a new entity object
            newEntity: function ( id ) {
                return new Entity( id );
            },

            newComponent: function ( type ) {
                return new Component( type );
            },


            addComponent: function ( component, entId ) {
                var entity = entities[entId];
                component.parent = entId;

                if ( entity !== undefined && component['typeId'] !== undefined ) {
                    if ( !entity.components.hasOwnProperty( component['typeId'] ) ) {
                        entity.components[component.id] = component;
                        this.componentAdded( component );
                    }
                }
            },
            componentAdded: function ( component ) {
                var that = this;

                switch (component['typeId']) {
                    case '17':
                    {
                        var trans;
                        console.debug( 'ADDED EC MESH!' );

                        if ( component.attributes === undefined ) {
                            return;
                        }
                        var attributes = component.attributes;
                        var meshRef = attributes['1'].data || '';

                        assetManager.requestAsset( meshRef ).add( function ( asset ) {

                            trans = attributes['0'].data.split( ',' );
                            for ( var i = trans.length; i--; ) trans[i] = Number( trans[i] );

                            asset.position.set( trans[0], trans[1], trans[2] );
                            asset.rotation.set( trans[3] * Math.PI / 180, trans[4] * Math.PI / 180, trans[5] * Math.PI / 180 );
                            asset.scale.set( trans[6], trans[7], trans[8] );

                            component.mesh = asset;
                            console.log( component.mesh );

                            that.meshAdded.dispatch( component );

                        } );

                    }
                        break;
                    case '20':
                    {
                        console.log( 'ADDED EC PLACEABLE' );
                        this.meshAdded.addOnce( function ( c ) {
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



                    }
                        break;

                    case '23':
                    {
                        console.log( 'ADDED EC RigidBody' );

                    }
                        break;
                }
            },


            //Adds a custom component to component types
            customComponent: function ( component ) {

                if ( component.type !== undefined ) {
                    if ( !this.components.hasOwnProperty( component.type ) ) {
                        this.components[component.type] = component;
                    }
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
            getEntities: function () {
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