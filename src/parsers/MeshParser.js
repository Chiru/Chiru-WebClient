// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * @author Toni Dahl
 */

(function ( namespace, undefined ) {
    var MeshParser = namespace.MeshParser = function (meshType) {
        var type, parser, parseResult;

        type = meshType || 'ogre';

        function parseMesh( data, name, meshGroup, requestUrl ) {
            if ( !data ) {
                console.warn( "AssetParser: No mesh data given. Ignoring mesh:", name );
                return false;
            }

            requestUrl = requestUrl || '';

            if ( !(meshGroup instanceof Array) ) {
                meshGroup = [];
            }

            if ( type === 'ogre' ) {
                parser = namespace.OgreXMLParser;
                parseResult = parser.parseMeshXML( data );

                if ( parseResult ) {
                    for ( var i = 0; i < parseResult.length; i++ ) {
                        meshGroup.push( [parseResult[i], new THREE.MeshBasicMaterial()] );
                    }
                }

            } else if ( type === 'collada' ) {
                parser = new THREE.ColladaLoader().parse;
                parseResult = parser( data, undefined, requestUrl ).scene;

                parseResult.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        meshGroup.push( [child.geometry.clone(), child.material.clone()] );
                    }
                } );
            }

            return meshGroup;
        }

        function parseMaterial( data, name, materialGroup, requestUrl ){
            if ( !data ) {
                console.warn( "AssetParser: No material data given. Ignoring material:", name );
                return false;
            }

            requestUrl = requestUrl || '';

            if ( !(materialGroup instanceof Array) ) {
                materialGroup = {};
            }

            parser = namespace.OgreXMLParser.parseMaterial;

            parseResult = parser(data);



            return parseResult;
        }

        return {
            parseMesh: parseMesh,
            parseMaterial: parseMaterial
        };

    };


}( window['webtundra'] = window['webtundra'] || {} ));