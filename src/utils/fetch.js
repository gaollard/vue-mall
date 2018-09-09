import qs from 'qs'
import axios from 'axios'

console.log(qs)

axios.interceptors.request.use(function (config) {
  if (config.method === 'POST') {
    config.data = qs.stringify(config.data)
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(
  response => {
    let res = response.data
    if (res.code === '0') {
      return res
    } else {
      if (/\/movie\/.*/.test(response.config.url)) {
        return response
      } else {
        Promise.reject(res.msg)
      }
    }
  },
  error => Promise.reject(error)
)

export default axios
