import Vue from 'vue'
import 'normalize.css/normalize.css'

import Vant from 'vant'
import 'vant/lib/index.css'
import '@/assets/css/index.scss'
import { Lazyload } from 'vant'

import App from './App'
import router from './router'
import store from './store'

import '@/config/routerHooks.js'
import '@/icons/index.js'

// 公共配置
import * as appConfig from '@/config/index.js'
Vue.prototype.$appConfig = appConfig

// 通用网络请求
import { httpRequest } from '@/api/common.js'
Vue.prototype.$httpRequest = httpRequest

Vue.use(Vant)
Vue.use(Lazyload)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
