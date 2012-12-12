// parseUri 1.2.2
// (c) Steven Levithan <stevenlevithan.com>
// MIT License

function parseUri (str) {
    var	o   = parseUri.options,
        m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
        uri = {},
        i   = 14;

    while (i--) uri[o.key[i]] = m[i] || "";

    uri[o.q.name] = {};
    uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
        if ($1) uri[o.q.name][$1] = $2;
    });

    return uri;
}

parseUri.options = {
    strictMode: false,
    key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
    q:   {
        name:   "queryKey",
        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
    },
    parser: {
        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
        loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    }
};

// Gets the url from browser's address-bar and parses it
function parseUrl( url ) {
    var parsed = parseUri( url );

    //Parsing ip and port from address bar (uses ?ip=IP&port=PORT)
    if ( parsed.queryKey ) {
        var keys = parsed.queryKey;
        console.log( parsed );
        if ( keys.ip )
            _connection.ip = keys.ip;

        if ( keys.port )
            _connection.port = keys.port;

        //For testing
        if ( keys.mobile )
            window.mobile = keys.mobile === '1';

        if ( keys.url )
            _connection.customUrl = keys.url;
    }
}

// Does changes to url in browser address bar
function insertToUrl( key, value ) {
    key = encodeURIComponent( key );
    value = encodeURIComponent( value );

    var kvp = window.location.search.substr( 1 ).split( '&' );
    if ( kvp == '' ) {
        window.history.replaceState( 'Object', 'Title', '?' + key + '=' + value )

    } else {
        var i = kvp.length;
        var x;
        while ( i-- ) {
            x = kvp[i].split( '=' );

            if ( x[0] === key ) {
                x[1] = value;
                kvp[i] = x.join( '=' );
                break;
            }
        }

        if ( i < 0 ) {
            kvp[kvp.length] = [key, value].join( '=' );
        }

        window.history.replaceState( 'Object', 'Title', '?' + kvp.join( '&' ) )
    }
}



// Parses remote storage url
function parseStorageUrl( url ) {
    var parsed = parseUri( url );

    //Adding trailing slash to directory path if it is missing
    if ( parsed.directory.indexOf( '/', parsed.directory.length - 1 ) === -1 )
        parsed.directory += '/';

    // Setting up hardcoded proxy for demo stuff
    var proxy = "chiru.cie.fi:8000/";
    if ( _connection.useProxy )
        parsed.host = proxy + "?" + parsed.host;

    _connection.storageUrl = "http://" + parsed['host'] + parsed.directory;

}