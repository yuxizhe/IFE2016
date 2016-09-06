import { Promise } from 'es6-promise'

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