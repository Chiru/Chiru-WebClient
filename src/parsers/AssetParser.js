// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * @author Toni Dahl
 */

(function ( namespace, undefined ) {

    var util = namespace.util;

    var AssetParser = namespace.AssetParser = function (meshType, assetManager) {
        var type, parsers, textureTypes,
            parseMesh, parseMaterial, parseTexture;

        type = meshType || 'ogre';

        parsers = {
            'ogre': new namespace.OgreXMLParser(assetManager),
            'collada': THREE.ColladaLoader
        };

        parseMesh = (function () {
            var parseFunc, parser;

            function parseMesh( data, name, requestUrl ) {
                if ( !data ) {
                    console.warn( "AssetParser: No mesh data given. Ignoring mesh:", name );
                    return false;
                }

                requestUrl = requestUrl || '';

                return parseFunc( data, name, requestUrl );
            }

            if ( type === 'ogre' ) {
                parseFunc = function ( data, name, requestUrl ) {
                    var request, result, usesMaterials, dispatchMaterial,  geometryGroup,
                        i;

                    usesMaterials = function ( el ) {
                        return el.materialRef;
                    };

                    dispatchMaterial = function ( mat ){
                        this.dispatch( mat );
                    };

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

                    geometryGroup = result.geometryGroup;
                    if ( geometryGroup ) {
                        //Requesting material files if some submeshes use materials
                        if(geometryGroup.some(usesMaterials)){
                            result.hasMaterials = true;

                            for ( i = geometryGroup.length; i--; ) {

                                if ( geometryGroup[i].materialFileRef ) {
                                    request = assetManager.requestAsset( geometryGroup[i].materialFileRef, 'material' );
                                } else {
                                    request = assetManager.requestAsset( name, 'material' );
                                }

                                if ( request ) {
                                    (function ( signal, request ) {
                                        request.add( dispatchMaterial, signal );
                                    }( result.materialReady, request ));
                                }
                            }
                        }
                    }

                    return result;
                };

            } else if ( type === 'collada' ) {
                parseFunc = function ( data, name, requestUrl ) {
                    var group = [];

                    parser = new parsers[type]().parse;
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

            parser = parsers['ogre'].parseMaterial;

            try {
                return parser( data );
            } catch (e) {
                console.error( "AssetParser: Error while parsing material", requestUrl, e.stack );
                return false;
            }

        };

        parseTexture = function(data, name, requestUrl ){
        var type = name.split('.' ).pop(), image, texture;

                if(type === 'dds'){
                    image = THREE.ImageUtils.parseDDS( data.response, true );


                    if(image.format === null){
                        return false;
                    }

                    texture = new THREE.CompressedTexture();
                    texture.name = name;
                    texture.minFilter = texture.magFilter = THREE.LinearFilter;
                    texture.wrapS = THREE.RepeatWrapping;
                    texture.wrapT = THREE.RepeatWrapping;
                    texture.repeat.x = 1.0;
                    texture.repeat.y = 1.0;
                    texture.flipY = false;
                    texture.format = image.format;
                    texture.mipmaps = image.mipmaps;
                    texture.image.width = image.width;
                    texture.image.height = image.height;
                    texture.generateMipmaps = false;
                    texture.mapping = new THREE.UVMapping();

                    texture.needsUpdate = true;

                } else {
                    texture = new THREE.Texture();
                    texture.name = name;
                    texture.image = data;
                    texture.sourceFile = requestUrl;
                    texture.mapping = new THREE.UVMapping();
                    texture.needsUpdate = true;
                }



            return texture;
        };


        return {
            parseMesh: parseMesh,
            parseMaterial: parseMaterial,
            parseTexture: parseTexture
        };

    };


}( window['webtundra'] = window['webtundra'] || {} ));