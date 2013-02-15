importScripts( 'OgreXMLParser.js' );

var parser;

self.onmessage = function ( e ) {
    if ( e.data ) {
        var type = e.data.type,
            url = e.data.url;

        if ( type && type === 'ogrexml' && url) {
            parser = new OgreXMLParser();
            parser.load(url);
            postMessage("Parsed.");
        }

    }
};