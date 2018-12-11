import axios from 'axios'
import store from '@/store'
import { getToken } from '@/tools/auth'
// import { Dialog } from 'vant';

const service = axios.create({
  baseURL: process.env.BASE_API,
  transformRequest: [function(data) {
    // 将对象转成普通字符串, 还是看项目需求吧，暂时先拼成字符串
    let submitData = ''
    if (data) {
      for (var key in data) {
        submitData += key + '=' + data[key] + '&'
      }
      submitData = submitData.slice(0, -1)
    }
    return submitData
  }],
  timeout: 10000 // 超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    config.method = 'post'
    if (store.getters.token) {
      // config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
      if (store.getters.token) {
        config.data['token'] = store.getters.token
      } else {
        config.data['token'] = getToken()
      }
    }
    return config
  },
  error => {
    console.log(error) // 调试
    Promise.reject(error)
  }
)
const successCode = ['200'] // 数据请求成功的code
const errorCode = ['405'] // 数据请求失败的code
// response 拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (successCode.includes(res.code)) {
      return res
    } else {
      if (errorCode.includes(res.code)) { // error表示严重的重误码， 如token失效
        // 这里应该弹个确认框，让用户重新登陆
        store.dispatch('FedLogOut')
        // Dialog('error')
      } else {
        // 遇到普通错误，应该TMD吐个丝提醒一下
        // alert('fk')
      }
      return Promise.reject(res)
    }
  },
  error => {
    console.log('err' + error) // for debug
    // Toast(error.message) // 错误提醒
    return Promise.reject(error)
  }
)

export default service
