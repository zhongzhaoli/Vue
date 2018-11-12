import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index/Index'
import Findjob from '@/components/FindJob/FindJob'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/find-job',
      component: Findjob
    }
  ]
})
