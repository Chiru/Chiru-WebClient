(function ( namespace, undefined ) {

    var util = namespace.util = (function () {


        return {
            toType: (function ( global ) {
                return function ( obj ) {
                    if ( obj === global ) {
                        return "global";
                    }
                    return ({}).toString.call( obj ).match( /\s([a-z|A-Z]+)/ )[1].toLowerCase();
                };
            })( this ),

            createEnum: (function () {
                function assign( name, i ) {
                    this[name] = i;
                }

                var forEach = [].forEach,
                    freeze = Object.freeze || function ( o ) {
                        return o;
                    };

                return function () {
                    var e = {};
                    forEach.call( arguments, assign, e );
                    return freeze( e );
                };
            }()),

            log: function ( msg ) {
                    var str, el;
                    if ( typeof(msg) === 'string' ) {
                        str = msg;
                    } else if ( typeof(msg) === 'object' ) {
                        str = JSON.stringify(msg);
                    }else {
                        str = "ERROR: Use Strings or Objects with log().";
                    }
                    el = document.getElementById( "log" );
                    if ( el !== null ) {
                        el.innerHTML +=
                            "&nbsp[" + new Date().toTimeString().replace( /.*(\d{2}:\d{2}:\d{2}).*/, "$1" ) + "] " + str + "<br>";
                        el.scrollTop = el.scrollHeight;
                    } else {
                        console.log( msg );
                    }
                }
        };
    }());


}( window['webtundra'] = window['webtundra'] || {} ));