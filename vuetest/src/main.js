
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  }
})

new Vue({
	el:'#list',
	data:{
		todos:[
			{text: "第一条"},
			{text: "No.2"},
			{text: "No.3"}

		]
	}
})

new Vue({
	el:"#click",
	data:{
		message: "click change"
	},
	methods:{
		clickButton:function () {
			this.message = "changed!"
		}
	}
})

new Vue({
	el:"#todo",
	data:{
		newTodo:'',
		todos:[
			{text:"first item"}
		]
	},
	methods:{
		addTodo:function () {
			var text = this.newTodo.trim();
			if (text) {
				this.todos.push({text:text});
				this.newTodo = ''
			}
		},
		remove:function (index) {
			this.todos.splice(index,1)
		}
	}
})

new Vue({
	
})

