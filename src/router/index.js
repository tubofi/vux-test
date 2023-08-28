import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Try from '@/components/Try'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
/*      name: 'HelloWorld',
      component: HelloWorld*/
      name: "Try",
      component: Try
    }
  ]
})
