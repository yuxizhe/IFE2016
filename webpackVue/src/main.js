import Vue from "../node_modules/vue/dist/vue.min.js";
import Router from "vue-router";
import app from './components/app.vue';
import FirstPage from './components/FirstPage.vue'
import SecondPage from './components/SecondPage.vue'
import ThirdPage from './components/ThirdPage.vue'

Vue.config.debug = true;

Vue.use(Router)

var router = new Router()

router.map({
	'/1':{
		component:FirstPage
	},
	'/2':{
		component:SecondPage
	},
	'/3':{
		component:ThirdPage
	}
})


router.start(app,'#app')
