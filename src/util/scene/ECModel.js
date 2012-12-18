(function ( namespace, $, undefined ) {

    var ECModel = namespace.ECModel = function ( assetManager ) {

        this.entities = {};
        this.components = {};
        this.assetManager = assetManager;

    };

    ECModel.prototype = {
        meshAdded: new Signal(),

        //Defines a new entity object
        Entity: function ( id ) {
            this.id = id;
            this.components = {};
            console.debug(this)
        },

        Component: function ( type, parent ) {
            this.type = type;
            this.parent = parent;

            this.addAttribute = function ( name, value ) {
                if ( name !== undefined && name !== '' && value !== undefined ) {
                    this[name] = value;
                }
            };
        },
        addComponent: function ( component, entId ) {
            var entity = this.entities[entId];
            component.parent = entId;

            if ( entity !== undefined ) {
                if ( !entity.components.hasOwnProperty( component.type ) ) {
                    entity.components[component.type] = component;
                    this.componentAdded( component );
                }
            }
        },
        componentAdded: function ( component ) {
            var that = this;

            switch (component.type) {
                case 'EC_Mesh':
                {
                    var trans;
                    console.debug( 'ADDED EC MESH!' );

                    this.assetManager.requestAsset( component['Mesh ref'] ).add( function ( asset ) {

                        trans = component.Transform.split( ',' );
                        for ( var i = trans.length; i--; ) trans[i] = Number( trans[i] );

                        asset.position.set( trans[0], trans[1], trans[2] );
                        asset.rotation.set( trans[3] * Math.PI / 180, trans[4] * Math.PI / 180, trans[5] * Math.PI / 180 );
                        asset.scale.set( trans[6], trans[7], trans[8] );

                        trans = that.entities[component.parent].components['EC_Placeable'].Transform.split( ',' );
                        for ( var i = trans.length; i--; ) trans[i] = Number( trans[i] );

                        asset.position.set( asset.position.x + trans[0], asset.position.y + trans[1], asset.position.z + trans[2] );
                        asset.rotation.set( asset.rotation.x + trans[3] * Math.PI / 180, asset.rotation.y + trans[4] * Math.PI / 180, asset.rotation.z + trans[5] * Math.PI / 180 );
                        asset.scale.set( asset.scale.x * trans[6], asset.scale.y * trans[7], asset.scale.z * trans[8] );


                        component.mesh = asset;
                        //console.log( component.mesh );

                        that.meshAdded.dispatch( component );

                    } );

                }
                    break;
                case 'EC_Placeable':
                {
                    console.log( 'ADDED EC PLACEABLE' );

                }
                    break;

                case 'EC_RigidBody':
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
            if ( !this.entities.hasOwnProperty( id ) ) {
                this.entities[id] = entity;
            }
        },

        removeEntity: function ( id ) {
            //TODO: Remove from scene and from hierarchy
        }
    };

}( window.webnaali = window.webnaali || {}, jQuery ));