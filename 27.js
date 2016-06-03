function $(id) {
	return document.getElementById(id);
}

function block(){
	var block ={
		blockDiv:$('block'),
		positionX: 50,
		positionY: 50,
		rotation: 0,
		command: {
			left: function () {
				block.rotation = -90%360;
				block.blockDiv.style.transform = "rotate(" + block.rotation + "deg)";
			},
			right: function(){
				block.rotation = 90%360;
				block.blockDiv.style.transform = "rotate(" + block.rotation + "deg)";

			},
			back: function () {
				block.rotation = 180%360;
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
		
	}
	return block;
}

var block = new block();

function keyProcess(event){
	// 这种映射方式也是很棒
	var direction = {37: 'LEFT', 38: 'TOP', 39: 'RIGHT', 40: 'BOTTOM'}[event.keyCode]
	console.log(direction);
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
	// 好棒 addEventListener functionname.bind(event) 可实现事件的传递
	document.addEventListener('keydown',keyProcess.bind(event));
}

window.onload = function(){
	init();
}