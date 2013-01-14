(function ( namespace, $, undefined ) {

    var ECPlaceable = namespace.ECPlaceable = function ( sceneMgr ) {

        namespace.Component.call(this, sceneMgr); //Inherit component properties

        // ECPlaceable specific properties


    };


    //Inherit component prototype methods
    ECPlaceable.prototype = Object.create(namespace.Component.prototype);



}( window.webnaali = window.webnaali || {}, jQuery ));
