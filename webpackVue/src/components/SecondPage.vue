<template>
<div>
	<div class="card" v-for ="question in cook" >
		<img  class="img2" src="http://tnfs.tngou.net/image{{question.img}}">
		<div class="text">
		{{question.name}}<br>
		{{question.keywords}}
		</div>
		<a :href="'/#!/cook/' + question.id">详细</a>
		</div>
		</div>

	
</div>
</template>

<script >
import {request} from './request.js'
	
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
		width:  3.5rem;
		height: 3rem
	}
	.text{
		display: inline-block;
		position: absolute;
    	top: 50%;
    	margin-top: -22px;
    	margin-left: 10px;
    	font-size: 0.4rem
	}
	.card{
		position: relative;
		margin: 0.2rem;
		background: white
	}
</style>