


function plane(orbit){
	this.orbit = orbit;
	this.state = 0;
}

plane.prototype.fly = function(first_argument) {
	// body...
};

plane.prototype.stop = function(first_argument) {
	// body...
};

plane.prototype.charge = function(first_argument) {
	// body...
};

plane.prototype.destory = function(first_argument) {
	// body...
};

plane.prototype.method_name = function(first_argument) {
	// body...
};
plane.prototype.MediatorRecive = function(message) {
	// body...
};



var planes = {
	planelist:[],

	createPlane: function (orbit) {
		this.planelist.push(new plane(orbit));
	},
}

var commander ={
	planelist:[],
	createPlane:function (orbit) {
		planes.createPlane(orbit);
	},
	fly:function(orbit){
		
	}
}


function init(){

	
}

window.onload = function(){
	init();
}