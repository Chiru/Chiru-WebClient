// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, undefined ) {

    /**
     * Defines Entity object
     *
     * @constructor
     * @name Entity
     * @param {Number} id Unique entity id.
     */

    var Entity = namespace.Entity = function ( id, name ) {

        /**
         * A Signal that is dispatched when a new component is added to this entity.
         *
         * @memberOf Entity#
         * @name componentAdded
         * @type Signal
         */
        this.componentAdded = new namespace.Signal();

        /**
         * A Signal that is dispatched when a component is removed from this entity.
         *
         * @memberOf Entity#
         * @name componentRemoved
         * @type Signal
         */
        this.componentRemoved = new namespace.Signal();

        /**
         * Storage for entity actions.
         *
         * @memberOf Entity#
         * @name entityActions
         * @type Object
         */

        this.entityActions = {};

        /**
         * Storage for entity components.
         *
         * @memberOf Entity#
         * @name components
         * @type Object
         */

        this.components = {};

        /**
         * Unique entity id of this entity.
         *
         * @memberOf Entity#
         * @name id
         * @type Number
         */

        this.numComponents = 0;

        this.id = id;


        /**
         * Name of the entity.
         * Got from EC_Name if defined, or when Entity is created.
         *
         * @memberOf Entity#
         * @name name
         * @type String
         */
        this.name = name || null;

    };

    /**
     * Gets a component of an entity by component type id.
     *
     * @name getComponent
     * @function
     * @memberOf Entity.prototype
     * @param {Component} type Pointer to object constructor e.g. namespace.ECPlaceable.
     * @return {*}
     */

    Entity.prototype.getComponent = function ( type ) {
        if ( Object.keys( this.components ).length !== 0 ) {

            for ( var id in this.components ) {
                if ( this.components[id] instanceof type ) {
                    return this.components[id];
                }
            }
        }

        return false;
    };

    /**
     *  Gets a component of an entity by unique component id.
     *
     * @name getComponentById
     * @function
     * @memberOf Entity.prototype
     * @param {Number} id Unique component id.
     * @return {Component|Boolean}
     */

    Entity.prototype.getComponentById = function ( id ) {
        if ( this.components.hasOwnProperty( id ) ) {
            return this.components[id];
        }
        return false;
    };

    /**
     * Adds a component to an entity
     *
     * @name addComponent
     * @function
     * @memberOf Entity.prototype
     * @param {Component} component Component of a specific type. e.g. ECMesh
     * @param {Number} id Unique id of the component
     */

    Entity.prototype.addComponent = function ( component, id ) {
        id = id || component.id || this.numComponents;

        if ( !this.components.hasOwnProperty( id + '' ) ) {
            this.components[id] = component;
            this.componentAdded.dispatch( component );
            this.numComponents += 1;
        }


    };

    /**
     * Removes a component from an entity.
     *
     * @name removeComponent
     * @function
     * @memberOf Entity.prototype
     * @param {Component} component Component of a specific type.
     * @return {Boolean}
     */

    Entity.prototype.removeComponent = function ( component ) {
        this.componentRemoved.dispatch( component );

        return false;
    };


}( window['webtundra'] = window['webtundra'] || {} ));
