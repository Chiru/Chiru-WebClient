// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * @author Toni Dahl
 */


(function ( namespace, undefined ) {
    var ECAvatar, util;

    util = namespace.util;


    ECAvatar = namespace.ECAvatar = function ( sceneMgr ) {

        namespace.Component.call( this, sceneMgr ); //Inherit component properties

        this.createAttribute("appearanceref", "default_avatar.avatar", 'assetref', "appearanceRef");

        this.mesh = sceneMgr.ecManager.createComponent("EC_Mesh");
        this.defaultPath = "/default_assets/models/";




    };

    namespace.storeComponent( 1, "EC_Avatar", ECAvatar );

    ECAvatar.prototype = util.extend( Object.create( namespace.Component.prototype ),
        {

            onParentAdded: function (ent){
                this.setupAppearance();


            },
            onAttributeUpdated: function (attr) {
                if(attr['name'] === "appearanceref"){

                    // We are not using a default avatar distributed with the web client, so we assume the custom avatar
                    // is located in the scene folder
                    if(this.appearanceRef !== "default_avatar.avatar"){
                        this.defaulPath = "";
                    }
                }

            },

            setupAppearance: function(){
                var mesh = this.mesh;

                mesh.storage = this.defaultPath;
                mesh.meshRef = this.appearanceRef;
                this.parent.addComponent(mesh, -100);


            },
            onMeshLoaded: function(){
                this.setupAvatar();
            },

            setupAvatar: function() {

            }



        }
    );


}( window['webtundra'] = window['webtundra'] || {} ));
