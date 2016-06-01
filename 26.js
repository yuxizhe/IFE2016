


function plane(orbi){
	var obj={
		orbit : orbi,
		energy : 500,
		state : 0,
		command : {
			start: function () {
				if(obj.energy>0){
					obj.state = 1;
				}
			},
			stop:function () {
				obj.state = 0;
			}
		},
		status:{
			charge:function (num) {
				obj.energy += num;
				if(obj.energy>500){
					obj.energy = 500;
				}
			},
			consume:function(num){
				if(obj.state == 1){
					obj.energy -= num;
				}
				if (obj.energy <= 0) {
					obj.state = 0;
					obj.energy = 0;
				}
			},
		},
		radio:{
			
		}
	};
	return obj;
}
//对象的定义参考 贝加莱结构体的方式  command status ...




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