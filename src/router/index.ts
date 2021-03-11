import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@c/Layout/index.vue'),
    children: [
      // { path: '/', name: 'home', component: () => import('@/views/Ho.vue') }
      // { path: '/', name: 'home', component: () => import('@/views/Ho2.vue') }
      { path: '/', name: 'home', component: () => import('@/views/Home.vue') }
    ]
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
