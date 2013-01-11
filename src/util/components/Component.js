(function ( namespace, $, undefined ) {

    var Component = namespace.Component = function ( ) {

        this.id = null;
        this.parent = null;
        this.attributes = {};
        this.name = '';
        this.typeId = null;
        this.typeName = null;


    };



    Component.prototype.getAttribute = function ( name ) {
        for(var id in this.attributes) {
            if(this.attributes[id].name === name) {
                return this.attributes[id];
            }
        }
        return false;

    };

    Component.prototype.setParentEnt = function ( parent ) {
        if ( parent ) {
            this.parent = parent;
        }
    };

}( window.webnaali = window.webnaali || {}, jQuery ));
