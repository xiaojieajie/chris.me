import { initnal, METHOD_ENUM, IModules } from './init'

const modules: IModules = {
  Post: {
    list: { methods: METHOD_ENUM.GET, url: '/list' } // /post/list
  },
  // 无api前缀
  '': {
    hello: { methods: METHOD_ENUM.GET, url: '/' }
  }
}

export const { Base, Post } = initnal(modules)
