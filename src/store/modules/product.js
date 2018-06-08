import api from '../../api/api'

export default {
  namespaced: true,
  state: {
    products: [],
    loading: false,
    product: null
  },
  getters: {
    products (state) {
      return state.products
    }
  },
  mutations: {
    setProducts (state, data) {
      state.products = data
    },
    setProduct (state, data) {
      state.product = data
    },
    setLoading (state, data) {
      state.loading = data
    }
  },
  actions: {
    async getProducts ({commit, state}) {
      commit('setLoading', true)
      let ret = await api.getProducts()
      commit('setProducts', ret.data.data.products)
      commit('setLoading', false)
    },
    async getProductInfo ({ commit }, {productId}) {
      commit('setLoading', true)
      let ret = await api.getProductInfo({productId})
      commit('setProduct', ret.data.data)
      commit('setLoading', false)
    }
  }
}
