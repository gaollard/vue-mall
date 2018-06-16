import api from '../../api/api'
import cookie from 'js-cookie'

export default {
  namespaced: true,
  state: {
    userInfo: cookie.getJSON('userInfo') || null,
    loading: false,
    loginToken: cookie.get('loginToken') || '',
    loginForm: {
      mobile: '18620343136',
      password: '199389'
    },
    errMsg: ''
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
    },
    setLoginForm (state, data) {
      state.loginForm = data
    },
    setErrMsg (state, data) {
      state.errMsg = data
    }
  },
  actions: {

    // 获取用户信息
    async getUserInfo ({commit, state}) {
      commit('setLoading', true)
      let ret = await api.getUserInfo()
      commit('setUserInfo', ret.userInfo)
      commit('setLoading', false)
    },

    // 登录并获取用户信息
    async login ({commit, state}, {mobile, password}) {
      commit('setLoading', true)
      try {
        let ret = await api.login({ mobile, password })
        const { loginToken, userInfo } = ret
        cookie.set('loginToken', loginToken)
        cookie.set('userInfo', userInfo)
        commit('setLoginToken', loginToken)
        commit('setUserInfo', userInfo)
      } catch (e) {
        console.log(e)
      }
      commit('setLoading', false)
    },

    // 登录并获取用户信息
    async loginOut ({commit, state}) {
      cookie.remove('loginToken')
      cookie.remove('userInfo')
      commit('setLoginToken', '')
      commit('setUserInfo', null)
    }
  }
}
