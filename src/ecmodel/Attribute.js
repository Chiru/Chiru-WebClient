// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, undefined ) {

    var types = namespace.ENUMS.ATTRIBUTES = namespace.util.createEnum(
        'none', 'string', 'int', 'real', 'color', 'float2', 'float3', 'float4', 'bool', 'uint', 'quat',
        'assetref', 'assetreflist', 'entityref', 'qvariant', 'qvariantlist', 'transform', 'qpoint',
        'numattributetypes'
    );


    var Attribute = namespace.Attribute = function ( name, value, type ) {

        type = type || -1;

        this.type = parseInt( type, 10 );

        this.name = name.replace( /\s/g, '' ).toLowerCase();
        this.val = Attribute.parse( value, this.type );

    };

    Attribute.parse = function ( value, type ) {
        var val = value;

        if ( value !== null /*&& typeof value === "string"*/) {

            switch (type) {
                // Int
            case types.real:
            case types.int:
            case types.uint:
                val = parseInt( value, 10 );
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
            default:
                val = null;
                break;

            }
        }

        return val;
    };

    Attribute.prototype.update = function ( value ) {
        var val = Attribute.parse( value, this.type );

        if ( val !== null ) {
            // Just hacky Transform update test

            if ( this.type === types.transform ) {
                for ( var i = val.length; i--; ) {
                    this.val[i] = val[i];
                }
            }
        }
    };


}( window['webtundra'] = window['webtundra'] || {} ));
