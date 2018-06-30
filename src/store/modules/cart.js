import store from 'store'

export default {
  namespaced: true,
  state: {
    list: store.get('cartList') || [],
    loading: false
  },
  getters: {
    checkList (state) {
      return state.list.filter(item => item.checked)
    },
    totalPrice (state, getters) {
      return getters.checkList.reduce((accumulator, item) => {
        return accumulator + item.productPrice
      }, 0)
    }
  },
  mutations: {
    addToCart (state, payload) {
      state.list.push(payload)
      store.set('cartList', state.list)
    },
    setList (state, payload) {
      state.list = payload
      store.set('cartList', state.list)
    }
  },
  actions: {

    // 添加到购物车
    addToCart ({ commit, state }, payload) {
      commit('addToCart', payload)
    },

    // 切换
    toggle ({ commit, state }, index) {
      let item = state.list[index]
      item.checked = !item.checked
      commit('setList', [].concat(state.list))
    },

    // 全部切换
    toggleAll ({ commit, state, getters }) {
      let list = state.list
      let checked = getters.checkList.length === 0
      list.forEach(item => {
        item.checked = checked
      })
      commit('setList', [].concat(list))
    },

    // 从购物车中移除
    remove ({ commit, state }, index) {
      state.list.splice(index, 1)
      commit('setList', state.list)
    }
  }
}
