import api from '../../api/api'

export default {
  namespaced: true,
  state: {
    posts: [],
    post: {},
    loading: false
  },
  mutations: {
    setPosts (state, data) {
      state.posts = data
    },
    setPost (state, data) {
      state.post = data
    },
    setLoading (state, data) {
      state.loading = data
    }
  },
  actions: {
    async getPosts ({ commit, state }) {
      commit('setLoading', true)
      let ret = await api.getPosts()
      commit('setPosts', ret.list)
      commit('setLoading', false)
    },
    async getPost ({ commit }, { postId }) {
      commit('setLoading', true)
      let ret = await api.getPostItem({ postId })
      commit('setPost', ret)
      commit('setLoading', false)
    }
  }
}
