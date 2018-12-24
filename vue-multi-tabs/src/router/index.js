import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import BaseSet from '@/utils/base-config'
Vue.use(Router)

const router =  new Router({
	 mode: 'hash',
  routes
})
router.beforeEach((to, from, next) => {
  next()
})
router.afterEach((to, from, next) => {
  BaseSet.addOpendPage(router.app, to.name, to.params, to.query, to.meta, to.path)
})
export default router