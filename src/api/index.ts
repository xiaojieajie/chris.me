import { initnal, METHOD_ENUM, IModules } from './init'

let modules: IModules = {
  Post: {
    list: { methods: METHOD_ENUM.GET, url: '/list' } // /post/list
  },
  // 无api前缀
  '': {
    hello: { methods: METHOD_ENUM.GET, url: '/' }
  }
}

console.log(initnal(modules))

export const module = initnal(modules)