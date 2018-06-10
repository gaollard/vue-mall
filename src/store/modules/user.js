import api from '../../api/api'
import cookie from 'js-cookie'

export default {
  namespaced: true,
  state: {
    userInfo: cookie.getJSON('userInfo') || null,
    loading: false,
    loginToken: cookie.get('loginToken') || ''
  },
  getters: {
    userInfo (state) {
      return state.userInfo || {}
    }
  },
  mutations: {
    setUserInfo (state, data) {
      state.userInfo = data
    },
    setLoading (state, data) {
      state.loading = data
    },
    setLoginToken (state, data) {
      state.loginToken = data
    }
  },
  actions: {

    // 获取用户信息
    async getUserInfo ({commit, state}) {
      commit('setLoading', true)
      let ret = await api.getUserInfo()
      commit('setUserInfo', ret.data.data.userInfo)
      commit('setLoading', false)
    },

    // 登录并获取用户信息
    async login ({commit, state}, {mobile, password}) {
      commit('setLoading', true)
      let ret = await api.login({mobile, password})
      const { loginToken, userInfo } = ret.data.data
      cookie.set('loginToken', loginToken)
      cookie.set('userInfo', userInfo)
      commit('setLoginToken', loginToken)
      commit('setUserInfo', userInfo)
      commit('setLoading', false)
    },

    // 退出登录
    // 登录并获取用户信息
    async loginOut ({commit, state}) {
      cookie.remove('loginToken')
      cookie.remove('userInfo')
      commit('setLoginToken', '')
      commit('setUserInfo', null)
    },    
  }
}
