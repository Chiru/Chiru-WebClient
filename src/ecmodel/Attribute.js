// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, undefined ) {
    var Attribute, types, util;

    util = namespace.util;

    types = namespace.ENUMS.ATTRIBUTES = namespace.util.createEnum(
        'none',             // 0
        'string',           // 1
        'int',              // 2
        'real',             // 3
        'color',            // 4
        'float2',           // 5
        'float3',           // 6
        'float4',           // 7
        'bool',             // 8
        'uint',             // 9
        'quat',             // 10
        'assetref',         // 11
        'assetreflist',     // 12
        'entityref',        // 13
        'qvariant',         // 14
        'qvariantlist',     // 15
        'transform',        // 16
        'qpoint',           // 17
        'numattributetypes' // 18
    );


    Attribute = namespace.Attribute = function ( name, value, type, setterName ) {

        type = type || -1;

        this.type = parseInt( type, 10 );

        this.name = Attribute.parseName( name );
        this.val = Attribute.parse( value, this.type );

        this.setter = setterName || this.name;

    };

    Attribute.parse = function ( value, type ) {
        var val = null;

        if ( value !== undefined/*&& typeof value === "string"*/ ) {

            switch (type) {
                // Int
            case types.real:
            case types.int:
            case types.uint:
                val = Number( value ); //Returns NaN if no legal number representation can be found
                break;

            case types.float3:
            case types.float4:
            case types.quat:
            case types.color:
                if ( typeof value === 'string' ) {
                    val = value.split( / / ).map( parseFloat );
                } else if ( value instanceof Array ) {
                    val = value;
                } else {
                    val = [];
                }
                break;

                // Boolean
            case types.bool:
                if ( typeof value === 'string' ) {
                    val = value === 'true';
                } else if ( typeof value === 'boolean' ) {
                    val = value;
                } else {
                    val = false;
                }
                break;

                // Transform
            case types.transform:
                if ( typeof value === 'string' ) {

                    val = value.split( /,/ ).map( parseFloat );
                } else if ( value instanceof Array ) {
                    val = value;
                } else {
                    val = [];
                }
                break;

            case types.string:
            case types.assetref:
                if ( typeof value === 'string' ) {
                    val = value;
                }
                break;

            case types.assetreflist:
                if ( typeof value === 'string' ) {
                    val = value.split( /;/ );
                } else if ( value instanceof Array ) {
                    val = value;
                } else {
                    val = [];
                }
                break;
            }
        }

        return val;
    };

    Attribute.parseName = function ( name ) {
        return name.replace( /\s/g, '' ).toLowerCase();
    };


    Attribute.prototype = {
        update: function ( value ) {
            var val = Attribute.parse( value, this.type );

            if ( val !== undefined ) {
                // Just hacky Transform update test

                if ( this.type === types.transform ) {
                    for ( var i = val.length; i--; ) {
                        this.val[i] = val[i];
                    }
                }
            }
        },

        updateValue: function ( value ) {
            if ( value !== undefined ) {

                value = Attribute.parse(value, this.type);

                if(value === null) {
                    return;
                }

                if ( value instanceof Array && this.val instanceof Array ) {
                    util.extend( this.val, value );
                } else {
                    this.val = value;
                }
            }
        },

        copy: function ( attr ) {
            if ( attr instanceof namespace.Attribute ) {
                this.type = attr.type;
                this.name = attr.name;
                this.copyValue( attr );
            }
        }
    };


}( window['webtundra'] = window['webtundra'] || {} ));
