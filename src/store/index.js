import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cbgshow:false,
    hidebart:false,
    processbar:false,
    processbar_show:false,
    processbar_width:0,
    processbar_inter:'',
    chainname:'药店加商户',
    chainimg:'static/img/noImg.png',
    chainmsgstate:false,

  },
  mutations: {
    changehidebart (state) {
      state.hidebart=!state.hidebart;
    },
    changecbg (state,value) {
      state.cbgshow=value;
    },
    changeuser(state,value){
      state.chainname=value.name;
      state.chainmsgstate=true;
      if(value.img) state.chainimg=value.img;
    },
    openprocessbar(state){
      state.processbar_width=0;
      state.processbar=true;
      state.processbar_show=true;
      state.processbar_inter=setInterval(function(){
        let sj=Math.floor(Math.random()*10+5);
        let nw=state.processbar_width+sj;
        if(nw>96) {
          nw=96;
          state.processbar_width=nw;
          clearInterval(state.processbar_inter);
        }else{
          state.processbar_width=nw;
        }
      },300)

    },
    completeproceccbar(state){
      clearInterval(state.processbar_inter);
      state.processbar_width=100;
      setTimeout(function(){
        state.processbar=false;
        setTimeout(function(){
          state.processbar_show=false;
        },300)
      },300)

    }
  },
  actions: {

  }
})
