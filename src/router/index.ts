import { CancelToken } from '@/utils'
import { getToken } from '@/utils'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@c/Layout/Main.vue'),
    children: [
      { path: '/', component: () => import('@v/main/Home.vue') },
      { path: '/post', component: () => import('@v/main/Post.vue') }
    ]
  },
  { path: '/login', component: () => import('@v/Login.vue') },
  { path: '/404', component: () => import('@v/404.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const whitePaths = ['/login']

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
    // if (whitePaths.includes(to.fullPath)) {
    //   next() // 无token，白名单内可跳转
    // } else {
    //   next({ path: '/login' })
    // }
    next()
  }
})

export default router
