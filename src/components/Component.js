(function ( namespace, $, undefined ) {

    /**
     * Component parent constructor
     *
     * @constructor
     * @name Component
     * @type Function
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


    Component.prototype.onParentAdded = function ( parent ) {
    };
    Component.prototype.onAttributeUpdated = function ( attr, state ) {
    };

    Component.prototype.parseAttrVal = function ( value, type ) {
        var val = '';
        if (value) {

            switch (type) {
                // Int
            case 2:
            case 9:
                val = parseInt( value, 10 );
                break;
                // Boolean
            case 8:
                val = value === 'true';
                break;
                // Transform
            case 16:
                val = value.split(/,/).map(parseFloat);
                break;
            default:
                val = value;
                break;

            }
        }

        return val;
    };

    Component.prototype.cleanAttribute = function ( attr ) {
        var name = attr['name'],
            typeId = parseInt(attr['typeId'], 10 ) || -1 ,
            val = this.parseAttrVal(attr['val'], typeId);

        name = name.replace( /\s/g, '' ).toLowerCase();

        return {name: name, val: val, typeId: typeId};

    };

    Component.prototype.addAttribute = function ( id, data ) {
        if ( !this.attributes.hasOwnProperty( id ) ) {
            if ( data['val'] && data['name'] && id ) {
                var attr = this.cleanAttribute( data );
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
            parsed = this.parseAttrVal(val, this.attributes[id]['typeId']);
            for (var i = parsed.length; i--;) {
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
