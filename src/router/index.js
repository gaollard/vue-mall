import Vue from 'vue'
import Router from 'vue-router'
import store from 'store'

// 首页
const Welcome = () => import('../views/welcome/welcome')

// 登录
const Login = () => import('../views/login/login')

// 个人中心
const Account = () => import('../views/account/account')

// 电影
const Movies = () => import('../views/movies/movies')

// 音乐
const Musics = () => import('../views/musics/musics')

// 书籍
const Books = () => import('../views/books/books')

// 电影详情
const MovieDetail = () => import('../views/movie/movie')

// 404
const Lost = () => import('../views/lost/lost')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies,
      meta: {
        title: '电影列表'
      }
    },
    {
      path: '/movie/:movieId',
      name: 'MovieDetail',
      component: MovieDetail,
      meta: {
        title: '电影详情'
      }
    },
    {
      path: '/musics',
      name: 'Musics',
      component: Musics
    },
    {
      path: '/books',
      name: 'Books',
      component: Books
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
    },
    {
      path: '*',
      name: 'Lost',
      component: Lost
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 每个路由设置title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  // 这个路由需要登录认证
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (!store.get('userInfo')) {
      next({path: '/login', query: { redirect: to.fullPath }})
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
