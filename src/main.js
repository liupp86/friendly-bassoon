import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './plugins/axios'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)

import base_64 from './plugins/base64'
Vue.use(base_64)

import Loading from "./plugins/loading"
Vue.use(Loading)

import vueCookies from "vue-cookies"
Vue.use(vueCookies)

import './assets/css/common.css'

Vue.config.productionTip = true

Vue.prototype.$axios = axios

import vue_lazy from "./plugins/lazyload"
Vue.use(vue_lazy)


new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    this.$showLoading()
    this.$router.beforeEach((to, from, next) => {
      this.$showLoading()
      next()
    })
  }

}).$mount('#app')
