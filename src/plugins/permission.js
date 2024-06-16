/**
 * @Description: 路由守卫
 */
import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import getPageTitle from '@/utils/pageTitle'
NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeResolve(async (to, from, next) => {
  // 顶部进度条开始
  NProgress.start()
  let token = store.getters['user/accessToken']

  if (token) {
    // const hasPermissions =
    //   store.getters['user/permissions'] &&
    //   store.getters['user/permissions'].length > 0
    // if (hasPermissions) {
    //   next()
    // } else {
    //   try {
    //     await store.dispatch('user/getUserInfo')
    //     next({ ...to, replace: true })
    //   } catch {
    //     await store.dispatch('user/resetAccessToken')
    //     NProgress.done()
    //   }
    // }
    next()
  } else {
    // store.dispatch('user/login', { token: to.query.token })
    var token_local =
      'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjUxMDY3YTAwLTk1YmYtNGJjOS04MzQxLTM3NjVhNzA0ODJmMCJ9.DA-9ziDjfsJyHS9avez_agzL5AaIFDm0Y9g4O0VvmZaohDgNeWT_cv0NmR50CQFX3C4kdrJMs4fZNy4PLLnmuA'
    store.dispatch('user/login', { token: token_local })
    NProgress.done()
  }
  document.title = getPageTitle(to.meta.title)
})
router.afterEach(() => {
  NProgress.done()
})
