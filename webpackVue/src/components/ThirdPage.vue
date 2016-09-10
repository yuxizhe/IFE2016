<template>
<div id="page3-content" class="page3-div">
	<div >Firebase</div>
	<div class="page3-message-div" v-for="user in users">
			{{user.name}}
			<div class="page3-message">{{user.message}}	</div>
			<!-- <button v-on:click="removeUser(user)">X</button>		 -->
			</div>
	<form class="page-footer" v-on:submit.prevent="addUser">
        <input v-model="newUser.name">
        <input class="message-input" v-model="newUser.message">
        <input type="submit" value="发送">
      </form>
 </div>
</template>
<script >
	import firebase from "firebase"
	import Vue from 'vue'
	import VueFire from "vuefire"

	Vue.use(VueFire);
	//firebase = new Firebase();
	var config = {
    apiKey: "AIzaSyD4az7go2CWyb-Yy_2wHISnfoytLEzUg-4",
    authDomain: "yuxizhe2008.firebaseapp.com",
    databaseURL: "https://yuxizhe2008.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);


  

  var a;
  var usersRef = firebase.database().ref('/message');

  usersRef.on('value',function(value){a=value.val()});

  export default{

  	data(){
  		return{
		    newUser: {
		    // 获取浏览器前几个字符
		      name: navigator.userAgent.slice(13,19),
		      message: ''
		   			 }
  				,
  			users: {}
  				,keys:{}

  		}
  	},
	// firebase:{
 //    users: usersRef
 //  },
  // 从hacker news学来的 终于知道怎么修改data数据了
	created(){
		var a=[];
		var aa;
		var _this=this;
		
		usersRef.on('value', snapshot => {
		  a=snapshot.val();
		  //终于把对象名存储为属性了，终于可以读出对象名了
		  _this.keys=Object.keys(a);

		 _this.users=a;
		 for(aa=0;aa<_this.keys.length;aa++){
		 	_this.users[_this.keys[aa]].key=this.keys[aa];
		 };
		 // 实例方法  实现 数据更新后，并且DOM更新完成后，执行的函数
		 _this.$nextTick(function () {
		 	_this.moveBottom();
		 });
		});
	},
  	
  	 methods: {
    addUser: function () {
      // if (this.isValid) {
        usersRef.push(this.newUser)
        // this.newUser.name = ''
        this.newUser.message = ''
      // }
    },
    removeUser: function (user) {
      usersRef.child(user.key).remove()
    },
    moveBottom:function() {
    	var consoleText = document.getElementById("page3-content");
    	consoleText.scrollTop = consoleText.scrollHeight;
    }
  }
  }
</script>
<style >
	
.page3-div{
	position: absolute;
    width: 100%;
    bottom: 0.5rem;
    top: 0;
    overflow: auto;

}
.page3-message-div{
	font-size: 0.4rem;
}
.page3-message {
	display: block;
    left: 1.5rem;
    max-width: 7rem;
    top: -0.4rem;
    /*要想父元素获得子元素高度，子元素不能设置为relative	*/
    position: relative;
    word-break: break-all;
}

.page-footer{
	position: fixed;
    bottom: 1rem;
    width: 10rem;
    display: flex;
    line-height: 0.5rem
}

.page-footer input{
	flex: 1
}
.page-footer .message-input{
	flex: 7
}

</style>