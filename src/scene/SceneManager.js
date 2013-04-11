// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * @author Toni Dahl
 */


(function ( namespace, undefined ) {

    // Util shortcuts
    var extend = namespace.util.extend,
        innerWidth = namespace.util.innerWidth,
        innerHeight = namespace.util.innerHeight;


    /**
     * Creates a scene manager object
     *
     * @constructor
     * @name SceneManager
     * @type Function
     * @param {object} container Container DOM element for WebGL renderer.
     */

    var SceneManager = namespace.SceneManager = function ( framework, options ) {

        var defaults = {},
            opts;

        // Setting options
        opts = extend( {}, defaults, options );

        this.controls = null;
        this.scene = new THREE.Scene();
        this.skyBoxScene = new THREE.Scene();

        this.ecManager = null;

        this.controlManager = null;


        this.update = function ( delta ) {
            if(this.controls){
                this.controls.update( delta );
            }

        };

        this.addToScene = function ( object ) {
            this.scene.add( object );
            //console.log( object )

        };

        this.removeFromScene = function ( object ) {

            this.scene.remove( object );

        };

        this.getSceneObject = function ( callBack, scene ) {
            if ( typeof callBack !== "function" ) {
                return false;
            }

            if ( !scene ) {
                scene = this.scene;
            }

            var children = scene.children,
                childLength = scene.children.length,
                obj, i;

            if ( children ) {
                for ( i = childLength; i--; ) {
                    obj = children[i];
                    if ( callBack( obj ) ) {
                        return obj;
                    }
                }
            }
            return false;
        };

        this.init = function(){
            this.ecManager = new namespace.ECManager( framework );
            this.controlManager = new namespace.Controls( framework );
        };


        //TODO: Novel scene management methods to improve performance
    };






}( window['webtundra'] = window['webtundra'] || {} ));


