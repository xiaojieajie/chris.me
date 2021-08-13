import { httpGet, httpPost } from '@/utils'

export enum METHOD_ENUM {
  'GET' = 'get',
  'POST' = 'post'
}

const httpMethods = {
  [METHOD_ENUM.GET]: httpGet,
  [METHOD_ENUM.POST]: httpPost
}

export interface IModules {
  [key: string]: IModule
}
interface IModule {
  [key: string]: {
    methods: METHOD_ENUM
    url: string
  }
}

export function initnal(modules: IModules) {
  const moduleNames = Object.keys(modules)
  const result: any = {}
  for (const namespace of moduleNames) {
    const oldModule = modules[namespace]
    const prefix = namespace && `/${namespace.toLowerCase()}`
    const module: {
      [key: string]: (data: any) => Promise<any>
    } = {}
    for (const key in oldModule) {
      const config = oldModule[key]
      const http = httpMethods[config.methods]
      module[key] = function (data: any) {
        return http(`${prefix}${config.url}`, data)
      }
    }
    result[namespace || 'Base'] = module
  }
  return result
}
