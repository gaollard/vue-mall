import axios from '../utils/fetch'

const host = '//api.airtlab.com/'
const bookBase = process.env.NODE_ENV === 'production'
  ? host
  : '/api/'

export default {
  // 电影 top250
  getMovieTop250 (start, count) {
    return axios.get(`${host}movie/top250?start=${start}&count=${count}`)
  },
  getMovies (tag, start, count) {
    return axios.get(`${host}movie/${tag}?start=${start}&count=${count}`)
  },
  // 电影详情
  getMovieDetail (movieId) {
    return axios.get(`${host}movie/subject/${movieId}`)
  },
  // 音乐搜索
  searchMusic (tag) {
    return axios.get(`${host}music/search?tag=${tag}`)
  },
  // 获取类目
  getCategorys () {
    return axios.get(`${bookBase}category/`)
  },
  // 获取品牌
  getBrands () {
    return axios.get(`${bookBase}brand/`)
  },
  // 获取产品列表
  getProducts () {
    return axios.get(`${bookBase}product/`)
  },
  // 获取产品列表
  getProductInfo ({ productId }) {
    return axios.get(`${bookBase}product/${productId}`)
  },
  // 获取产品列表
  login ({ mobile, password }) {
    return axios.post(`${bookBase}user/login`, { mobile, password })
  },
  // 获取热门机型
  getHotProducts () {
    return axios.get(`${bookBase}product/`)
  },

  // 帖子列表
  getPosts () {
    return axios.get(`${bookBase}post`)
  },
  // 文章详情
  getPostItem ({ postId }) {
    return axios.get(`${bookBase}post/${postId}`)
  },
  // 添加文章
  addPost (params) {
    return axios.post(`${bookBase}post`, params)
  },
  // 更新文章
  updatePost ({ postId, markdown, title }) {
    return axios.post(`${bookBase}post/${postId}`, {
      title,
      markdown
    })
  },
  // 获取订单列表
  getOrderList () {
    return axios.get(`${bookBase}order/`)
  },
  // 下单
  placeOrder ({ payment, orderItems }) {
    return axios.post(`${bookBase}order/`, { payment, orderItems })
  }
}
