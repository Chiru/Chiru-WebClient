(function ( namespace, $, undefined ) {

    var ECManager = namespace.ECManager = function ( assetMgr ) {

        var entities = {};
        var components = {};
        var assetManager = assetMgr;

        return {
            meshAdded: new Signal(),

            //Defines a new entity object
            createEntity: function ( id ) {
                if ( !entities.hasOwnProperty( id ) ) {
                    entities[id] = new namespace.Entity( id );
                    return entities[id];
                }
                return false;
            },

            componentAdded: function ( component ) {
                var that = this;

                switch (component['typeId']) {
                    case '17':
                    {
                        (function () {
                            var trans, attributes, meshRef;
                            console.debug( 'ADDED EC MESH!' );

                            if ( component.attributes === undefined ) {
                                return;
                            }
                            attributes = component.attributes;
                            meshRef = attributes['1'].data || '';

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
                        }());

                    }
                        break;
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