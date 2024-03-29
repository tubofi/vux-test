// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
//import VueRouter from 'vue-router'
import router from "./router/index";
import App from './App'
import Home from './components/HelloFromVux'
import {AjaxPlugin} from "vux"


Vue.use(AjaxPlugin);
//Vue.http.post('/api').then();
//Vue.use(router)
//Vue.component('selector', Selector)

/*const routes = [{
  path: '/',
  component: Home
}];

const router = new VueRouter({
  routes
});*/

FastClick.attach(document.body);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,   //软路由路径，
  render: h => h(App)   //映射到App.vue来渲染页面，App是所有页面的容器
}).$mount('#app-box')
