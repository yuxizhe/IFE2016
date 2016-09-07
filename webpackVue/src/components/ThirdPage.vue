<template>
	<div>Firebase</div>
	<div>{{users.name}}</div>
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

  	firebase:{
  		users:usersRef
  	}
  }
</script>