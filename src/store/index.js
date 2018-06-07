import Vue from 'vue'
import Vuex from 'vuex'

import movie from './modules/movie'
import category from './modules/category'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    movie,
    category
  }
})
