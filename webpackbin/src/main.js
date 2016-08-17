import Vue from 'vue'
import App from './App.vue'
import Test from './test.vue'

new Vue({
  el: 'body',
  components: { App ,Test},
  data:{
    gridData:[
			{ name: "lee", score: 100},
			{ name: "Jack", score: 32},
			{ name: "Tom", score: 12},
			{ name: "AC", score: 89},
			{ name: "Mike", score: 45},
			{ name: "Wang", score: 90},
			{ name: "Will", score: 78},
			{ name: "Edw", score: 89},
			{ name: "Mii", score: 90}
		]
  }
})