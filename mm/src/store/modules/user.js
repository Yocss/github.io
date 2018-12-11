// import { doLogin, logout, getInfo } from '@/api/login'
// import { getToken, setToken, removeToken } from '@/utils/auth'
import { getToken, setToken } from '@/tools/auth'

const user = {
  state: {
    token: getToken()
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },

  actions: {
    // 保存token
    SaveToken({ commit }, token) {
      commit('SET_TOKEN', token)
      setToken(token)
    }
    // 登录
    // Login({ commit }, form) {
    //   return new Promise((resolve, reject) => {
    //     doLogin(form).then(res => {
    //       const data = res.data
    //       setToken(data.token)
    //       commit('SET_TOKEN', data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },
  }
}

export default user
