function $(id) {
	return document.getElementById(id);
}

function block(){
	var block ={
		blockDiv:$('block'),
		positionX: 50,
		positionY: 50,
		rotation: 0,
		codes:[],
		command: {
			left: function () {
				block.rotation = -90;
				block.blockDiv.style.transform = "rotate(" + block.rotation + "deg)";
			},
			right: function(){
				block.rotation = 90;
				block.blockDiv.style.transform = "rotate(" + block.rotation + "deg)";

			},
			back: function () {
				block.rotation = 180;
				block.blockDiv.style.transform = "rotate(" + block.rotation + "deg)";
			},
			up: function(){
				block.rotation = 0;
				block.blockDiv.style.transform = "rotate(" + block.rotation + "deg)";
			},
			go: function(){
				switch(block.rotation){
					case -90:
						block.positionX -=50;
						break;
					case 90:
						block.positionX += 50;
						break;
					case 180: 
						block.positionY += 50;
						break;
					case 0 :
						block.positionY -= 50;
						break;
				}
			block.blockDiv.style.left = block.positionX + 'px';
			block.blockDiv.style.top = block.positionY + 'px';
			}
		},
		// 获取代码列表 生成指令列表  split('\n').forEach(function(code){})
		runCommand:function(){
			block.codes = [];
			$('text').value.split('\n').forEach(function (code) {
			    block.codes.push(code.trim());
			    block.pushCode(code);
			  });
		},
		pushCode: function(code){
			code = code.toLowerCase();
			switch(code){
				case 'go':
				  block.command.go();
				break;
				default:
				 console.log(code);
			}
		}
		
	}
	return block;
}

var block = new block();

function keyProcess(event){
	// 这种映射方式也是很棒
	var direction = {37: -90, 38: 0, 39: 90, 40: 180}[event.keyCode];
	if(direction != block.rotation){
		block.rotation = direction;
		block.blockDiv.style.transform = "rotate(" + block.rotation + "deg)";
	}else{
		block.command.go();
	}
}

function init(){
	$('go').onclick = function () {
		block.command.go();
	};
	$('up').onclick = function(){
		block.command.up();
	};
	$('left').onclick = function(){
		block.command.left();
	};
	$('right').onclick = function(){
		block.command.right();
	};
	$('down').onclick = function(){
		block.command.back();
	};
	$('commit').onclick = function(){
		block.runCommand();
	}
	// 好棒 addEventListener functionname.bind(event) 可实现事件的传递
	document.addEventListener('keydown',keyProcess.bind(event));
}

window.onload = function(){
	init();
}