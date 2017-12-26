import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import element from './element/element'
import tabmenu from './components/tab'
import iconfont from './assets/js/iconfont'
import api from './axios/api'
Vue.prototype.$api=api
Vue.config.productionTip = false
Vue.use(tabmenu)
Vue.use(api)
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
