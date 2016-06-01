


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
			receive:function (message) {
				if(obj.orbit != message.id){
					return;
				}
				switch(message.command){
					case 'start':
						obj.command.start();
						break;
					case 'stop':
						obj.command.stop();
						break;
				}
			}
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
	startRun: function(){
		setInterval(function () {
			for (var i = 0; i < this.planelist.length; i++) {
				
					this.planelist[i].status.charge(2);
					if(this.planelist[i].state == 1)
					this.planelist[i].status.consume(5);
				
			}
		},1000)
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