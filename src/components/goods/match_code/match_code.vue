<template>
  <div class="match_code">
    <navbar ref="navbar"></navbar>
    <section class="content">
      match_code页面

    </section>
  </div>
</template>

<script>
  import navbar from '../../moudles/navbar'

  export default {
    name:'match_code',
    components: { navbar },
    data(){
      return {

      }
    },
    methods:{//- 方法
      init(){

      }
    },
    watch:{//- 监听

    },
    mounted(){//- 创建 常用
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
  @import "../../../css/goods/match_code/match_code"
</style>
