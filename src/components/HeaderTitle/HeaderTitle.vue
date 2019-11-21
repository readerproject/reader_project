<template>
  <div class="headerContainer">
    <img src="../../common/images/icon/logo.png" alt="">
    <div class="login">
      <span @click="pathTo('/login')">登录</span>
      <span>|</span>
      <span>消息</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      pathTo(path){
         this.$route.path !== path && this.$router.push(path)
      }
    }
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
   .headerContainer
      width 100%
      height 35px
      background-color #E9E9E9
      img
        float left
        width 86px
        height 24px
        line-height 24px
        margin 6px 16px
      .login
        float right   
        margin-right 3px       
        span
         color #999999
         font-size 12px
         line-height 34px  
         margin  0 2px
</style>
