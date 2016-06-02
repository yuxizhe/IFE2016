function $(id) {
	return document.getElementById(id);
}



function plane(orbi){
	var obj={
		orbit : orbi,
		energy : 500,
		state : 0,
		angle: 0,
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
			for (var i = 0; i < planes.planelist.length; i++) {
				
					planes.planelist[i].status.charge(2);
					document.getElementsByClassName("plane"+(planes.planelist[i].orbit))[0].innerHTML = planes.planelist[i].energy;

					if(planes.planelist[i].state == 1){
						planes.planelist[i].angle += 10%360;
						planes.planelist[i].status.consume(5);
						document.getElementsByClassName("plane"+(planes.planelist[i].orbit))[0].style.transform = "rotate(" + planes.planelist[i].angle + "deg)";	
					}
				
			}
		},1000)
	},
}

var commander ={
	planelist:[],
	createPlane:function (orbit) {
		planes.createPlane(orbit);
		var planeDiv = document.createElement('div');
		planeDiv.className = "plane"+orbit;
		planeDiv.innerHTML = '500';
		document.getElementsByClassName('plant')[0].appendChild(planeDiv);
	},
	fly:function(orbit){
		for (var i = 0; i < planes.planelist.length; i++) {
			planes.planelist[i].radio.receive({
				id:orbit,
				command: 'start'
				}
			)
		}
		
	},
	stop:function(orbit){
		for (var i = 0; i < planes.planelist.length; i++) {
			planes.planelist[i].radio.receive({
				id:orbit,
				command: 'stop'
			})
		}
	}
}

function getTime() {
    var date = new Date();
    var year = ("0000" + date.getFullYear()).substr(-4);
    var month = ("00" + (date.getMonth() + 1)).substr(-2);
    var day = ("00" + date.getDay()).substr(-2);
    var hour = ("00" + date.getHours()).substr(-2);
    var minute = ("00" + date.getMinutes()).substr(-2);
    var second = ("00" + date.getSeconds()).substr(-2);
    var millisecond = ("000" + date.getMilliseconds()).substr(-3);
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second + "." + millisecond;
}


function console(text,color) {
	var p = document.createElement('p');
	var message = document.createElement('span');
	var consoleLog = $("console-text");
	p.innerHTML = getTime();
	message.style.color = color;
	message.innerHTML = text;
	p.appendChild(message);

	consoleLog.appendChild(p);
	consoleLog.scrollTop = consoleLog.scrollHeight;

}

function buttonInit() {
	var buttonClick = function () {
		var orb = this.parentNode.dataset.id;
		switch(this.dataset.id){
			case 'create': 
			commander.createPlane(orb);
			break;
			case 'fly':
			commander.fly(orb);
			break;
			case 'destory':
			break;
		}
	}

	var buttons = document.getElementsByTagName("button");
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", buttonClick);
    }
}
function init(){
	
	planes.startRun();
	buttonInit();
	
}

window.onload = function(){
	init();
}