// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import xhr from './js/axios'
import cookie from './js/cookie'
import 'normalize.css/normalize.css'
import store from '@/vuex/store'


Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$cookie = cookie
Vue.prototype.$axios = xhr

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
