import { Promise } from 'es6-promise'
//import wilddog from "wilddog";
//import firebase from "firebase"


// firebase 0    wilddog 1
var env = 0;

if (env) {


    var config = {
        syncDomain: "yuxizhe.wilddog.com",
        syncURL: "https://yuxizhe.wilddogio.com" //输入节点 URL
    };
    wilddog.initializeApp(config);

} else {

    //好像是因为 服务器端的firebase 需要google身份认证 所以会被墙。暂时用 wilddog
    var config = {
        apiKey: "AIzaSyD4az7go2CWyb-Yy_2wHISnfoytLEzUg-4",
        authDomain: "yuxizhe2008.firebaseapp.com",
        databaseURL: "https://yuxizhe2008.firebaseio.com",
        storageBucket: "",
    };
    firebase.initializeApp(config);
}

export function firebaseData(id) {
    if (env) {
        return wilddog.sync().ref('/' + id);
    } else {
        return firebase.database().ref('/' + id);
    }

};


export function request(url) {
    return new Promise(function(resolve) {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.setRequestHeader('apikey', 'e4288f19fe0231d205fd43745d7b15fe')
        xhr.send()
        xhr.addEventListener('load', function() {
            resolve(JSON.parse(this.response))
        })
    })
}

// export function download(url) {

//   return new Promise(function(resolve){

//     http.get(url, function(res) {
//         var data = "";
//         res.on('data', function (chunk) {
//           data += chunk;
//         });
//         res.on("end", function() {
//           parseString(data, function (err, result) {
//           resolve(result);
//           });
//         });
//       }).on("error", function() {
//         resolve(null);
//       });

//   })

// }
