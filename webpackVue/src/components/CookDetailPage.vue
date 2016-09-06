<template>
	{{CookBook.name}}<br>
			<img  width='500' class='card-cover' src="http://tnfs.tngou.net/image{{CookBook.img}}"><br>

	{{CookBook.description}}<br><br>
	{{{CookBook.message}}}
	
</template>

<script>

	import {request} from './request.js'

	export default{
		data(){
			return {
				CookBook:{}
			}
		},
		route:{
			data({to}){
				var _this =this;
				request('http://apis.baidu.com/tngou/cook/show?id='+to.params.id).then(result =>{
                     _this.CookBook = result;
                    console.log(result)
                    });
				console.log('HI')
			}
		}
	}
	
</script>