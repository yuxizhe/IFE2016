<template>
<div>
	<div class="card demo-card-header-pic" v-for ="question in questions">
		{{question.id}}<li >{{question.question}}</li>
		<img class='img' src="{{question.url}}"><br>
		<input type="radio" name="">{{question.item1}}<br>
		<input type="radio" name="">{{question.item2}}<br>
		<input  v-show="question.item3!=''" type="radio" name="">{{question.item3}}<br>
		<input v-show="question.item4!=''" type="radio" name="">{{question.item4}}<br>
	</div>
</div>
</template>

<script >

import {request} from './request.js'
	
	
	export default {

		//新建的data还必须用这种形式呢，之前的形式添加不进去
		data(){
			return{
			questions:[]
			}
		},

		route:{
			data(trans) {
				var _this =this;
				request('http://apis.baidu.com/bbtapi/jztk/jztk_query?subject=4').then(result =>{
                     _this.questions = result.result
                    //console.log(result)
                    });
				trans.next();
			}
		}

		
	}
</script>

<style >
	.img{
		width: 500px;
		margin: 10px
	}
</style>