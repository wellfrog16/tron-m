// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from '../node_modules/axios'
import 'lib-flexible/flexible'
import App from './App'
import router from './router'
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
