import api from '../../api/api'

export default {
  namespaced: true,
  state: {
    brands: [],
    loading: false
  },
  getters: {
    brands (state) {
      return state.brands
    }
  },
  mutations: {
    setBrands (state, data) {
      state.brands = data
    },
    setLoading (state, data) {
      state.loading = data
    }
  },
  actions: {
    async getBrands ({commit, state}) {
      commit('setLoading', true)
      let ret = await api.getBrands()
      commit('setBrands', ret.data.list)
      commit('setLoading', false)
    }
  }
}
