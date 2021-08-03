import { ResponseData } from '@/types/request'
import axios, { AxiosResponse } from 'axios'
import CancelToken from './cancelToken'
// import type { Result } from './type'
// import { getToken, removeToken } from '/@/utils/auth'
import router from "@/router"
import { getToken } from './storage'

const message = (window as any).$message
const url = ''
const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? `/jshERP-boot` : url,
  timeout: 50000
})

// 设置post请求头
instance.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'

// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    CancelToken.removePending(config)
    CancelToken.addPending(config)
    const token = getToken()
    token && (config.headers.Authorization = token)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  (res: AxiosResponse<ResponseData>) => {
    const { data } = res
    if (res.status !== 200) {
      message.error('网络错误')
      return Promise.reject(data.message || 'error')
    }
    // 未登录
    if (data.code === 600) {
      message.error(data.message)
      router.push({
        path: '/login',
        query: {
          fromurl: window.location.href
        }
      })
      return Promise.reject(res)
    }
    if (data.code === 0) {
      return Promise.reject(res)
    }
    return Promise.resolve(res)
  },
  error => {
    const { data, status } = error.response
    switch (status) {
      case 401:
        message.warning('请先登录后操作')
        // todo
        break
      case 403:
        message.warning('登录过期，请重新登录')
        // todo
        break
      case 404:
        message.error('网络请求不存在')
        // todo
        break
      case 500:
        message.error('服务器内部错误')
        // todo
        break
      default:
        message.error(data?.msg || '未知错误')
    }
    return Promise.reject(error)
  }
)

const createRequest = (methods: 'get' | 'post') => {
  const requset = instance[methods]
  return async function (url: string, data = {}) {
    try {
      const res = await requset<ResponseData>(url, createPayload(methods, data))
      return res.data
    } catch (err) {
      if (err instanceof Error) {
        return Promise.reject(err.message)
      }
      return Promise.reject(err.data)
    }
  }
}

const createPayload = (methods: 'get' | 'post', data = {}) => {
  let payload
  if (methods === 'get') {
    payload = {
      params: data
    }
  } else {
    payload = data
  }

  return payload
}

export const httpGet = createRequest('get')

export const httpPost = createRequest('post')

export default instance
