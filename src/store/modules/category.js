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
      console.log(data)
      state.categorys = data
    }
  },
  actions: {
    async getCategorys ({commit, state}) {
      let ret = await api.getCategorys()
      commit('setCategorys', ret.data.data.categorys)
    }
  }
}
