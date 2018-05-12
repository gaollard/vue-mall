import api from '../../api/api'
import { Toast } from 'mint-ui'

// 电影标签
const tags = [
  {text: '正在热映', id: 'in_theaters'},
  {text: '即将上映', id: 'coming_soon'},
  {text: 'top250', id: 'top250'},
  {text: '口碑榜单', id: 'weekly'},
  {text: '北美票房榜', id: 'us_box'},
  {text: '新片榜单', id: 'new_movies'}
]

// 电影banner
const banners = [{
  img: 'https://mall.s.maizuo.com/0690e3551f92b8b1dcdf9be0dc3b9b69.jpg?x-oss-process=image/quality,Q_70',
  link: ''
}, {
  img: 'https://mall.s.maizuo.com/2653a4597c3a11e74fe858185917fb1e.jpg?x-oss-process=image/quality,Q_70',
  link: ''
}]

const initState = {
  pageInfo: {
    start: 0,
    count: 10,
    total: 0
  }
}

const state = {
  banners,
  tags,
  tag: tags[0],
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
  },
  setTag (state, payload) {
    state.tag = payload
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
      commit('getPageInfo', initState.pageInfo)
      commit('getMovies', [])
      commit('setLoading', true)
      let res = await api.getMovies(state.tag.id, state.pageInfo.start, state.pageInfo.count)
      const {count, start, subjects, total} = res.data
      commit('getMovies', subjects)
      commit('getPageInfo', {count, start, total})
      commit('setLoading', false)
    } catch (e) {
      Toast({
        message: e.msg,
        position: 'bottom',
        duration: 5000
      })
    }
  },
  async loadMore ({commit, state}) {
    commit('setLoading', true)
    let res = await api.getMovies(state.tag.id, state.list.length, state.pageInfo.count)
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
