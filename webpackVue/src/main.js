import Vue from "../node_modules/vue/dist/vue.min.js";
import Router from "../node_modules/vue-router/dist/vue-router.min.js";
import app from './components/app.vue';
import FirstPage from './components/FirstPage.vue'
import SecondPage from './components/SecondPage.vue'
import ThirdPage from './components/ThirdPage.vue'
import CookDetailPage from './components/CookDetailPage.vue'
import BlogPage from './components/BlogPage.vue'
import BlogPageDetail from './components/BlogPageDetail.vue'
import Movie from './components/Movie.vue'
import MoviePageDetail from "./components/MoviePageDetail.vue"
import SMZDM from './components/SMZDM.vue'

Vue.config.debug = true;

Vue.use(Router)

var router = new Router({
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
	'/blog':{
		component:BlogPage
	},
	'movie':{
		component:Movie
	},
	'/blog/:key':{
		component:BlogPageDetail
	},
	'/movie/:key':{
		component:MoviePageDetail
	},
	'/cook/:id':{
		component:CookDetailPage
	},
	'/smzdm':{
		component:SMZDM
	}
})

router.redirect({
  // 重定向任意未匹配路径到 /news
  '*': '/3'
})
router.start(app,'#app')


