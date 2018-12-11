import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '@/views/layout/layout'

export const constantRouterMap = [
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/home/index'
  },
  // 首页
  {
    path: '/home',
    component: Layout,
    redirect: '/home/index',
    name: 'Home',
    children: [
      {
        path: 'index',
        name: 'HomeIndex',
        component: () => import('@/views/home/index'),
        meta: { title: 'HomePage' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
