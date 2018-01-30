import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './common'
import $http from './$http';

Vue.config.productionTip = false

Vue.use($http)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
router.beforeResolve((to, from, next) => {
  next()
})
router.afterEach(route => {
  if(route.meta.title) {
    document.title = route.meta.title;
  }
})
