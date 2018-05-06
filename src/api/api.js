import axios from 'axios'
const host = process.env.NODE_ENV === 'production' ? '//api.douban.com/' : '/host'

/**
 * 豆瓣电影 api
 * https://developers.douban.com/wiki/?title=movie_v2#subject
 */

export default class Api {
  // 电影 top250
  static top250 = () => axios.get(`${host}/v2/movie/top250`)

  // 电影详情
  static getMovieDetail = (movieId) => axios.get(`${host}/v2/movie/subject/${movieId}`)
}
