import axios from 'axios'
import { ElMessage } from 'element-plus'
import type { Result } from './type'
import { getToken, removeToken } from '@/utils/auth'
import router from '@/router'

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? '/api'
      : 'http://chrisying.cn/blog/api',
  timeout: 5000
})

// 设置post请求头
instance.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    const token = getToken()
    token && (config.headers.Authorization = `Bearer ${token}`)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  (res) => {
    if (res.data && res.data.status === 200) {
      return Promise.resolve(res)
    } else {
      ElMessage.error(res.data.msg)
      return Promise.reject(res)
    }
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          ElMessage.warning('请先登录后操作')
          removeToken()
          router.push('/login')
          break
        case 403:
          ElMessage.warning('登录过期，请重新登录')
          removeToken()
          router.push('/login')
          break
        case 404:
          ElMessage.error('网络请求不存在')
          break
        case 500:
          ElMessage.error('服务器内部错误')
          break
        default:
          ElMessage.error(error.response.data.msg || '未知错误')
      }
    }
    return Promise.reject(error)
  }
)

export function httpGet(url: string, params = {}): Promise<Result> {
  return new Promise((resolve, reject) => {
    instance
      .get(url, { params })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export function httpPost(url: string, data = {}): Promise<Result> {
  return new Promise((resolve, reject) => {
    instance.post(url, data).then(
      (res) => {
        resolve(res.data)
      },
      (err) => {
        reject(err)
      }
    )
  })
}

export default instance
