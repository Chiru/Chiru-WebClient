// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, undefined ) {

    /**
     * ECEnvironmentLight constructor
     *
     * @constructor
     * @augments Component
     * @name ECEnvironmentLight
     * @type Function
     * @param {object} sceneMgr Pointer to scene manager.
     */

    var ECEnvironmentLight = namespace.ECEnvironmentLight = function ( sceneMgr ) {
        //Inherit component properties
        namespace.Component.call( this, sceneMgr );

        this.sunColor = [163, 163, 163];
        this.ambientColor = [93, 93, 93, 1];
        this.sunDirection = [-1, -1, -1];
        this.sunCastShadows = false;
        this.sunBrightness = 1.0;
        this.sunLight = null;

    };

    namespace.storeComponent(8, "EC_Light", ECEnvironmentLight);

    //Inherit component prototype methods
    ECEnvironmentLight.prototype = Object.create( namespace.Component.prototype );


    ECEnvironmentLight.prototype.onAttributeUpdated = function ( attr, state ) {
        var name = attr.name;
        if ( state === 0 ) {
            if ( name === 'sunlightcolor' ) {

                this.sunColor = attr;
            } else if ( name === 'ambientlightcolor' ) {
                this.ambientColor = attr;

            } else if ( name === 'sunlightdirectionvector' ) {
                this.sunDirection = attr;

            } else if ( name === 'sunlightcastshadows' ) {
                this.sunCastShadows = attr;

            } else if ( name === 'brightness' ) {
                this.sunBrightness = attr;

            }
        }
        if ( state === 1 ) {
            if ( name === 'sunlightcolor' || name === 'sunlightdirectionvector' || name === 'sunlightcastshadows' ||
                name === 'brightness' ) {
                this.updateSunLight();
            } else if ( name === 'ambientlightcolor' ) {
                this.updateAmbientLight();
            }
        }

    };

    ECEnvironmentLight.prototype.onParentAdded = function ( parent ) {
        this.createSunLight();
        this.updateAmbientLight();
    };

    ECEnvironmentLight.prototype.createSunLight = function () {
        var sunLight = this.sunLight, sceneManager = this.sceneManager;

        if ( sceneManager && !sunLight ) {
            sunLight = this.sunLight = new THREE.DirectionalLight();
            this.updateSunLight();
            sceneManager.addToScene( sunLight );

        }
    };


    ECEnvironmentLight.prototype.updateSunLight = function () {
        var sunLight = this.sunLight, sunColor = this.sunColor['val'],
            dir = this.sunDirection['val'];

        if ( sunLight ) {
            sunLight.color.setRGB( sunColor[0], sunColor[1], sunColor[2] );
            //sunLight.color.multiplyScalar(this.sunBrightness['val']);
            if ( this.sunCastShadows['val'] ) {
                sunLight.castShadow = true;
                //sunLight.shadowCameraVisible = true;
                sunLight.shadowDarkness = 0.6;
                sunLight.shadowBias = 0.000065;
                sunLight.shadowCascade = false;
                sunLight.shadowCascadeCount = 3;
                sunLight.shadowCascadeNearZ = [ -1.000, 0.9, 0.975 ];
                sunLight.shadowCascadeFarZ = [  0.9, 0.975, 1.000 ];
                sunLight.shadowCascadeWidth = [ 1024, 1024, 1024 ];
                sunLight.shadowCascadeHeight = [ 1024, 1024, 1024 ];
                sunLight.shadowCascadeBias = [ 0.00005, 0.000065, 0.000065 ];
                //sunLight.shadowCascadeOffset.set( 0, 0, -5 );
                sunLight.shadowMapWidth = 1024;
                sunLight.shadowMapHeight = 1024;
            }
            sunLight.position.set( -1000 * dir[0], -1000 * dir[1], -1000 * dir[2] );
            sunLight.target.position.set( 0, 0, 0 );
            //console.log( sunLight )
        }

    };

    ECEnvironmentLight.prototype.removeSunLight = function () {
        var sunLight = this.sunLight, sceneManager = this.sceneManager;

        if ( sceneManager && sunLight ) {
            sceneManager.remove( sunLight );
            sunLight = null;
        }
    };


    ECEnvironmentLight.prototype.updateAmbientLight = function () {
        var sceneManager = this.sceneManager, color = this.ambientColor['val'];
        if ( sceneManager && color ) {
            sceneManager.setAmbientLight( color );
        }

    };


    /**
     * ECLight constructor
     *
     * @constructor
     * @augments Component
     * @name ECLight
     * @type Function
     * @param {object} sceneMgr Pointer to scene manager.
     */

    var ECLight = namespace.ECLight = function ( sceneMgr ) {
        //Inherit component properties
        namespace.Component.call( this, sceneMgr );


    };

    //Inherit component prototype methods
    ECLight.prototype = Object.create( namespace.Component.prototype );


}( window['webtundra'] = window['webtundra'] || {} ));
