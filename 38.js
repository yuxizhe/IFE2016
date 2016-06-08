



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

function sort(type,method) {
	list.sort(function(a,b) {
		if(method == 'low'){
		return a[type] - b[type];
		}else{
		return b[type] - a[type];
		}
	});
	render(list);
}

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
	};
	var a = document.getElementsByTagName('tbody')[1];
	if(a!= undefined){
		$('table').removeChild(a);
		}
	$('table').appendChild(html);
}
function buttonInit() {
	var buttonClick = function(){
		var ob = this.parentNode.dataset.id;
		switch(this.dataset.id){
			case 'low':
				sort(ob,'low');
				break;
			case 'high':
				sort(ob,'high');
				break;
		}
	}
	var buttons = document.getElementsByTagName("button");
	// 这个addEventListener  害惨了 中间l小写找了半天
	for(var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", buttonClick);
	}


	
}
function init() {
	list.push(new person('小A',90,80,98));
	list.push(new person('小B',98,78,92));
	list.push(new person('小C',36,82,90));
	list.push(new person('小D',100,84,93));
	render(list);
	buttonInit();
}

window.onload = function(){
	init();

}