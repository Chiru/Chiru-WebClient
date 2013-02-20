// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, undefined ) {

    var ECName = namespace.ECName = function ( sceneMgr ) {

        namespace.Component.call( this, sceneMgr ); //Inherit component properties

        this.name = null;
        this.description = null;

    };

    namespace.storeComponent( 26, "EC_Name", ECName );

    ECName.prototype = Object.create( namespace.Component.prototype );

    ECName.prototype.onAttributeUpdated = function ( attr, state ) {
        switch (attr['name']) {
        case 'name':
            this.name = attr['val'].toLowerCase();
            break;
        case 'description':
            this.description = attr['val'];
            break;
        }

    };

    ECName.prototype.onParentAdded = function ( parent ) {
        if (parent instanceof namespace.Entity && typeof this.name === 'string'){
            parent.name = this.name;
        }
    };


}( window['webtundra'] = window['webtundra'] || {} ));
