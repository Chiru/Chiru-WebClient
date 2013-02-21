// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, undefined ) {

    var Component, util, attrTypes;

    util = namespace.util;

    attrTypes = namespace.ENUMS.ATTRIBUTES;

    /**
     * Component parent constructor
     *
     * @constructor
     * @name Component
     * @param {object} sceneMgr Pointer to scene manager.
     */

    Component = namespace.Component = function ( sceneMgr ) {

        if ( !sceneMgr ) {
            throw new Error( "Component: Could not get SceneManager object." );
        }

        this.sceneManager = sceneMgr;

        this.id = null;
        this.parent = null;
        this.attributes = {};
        this.attributeMap = {};
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

        onAttributeUpdated: function ( attr ) {
        },

        createAttribute: function ( name, value, type, setterName ) {
            var attr, proto, attributes = this.attributes;

            if ( !name || value === undefined || !type ) {
                return null;
            }

            // Setting the attribute type
            if ( typeof type === 'string' ) {
                if ( attrTypes.hasOwnProperty( type ) ) {
                    type = attrTypes[type];
                } else {
                    console.error( "Got unknown type for attribute", name, ". Setting type to None." );
                    type = attrTypes['none'];
                }
            } else if ( typeof type !== 'number' ) {
                console.error( "Got unknown type for attribute", name, ". Setting type to None." );
                type = attrTypes['none'];
            }

            // Parsing attribute name to make comparing easier
            name = namespace.Attribute.parseName( name );

            if(typeof setterName !== "string"){
                setterName = name;
            }

            // Storing attribute by name
            if ( !attributes.hasOwnProperty( name ) ) {
                attr = new namespace.Attribute( name, value, type, setterName );
                attributes[name] = attr;
            } else {
                return attributes[name];
            }

            // Defining setters and getters for attribute
            proto = Object.getPrototypeOf( this );
            if ( !proto.hasOwnProperty( setterName ) ) {
                console.log( "Creating attribute",name, "for", this.id );
                Object.defineProperty( proto, setterName, {
                    set: (function ( val ) {
                        //console.log( "Setting attribute", name, "to", val );
                        var attribute, attributes = this.attributes;
                        if ( attributes.hasOwnProperty( name ) ) {
                            attribute = attributes[name];
                            attribute.updateValue( val );
                            this.onAttributeUpdated( attribute );
                        }

                    }),
                    get: (function () {
                        var attributes = this.attributes;
                        if ( attributes.hasOwnProperty( name ) ) {
                            //console.log( "Attribute", name, "has value:" );
                            return attributes[name]['val'];
                        }
                        return false;
                    })
                } );
            }

            return attr;

        },

        addAttribute: function ( id, data ) {
            /*if ( !this.attributes.hasOwnProperty( id ) ) {
             var val = data['val'], name = data['name'];

             if ( val && name && id ) {
             var attr = new namespace.Attribute( name, val, data['typeId'] );

             if ( attr ) {
             this.attributes[id] = attr;
             this.onAttributeUpdated( this.attributes[id], 0 );
             }
             }
             }*/
        },

        updateAttribute: function ( id, data ) {
            var map = this.attributeMap, attributes, val, attrName;

            if ( !id || !data ) {
                return;
            }

            val = data['val'];

            if ( map.hasOwnProperty( id ) ) {
                attrName = map[id];
            } else {
                if ( data['name'] === undefined ) {
                    return;
                }
                attrName = namespace.Attribute.parseName( data['name'] );
                attributes = this.attributes;

                if ( attributes.hasOwnProperty( attrName ) ) {
                    map[id] = attributes[attrName].setter;
                } else {
                    return;
                }
            }

            this[attrName] = val;

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
