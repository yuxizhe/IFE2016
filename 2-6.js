function $(id) {
	return document.getElementById(id);
}


var numbers = new Array;

function render() {
	var temp = '';
	for (var i = 0; i < numbers.length; i++) {
		temp += "<div class='number'>" + numbers[i] + "</div>";
	}
	$('show').innerHTML = temp;
}

function getInput() {
	return $('input').value;
}

function init() {
	$('rightin').onclick = function() {
		numbers.push(getInput());
		render();
	}
	$('rightout').onclick = function() {
		numbers.pop();
		render();
	}
	$('leftin').onclick = function() {
		numbers.unshift(getInput());
		render();
	}
	$('leftout').onclick = function() {
		numbers.shift();
		render();
	}


}

window.onload = function() {
	init();
}