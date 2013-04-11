// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * @author Toni Dahl
 */


(function ( namespace, undefined ) {
    var ECScript, util;

    util = namespace.util;


    ECScript = namespace.ECScript = function ( framework ) {

        namespace.Component.call( this, framework ); //Inherit component properties

        this.createAttribute( "scriptref", [], 'assetreflist', "scriptRef" );
        this.createAttribute( "runonload", false, 'bool', "runOnLoad" );
        this.createAttribute( "runmode", 2, 'int', "runMode" );
        this.createAttribute( "scriptapplicationname", "", 'string', "appName" );
        this.createAttribute( "scriptclassname", "", 'string', "className" );

        this.scriptLoaded = new namespace.Signal();


    };

    namespace.storeComponent( 5, "EC_Script", ECScript );

    ECScript.prototype = util.extend( Object.create( namespace.Component.prototype ),
        {

            onParentAdded: function (ent){

            },
            onAttributeUpdated: function (attr) {
                if(attr['name'] === "scriptref"){

                }

            }
        }
    );


}( window['webtundra'] = window['webtundra'] || {} ));
