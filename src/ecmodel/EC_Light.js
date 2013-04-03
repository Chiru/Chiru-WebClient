// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * @author Toni Dahl
 */


(function ( namespace, undefined ) {

    var ECEnvironmentLight, ECLight, util;


    util = namespace.util;

    /**
     * ECEnvironmentLight constructor
     *
     * @constructor
     * @augments Component
     * @name ECEnvironmentLight
     * @type Function
     * @param {object} sceneMgr Pointer to scene manager.
     */

    ECEnvironmentLight = namespace.ECEnvironmentLight = function ( sceneMgr ) {
        //Inherit component properties
        namespace.Component.call( this, sceneMgr );

        // Default attributes
        this.createAttribute( "sunlightcolor", [0.639, 0.639, 0.639, 1.0], 'color', "sunColor" );
        this.createAttribute( "ambientlightcolor", [0.364, 0.364, 0.364, 1.0], 'color', "ambientColor" );
        this.createAttribute( "sunlightdirectionvector", [-1.0, -1.0, -1.0], 'float3', "sunDirection" );
        this.createAttribute( "sunlightcastshadows", false, 'bool', "sunCastShadows" );
        this.createAttribute( "brightness", 1, 'real' );

        // Properties
        this.sunLight = null;

    };

    namespace.storeComponent( 8, "EC_EnvironmentLight", ECEnvironmentLight );


    //Inherit component prototype methods
    ECEnvironmentLight.prototype = util.extend( Object.create( namespace.Component.prototype ),
        {

            onAttributeUpdated: function ( attr ) {
                var name = attr.name;

                    if ( name === 'sunlightcolor' || name === 'sunlightdirectionvector' || name === 'sunlightcastshadows' ||
                        name === 'brightness' ) {
                        this.updateSunLight();
                    } else if ( name === 'ambientlightcolor' ) {
                        this.updateAmbientLight();
                    }


            },

            onParentAdded: function ( parent ) {
                this.createSunLight();
                this.updateAmbientLight();
            },

            createSunLight: function () {
                var sunLight = this.sunLight, sceneManager = this.sceneManager;

                if ( sceneManager && !sunLight ) {
                    sunLight = this.sunLight = new THREE.DirectionalLight();
                    this.updateSunLight();
                    sceneManager.addToScene( sunLight );
                    sceneManager.addToScene( new THREE.DirectionalLightHelper(sunLight, 2.5) );

                }
            },

            updateSunLight: function () {
                var sunLight = this.sunLight, sunColor = this.sunColor,
                    dir = this.sunDirection;

                if ( sunLight ) {
                    sunLight.color.setRGB( sunColor[0], sunColor[1], sunColor[2] );
                    sunLight.intensity = this.brightness/2;

                    if ( this.sunCastShadows ) {
                        sunLight.castShadow = true;
                        sunLight.shadowCameraVisible = true;
                        sunLight.shadowCameraFar = 3500;
                        sunLight.shadowBias = -0.00022;
                        sunLight.shadowCameraNear = 200;
                        sunLight.shadowCameraFar = 10000;
                        sunLight.shadowCameraFov = 70;
                        sunLight.shadowDarkness = 0.35;
                        sunLight.shadowMapWidth = 2048;
                        sunLight.shadowMapHeight = 2048;
                        /*
                        sunLight.shadowCascade = false;
                        sunLight.shadowCascadeCount = 3;
                         sunLight.shadowCascadeNearZ = [ 0.9, 0.975, 1.000 ];
                         sunLight.shadowCascadeFarZ = [  0.9, 0.975, 1.000 ];
                         sunLight.shadowCascadeWidth = [ 2048, 2048, 2048 ];
                         sunLight.shadowCascadeHeight = [ 2048, 2048, 2048 ];
                         sunLight.shadowCascadeBias = [ -0.00022, -0.00022, -0.00022 ];
                        */


                    }
                    sunLight.position.set( -1000 * dir[0], -1000 * dir[1], -1000 * dir[2] );
                    sunLight.target.position.set( 0, 0, 0 );
                    //console.log( sunLight )
                }

            },

            removeSunLight: function () {
                var sunLight = this.sunLight, sceneManager = this.sceneManager;

                if ( sceneManager && sunLight ) {
                    sceneManager.remove( sunLight );
                    this.sunLight = null;
                }
            },


            updateAmbientLight: function () {
                var sceneManager = this.sceneManager, color = this.ambientColor;
                if ( sceneManager && color ) {
                    sceneManager.setAmbientLight( color );
                }

            }
        }
    );


    /**
     * ECLight constructor
     *
     * @constructor
     * @augments Component
     * @name ECLight
     * @type Function
     * @param {object} sceneMgr Pointer to scene manager.
     */

    var lightTypes = util.createEnum('LT_Point', 'LT_Spot', 'LT_Directional');

    ECLight = namespace.ECLight = function ( sceneMgr ) {
        //Inherit component properties
        namespace.Component.call( this, sceneMgr );



        this.createAttribute( "lighttype", lightTypes['LT_Point'], 'int', "lightType" );
        this.createAttribute( "diffusecolor", [1.0, 1.0, 1.0, 1.0], 'color', "diffuseColor" );
        this.createAttribute( "specularcolor", [0.0, 0.0, 0.0, 1.0], 'color', "specularColor" );
        this.createAttribute( "castshadows", false, 'bool', "castShadows" );
        this.createAttribute( "lightrange", 25.0, 'real', "lightRange" );
        this.createAttribute( "brightness", 1.0, 'real' );
        //this.createAttribute( "constantatten", 0.0, 'real', "constantAtten" );
        //this.createAttribute( "linearatten", 0.01, 'real', "linearAtten" );
        //this.createAttribute( "quadraticatten", 0.01, 'real', "quadraticAtten" );
        //this.createAttribute( "lightinnerangle", 30.0, 'real', "lightInnerAngle" );
        this.createAttribute( "lightouterangle", 40.0, 'real', "lightOuterAngle" );

        this.offsetNode = new THREE.Object3D();
        this.placeable = null;
        this.light = null;
        this.attached = false;

    };

    namespace.storeComponent( 16, "EC_Light", ECLight );

    //Inherit component prototype methods
    ECLight.prototype = util.extend( Object.create( namespace.Component.prototype ),
        {
            onAttributeUpdated: function ( attr ) {

            },

            onParentAdded: function ( parent ) {
                if(parent instanceof namespace.Entity){
                    this.parent.componentAdded.add( function ( c ) {
                        if ( c instanceof namespace.ECPlaceable ) {

                            console.log( "ECLight: Placeable added to parent entity" );
                            this.placeable = c;
                            this.setupLight();
                            this.attachLight();
                        }
                    }, this );
                }

            },
            attachLight: function(){
                var placeable = this.placeable, offsetNode = this.offsetNode, sceneNode;

                if ( this.attached || placeable === null ) {
                    return;
                }

                    sceneNode = placeable.getSceneNode();
                    if(sceneNode){
                        offsetNode.visible = placeable.visible;
                        sceneNode.add( offsetNode );
                        this.attached = true;
                    }

            },
            detachLight: function(){},
            setupLight: function(){
                var light, diffuse = this.diffuseColor, specular = this.specularColor;
                light = this.sceneManager.createLight(this.lightType);
                light.color.setRGB(diffuse[0], diffuse[1], diffuse[2]);
                light.distance = this.lightRange;
                light.intensity = this.brightness;

                if(lightTypes[this.lightType] === lightTypes['LT_Spot']){
                    light.castShadow = this.castShadows;
                    light.angle= (Math.PI/180) * this.lightOuterAngle;
                }

                this.light = light;
                this.offsetNode.add(light);

            }


        }
    );



}( window['webtundra'] = window['webtundra'] || {} ));
