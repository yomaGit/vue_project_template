import 'babel-polyfill'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

const v = new Vue();

import basemsg from './plugins/basemsg';//- 默认参数
Vue.use(basemsg);

import Qs from 'qs';//- 处理URL查询字符串
Vue.prototype.$qs = Qs;

import axios from 'axios'//- axios异步

axios.defaults.baseURL = v.$baseurl.hreforigin;
Vue.prototype.$axios = axios;

import catchrecord from './plugins/catchrecord';//- 错误收集
Vue.use(catchrecord);

import Ajaxy from './plugins/ajaxy';//- ajax方法
Vue.use(Ajaxy);

Vue.config.productionTip = false;

//- 自定义指令
Vue.directive('focus', { //- element-ui的v-focus自动获取焦点
  update: function (el, {value}) {
    if (value) el.getElementsByTagName("input")[0].focus();
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
})
