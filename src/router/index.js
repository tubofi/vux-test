import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Sign from '../components/Sign'
import Home from "../components/Home";
import Success from "../components/Success";

Vue.use(Router);

export default new Router({
  routes: [
/*    {
      path: '/',
      name: "Describe",
      component: Describe,
    },*/
    {path:"/", redirect:"/home"},
    {path:"/home", component:Home},
    {path:"/success", component:Success},
    {path:"/sign", component:Sign}
  ]
})
