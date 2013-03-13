// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * @author Toni Dahl
 */

(function ( namespace, undefined ) {

    var WSManager = namespace.WSManager = function ( host, port, options ) {
        var defaults = {
                reconnectInterval: 8000,
                timeout: 8000,
                allowReconnect: true
            }, settings,

            extend = namespace.util.extend;

        settings = extend( {}, defaults, options );

        this.ws = null;
        this.url = "ws://" + host + ":" + port;
        this.host = host;
        this.port = port;

        this.reconnecting = false;
        this.connectTimer = null;
        this.reconnectTimer = null;
        this.reconnAttempt = 0;

        this.allowReconnect = settings.allowReconnect;

        //Reconnection interval time (milliseconds)
        this.reconnectInterval = settings.reconnectInterval;

        //Connection attempt timeout (milliseconds)
        this.timeout = settings.timeout;

        //Storage for bound callback events
        this.callbacks = {};

        // Hack for firefox
        window.addEventListener( "beforeunload", function () {
            this.ws.onclose = function () {
            }; // disable onclose handler
            this.ws.close();
            this.ws = null;
        }.bind( this ), false );

    };


    WSManager.prototype.connect = function () {
        this.ws = null;

        try {
            if ( window.WebSocket !== undefined ) {
                this.ws = new window.WebSocket( this.url );
            } else if ( window.MozWebSocket !== undefined ) {
                this.ws = new window.MozWebSocket( this.url );
            } else {
                alert( "This Browser does not support WebSockets.  Use newest version of Google Chrome, FireFox or Opera. " );
                return;
            }
        } catch (e) {
            console.error( 'ERROR:', e.stack );
            return;
        }

        //Timeout for connection attempt NOTE: Disabled due abnormal behaviour with Firefox on Android
        /*
         this.connectTimer = setTimeout(function() {
         if(this.ws != null)
         if(this.ws.readyState != this.ws.OPEN)
         this.ws.close()
         }.bind(this), this.timeout)
         */

        this.ws.onopen = function () {
            //clearTimeout(this.connectTimer)
            //this.connectTimer = null

            clearTimeout( this.reconnectTimer );
            this.reconnectTimer = null;

            this.reconnAttempt = 0;
            this.reconnecting = false;

            this.triggerEvent( "connected", this.host + ":" + this.port );

        }.bind( this );

        this.ws.onmessage = function ( evt ) {
            //console.log("Got msg: " + evt.data);
            this.parseMessage( evt.data );
        }.bind( this );

        this.ws.onclose = function ( evt ) {
            //clearTimeout(this.connectTimer)
            //this.connectTimer = null

            clearTimeout( this.reconnectTimer );
            this.reconnectTimer = null;

            if ( !this.reconnecting ) {
                var reason = "failed";
                if ( evt.wasClean ) {
                    reason = "closed";
                }

                this.triggerEvent( "disconnected", {url: this.host + ":" + this.port, reason: reason, code: evt.code} );
            }

            // Reconnect if the  connection was not closed cleanly (network error/abnormal server close etc.)
            if ( !evt.wasClean && this.allowReconnect ) {
                this.reconnecting = true;

                console.log( "Reconnecting in " + this.reconnectInterval / 1000 + " seconds..." );

                this.reconnectTimer = setTimeout( function () {
                    if ( this.ws !== null ) {
                        if ( this.ws.readyState !== this.ws.OPEN || this.ws.readyState !== this.ws.CONNECTING ) {
                            this.reconnAttempt = this.reconnAttempt + 1;
                            this.triggerEvent( "reconnecting", {host: this.url, attempt: this.reconnAttempt} );

                            this.connect( this.url );
                        }
                    }
                }.bind( this ), this.reconnectInterval );
            }

        }.bind( this );

        this.ws.onerror = function ( e ) {
            this.triggerEvent( "error", e );
        };
    };

    WSManager.prototype.stopReconnect = function () {
        if ( this.reconnectTimer !== null ) {
            clearTimeout( this.reconnectTimer );
        }

        if ( this.connectTimer !== null ) {
            clearTimeout( this.connectTimer );
        }
        this.reconnecting = false;
    };

    WSManager.prototype.parseMessage = function ( message ) {
        var parsed = JSON.parse( message );
        this.processEvent( parsed );
    };

    WSManager.prototype.processEvent = function ( json ) {
        if ( json['event'] ) {
            //console.log("Got event: "+json['event'])
            if ( json['data'] ) {

                // Triggering the event
                this.triggerEvent( json['event'], json['data']);
            }
        }
    };

//A function for binding custom event callbacks for Connection
    WSManager.prototype.bindEvent = function ( eventName, callback ) {
        this.callbacks[eventName] = this.callbacks[eventName] || [];
        this.callbacks[eventName].push( callback );
        return this;
    };

//Triggers the bound event and gives it some data as argument if it has a callback function
    WSManager.prototype.triggerEvent = function ( eventName, message ) {
        var eventChain = this.callbacks[eventName], i;
        if ( eventChain === undefined ) {
            console.log( "Error: Received an unknown event: " + eventName );
            return;
        }
        for ( i = 0; i < eventChain.length; i++ ) {
            eventChain[i]( message );
        }
    };

}( window['webtundra'] = window['webtundra'] || {} ));