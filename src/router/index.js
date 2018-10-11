import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

const notfound = () => import(/* webpackChunkName: "notfound" */ '@/views/notfound')

const match_code = () => import(/* webpackChunkName: "match_code" */ '@/views/goods/match_code/match_code')

const router=new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: match_code,
      meta:{
        title:'产品对码',
      }
    },
    {
      path: '/match_code',//- 产品对码
      name: 'match_code',
      component: match_code,
      meta:{
        title:'产品对码',
      }
    },

    {//- 页面未找到的情况404
      path: '*',
      name: 'notfound',
      component: notfound,
      meta:{
        title:'404',
      }
    },
  ],
})

router.beforeEach((to, from, next) => {
  store.commit("openprocessbar");
  next();
})

router.afterEach((to, from) => {//- 存cookie
  let name='merchantReturnUrl';
  let value=location.href;
  let seconds = 86400;
  let date = new Date();
  date.setTime(date.getTime()+(seconds*1000));
  document.cookie=name+"="+encodeURIComponent(value)+";expires="+date.toGMTString()+";path=/";

  let title=to.meta.title;
  document.title=title;

  store.commit("changecbg",false)//- 全局cbg背景标签隐藏
  store.commit("completeproceccbar")
})

export default router
