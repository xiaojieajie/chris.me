import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

const pathResolve = (src: string) => resolve(__dirname, src)
console.log(pathResolve('src/'))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080
  },
  resolve: {
    alias: {
      '@': pathResolve('src/'),
      '@c': pathResolve('src/components/')
    }
  }
})
