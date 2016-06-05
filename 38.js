

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
	var html;
	var tr = document.createElement('tr');

	for (var i = 0; i < list.length; i++) {
		var name = document.createElement('td');
		name.innerHTML = list[i].name;
		var veb = document.createElement('td');
		veb.innerHTML = list[i].veb;
		var eng = document.createElement('td');
		eng.innerHTML = list[i].eng;
		var mat = document.createElement('td');
		mat.innerHTML = list[i].mat;
		var all = document.createElement('td');
		all.innerHTML = list[i].all;
		tr.appendChild(name);
		tr.appendChild(veb);
		tr.appendChild(mat);
		tr.appendChild(eng);
		tr.appendChild(all);
	}
	$('table').appendChild(tr);
}

function init() {
	list.push(new person('小A',90,80,98));
	list.push(new person('小B',98,78,92));
	list.push(new person('小C',36,82,90));
	list.push(new person('小D',100,84,93));
	render(list);
}