import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
//import Async from '@/components/Async'

const Async = resolve => require(['@/components/Async'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/async',
      component: Async
  }
  ]
})
