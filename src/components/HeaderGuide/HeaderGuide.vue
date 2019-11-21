<template>
 <div class="tab" >
      <div class="tab-item">
        <router-link to="/original">原创</router-link>
      </div>
      <div class="tab-item" >
        <router-link to="/romance">言情</router-link>
      </div>
      <div class="tab-item" >
        <router-link to="/tongren">同人</router-link>
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
    .tab-item
      margin 0 20px
      height 50px
      line-height 50px
 
</style>
