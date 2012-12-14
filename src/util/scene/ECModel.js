var ECModel = function ( assetManager ) {

    this.entities = {};
    this.components = {};
    this.assetManager = assetManager;

};

ECModel.prototype = {
    meshAdded: new Signal(),

    //Defines a new entity object
    Entity: function ( id ) {
        this.id = id;
        this.components = {};
    },

    Component: function ( type, parent ) {
        this.type = type;
        this.parent = parent;

        this.addAttribute = function ( name, value ) {
            if (name !== undefined && name !== '' && value !== undefined) {
                this[name] = value;
            }
        };
    },
    addComponent: function ( component, entId ) {
        var entity = this.entities[entId]
        component.parent = entId;

        console.log(entity)
        if (entity !== undefined) {
            if (!entity.components.hasOwnProperty(component.type)) {
                entity.components[component.type] = component;
                this.componentAdded(component);
            }
        }
    },
    componentAdded: function ( component ) {
        var that = this;

        switch ( component.type ) {
            case 'EC_Mesh':
            {
                var trans;
                console.log('ADDED EC MESH!');

                this.assetManager.requestAsset(component['Mesh ref']).add(function ( asset ) {

                    trans = component.Transform.split(',');
                    for (var i = trans.length; i--;) trans[i] = Number(trans[i]);

                    asset.position.set(trans[0], trans[1], trans[2]);
                    asset.rotation.set(trans[3] * Math.PI / 180, trans[4] * Math.PI / 180, trans[5] * Math.PI / 180);
                    asset.scale.set(trans[6], trans[7], trans[8]);

                    trans = that.entities[component.parent].components['EC_Placeable'].Transform.split(',')
                    for (var i = trans.length; i--;) trans[i] = Number(trans[i]);

                    asset.position.set(asset.position.x + trans[0], asset.position.y + trans[1], asset.position.z + trans[2]);
                    asset.rotation.set(asset.rotation.x + trans[3] * Math.PI / 180, asset.rotation.y + trans[4] * Math.PI / 180, asset.rotation.z + trans[5] * Math.PI / 180);
                    asset.scale.set(asset.scale.x * trans[6], asset.scale.y * trans[7], asset.scale.z * trans[8]);


                    component.mesh = asset;
                    console.log(component.mesh)

                    that.meshAdded.dispatch(component)

                })
                break;
            }
            case 'EC_Placeable':
            {
                console.log('ADDED EC PLACEABLE');
                break;
            }
            case 'EC_RigidBody':
            {
                console.log('ADDED EC RigidBody');
                break;
            }
        }
    },


    //Adds a custom component to component types
    customComponent: function ( component ) {

        if (component.type !== undefined) {
            if (!this.components.hasOwnProperty(component.type)) {
                this.components[component.type] = component;
            }
        }
    },


    addEntity: function ( entity ) {
        var id = entity.id;
        console.log(id);
        if (!this.entities.hasOwnProperty(id)) {
            this.entities[id] = entity;
        }
    },

    removeEntity: function ( id ) {
        //TODO: Remove from scene and from hierarchy
    }
}


/*
 function setAttr(params) {
 var id = params['id'];
 var component = params['component'];

 //console.log(id + ' SETTING ' + component + ' ' + JSON.stringify(params))
 var comp;

 for (comp in entities[id].components) {
 if (entities[id].components[comp].componentName == component) {
 //console.log('FOUND corresponding component')

 //Joins componenst. A bit silly... (this comment came
 //second in the World's most useless comments in the world
 //competition of 2011

 jQuery.extend(entities[id].components[comp], params);
 if (component == 'EC_Placeable') {
 //console.log('IS PLACEABLE')
 for (child in scene.children) {
 var collada = scene.children[child];
 if (collada.getId() == id) {
 var transform = params['Transform'];
 var x = transform[0];
 var y = transform[2];
 var z = -transform[1];
 var rotx = transform[3] * Math.PI / 180;
 var roty = transform[4] * Math.PI / 180;
 var rotz = transform[5] * Math.PI / 180;

 collada.setLocX(x);
 collada.setLocY(y);
 collada.setLocZ(z);
 collada.setRotX(rotx + 3 * Math.PI / 2);
 collada.setRotY(roty);
 collada.setRotZ(rotz - 3 * Math.PI / 2);

 if (id == myid) {
 // sync Camera
 camera.setLoc(x, y + 1.5, z);
 camera.setRot(rotx, rotz - Math.PI / 2, roty);
 }
 }
 }
 }
 }
 }
 }

 function getAttr(params) {
 var id = params["id"];
 var component = params["component"];
 var keys = params["keys"];

 var values = []
 for (comp in entities[id].components) {
 if (entities[id].components[comp].componentName == component) {
 for (key in keys) {
 values.push(entities[id].components[comp][keys[key]]);
 }
 }
 }
 return values
 }



 for (component in data[id]) {
 //console.log(component)
 if (component == 'EC_Placeable') {
 //console.log('PLACE');
 addComponent({id: id,
 component: component,
 transform: data[id][component]['Transform'].split(',')});
 }  else if (component == 'EC_Mesh') {
 //console.log('MESH');
 addComponent({id: id,
 component: component,
 url: data[id][component]['Mesh ref']});
 } else if (component == 'EC_Avatar') {
 //console.log('AVATAR');
 addComponent({id: id,
 component: component});
 }
 }
 }
 }
 */