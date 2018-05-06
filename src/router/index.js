import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/views/welcome/welcome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    }
  ]
})
