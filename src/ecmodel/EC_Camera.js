// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, $, undefined ) {

    var ECCamera = namespace.ECCamera = function ( sceneMgr ) {

        namespace.Component.call( this, sceneMgr ); //Inherit component properties


    };
    namespace.storeComponent(15, ECCamera);

    ECAvatar.prototype = Object.create( namespace.Component.prototype );


}( window['webtundra'] = window['webtundra'] || {}, jQuery ));
