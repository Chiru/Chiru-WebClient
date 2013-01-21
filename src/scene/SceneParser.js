// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, $, undefined ) {

    var SceneParser = namespace.SceneParser = function ( ecModel ) {

        this.ecModel = ecModel;
        this.parser = this.initParser();

    };

    SceneParser.prototype.initParser = function () {
        var parser, xhttp;

        if ( window.DOMParser !== undefined ) {
            parser = function ( xml ) {
                return ( new window.DOMParser() ).parseFromString( xml, "text/xml" );
            };
        } else if ( window.ActiveXObject !== undefined &&
            new window.ActiveXObject( "Microsoft.XMLDOM" ) ) {
            parser = function ( xml ) {
                var xmlDoc = new window.ActiveXObject( "Microsoft.XMLDOM" );
                xmlDoc.async = "false";
                xmlDoc.loadXML( xml );
                return xmlDoc;
            };
        } else {
            throw new Error( "No XML parser found" );
        }


        if ( window.XMLHttpRequest ) {
            xhttp = new XMLHttpRequest();
        } else {    // IE 5/6
            xhttp = new ActiveXObject( "Microsoft.XMLHTTP" );
        }

        // Temporarilly loading static xml
        xhttp.overrideMimeType( 'text/xml' );

        xhttp.open( "GET", "scenes/avatar/scene.txml", false );
        xhttp.send( null );
        parser = xhttp.responseXML;
        console.log( parser );
        return parser;
    };

    SceneParser.prototype.parse = function ( xml ) {

        var entities = this.parser.getElementsByTagName( "entity" ),
            i, j, k, entity, id, components,
            type, attributes, attribute, name, value, ECEnt, ECComp;


        for ( i = 0; i < entities.length; i++ ) {
            entity = entities[i];
            id = entity.getAttribute( "id" );

            ECEnt = new this.ecModel.Entity( id );
            this.ecModel.addEntity(ECEnt);

            components = entity.getElementsByTagName( "component" );

            for ( j = 0; j < components.length; j++ ) {
                type = components[j].getAttribute( "type" );

                attributes = components[j].getElementsByTagName( "attribute" );


                ECComp = new this.ecModel.Component(type);

                for ( k = 0; k < attributes.length; k++ ) {
                    attribute = attributes[k];

                    name = attribute.getAttribute( "name" );
                    value = attribute.getAttribute( "value" );

                    ECComp.addAttribute(name, value);

                }

                this.ecModel.addComponent(ECComp, id);

            }
        }

        return this.ecModel;
    };

}( window['webtundra'] = window['webtundra'] || {}, jQuery ));