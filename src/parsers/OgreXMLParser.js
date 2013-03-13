// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * @author Toni Dahl
 */

(function ( namespace, undefined ) {

    var OgreXMLParser = namespace['OgreXMLParser'] = (function () {
        var meshParser, materialParser;

        // OgreMesh parser

        meshParser = (function () {

            function parseMeshXML( xml ) {

                var root, result = [], geomGroup = [], submeshes, nSubmeshes, submesh,
                    tGeom, i;

                root = xml.documentElement;

                if ( root.tagName !== "mesh" ) {
                    throw new Error( ["OgreXMLParser: Invalid root node."] );
                }

                submeshes = getElements( "//submeshes/submesh", xml, root );
                nSubmeshes = submeshes.snapshotLength;

                for ( i = nSubmeshes; i--; ) {
                    submesh = submeshes.snapshotItem( i );
                    tGeom = new THREE.Geometry();

                    parseMesh( submesh, xml, tGeom );
                    console.log( tGeom );

                    result.push( tGeom );
                }

                return result;

            }

            function parseMesh( element, xml, wrapper ) {
                var elAttributes = element.attributes;

                if ( elAttributes.length !== 4 ) {
                    throw new Error( ["OgreXMLParser: <submesh> had invalid amount of attributes."] );
                }
                if ( elAttributes[3].nodeValue !== "triangle_list" ) {
                    throw new Error( ["OgreXMLParser: Unsupported operation type wanted for submesh. Use 'triangle_list' for now."] );
                }

                parseFaces( element, xml, wrapper );
                parseGeometry( element, xml, wrapper );

            }


            function parseFaces( element, xml, wrapper ) {
                var faces, nFaces, face, faceDim, i;

                faces = getElements( "//faces/face", xml, element );
                nFaces = faces.snapshotLength;

                for ( i = nFaces; i--; ) {
                    face = faces.snapshotItem( i ).attributes;
                    faceDim = face.length;
                    if ( faceDim !== 3 ) {
                        throw new Error( ["OgreXMLParser: Error in a face."] );
                    }

                    wrapper.faces[i] = new THREE.Face3( parseInt( face[0].nodeValue, 10 ), parseInt( face[1].nodeValue, 10 ),
                        parseInt( face[2].nodeValue, 10 ) );

                }

            }

            function parseGeometry( element, xml, wrapper ) {
                var geometry, vertexCount, vertexBuffer, bufferAttrs, vertices, i,
                    hasPositions, hasNormals, hasDiffColours, hasSpecColours,
                    texChannels, texCoordDim,
                    position, normal, texCoord, vertex;

                geometry = element.getElementsByTagName( "geometry" )[0];
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
                        texCoordDim = parseInt( vertexBuffer.getAttribute( 'texture_coord_dimensions_0' ), 10 );
                        if ( texCoordDim !== 2 ) {
                            throw new Error( ["OgreXMLParser: Only 2-dimensional uv-coordinates for texture channels are supported."] );
                        }
                    } else {
                        throw new Error( ["OgreXMLParser: Texture coordinate dimensions are needed if texture channel is defined."] );
                    }
                    if ( texChannels > 1 ) {
                        throw new Error( ["OgreXMLParser: One texture channel per vertexbuffer is supported."] );
                    }
                }

                vertices = getElements( "//vertex", xml, vertexBuffer );

                for ( i = vertexCount; i--; ) {
                    vertex = vertices.snapshotItem( i );

                    if ( hasPositions ) {
                        position = vertex.getElementsByTagName( "position" )[0].attributes;
                        wrapper.vertices[i] = new THREE.Vector3( parseFloat( position[0].nodeValue ), parseFloat( position[1].nodeValue ),
                            parseFloat( position[2].nodeValue ) );
                    }
                    if ( hasNormals ) {
                        normal = vertex.getElementsByTagName( "normal" )[0].attributes;
                        wrapper.faceVertexUvs[0][i] = new THREE.Vector2( parseFloat( normal[0].nodeValue ),
                            parseFloat( normal[1].nodeValue ) );
                    }

                }
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
                var lines, nLines, line, matContext, waitingOpenBrace, i, material;
                material = new THREE.MeshPhongMaterial();

                waitingOpenBrace = false;

                matContext = {
                    section: 'none',
                    material: material
                };

                //Remove leading spaces from string at each line
                matString = matString.replace( /^ +|\s+$/gm, '' );

                //Get script lines
                lines = matString.split( '\n' );
                nLines = lines.length;

                console.log( lines );
                //Process lines
                for ( i = 0; i < nLines; i++ ) {
                    line = lines[i];

                    //Ignore empty lines and comment lines
                    if ( !line || line.indexOf( '//' ) !== -1 ) {
                        console.log("skipping line: "+line);
                        continue;
                    }

                    if ( waitingOpenBrace ) {
                        if ( line !== "{" ) {
                            console.log("OgreXMLParser: Expected a '{', but got:", line );
                        }
                        waitingOpenBrace = false;

                    } else {
                        waitingOpenBrace = parseMatScriptLine( line, matContext );
                    }


                }
                //console.log( matContext );

                delete matContext.material;

                return material;


            }

            function parseMatScriptLine( line, matContext ) {
                var section = matContext.section;
                switch (section) {
                case 'none':
                {
                    if ( line === '}' ) {
                        throw new Error( ["OgreXMLParser: Unexpected '}' at: " + section] );
                    } else {
                        return getSectionParser( line, section, matContext );
                    }
                }
                    break;

                case 'material':
                {

                    if ( line === '}' ) {
                        // End of material
                        console.log( "Material parsed" );
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
                        return true;
                    }
                } else {
                    throw new Error( ["OgreXMLParser: Unsupported material section: " + section] );
                }
            }

            function parseMaterial( line, matContext ) {
                console.log( "Parsing material root section..." );
                if ( line.length >= 2 ) {
                    matContext.material.name = line[1].replace( /\s+/g, '' );
                } else {
                    matContext.material.name = "unnamed";
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

                matContext.material.receiveShadow = shadowOn;

                return false;

            }

            function parseTechnique( line, matContext ) {
                console.log( "Parsing technique section..." );
                // Just changing section here
                matContext.section = 'technique';

                // Returning true because '{' will come later
                return true;
            }

            function parsePass( line, matContext ) {
                console.log( "Parsing pass section..." );
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
                            matContext.material.specular.setRGB( values[0], values[1], values[2] );

                        } else if ( parameter === "diffuse" ) {
                            matContext.material.color.setRGB( values[0], values[1], values[2] );

                        } else if ( parameter === "emissive" ) {
                            matContext.material.emissive.setRGB( values[0], values[1], values[2] );

                        } else if ( parameter === "ambient" ) {
                            matContext.material.ambient.setRGB( values[0], values[1], values[2] );
                        }
                    }
                }

                return false;
            }

            function parseTexUnit( line, matContext ) {
                console.log( "Parsing texture_unit section..." );
                // Just changing section here

                matContext.section = 'texture_unit';

                // Returning true because '{' will come later
                return true;
            }

            function parseTexParam( line, matContext ) {

                var parameter = line[0].replace( /\s+/g, '' );

                console.log( "Parsing texture param:", parameter );

                if ( parameter === "texture" ) {
                    if ( line.length >= 2 ) {
                        parseTexture( line[1], matContext );
                    }

                } else if ( parameter === "tex_address_mode" ) {

                } else if ( parameter === "scale" ) {

                } else if ( parameter === "colour_op" ) {

                }

                return false;

            }

            function parseTexture( textureRef, matContext ) {
                //TODO: Download and create texture
            }


            return parseMaterialScript;

        }());


        return {
            parseMeshXML: meshParser,
            parseMaterial: materialParser
        };

    }());
}( window['webtundra'] = window.webtundra || {} ));
