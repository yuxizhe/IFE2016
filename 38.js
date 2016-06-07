

window.onload = function(){
	init();

}

function $(argument) {
	return document.getElementById(argument);
}
function person(name,veb,mat,eng){
	this.name = name;
	this.veb = veb;
	this.mat = mat;
	this.eng = eng;
	this.all = veb+mat+eng;
}

var list = [];

function render(list) {
	// 从table改为tbody
	var html = document.createElement('tbody');
	for (var i = 0; i < list.length; i++) {
		var tr = document.createElement('tr');
		// 改为for in 的形式 很方便
		for( var type in list[i]){
			var name = document.createElement('td');
			name.innerHTML = list[i][type];
			tr.appendChild(name);
		}
		html.appendChild(tr);
	}
	$('table').appendChild(html);
}

function init() {
	list.push(new person('小A',90,80,98));
	list.push(new person('小B',98,78,92));
	list.push(new person('小C',36,82,90));
	list.push(new person('小D',100,84,93));
	render(list);
}