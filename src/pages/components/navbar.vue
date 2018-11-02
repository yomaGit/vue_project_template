<template>
  <div>
    navbar页面
  </div>
</template>

<script>
export default {
  name:'navbar',
  data(){
    return {

    }
  },
  computed:{

  },
  methods:{//- 方法
    init(){
      let that=this;


    }
  },
  watch:{//- 监听

  },
  mounted(){//- 创建
    this.init();

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
  @import "../../css/components/navbar"
</style>
