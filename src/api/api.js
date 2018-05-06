import axios from 'axios'

const host =
  process.env.NODE_ENV === 'production'
    ? '//api.douban.com/' : '/host'

export default class Api {
  static top250 = () => axios.get(`${host}/v2/movie/top250`)
}
