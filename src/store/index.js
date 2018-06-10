import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import movie from './modules/movie'
import category from './modules/category'
import brand from './modules/brand'
import product from './modules/product'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imgRoot: '//static.airtlab.com/productlogo/'
  },
  modules: {
    user,
    movie,
    category,
    brand,
    product
  }
})
