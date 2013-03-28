// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * Gui binding API
 *
 * @author Toni Dahl
 */

(function ( namespace, undefined ) {
    var util, GUI,
        GUIComponent, ProgressIndicator;

    util = namespace.util;


    /**
     *
     * @param context
     * @constructor
     */
    GUIComponent = function ( context ) {
        this.context = context instanceof window.Element ? context : null;

    };

    GUIComponent.prototype = {
        /**
         *
         */
        hide: function () {
            if ( this.context instanceof window.Element ) {
                this.context.style.visibility = 'hidden';
            }
        },
        /**
         *
         */
        show: function () {
            if ( this.context instanceof window.Element ) {
                this.context.style.visibility = 'visible';
            }

        }
    };


    /**
     *
     * @param options
     * @constructor
     */
    ProgressIndicator = function ( options ) {

        var defaults = {
                context: null,
                total: 0
            },
            opts;

        // Setting options
        opts = util.extend( {}, defaults, options );

        GUIComponent.call( this, opts.context );

        this.percent = 0;
        this.progress = 0;
        this.total = typeof opts.total === "number" ? opts.total:0;
    };

    ProgressIndicator.prototype = util.extend( Object.create( GUIComponent.prototype ),
        {
            /**
             *
             * @param progress
             */
            updateProgress: function ( progress ) {
                var progressEl;

                if ( progress && typeof progress === "number" ) {
                    this.progress = progress;
                } else {
                    this.progress = this.progress + 1;
                }

                if ( this.total !== 0 ) {
                    this.percent = Math.round( this.progress / this.total * 100 );
                }

                if ( this.context ) {
                    progressEl = this.context.querySelector("#progress");
                    if ( progressEl) {
                        progressEl.innerHTML = this.progress + "/" +this.total + " (" +this.percent +  " %)";
                    }
                    if ( this.percent === 100 ) {
                        this.hide();
                    }
                }
            },

            /**
             *
             * @param total
             */
            setTotal: function ( total ) {
                if ( typeof total === "number" ) {
                    this.total = total;
                } else {
                    this.total = this.total + 1;
                }
            }
        } );

    GUI = namespace.GUI = (function () {

        var guiObjects = {}, components = {};


        // Storing constructors of the used GUI Components
        components['progressIndicator'] = ProgressIndicator;


        // API

        function createGUIComponent( type, options ) {
            var loaderObj;

            if ( typeof type !== "string" ) {
                return false;
            }

            if ( guiObjects.hasOwnProperty( type ) || !components.hasOwnProperty( type ) ) {
                return false;
            }

            loaderObj = new components[type]( options );
            loaderObj.show();

            guiObjects['loader'] = loaderObj;
            console.warn( loaderObj )

            return loaderObj;
        }

        function getGUIComponent( type ) {
            if ( typeof type === "string" ) {
                if ( guiObjects.hasOwnProperty( type ) ) {
                    return guiObjects[type];
                } else {
                    return false;
                }
            }
            return false;
        }

        return {
            createGUIComponent: createGUIComponent,
            getGUIComponent: getGUIComponent

        };

    }());

}( window['webtundra'] = window['webtundra'] || {} ));


