// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, $, undefined ) {

    /**
     * Component parent constructor
     *
     * @constructor
     * @name Component
     * @param {object} sceneMgr Pointer to scene manager.
     */

    var Component = namespace.Component = function ( sceneMgr ) {

        this.sceneManager = sceneMgr;
        this.assetManager = sceneMgr.assetManager;

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


    Component.prototype.onParentAdded = function ( parent ) {
    };

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

    Component.prototype.onAttributeUpdated = function ( attr, state ) {
    };

    Component.prototype.addAttribute = function ( id, data ) {
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
    };

    Component.prototype.updateAttribute = function ( id, attr ) {
        var val = attr['val'], typeId = attr['typeId'], parsed;

        if ( this.attributes.hasOwnProperty( id ) && val ) {
            parsed = namespace.Attribute.parse( val, this.attributes[id]['typeId'] );

            // Testing transform update (hacky)
            for ( var i = parsed.length; i--; ) {
                this.attributes[id]['val'][i] = parsed[i];
            }
            this.onAttributeUpdated( this.attributes[id], 1 );
        }
    };

    Component.prototype.getAttribute = function ( name ) {
        for ( var id in this.attributes ) {
            if ( this.attributes[id].name === name ) {
                return this.attributes[id]['val'];
            }
        }
        return false;

    };

    Component.prototype.setParentEnt = function ( parent ) {
        if ( parent ) {
            this.parent = parent;
            this.onParentAdded( this.parent );
        }
    };

}( window['webtundra'] = window['webtundra'] || {}, jQuery ));