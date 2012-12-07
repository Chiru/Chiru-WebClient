var ECModel = function(){

    this.entities = {};
    this.components = {};

    //Initializes the default component types
    this.components.EC_Placeable = function (params) {
        this.name = 'EC_Placeable';
        this.parent = params.id;
        //console.log(params)
        this.transform = params.transform;
    };

    this.components.EC_Mesh = function (params) {
        this.name = 'EC_Mesh';
        this.parent = params.id;
        this.data = params.data;
        //FIXME

    };
};

//Defines a new entity object
ECModel.prototype.Entity = function (id) {
    this.id = id;
    this.components = [];

    this.addComponent = function (component) {
        this.components.push(component);
    };
};

//Adds a custom component to component types
ECModel.prototype.addComponent = function (typeName, component){
    this.components[typeName] = component;
};


ECModel.prototype.addEntity = function (params){
    var id = params.id;
    if (!this.entities[id]){
        this.entities[id] = new this.Entity(id);
    }
    //TODO: Add to scene?
};

ECModel.prototype.removeEntity = function (id) {
    //TODO: Remove from scene hierarchy
    delete this.entities[id];
};

//Adds a new component to entity
ECModel.prototype.addComponentToEnt = function (params) {
    var id = params.id;
    var newComponent = params.component;


    // WS does not have any fancy sync state stuff so if we get an
    // addcomponent message for an entity that hasn't been created yet
    // we'll just add a new entity. This is not the way to go.
    if (!this.entities[id]){
        this.addEntity(params);
    }

    if (this.components[newComponent]) {
        //TODO: check that entity does not already have a mesh. Should be done smarter
        for (var i = 0; i < this.entities[id].components.length; i++) {
            if (this.entities[id].components[i].name === newComponent) {
                return;
            }
        }
        var comp = new this.components[newComponent] (params);
        this.entities[id].addComponent(comp);

    }
};


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

 function loadScene(params) {
 var xmlstring = params['xml'];
 var scenexml = (new DOMParser()).parseFromString(xmlstring, "text/xml");

 var data = {};

 var loadentities = scenexml.getElementsByTagName("entity")

 for (e = 0; e < loadentities.length; e++) {
 var entity = loadentities[e];

 var id = entity.getAttribute("id");
 data[id] = {};

 components = entity.getElementsByTagName("component");

 for (c = 0; c < components.length; c++) {
 var component = components[c].getAttribute("type")

 data[id][component] = {};
 var attributes = components[c].getElementsByTagName("attribute");

 for (a = 0; a < attributes.length; a++) {
 var attribute = attributes[a];

 var name = attribute.getAttribute("name");
 var value = attribute.getAttribute("value");
 data[id][component][name] = value

 }
 }
 }

 //Add/update components
 // Just use EC_Placeable and EC_MESH for time being
 for (id in data) {
 //add entity (if not in scene)
 if (!entities[id]) {
 addEntity({id: id});
 } else {
 console.log('ERROR: ' + id + ' already in scene!');
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