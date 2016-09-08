<template>
	<div class="page3-div">Firebase</div>
	<div v-for="user in users">{{user.name}}</div>
	<form  v-on:submit.prevent="addUser">
        <input v-model="newUser.name">
        <input v-model="newUser.email">
        <input type="submit" value="Add User">
      </form>
      <div>为什么位置不对</div>
</template>
<script >
	import firebase from "firebase"
	
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

  
  export default{

  	data(){
  		return{
		    newUser: {
		      name: '',
		      email: ''
		   			 }
  				,
  			users: {name:1}
		}},

	firebase:{
		users:usersRef
	},
	created(){
		var a=[];
		var _this=this;
		usersRef.on('value', snapshot => {
		  a=snapshot.val();

		  console.log(a);
		 _this.users=a
		});



		// a.on('change',this.users=a)
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
      usersRef.child(user['.key']).remove()
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