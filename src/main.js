import 'babel-polyfill'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import rewriteError from './plugins/rewriteError'
rewriteError();

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
})
