<template>
  <div class="personalContainer">
    <TitleBar title="我的"/>
    <div class="userinfo">
      <img src="../../common/images/icon/nohead.png" alt="">
      <div>
        <p class="username">{{user.phone?user.phone:'谜藏'}}</p>
        <p class="level">LV.青花鱼小学生</p>
      </div>     
    </div>
    <div class="walet">
      <i class="iconfont icon-qianbao"></i>
      <span class="content">我的钱包</span>
      <i class="iconfont icon-gengduo"></i>
    </div>
     <div class="bookrack">
        <i class="iconfont icon-shujia"></i>
        <span class="content">我的书架</span>
        <i class="iconfont icon-gengduo"></i>
    </div>
     <div class="setting">
        <i class="iconfont icon-shezhi-"></i>
        <span class="content">我的设置</span>
        <i class="iconfont icon-gengduo"></i>
    </div>
   

  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
  export default {
     computed:{
      ...mapState({
        user:state=>state.user
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  .personalContainer
    width 100%
    .userinfo
      display flex
      width 100%
      height 90px
      border-bottom 5px solid #eee
      img
        width 60px
        height 60px
        border-radius 50%
        margin 20px 20px
      div
        margin 20px 5px
        .username
          font-size 15px
          color #33333
          font-weight bold
          margin-top 10px
        .level
          color #A6A6B6
          font-size 12px
          margin-top 10px
    .walet
    .setting
    .bookrack
      width 100%
      height 60px
      box-sizing border-box
      border-bottom 1px solid #eee
      i
        font-size 18px
        line-height 60px
        &:nth-child(1)
         color #63D3D1 
         margin-left 15px    
      .icon-gengduo
        float right
        color  #333
        margin-right 15px
      span 
        font-size 15px
      .content
        margin  0 20px
</style>
