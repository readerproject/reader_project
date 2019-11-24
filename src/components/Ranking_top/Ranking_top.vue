<template>
  <div class="typeTitle">
    <div class="back" @click="$router.replace('/romance')">
      <img src="../../common/images/icon/small/back.png" alt="">
    </div>
    <div class="titleTex" @click="toggleDialogBoxShow">
      <span class="titleText">排行 · 言情 · 全部</span>
      <img class="imgs" @click="start" :class="[rotate?'roro':'imgs']" src="../../common/images/icon/small/moreup.png" alt="">
    </div>
    <div class="rule">规则</div>
    <transition name="move">
      <div class="dialogBox" v-show="isShowDialogBox">
        <div class="dialog">
          <h3 class="tit">分类</h3>
          <ul class="ctidList">
            <li class="type" v-for="(item,index) in listArr" :key="index" @click="changIndex(index)" :class="{
              active:navIndex === index}">{{item}}</li>
          </ul>
        </div>
      </div>
    </transition>
    
  </div>
  
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        isShowDialogBox:false,
        navIndex:0,
        listArr:[],
        rotate:false
      }
    },
    methods: {
      toggleDialogBoxShow(){
        this.isShowDialogBox = !this.isShowDialogBox
      },
      changIndex(index){
        this.navIndex = index
      },
      start(){
        this.rotate = !this.rotate
      }
    },
    mounted(){
      this.listArr=[
        '全部',
        '古代',
        '现代',
        '悬疑',
        '幻想'
      ]
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .typeTitle
    width 100%
    height 35px
    line-height 35px
    display flex
    font-size 15px
    box-sizing border-box
    padding 0 15px
    position relative
    .back
      img 
        width 22px
        height 20px
        vertical-align middle
    .titleTex
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      .titleText
        width 117px
        height 20px
        line-height 20px
      .imgs
        width 14px
        height  7px
        margin-left 3px
        transition all 0.5s
        &.roro
          transform rotate(180deg)
          transition all 0.5s
    .rule
      position absolute
      right 0
      top 7px
      color #26C2BF
      margin-right 25px
    .dialogBox
      width 100%
      height 635px
      z-index 10
      position fixed
      left 0
      top 32px
      bottom 0
      overflow hidden
      background-color rgba(0, 0, 0, 0.3)
      &.move-enter-active, &.move-leave-active
        transition: all 1s
      &.move-enter
        transform translateX(-100%) translateY(-100%)
        opacity: 0
      &.move-leave-to
        transform translateX(-100%) translateY(-100%)
      .dialog
        width 100%
        height 107px
        background-color #fff
        .tit
          width 344px
          height 17px
          font-size 13px
          margin 0 16px 0 16px
        .ctidList
          width 100%
          height 78px
          display flex
          flex-wrap wrap
          .type
            width 76px
            height 23px
            line-height 23px
            border 2px solid #eee
            text-align center
            margin 12px 6px 0 6px
            border-radius 8px
            &.active
              background #26c2bf
              color #fff


      
</style>
