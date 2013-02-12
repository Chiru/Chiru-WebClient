// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, $, undefined ) {

    var ECAvatar = namespace.ECAvatar = function ( sceneMgr ) {

        namespace.Component.call( this, sceneMgr ); //Inherit component properties


    };
    namespace.storeComponent(1, ECAvatar);

    ECAvatar.prototype = Object.create( namespace.Component.prototype );


}( window['webtundra'] = window['webtundra'] || {}, jQuery ));
