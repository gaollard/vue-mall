import api from '../../api/api'
import { Toast } from 'mint-ui'

// 电影标签
const tags = [{
  text: '正在热映',
  id: 'in_theaters'
}, {
  text: '即将上映'
}, {
  text: 'top250',
  id: ''
}, {
  text: '口碑榜',
  id: ''
}, {
  text: '北美票房榜',
  id: ''
}, {
  text: '新片榜'
}, {
  text: '欧美票房'
}, {
  text: '亚洲票房'
}, {
  text: '搜狐榜'
}]

// 电影banner
const banners = [{
  img: 'https://mall.s.maizuo.com/0690e3551f92b8b1dcdf9be0dc3b9b69.jpg?x-oss-process=image/quality,Q_70',
  link: ''
}, {
  img: 'https://mall.s.maizuo.com/2653a4597c3a11e74fe858185917fb1e.jpg?x-oss-process=image/quality,Q_70',
  link: ''
}]

const state = {
  banners,
  tags,
  tag: '',
  list: [],
  loading: false,
  pageInfo: {
    start: 0,
    count: 10,
    total: 0
  }
}

const mutations = {
  getMovies (state, payload) {
    state.list = payload
  },
  getPageInfo (state, payload) {
    state.pageInfo = payload
  },
  setLoading (state, payload) {
    state.loading = payload
  }
}

const getters = {
  pageInfo (state) {
    return {
      start: parseInt(state.pageInfo.start),
      count: parseInt(state.pageInfo.count),
      total: parseInt(state.pageInfo.total)
    }
  }
}

const actions = {
  async getMovies ({commit, state}) {
    try {
      commit('setLoading', true)
      let res = await api.getMovieTop250(state.pageInfo.start, state.pageInfo.count)
      const {count, start, subjects, total} = res.data
      commit('getMovies', subjects)
      commit('getPageInfo', {count, start, total})
      commit('setLoading', false)
    } catch (e) {
      console.log(e)
      Toast({
        message: e.msg,
        position: 'bottom',
        duration: 5000
      })
    }
  },
  async loadMore ({commit, state}) {
    commit('setLoading', true)
    let res = await api.getMovieTop250(state.list.length, state.pageInfo.count)
    const {count, start, subjects, total} = res.data
    commit('getMovies', state.list.concat(subjects))
    commit('getPageInfo', {count, start, total})
    commit('setLoading', false)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
