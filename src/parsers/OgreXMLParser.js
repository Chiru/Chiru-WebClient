// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * @author Toni Dahl
 */

(function ( namespace, undefined ) {

    var OgreXMLParser = namespace.OgreXMLParser = function (assetManager) {
        var meshParser, materialParser;

        // OgreMesh parser

        meshParser = (function () {

            function parseMeshXML( xml ) {

                var root, result = [], resultElement, submeshes, nSubmeshes, submesh, meshMatRef, matFile,
                    tGeom, sharedGeometry, sharedVertexData, i;

                root = xml.documentElement;

                if ( root.tagName !== "mesh" ) {
                    throw new Error( ["OgreXMLParser: Invalid root node."] );
                }

                sharedGeometry = getElements("//sharedgeometry", xml, root);
                if(sharedGeometry.snapshotLength > 0){
                    sharedVertexData = parseGeometry( sharedGeometry.snapshotItem(0), xml );
                }

                submeshes = getElements( "//submeshes/submesh", xml, root );
                nSubmeshes = submeshes.snapshotLength;

                for ( i = nSubmeshes; i--; ) {
                    resultElement = {};
                    submesh = submeshes.snapshotItem( i );
                    meshMatRef = submesh.getAttribute( "material" );

                    if(meshMatRef.indexOf('#') === -1){
                        matFile = meshMatRef;
                    }else{
                        matFile = null;
                    }

                    tGeom = new THREE.Geometry();

                    parseMesh( submesh, xml, sharedVertexData, tGeom );

                    tGeom.computeCentroids();
                    tGeom.computeFaceNormals();
                    if(tGeom.normals.length === 0){
                        tGeom.computeVertexNormals();
                    }


                    result.push( {geometry:tGeom, materialRef: meshMatRef, materialFileRef: matFile } );
                }

                return result;

            }

            function parseMesh( element, xml, sharedVertexData, geomObject ) {
                var elAttributes = element.attributes, faceData, vertexData, geometry;

                if ( elAttributes.length !== 4 ) {
                    throw new Error( ["OgreXMLParser: <submesh> had invalid amount of attributes."] );
                }
                if ( elAttributes[3].nodeValue !== "triangle_list" ) {
                    throw new Error( ["OgreXMLParser: Unsupported operation type wanted for submesh. Use 'triangle_list' for now."] );
                }

                faceData = parseFaces( element, xml );
                if(element.getAttribute( "usesharedvertices" ) === "true" && sharedVertexData){
                    vertexData = sharedVertexData;
                }else{
                    geometry = element.getElementsByTagName( "geometry" )[0];
                    vertexData = parseGeometry( geometry, xml );
                }


                applyValues(faceData, vertexData, geomObject );

            }


            function parseFaces( element, xml ) {
                var faces, nFaces, face, faceData, faceDim, i;

                faces = getElements( "faces/face", xml, element );
                nFaces = faces.snapshotLength;
                faceData = [];

                for ( i = nFaces; i--; ) {
                    face = faces.snapshotItem( i ).attributes;
                    faceDim = face.length;
                    if ( faceDim !== 3 ) {
                        throw new Error( ["OgreXMLParser: Error in a face."] );
                    }

                    faceData[i] = new THREE.Face3( parseInt( face[0].nodeValue, 10 ), parseInt( face[1].nodeValue, 10 ),
                        parseInt( face[2].nodeValue, 10 ) );
                }

                return {faceDimension: faceDim, faces: faceData};

            }

            function parseGeometry( geometry, xml ) {

                if(!geometry){
                    return false;
                }

                var vertexCount, vertexBuffer, bufferAttrs, vertices, i,
                    hasPositions, hasNormals, hasUvs, hasDiffColours, hasSpecColours,
                    texChannels, texCoordDim,
                    position, positions, normal, normals, uv, uvs, vertex, temp;

                vertexCount = parseInt( geometry.getAttribute( "vertexcount" ), 10 );
                vertexBuffer = geometry.getElementsByTagName( "vertexbuffer" )[0];

                hasPositions = vertexBuffer.hasAttribute( 'positions' ) &&
                    vertexBuffer.getAttribute( 'positions' ) === 'true';

                hasNormals = vertexBuffer.hasAttribute( 'normals' ) &&
                    vertexBuffer.getAttribute( 'normals' ) === 'true';

                hasDiffColours = vertexBuffer.hasAttribute( 'colours_diffuse' ) &&
                    vertexBuffer.getAttribute( 'colours_diffuse' ) === 'true';

                hasSpecColours = vertexBuffer.hasAttribute( 'colours_specular' ) &&
                    vertexBuffer.getAttribute( 'colours_specular' ) === 'true';

                if ( vertexBuffer.hasAttribute( 'texture_coords' ) ) {
                    texChannels = parseInt( vertexBuffer.getAttribute( 'texture_coords' ), 10 );
                    if ( vertexBuffer.hasAttribute( 'texture_coord_dimensions_0' ) ) {
                        temp = parseInt( vertexBuffer.getAttribute( 'texture_coord_dimensions_0' ), 10 );

                        //Checking if we have correct value for texture channel dimension
                        if( !temp ){
                            temp = vertexBuffer.getAttribute( 'texture_coord_dimensions_0' );
                            texCoordDim = parseInt(temp.substr(-1), 10); // Getting the last character of e.g. "float2"
                        }else{
                            texCoordDim = temp;
                        }
                        if ( texCoordDim !== 2 ) {
                            throw new Error( ["OgreXMLParser: Only 2-dimensional uv-coordinates for texture channels are supported."] );
                        }

                        hasUvs = true;
                    } else {
                        throw new Error( ["OgreXMLParser: Texture coordinate dimensions are needed if texture channel is defined."] );
                    }
                    if ( texChannels > 1 ) {
                        console.warn("OgreXMLParser: One texture channel per vertexbuffer is supported. Using the first channel." );
                    }
                }

                vertices = getElements( "vertex", xml, vertexBuffer );

                //Storages for vertex data
                positions = [];
                normals = [];
                uvs = [];

                // Getting vertex data
                for ( i = vertexCount; i--; ) {
                    vertex = vertices.snapshotItem( i );

                    if ( hasPositions ) {
                        position = vertex.getElementsByTagName( "position" )[0].attributes;
                        positions[i] = new THREE.Vector3( parseFloat( position[0].nodeValue ), parseFloat( position[1].nodeValue ),
                            parseFloat( position[2].nodeValue ) );
                    }
                    if ( hasNormals ) {
                        normal = vertex.getElementsByTagName( "normal" )[0].attributes;
                        normals[i] = new THREE.Vector3( parseFloat( normal[0].nodeValue ), parseFloat( normal[1].nodeValue ),
                            parseFloat( normal[2].nodeValue ) );
                    }
                    if(texCoordDim === 2){
                        uv = vertex.getElementsByTagName( "texcoord" )[0].attributes;
                        uvs[i] = new THREE.Vector2( parseFloat( uv[0].nodeValue ),
                            parseFloat( uv[1].nodeValue ) );
                    }

                }


                return {positions: positions, normals: normals, uvs: uvs, nVertices: vertexCount};

            }

            function applyValues( faceData, vertexData, geomObject ) {

                if ( !faceData || !vertexData ) {
                    return false;
                }

                var  nVertices = vertexData.nVertices, positions = vertexData.positions, normals = vertexData.normals,
                    hasNormals = normals.length === nVertices, uvs = vertexData.uvs, hasUVs = uvs.length === nVertices,
                    faces = faceData.faces, nFaces, i;

                if ( positions.length === nVertices ) {

                    for ( i = nVertices; i--; ) {
                        geomObject.vertices[i] = positions[i];

                        if ( hasNormals ) {
                            geomObject.normals[i] = normals[i];
                        }
                    }
                }else{
                    return false;
                }

                if ( faces ) {
                    nFaces = faces.length;
                    for ( i = nFaces; i--; ) {
                        geomObject.faces[i] = faces[i];
                    }

                    //Applying uvs to faces
                    if ( faceData.faceDimension === 3 ) {
                        for ( i = nFaces; i--; ) {
                            if(hasUVs){
                            geomObject.faceVertexUvs[0][i] = [uvs[faces[i].a],
                                                              uvs[faces[i].b],
                                                              uvs[faces[i].c]];
                            }
                            if(hasNormals){
                            faces[i].vertexNormals = [normals[faces[i].a],
                                                      normals[faces[i].b],
                                                      normals[faces[i].c]];
                            }
                        }
                    }
                }else{
                    return false;
                }

                return true;

            }


            function getElements( q, xml, node ) {

                return xml.evaluate( q, node, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null );

            }

            return parseMeshXML;

        }());


        // #####################################################################################################


        // Ogre material parser

        materialParser = (function () {
            var sectionParsers =
                {
                    none: {
                        material: parseMaterial

                    },
                    material: {
                        receive_shadows: parseReceiveShadows,
                        technique: parseTechnique

                    },
                    technique: {
                        pass: parsePass
                    },
                    pass: {
                        ambient: parsePassParam,
                        diffuse: parsePassParam,
                        specular: parsePassParam,
                        emissive: parsePassParam,
                        texture_unit: parseTexUnit
                    },
                    texture_unit: {
                        texture: parseTexParam,
                        tex_address_mode: parseTexParam,
                        scale: parseTexParam,
                        colour_op: parseTexParam
                    }

                },
                reflection =
                {
                    specular: 0,
                    diffuse: 1,
                    emissive: 2,
                    ambient: 3
                };

            function parseMaterialScript( matString ) {
                var lines, nLines, line, matContext,
                    i, materialGroup = {}, waitingOpenBrace = false;

                matContext = {
                    section: 'none',
                    materialProps: {},
                    matGroup: materialGroup,
                    textureLoaded: new namespace.Signal()
                };

                //Removing leading and trailing tabs and spaces from the string lines
                matString = matString.replace( /^[ \t\r]+|[ \t\r]+$/gm, '' );

                //Getting script lines
                lines = matString.split( '\n' );
                nLines = lines.length;

                //console.log( lines );

                //Processing lines
                for ( i = 0; i < nLines; i++ ) {

                    // Get line and remove extra space between items
                    line = lines[i].replace(/\s+/g,' ');

                    //Ignore empty lines and comment lines
                    if (!line || /^\s*$/.test(line)|| line.indexOf( '//' ) !== -1 ) {
                        //console.warn("OgreMaterialParser: skipping line: "+ i);
                        continue;
                    }

                    if ( waitingOpenBrace ) {
                        if ( line !== "{" ) {
                            console.warn("OgreMaterialParser: Expected a '{', but got:", line );
                        }
                        waitingOpenBrace = false;

                    } else {
                        waitingOpenBrace = parseMatScriptLine( line, matContext );
                    }

                }

                delete matContext.matGroup;

                return materialGroup;


            }

            function parseMatScriptLine( line, matContext ) {
                var section = matContext.section;
                switch (section) {
                case 'none':
                {
                    if ( line === '}' ) {
                        throw new Error( ["OgreMaterialParser: Unexpected '}' at: " + section] );
                    } else {
                        return getSectionParser( line, section, matContext );
                    }
                }
                    break;

                case 'material':
                {
                    if ( line === '}' ) {
                        // End of material
                        var props = matContext.materialProps, material;

                        material = matContext.matGroup[props.name] = new THREE.MeshPhongMaterial(props);

                        if(material.map){
                            // The usual case: Texture is loaded after material has been processed. Here we extract information
                            // from the texture and add correct properties to the material so the texture is rendered correctly
                            matContext.textureLoaded.addOnce(function(tex){
                                if(tex.format === THREE.RGBA_S3TC_DXT1_Format || tex.format === THREE.RGBA_S3TC_DXT3_Format ||
                                    tex.format === THREE.RGBA_S3TC_DXT5_Format){
                                    material.alphaTest = 0.5;
                                    material.transparent = true;
                                    //material.depthTest = false;
                                }
                            });
                        }

                        matContext.section = 'none';
                    } else {
                        return getSectionParser( line, section, matContext );
                    }
                }
                    break;
                case 'technique':
                {
                    if ( line === '}' ) {
                        // End of technique
                        matContext.section = 'material';

                    } else {
                        // find & invoke a parser
                        return getSectionParser( line, section, matContext );
                    }
                }
                    break;
                case 'pass':
                {
                    if ( line === '}' ) {
                        // End of pass
                        matContext.section = 'technique';

                    } else {
                        // find & invoke a parser
                        return getSectionParser( line, section, matContext );
                    }
                }
                    break;

                case 'texture_unit':
                {
                    if ( line === '}' ) {
                        // End of texture unit sectoin
                        matContext.section = 'pass';


                    } else {
                        // find & invoke a parser
                        return getSectionParser( line, section, matContext );
                    }
                }
                    break;

                }
                return false;

            }


            function getSectionParser( line, section, matContext ) {
                var splat = line.split( ' ' ), parserGroup;

                if ( sectionParsers.hasOwnProperty( section ) ) {
                    parserGroup = sectionParsers[section];

                    if ( parserGroup.hasOwnProperty( splat[0] ) ) {
                        return parserGroup[splat[0]]( splat, matContext );
                    } else {
                        return false;
                    }
                } else {
                    throw new Error( ["OgreMaterialParser: Unsupported material section: " + section] );
                }
            }

            function parseMaterial( line, matContext ) {
                //console.log( "Parsing material root section..." );

                if ( line.length >= 2 ) {
                    matContext.materialProps.name = line[1].replace( /\s+/g, '' );
                } else {
                    matContext.materialProps.name = "unnamed";
                }
                matContext.section = 'material';
                return true;
            }

            function parseReceiveShadows( line, matContext ) {
                var shadowOn = false;
                if ( line.length >= 2 ) {
                    if ( line[1].replace( /\s+/g, '' ) === 'on' ) {
                        shadowOn = true;
                    }
                }

                matContext.materialProps.receiveShadow = shadowOn;

                return false;

            }

            function parseTechnique( line, matContext ) {
                //console.log( "Parsing technique section..." );
                // Just changing section here
                matContext.section = 'technique';

                // Returning true because '{' will come later
                return true;
            }

            function parsePass( line, matContext ) {
                //console.log( "Parsing pass section..." );
                // Just changing section here

                matContext.section = 'pass';

                // Returning true because '{' will come later
                return true;
            }


            function parsePassParam( line, matContext ) {
                var parameter = line[0].replace( /\s+/g, '' ), values;

                if ( reflection.hasOwnProperty( parameter ) ) {
                    values = line.slice( 1 ).map( parseFloat );
                    if ( values.length >= 3 ) {

                        if ( parameter === "specular" ) {
                            matContext.materialProps.specular = new THREE.Color();
                            matContext.materialProps.specular.setRGB( values[0], values[1], values[2] );

                        } else if ( parameter === "diffuse" ) {
                            matContext.materialProps.color = new THREE.Color();
                            matContext.materialProps.color.setRGB( values[0], values[1], values[2] );

                        } else if ( parameter === "emissive" ) {
                            matContext.materialProps.emissive = new THREE.Color();
                            matContext.materialProps.emissive.setRGB( values[0], values[1], values[2] );

                        } else if ( parameter === "ambient" ) {
                            matContext.materialProps.ambient = new THREE.Color();
                            matContext.materialProps.ambient.setRGB( values[0], values[1], values[2] );
                        }
                    }
                }

                return false;
            }

            function parseTexUnit( line, matContext ) {
                //console.log( "Parsing texture_unit section..." );
                // Just changing section here

                matContext.section = 'texture_unit';

                // Returning true because '{' will come later
                return true;
            }

            function parseTexParam( line, matContext ) {

                var parameter = line[0].replace( /\s+/g, '' ), data;

                //console.log( "Parsing texture param:", parameter );

                if ( parameter === "texture" ) {
                    if ( line.length >= 2 ) {
                        data = line.slice(1, line.length ).join(" ");
                        data = encodeURIComponent(data);
                        parseTexture( data, matContext );
                    }

                } else if ( parameter === "tex_address_mode" ) {

                } else if ( parameter === "scale" ) {

                } else if ( parameter === "colour_op" ) {

                }

                return false;

            }

            function parseTexture( textureRef, matContext ) {
                var request = assetManager.requestAsset(textureRef, 'texture' ),
                    props = matContext.materialProps, map;

                map = props.map = new THREE.CompressedTexture();
                map.minFilter = map.magFilter = THREE.LinearFilter;
                map.wrapS = THREE.RepeatWrapping;
                map.wrapT = THREE.RepeatWrapping;
                map.repeat.x = 1.0;
                map.repeat.y = 1.0;
                map.flipY = false;

                if(request){
                        request.add( function ( tex ) {
                            if ( tex ) {
                                map.format = tex.format;
                                map.mipmaps = tex.mipmaps;
                                map.image.width = tex.width;
                                map.image.height = tex.height;
                                map.generateMipmaps = false;
                                map.mapping = new THREE.UVMapping();

                                // If texture is loaded before the material processing has been ended, add alpha properties to material props
                                if(map.format === THREE.RGBA_S3TC_DXT1_Format || map.format === THREE.RGBA_S3TC_DXT3_Format ||
                                    map.format === THREE.RGBA_S3TC_DXT5_Format){
                                    props.alphaTest = 0.5;
                                    props.transparent = true;
                                    //props.depthTest = false;
                                }
                                map.needsUpdate = true;

                                matContext.textureLoaded.dispatch(map);
                        }

                    });
                }
            }


            return parseMaterialScript;

        }());


        return {
            parseMeshXML: meshParser,
            parseMaterial: materialParser
        };

    };
}( window['webtundra'] = window.webtundra || {} ));
