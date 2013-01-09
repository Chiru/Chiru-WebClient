(function ( namespace, $, undefined ) {

    var Entity = namespace.Entity = function ( assetMgr ) {
        this.components = {};
        this.componentAdded = new Signal();
        this.componentRemoved = new Signal();

    };

    Entity.prototype.getComponent = function ( typeId ) {
        if ( Object.keys( this.components ).length !== 0 ) {

            for ( var id in this.components ) {
                if ( this.components.hasOwnProperty( id ) && this.components[id].typeId === typeId ) {
                    return this.components[id];
                }
            }
        }

        return false;
    };

    Entity.prototype.getComponentById = function( id ) {
        if (this.components.hasOwnProperty(id)) {
            return this.components[id];
        }
        return false;
    };

    Entity.prototype.addComponent = function ( component ) {

        component.setParentEnt(this);

        if ( component.typeId !== undefined ) {
            if ( !this.components.hasOwnProperty(component.id) ) {
                this.components[component.id] = component;
                this.componentAdded.dispatch( component );
            }
        }



    };

    Entity.prototype.removeComponent = function ( component ) {
        this.componentRemoved.dispatch ( component );
    };




}( window.webnaali = window.webnaali || {}, jQuery ));
