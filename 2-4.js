/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */

 var $ = function (id) {
    return document.getElementById(id);
  }


var aqiData = [];

// 正则还是不太会
 function isABC(temp) {
      var re = /[^\u4e00-\u9fa5]/ig;
      if(re.test(temp))return false;
      return true;
  }
   function isZheng(temp) {
      var re = /[^0-9]/;
      if(re.test(temp))return false;
      return true;
  }
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var mid = [];

	mid[0]  = $('aqi-city-input').value.trim();
	mid[1] = $('aqi-value-input').value.trim();
	//             或者
   // if (!strCity.match(/^[A-Za-z\u4E00-\u9FA5]+$/)) {
   //      alert("城市名必须为中英文字符！");
   //      return;
   //  }
   //  if (!strAqi.match(/^\d+$/)) {
   //      alert("空气质量指数必须为整数！");
   //      return;
   //  }



	if( isABC(mid[0]) && isZheng(mid[1]) && mid[0] && mid[1] ){
	// 判断
	aqiData.push(mid);

	//清除
	$('aqi-city-input').value = '';
	$('aqi-value-input').value = '';
	}
	else{
		alert('请输入正确的格式')
	}

}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var temp;
	temp = " <tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
	for (var i = 0; i < aqiData.length; i++) {
		temp += "<tr><td>"+ aqiData[i][0] +"</td><td>"+ aqiData[i][1] +"</td><td><button>删除</button></td></tr>"
	}
	$('aqi-table').innerHTML = temp;
	
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(e) {
  // console.log(e);
  var number; 
  for (var i = 0; i < aqiData.length; i++) {
  	if(aqiData[i][0] == e) number = i;
  }
  // console.log(number);
  aqiData.splice(number,1);
  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  $('add-btn').onclick=function(){
  	addBtnHandle();
  }
  // 直接给还没有生成的节点添加 绑定时 会报错。 所以给上一级添加 再判断target是否是button
  $('aqi-table').addEventListener('click',function(event){
  	if(event.target.nodeName == 'BUTTON')
  	{
  		// 找到这个node有关系的node 可以在chrome调试窗口帮助找
  		delBtnHandle(event.path[2].firstChild.innerHTML)
  	}
  });


}

// 增加window.onload  在文档加载完后才运行
window.onload = function(){
	init();
}
