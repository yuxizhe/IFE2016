import Vue from "../node_modules/vue/dist/vue.min.js";
import Router from "vue-router";
import app from './components/app.vue';
import FirstPage from './components/FirstPage.vue'
import SecondPage from './components/SecondPage.vue'
import ThirdPage from './components/ThirdPage.vue'
import CookDetailPage from './components/CookDetailPage.vue'
import VueFire from "vuefire"

Vue.config.debug = true;

Vue.use(Router)
Vue.use(VueFire)
var router = new Router({
	//这里要好好说一下，一定要设置html5模式，不然前后端URL不统一会发生问题
    //比如访问 http://localhost:3000/ 服务端定义是访问index.ts这个路由文件
    //如果不是html5模式的话，经过客户端js运行之后会变成http://localhost:3000/#!/
    
    //在比如直接浏览器输入 http://localhost:3000/foo 服务端定义是访问.ts这个路由文件
    //如果不是html5模式的话，经过客户端js运行之后会变成 http://localhost:3000/foo/#!/
    
    //设置了html5模式后，加载完js后不会加上#!这2个类似锚点的字符，实现前后端路由统一如果用户刷新浏览器的话，服务端也能渲染出相应的页面。
    // history: true, //html5模式 去掉锚点 
    // saveScrollPosition: true //记住页面的滚动位置 html5模式适用，实际使用下来没用

})

router.map({
	'/1':{
		component:FirstPage
	},
	'/2':{
		component:SecondPage
	},
	'/3':{
		component:ThirdPage
	},
	'/cook/:id':{
		component:CookDetailPage
	}
})

router.redirect({
  // 重定向任意未匹配路径到 /news
  '*': '/2'
})
router.start(app,'#app')


