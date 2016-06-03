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
	}
}


window.onload = function(){
	init();
}