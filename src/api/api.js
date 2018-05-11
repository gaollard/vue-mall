import axios from 'axios'
const host = process.env.NODE_ENV === 'production' ? 'https://api.douban.com/' : '/host'

/**
 * zhuanzhuan: https://m.zhuanzhuan.58.com/youpin/website/list.html?smark=ws11
 * xiaomi: https://m.mi.com
 * sudanyouxuan: https://m.sdyxmall.com/v1/?co=sdyx#/
 */

/**
 * 豆瓣电影 api
 * https://developers.douban.com/wiki/?title=movie_v2#subject
 */

export default class Api {
  // 电影 top250
  static top250 = () => axios.get(`${host}/v2/movie/top250`)

  // 电影详情
  static getMovieDetail = (movieId) => axios.get(`${host}/v2/movie/subject/${movieId}`)

  static searchMusic = (key) => axios.get(`${host}/v2/music/search?tag=流行音乐`)
}
