import CancelToken from '@/utils/cancelToken'
import { getToken } from '@/utils/storage'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', component: () => import('@c/Layout/index.vue') },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  { path: '/404', name: '404', component: () => import('@/views/404.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const whitePaths = ['/login', '/register']

router.beforeEach((to, from, next) => {
  CancelToken.clearPending() // 路由跳转清空发出的请求
  if (getToken()) {
    if (whitePaths.includes(to.fullPath)) {
      next({ path: '/' })
    } else {
      if (!to.matched.length) {
        next({ path: '/404' })
      }
      next()
    }
  } else {
    if (whitePaths.includes(to.fullPath)) {
      next() // 无token，白名单内可跳转
    } else {
      next({ path: '/login' })
    }
  }
})

export default router
