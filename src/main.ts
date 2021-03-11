import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import { Lazyload } from '@vant/lazyload'
import 'element-plus/lib/theme-chalk/index.css'
import 'element-plus/lib/theme-chalk/display.css'
import '@/styles/main.scss'

const app = createApp(App)
app.use(ElementPlus)
app.use(Lazyload)
app.use(router).use(store).mount('#app')
