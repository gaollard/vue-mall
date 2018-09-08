import api from '../../api/api'
// import { Toast } from 'mint-ui'

export default {
  namespaced: true,
  state: {
    categorys: [],
    loading: false
  },
  getters: {
    categorys () {
      return []
    }
  },
  mutations: {
    setCategorys (state, data) {
      state.categorys = data
    },
    setLoading (state, data) {
      state.loading = data
    }
  },
  actions: {
    async getCategorys ({commit, state}) {
      commit('setLoading', true)
      let ret = await api.getCategorys()
      commit('setCategorys', ret.data.list)
      commit('setLoading', false)
    }
  }
}
