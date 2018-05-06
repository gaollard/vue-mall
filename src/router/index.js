import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/views/welcome/welcome'
// import Movie from '@/views/welcome/welcome'
import MovieDetail from '../views/movie/movie'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
