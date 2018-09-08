import api from '../../api/api'

export default {
  namespaced: true,
  state: {
    products: [],
    loading: false
  },
  mutations: {
    setProducts (state, data) {
      state.products = data
    },
    setLoading (state, data) {
      state.loading = data
    }
  },
  actions: {
    async getProducts ({commit, state}) {
      commit('setLoading', true)
      let ret = await api.getProducts()
      commit('setProducts', ret.data.list)
      commit('setLoading', false)
    }
  }
}
