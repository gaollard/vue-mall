import Api from '../../api/api'

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
  }
}

const actions = {
  async getMovies ({commit}) {
    try {
      let res = await Api.top250()
      const {count, start, subjects, total} = res.data
      commit('getMovies', subjects)
      commit('getPageInfo', {count, start, total})
    } catch (e) {
      console.log(e)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
