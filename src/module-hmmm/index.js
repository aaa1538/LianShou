// vue-router
import { asyncRouterMap } from '@/router'
import routerMaps from './router'
// vuex
// import app from './store/app'

export default {
  install(module, store) {
    // 注册路由
    for (const iterator of routerMaps) {
      asyncRouterMap.push(iterator)
    }
  }
}
