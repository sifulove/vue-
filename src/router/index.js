import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/home.vue'
import Test from '@/page/test.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Test
    },
    {
      path: '/home',
      component: Home
    }
  ]
})
