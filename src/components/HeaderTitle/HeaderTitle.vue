<template>
  <div class="headerContainer">
    <img src="../../assets/image/icon/logo.png" alt="">
    <div class="login">
      <span>登录</span>
      <span>|</span>
      <span>消息</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    
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
        margin 5px 20px
      .login
        float right   
        margin-right 20px       
        span
         color #9999
         font-size 12px
         line-height 35px  
         margin  0 2px
</style>
