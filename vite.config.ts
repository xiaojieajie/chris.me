const { resolve } = require('path')

const pathResolve = (src: string) => resolve(__dirname, src)

const pathName = '/blog'

module.exports = {
  port: 1111,
  alias: {
    '/@/': pathResolve('src'),
    '/@c/': pathResolve('src/components'),
  },
  // outDir: pathResolve(`../build${pathName}`),
  // optimizeDeps: {
  //   include: ['ant-design-vue', '@ant-design-vue/use', '@ant-design/icons-vue', 'vue-socket.io'],
  // },
  proxy: {
    '/api': {
      target: 'http://localhost:1324/api',
      changeOrigin: true,
      rewrite: (path: string) => path.replace(/^\/api/, '')
    }
  }
}
