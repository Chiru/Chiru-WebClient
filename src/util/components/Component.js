(function ( namespace, $, undefined ) {

    var Component = namespace.Component = function ( assetMgr ) {


        this.meshChanged = new Signal();
        this.materialChanged = new Signal();
        this.placeable = null;
        this.parent = null;
        this.castShadows = false;
        this.meshRef = null;
        this.meshMaterial = null;
        this.attributes = {};

    };



}( window.webnaali = window.webnaali || {}, jQuery ));
