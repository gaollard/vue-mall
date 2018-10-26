import api from '../../api/api'

export default {
  namespaced: true,
  state: {
    list: [],
    loading: false
  },
  mutations: {
    getOrderList (state, data) {
      state.list = data
    },
    setLoading (state, data) {
      state.loading = data
    }
  },
  actions: {
    async getOrderList ({commit, state}) {
      commit('setLoading', true)
      let ret = await api.getOrderList()
      const list = ret.data.list.filter(item => item.orderItems.length)
      commit('getOrderList', list)
      commit('setLoading', false)
    }
  }
}
