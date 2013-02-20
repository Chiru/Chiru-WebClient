// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, undefined ) {
    var Attribute, types, util;

    util = namespace.util;

    types = namespace.ENUMS.ATTRIBUTES = namespace.util.createEnum(
        'none', 'string', 'int', 'real', 'color', 'float2', 'float3', 'float4', 'bool', 'uint', 'quat',
        'assetref', 'assetreflist', 'entityref', 'qvariant', 'qvariantlist', 'transform', 'qpoint',
        'numattributetypes'
    );


    Attribute = namespace.Attribute = function ( name, value, type ) {

        type = type || -1;

        this.type = parseInt( type, 10 );

        this.name = name.replace( /\s/g, '' ).toLowerCase();
        this.val = Attribute.parse( value, this.type );

    };

    Attribute.parse = function ( value, type ) {
        var val = value;

        if ( value /*&& typeof value === "string"*/ ) {

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
                val = value.split( / / ).map( parseFloat );
                break;

                // Boolean
            case types.bool:
                val = value === 'true';
                break;

                // Transform
            case types.transform:
                val = value.split( /,/ ).map( parseFloat );
                break;

            case types.string:
            case types.assetref:
                val = value;
                break;

            case types.assetreflist:
                val = value.split( /;/ );
                break;
            }
        }

        return val;
    };

    Attribute.prototype.update = function ( value ) {
        var val = Attribute.parse( value, this.type );

        if ( val !== undefined ) {
            // Just hacky Transform update test

            if ( this.type === types.transform ) {
                for ( var i = val.length; i--; ) {
                    this.val[i] = val[i];
                }
            }
        }
    };

    Attribute.prototype.copyValue = function ( attr ) {
        var value = attr.val;

        if ( value !== undefined && this.type === attr.type ) {

            if ( value instanceof Array && this.val instanceof Array ) {
                util.extend( this.val, value );
            } else {
                this.val = value;
            }
        }
    };

    Attribute.prototype.copy = function ( attr ) {
        if ( attr instanceof namespace.Attribute ) {
            this.type = attr.type;
            this.name = attr.name;
            this.copyValue( attr );
        }
    };


}( window['webtundra'] = window['webtundra'] || {} ));
