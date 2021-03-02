import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import '@/styles/main.scss'

const app = createApp(App)
app.use(ElementPlus)
app.use(router).use(store).mount('#app')
