import { Promise } from 'es6-promise'

import firebase from "firebase"
  //import Vue from 'vue'
  //import VueFire from "vuefire"

  //Vue.use(VueFire);
  //firebase = new Firebase();
  var config = {
    apiKey: "AIzaSyD4az7go2CWyb-Yy_2wHISnfoytLEzUg-4",
    authDomain: "yuxizhe2008.firebaseapp.com",
    databaseURL: "https://yuxizhe2008.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);

  export function firebaseData(id){
    return firebase.database().ref('/'+id);
  };


export  function request(url) {
      return new Promise(function (resolve) {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.setRequestHeader('apikey','e4288f19fe0231d205fd43745d7b15fe')
        xhr.send()
        xhr.addEventListener('load', function () {
          resolve(JSON.parse(this.response))
        })
      })
    }