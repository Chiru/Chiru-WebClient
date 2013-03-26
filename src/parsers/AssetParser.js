// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * @author Toni Dahl
 */

(function ( namespace, undefined ) {

    var util = namespace.util;

    var AssetParser = namespace.AssetParser = function (meshType, assetManager) {
        var type, parsers,
            parseMesh, parseMaterial;

        type = meshType || 'ogre';

        parsers = {
            'ogre': new namespace.OgreXMLParser(assetManager),
            'collada': THREE.ColladaLoader
        };

        parseMesh = (function () {
            var parseFunc, parser;

            function parseMesh( data, name, requestUrl ) {
                var meshGroup;

                if ( !data ) {
                    console.warn( "AssetParser: No mesh data given. Ignoring mesh:", name );
                    return false;
                }

                requestUrl = requestUrl || '';

                return parseFunc( data, name, requestUrl );
            }

            if ( type === 'ogre' ) {

                function hasMaterialRef( el ) {
                    return el.materialRef;
                }

                parseFunc = function ( data, name, requestUrl ) {
                    var request, result;

                    parser = parsers[type];

                    try {
                        result = {
                            geometryGroup: parser.parseMeshXML( data ),
                            materialReady: new namespace.Signal(),
                            hasMaterials: false
                        };
                    } catch (e) {
                        console.error( "AssetParser: Error while parsing Ogre XML mesh", requestUrl, e.stack );
                        return false;
                    }

                    if ( result.geometryGroup ) {

                        //Requesting material file if some submeshes use materials
                        if(result.geometryGroup.some(hasMaterialRef)){
                            result.hasMaterials = true;

                            request = assetManager.requestAsset( name, 'material');
                            if(request){
                                request.add(function(matGroup){
                                    result.materialReady.dispatch(matGroup);
                                });
                            }
                        }
                    }

                    return result;
                };

            } else if ( type === 'collada' ) {
                parseFunc = function ( data, name, requestUrl ) {
                    var group = [];

                    parser = new parsers[type].parse;
                    parseResult = parser( data, undefined, requestUrl ).scene;

                    parseResult.traverse( function ( child ) {
                        if ( child instanceof THREE.Mesh ) {
                            group.push( [child.geometry.clone(), child.material.clone()] );
                        }
                    } );

                    return group;
                };
            }

            return parseMesh;


        }());

        parseMaterial = function ( data, name, requestUrl ) {
            var parser;

            if ( !data ) {
                console.warn( "AssetParser: No material data given. Ignoring material:", name );
                return false;
            }

            requestUrl = requestUrl || '';

            try {
                parser = parsers['ogre'].parseMaterial;
            } catch (e) {
                console.error( "AssetParser: Error while parsing material", requestUrl, e );
                return false;
            }


            return parser( data );
        };


        return {
            parseMesh: parseMesh,
            parseMaterial: parseMaterial
        };

    };


}( window['webtundra'] = window['webtundra'] || {} ));