import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

const pathResolve = (src: string) => resolve(__dirname, src)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080
  },
  base: './',
  resolve: {
    alias: {
      '@': pathResolve('src/'),
      '@c': pathResolve('src/components/')
    }
  }
})
