// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * @author Toni Dahl
 */


(function ( namespace, undefined ) {

    var MsgSerializer, util;

    util = namespace.util;

    MsgSerializer = namespace.MsgSerializer = function ( framework, type ) {

        var types = {
            json: {parser: parseJson, serializer: serializeToJson},
            knet: {parser: parseKNetData, serializer: serializeToKNet}
        };

        if(!types.hasOwnProperty(type)){
            throw Error(["MsgSerializer:", "Message type:", type, "not supported"]);
        }

        function parseMessage( data ){
            return types[type].parser(data);

        }

        function serializeData ( event, data ){
            return types[type].serializer(event, data);
        }


        function parseJson( data ){
            data = JSON.parse( data );

            if(!data['event'] || data['data']){
                return false;
            }

            return data;
        }

        function serializeToJson( event, data ){

            var entityId = data['entId'];


            return '{"event":' + event+ ', "data":' +
                '{"entityId":'+this.parent.id+''+
                ',"attrs":{'+
                '"'+this.id+'":{'+
                '"0":'+JSON.stringify(this.placeable.transform)+
                '}'+
                '}'+
                '}'+
            '}';

        }

        function parseKNetData ( data ){

        }

        function serializeToKNet ( data ){

        }

    };


}( window['webtundra'] = window['webtundra'] || {} ));