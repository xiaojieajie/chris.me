import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { store, key } from '@/store'

import 'vfonts/FiraCode.css' // 字体
import '@/style/tailwind.css' // tailwind css
import '@/style/index.scss' // 全局样式

const app = createApp(App)

app.use(router)
app.use(store, key)

app.mount('#app')
