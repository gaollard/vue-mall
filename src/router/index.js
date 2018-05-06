import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/views/welcome/welcome'
// import Movie from '@/views/welcome/welcome'
import MovieDetail from '../views/movie/movie'
import Account from '../views/account/account'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Welcome
    },
    {
      path: '/movie/:movieId',
      name: 'MovieDetail',
      component: MovieDetail
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
      meta: { requireAuth: true }
    }
  ]
})

const isLogin = false

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    // 这个路由需要登录认证
    if (!isLogin) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router
