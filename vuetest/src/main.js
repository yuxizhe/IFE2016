
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

var STORAGE_KEY = 'todo-vuejs';

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
				this.todos.push({text:text , editing: false, show:true});
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
		},
		completedTodo:function () {
			this.todos.forEach(function (todo) {
				todo.show = todo.completed;
			})
		},
		activeTodo:function () {
			this.todos.forEach(function (todo) {
				todo.show = !todo.completed;
			})
		},
		AllTodo:function() {
			this.todos.forEach(function (todo) {
				todo.show = true;
			})
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

Vue.component('grid-list',{
	template: "#grid-list",
	replace:true,
	props:{
		searchQuery:String,
		sortQuery:String,
		Columns:Array,
		Data:Array
	}
})

var grid = new Vue({
	el:"#grid",
	data:{
		searchQuery:"",
		sortQuery:"",
		gridColumns:[ "name","score"],
		gridData:[
			{ name: "lee", score: 100},
			{ name: "Jack", score: 32},
			{ name: "Tom", score: 12},
			{ name: "AC", score: 89},
			{ name: "Mike", score: 45},
			{ name: "Wang", score: 90},
			{ name: "Will", score: 78},
			{ name: "Edw", score: 89},
			{ name: "Mii", score: 90},
		]
	}
})

var svg = new Vue({
	el:"#svg",
	data:{
		List:[
			{text: "A",value:100},
			{text: "B",value:100},
			{text: "C",value:100}
		]
	},
	methods:{
		newRow:function () {
			var text = this.newAngle.trim();
			if(text){
				this.List.push({text:text,value:100});
				this.newAngle='';
			}
		},
		delete:function (row) {
			this.List.$remove(row);
		}
	}
})

// demo data
var Datademo = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        },
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        }
      ]
    }
  ]
}

Vue.component('tree-list',{
	template:"#tree-list",
	replace:true,
	props:{datatree:Object},
	data:function () {
		return {open:false}
	},
	methods:{
		changeToFolder:function () {
			// 这里是添加属性 不是添加值 所以不能用push  直接.后面直接加就行  但是这种不会触发更新
			// this.datatree.children=[{name:"new stuff"}];

			//这种添加方式不会触发更新
			// this.datatree.children = [];
			// this.datatree.children.push({
		 //        name: 'new stuff'
		 //      })
			
			//vue 中添加能触发更新的属性是Vue.set
			if(!this.datatree.children){
			Vue.set(this.datatree, 'children', [{name:"new stuff"}])
        
			this.open = true}
		}
	}
})

var tree = new Vue({
	el:"#tree",
	data:{
		Data:Datademo
	}
})


