<template>
  <div class="resultType">
    <span class="recommend active">推荐</span>
    <span class="hot">热门</span>
    <span class="newest">最新</span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
 
</style>
