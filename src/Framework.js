// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * @author Toni Dahl
 */

(function ( namespace, undefined ) {

    var Framework, util;

    util = namespace.util;


    Framework = namespace.Framework = {

        renderer: null,
        sceneManager: null,
        connection: null,
        inputManager: null,
        syncManager: null,
        assetManager: null,

        options: {renderer: {}, scene: {}, connection: {}, assets: {}, sync: {}},

        createRenderer: function ( options ) {
            this.renderer = new namespace.Renderer( this, options );
            return this.renderer;

        },

        createScene: function ( options ) {
            this.sceneManager = new namespace.SceneManager( this, options );

            return this.sceneManager;

        },

        createConnection: function ( options ) {
            this.connection = new namespace.WSManager( this, options );

            return this.connection;

        },

        createAssetManager: function ( options ) {
            this.assetManager = new namespace.AssetManager( this, options );

            return this.assetManager;
        },

        createInputManager: function ( options ) {
            this.inputManager = new namespace.InputManager( this, options );

            return this.inputManager;
        },

        createSyncManager: function ( options ) {
            this.syncManager = new namespace.SyncManager( this, options );

            return this.syncManager;
        },

        setOptions: function ( options, type ) {
            if ( this.options.hasOwnProperty( type ) ) {
                util.extend( this.options[type], options );
                return true;
            }
            return false;
        },

        start: function () {
            if ( !this.connection ) {
                try {
                    this.createConnection( this.options['connection'] );
                } catch (e) {
                    console.error( "Framework: Could not create WebSocket Manager:", e.stack );
                }
            }

            if ( !this.sceneManager ) {
                try {
                    this.createScene( this.options['scene'] );
                } catch (e) {
                    console.error( "Framework: Could not create Scene Manager:", e.stack );
                }
            }

            if ( !this.renderer ) {
                try {
                    this.createRenderer( this.options['renderer'] );
                } catch (e) {
                    console.error( "Framework: Could not create Renderer:", e.stack );
                }
            }

            if ( !this.inputManager ) {
                try {
                    this.createInputManager();
                } catch (e) {
                    console.error( "Framework: Could not create Input Manager:", e.stack );
                }
            }
            if ( !this.syncManager ) {
                try {
                    this.createSyncManager( this.options['sync'] );
                } catch (e) {
                    console.error( "Framework: Could not create SyncManager:", e.stack );
                }
            }

            if ( !this.assetManager ) {
                try {
                    this.createAssetManager( this.options['assets'] );
                } catch (e) {
                    console.error( "Framework: Could not create AssetManager:", e.stack );
                }
            }

            this.sceneManager.init();
            this.renderer.init();
            this.connection.connect();

        }
    };


}( window['webtundra'] = window['webtundra'] || {} ));
