
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

var STORAGE_KEY = 'todos-vuejs';

var todosStorage = {
		fetch: function () {
			return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
		},
		save: function (todos) {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
		}
	};

var aa = new Vue({
	el:"#todo",
	data:{
		newTodo:'',
		todos:todosStorage.fetch()
	},
	methods:{
		addTodo:function () {
			var text = this.newTodo.trim();
			if (text) {
				// 值不提前声明的话，在HTML里面调用会慢一步
				this.todos.push({text:text , editing: false});
				this.newTodo = ''
			}
		},
		remove:function (index) {
			//this.todos.splice(index,1)
			this.todos.$remove(index);
		},
		edittodo:function(todo) {
			//想在这里对单个TODO的属性进行改变怎么弄 
			todo.editing = true;
		},
		doneEdit:function (todo) {
			todo.editing = false;
		}
	},
	watch:{
		todos:{
			handler: function (todos){
				todosStorage.save(todos);
			},
			deep:true
		}
	}
})

new Vue({
	
})

