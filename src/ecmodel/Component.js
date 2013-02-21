// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, undefined ) {

    /**
     * Component parent constructor
     *
     * @constructor
     * @name Component
     * @param {object} sceneMgr Pointer to scene manager.
     */

    var Component = namespace.Component = function ( sceneMgr ) {

        if ( !sceneMgr ) {
            throw new Error( "Component: Could not get SceneManager object." );
        }

        this.sceneManager = sceneMgr;

        this.id = null;
        this.parent = null;
        this.attributes = {};
        this.name = '';
        this.typeId = null;
        this.typeName = null;


    };


    /**
     * Internal callback function that is triggered when component is added into parent entity.
     * Actual implementation of this function will be in the child component.
     *
     * @name onAttributeUpdated
     * @function
     * @memberOf Component.prototype
     * @param {Object} parent Parent entity.
     */


    Component.prototype = {
        onParentAdded: function ( parent ) {
        },

        /**
         * Internal callback function, triggered when attribute is changed.
         * Actual implementation of this function will be in the child component.
         *
         * @name onAttributeUpdated
         * @function
         * @memberOf Component.prototype
         * @param {Object} attr Attribute object.
         * @param {Object} state Update state 0 - attribute added, 1 - attribute updated, 2 - attribute removed.
         */

        onAttributeUpdated: function ( attr, state ) {
        },

        addAttribute: function ( id, data ) {
            if ( !this.attributes.hasOwnProperty( id ) ) {
                var val = data['val'], name = data['name'];

                if ( val && name && id ) {
                    var attr = new namespace.Attribute( name, val, data['typeId'] );

                    if ( attr ) {
                        this.attributes[id] = attr;
                        this.onAttributeUpdated( this.attributes[id], 0 );
                    }
                }
            }
        },

        updateAttribute: function ( id, attr ) {
            var val = attr['val'], typeId = attr['typeId'], parsed;

            if ( this.attributes.hasOwnProperty( id ) && val ) {
                this.attributes[id].update( val );

                this.onAttributeUpdated( this.attributes[id], 1 );
            }
        },

        getAttribute: function ( name ) {
            for ( var id in this.attributes ) {
                if ( this.attributes[id].name === name ) {
                    return this.attributes[id]['val'];
                }
            }
            return false;

        },

        setParentEnt: function ( parent ) {
            if ( parent ) {
                this.parent = parent;
                this.onParentAdded( this.parent );
                return true;
            }
            return false;
        }
    };

}( window['webtundra'] = window['webtundra'] || {} ));
