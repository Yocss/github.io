import router from '@/router'
import 'nprogress/nprogress.css'// Progress 进度条样式
// import { getToken } from '@/tools/auth' // 验权
// import store from '@/store'

router.beforeEach((to, from, next) => {
  next()
  /*
  if (getToken() || store.getters.token) {
    next()
  } else {
    next({ path: 'login' })
  }
  */
})

router.afterEach((to, from) => {
  // Toast.clear()
})
