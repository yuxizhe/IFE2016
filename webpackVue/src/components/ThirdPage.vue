<template>
	<div>Firebase</div>
	<form id="form" v-on:submit.prevent="addUser">
        <input v-model="newUser.name">
        <input v-model="newUser.email">
        <input type="submit" value="Add User">
      </form>
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

  var usersRef = firebase.database().ref('/test');

  export default{

  	data: {
    newUser: {
      name: '',
      email: ''
    }
  },

  	firebase:{
  		users:usersRef
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