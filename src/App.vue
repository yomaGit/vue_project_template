<template>
  <div>
    <div class="cbg" v-show="cbgshow" id='cbg' @click='cbgclick'></div>
    <div class="processbar" :class={off:!probarshow} v-show="processbar_show"><div :style="'width:'+probarwidth+'%;'"></div></div>

    <router-view ref="routerview"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {

    }
  },
  methods:{//- 方法
    bodyclick(){//- 全局点击方法
      let that=this;


    },
    cbgclick(){//- 全局cbg的点击方法

    }
  },
  computed: {
    hidebart(){
      return this.$store.state.hidebart
    },
    cbgshow(){
      return this.$store.state.cbgshow
    },
    probarshow(){
      return this.$store.state.processbar;
    },
    processbar_show(){
      return this.$store.state.processbar_show;
    },
    probarwidth(){
      return this.$store.state.processbar_width;
    }
  },
  watch:{//- 监听

  },
  created(){//- 创建 常用

  },
  updated(){//- 组件更新之后

  },
  destroyed(){//- 销毁

  },
  beforeRouteEnter(to, from, next){//- 进入路由，无this

    next(true);
  },
  beforeRouteUpdate(to, from, next){//- 路由改变，可this

    next(true);
  },
  beforeRouteLeave(to, from, next){//- 离开路由，可this

    next(true);
  }
}
</script>

<style lang="sass">
  @import "css/app.scss"
</style>
