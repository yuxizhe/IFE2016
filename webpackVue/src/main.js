import Vue from "../node_modules/vue/dist/vue.min.js";
import app from './components/app.vue';

Vue.config.debug = true;

new Vue(app);