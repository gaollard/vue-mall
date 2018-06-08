import api from '../../api/api'

export default {
  namespaced: true,
  state: {
    userInfo: null,
    loading: false
  },
  getters: {
    userInfo (state) {
      return state.userInfo || {}
    }
  },
  mutations: {
    setUserInfo (state, data) {
      state.brands = data
    },
    setLoading (state, data) {
      state.loading = data
    }
  },
  actions: {
    async getUserInfo ({commit, state}) {
      commit('setLoading', true)
      let ret = await api.getUserInfo()
      commit('setUserInfo', ret.data.data.userInfo)
      commit('setLoading', false)
    },
    async login ({commit, state}) {
      commit('setLoading', true)
      let ret = await api.login()
      commit('setUserInfo', ret.data.data.userInfo)
      commit('setLoading', false)
    }
  }
}
