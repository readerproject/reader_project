<template>
 <div class="tab" >
      <div class="tab-item">
        <router-link to="/original" ><span :class="{active:$route.path === '/original'}">原创</span ></router-link>
      </div>
      <div class="tab-item" >
        <router-link to="/romance"><span :class="{active:$route.path === '/romance'}">言情</span></router-link>
      </div>
      <div class="tab-item" >
        <router-link to="/tongren"><span :class="{active:$route.path === '/tongren'}">同人</span></router-link>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >
  .tab
    width 100%
    height 50px
    display flex
    position absolute
    background: linear-gradient(to bottom, rgba(0,0,0,.4) 0%,rgba(0,0,0,0) 100%);
    z-index 2
    .tab-item
      margin 0 9px
      padding 2px 0
      height 50px
      line-height 50px

      span 
        color #fff
        font-size 14px
        font-weight bold
        &.active
          font-size 20px
</style>
