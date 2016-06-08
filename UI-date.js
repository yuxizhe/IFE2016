function $(id) {
	return document.getElementById(id);
}

function getDate(){
	var date = new Date();
	var year = $('year').value ;
	var month =$('month').value ;
	date.setFullYear(year,month-1,1);
	var selectDay = date.getDay();
	$('currnetDate').innerHTML =year + '年' + month + '月';
	console.log(selectDay);
	return selectDay;
}

function getMonthDay(){
	var year = $('year').value ;
	var month = $('month').value ;
	if(['1','3','5','7','8','10','12'].indexOf(month) != -1){
		return 31;
	}else if(['4','6','8','9','11'].indexOf(month) != -1){
		return 30;
	}else if((year%100 != 0 && year%4 == 0)||(year % 400 == 0)){
		return 29;
	}else{
		return 28;
	}
}

function renderDate(){
	var day = getDate();
	var monthDay = getMonthDay();
	var days = document.getElementsByTagName('td');
	for (var i = 0; i < 42; i++) {
		days[7+i].innerHTML = '';
	}
	for (var i = 0; i < monthDay; i++) {
		days[7+day+i].innerHTML = i+1;
	}
}

function selectDay(day){
	var year = $('year').value ;
	var month = $('month').value ;
	var date = day.target.innerHTML;
	var time = new Date();
	if(date != ''){
		time.setFullYear(year,month,date);
		$('currnetDate').innerHTML =year + '年' + month + '月' + date + '日';
		console.log(time);
		return time;
	}
}

function init(){
	// var selectDay = function(){
	// 	console.log(this.innerHTML);
	// }
	var days = document.getElementsByTagName('td');
	for (var i = 7; i < days.length; i++) {
		days[i].addEventListener('click',selectDay.bind(event));
	};
	var select = document.getElementsByTagName('select');
	for (var i = 0; i < select.length; i++) {
		select[i].addEventListener('click',renderDate);
	};
	renderDate();
}

window.onload = function(){
	init();
}