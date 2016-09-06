<template>
<div>
	<div class="card demo-card-header-pic" v-for ="question in cook">
		<img  class="img2" width='100' class='card-cover' src="http://tnfs.tngou.net/image{{question.img}}">
		<div class="text">
		{{question.name}}<br>
		{{question.keywords}}
		</div>
		</div>
</div>
</template>

<script >

	import { Promise } from 'es6-promise'

    function request(url) {
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
	
	export default {

		//新建的data还必须用这种形式呢，之前的形式添加不进去
		data(){
			return{
			cook:[]
			}
		},

		route:{
			data(trans) {
				var _this =this;
				request('http://apis.baidu.com/tngou/cook/list').then(result =>{
                     _this.cook= result.tngou;
                    console.log(result)
                    });
				trans.next();
			}
		}

		
	}
</script>

<style>
	.img2{
		margin: 10px;
		width: 100px;
		height: 120px
	}
	.text{
		display: inline-block;
		position: absolute;
    	top: 50%;
    	margin-top: -22px;
    	margin-left: 10px;
	}
</style>