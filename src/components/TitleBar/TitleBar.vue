<template>
   <div class="header">
       <img src="../../common/images/icon/back.png" alt="" @click="$router.back()">
       <span>{{title}}</span>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
      props:{
      title:String
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
   .header
      width 100%
      height 34px
      position relative
      text-align center
      line-height 20px
      img
        width 22px
        height 20px
        position absolute
        top 8px
        left 16px
      span 
        color #333333
        font-size 15px
        position relative
        top 6px
 
</style>
