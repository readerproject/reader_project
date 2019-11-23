<template>
  <div>
    <TitleBar  title="书单"/>
    <div class="resultType">
      <router-link to="/bookitem/recommend">
        <span class="recommend" :class="{active:$route.path === '/bookitem/recommend'}">推荐</span>
      </router-link>
      <router-link to="/bookitem/hot">
        <span class="hot" :class="{active:$route.path === '/bookitem/hot'}">热门</span>
      </router-link>
      <router-link to="/bookitem/newest">
        <span class="newest" :class="{active:$route.path === '/bookitem/newest'}">最新</span>
      </router-link>
    </div>
    <div class="contentBox">
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  .resultType
    margin 6px 0 14px 0
    width 100%
    height 27px
    line-height 27px
    font-weight bolder
    font-size 15px
    color #333
    display flex
    justify-content space-around
    span
      &.active
        border-bottom 2px solid rgb(38, 194, 191)
  .contentBox
    width 100%
    height 100%
</style>
