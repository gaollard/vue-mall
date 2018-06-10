import qs from 'qs'
import axios from 'axios'
// const host = process.env.NODE_ENV === 'production' ? 'https://api.douban.com/' : '/host'

axios.interceptors.request.use(function (config) {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  if (config.method === 'post') {
    config.data = qs.stringify({...config.data})
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

const host = '//book.airtlab.com/'
const bookBase = process.env.NODE_ENV === 'production'
  ? host
  : 'http://api.airtlab.com:3002/'

// const productionHost = '//book.airtlab.com/'

/**
 * zhuanzhuan: https://m.zhuanzhuan.58.com/youpin/website/list.html?smark=ws11
 * xiaomi: https://m.mi.com
 * sudanyouxuan: https://m.sdyxmall.com/v1/?co=sdyx#/
 */

/**
 * 豆瓣电影 api
 * https://developers.douban.com/wiki/?title=movie_v2#subject
 */

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
  }
}
