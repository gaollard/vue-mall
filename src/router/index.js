import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/views/welcome/welcome'
// import Movie from '@/views/welcome/welcome'
import Login from '../views/login/login'
import MovieDetail from '../views/movie/movie'
import Account from '../views/account/account'
import Musics from '../views/musics/musics'
import BooksView from '../views/books/books'
import store from 'store'

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
      path: '/musics',
      name: 'Musics',
      component: Musics
    },
    {
      path: '/books',
      name: 'Books',
      component: BooksView
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
      meta: { requireAuth: true }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    // 这个路由需要登录认证
    if (!store.get('userInfo')) {
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
