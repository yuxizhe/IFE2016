<template>
	<div class="page3-div">Firebase</div>
	<div v-for="user in users">
			{{user.name}}
			{{user.email}}	
			<button v-on:click="removeUser(user)">X</button>		
			</div>
	<form  v-on:submit.prevent="addUser">
        <input v-model="newUser.name">
        <input v-model="newUser.email">
        <input type="submit" value="Add User">
      </form>
      <div>为什么位置不对</div>
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
  var usersRef = firebase.database().ref('/test');

  usersRef.on('value',function(value){a=value.val()});

  export default{

  	data(){
  		return{
		    newUser: {
		      name: '',
		      email: ''
		   			 }
  				,
  			users: {}
  				,keys:{}

  		}
  	},
	firebase:{
    users: usersRef
  },
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
		});
	},
  	
  	 methods: {
    addUser: function () {
      // if (this.isValid) {
        usersRef.push(this.newUser)
        this.newUser.name = ''
        this.newUser.email = ''
      // }
    },
    removeUser: function (user) {
    	console.log(Object.keys(user));
      usersRef.child(user.key).remove()
    }
  }
  }
</script>
<style >
	
.page3-div{
	width: 100%;
	text-align: center;
	position: relative;

}
</style>