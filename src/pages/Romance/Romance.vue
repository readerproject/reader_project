<template>
  <section class="romance">   
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:">
              <img src="../../common/image/swiper/guanyu.jpg" alt="">
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:">
              <img src="../../common/image/swiper/huizhan.jpg" alt="">
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:">
              <img src="../../common/image/swiper/shaonian.jpg" alt="">
            </a>
          </div>
        </div>
      </div>
      <classify/>
      <div class="PageContent">
        <div>
          <img src="../../common/image/icon/small/laba.png" alt="">
          <p></p>
        </div>
      </div>
      <div class="dayrecBox">
        <div class="indexModelTitle">
          <span class="titleCon">
            <img src="../../common/image/icon/small/title2.png" alt="">
          </span>
          <span>今日必读</span>
          <booklist/>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="dayrecBox">
        <div class="indexModelTitle">
          <span class="titleCon">
            <img src="../../common/image/icon/small/title2.png" alt="">
          </span>
          <span>本周强推</span>
        </div>
      </div>
  </section>

</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  // import {mapState} from 'vuex'
  import classify from '../../components/classify/classify'
  import booklist from '../../components/booklist/booklist'
  export default {
    components:{
      classify,
      booklist
    },
    mounted(){
      this.$nextTick(() => {
        new Swiper('.swiper-container',{
        pagination: {
          el: '.swiper-pagination'
        },
        loop:true,
        autoplay:true
      })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >
  .romance
    width 100%
    overflow hidden
    .swiper-container
        width 100%
        height 223px
        .swiper-wrapper
          
          height 100%
          .swiper-slide
            display flex
            overflow hidden
            width 100%
            height 100%
            img 
              display inline-block
              width 100%
              height 100%
    .PageContent
      width 100%
      height 31px
      padding 16px
      img 
        width 28px
        height 28px
    .dayrecBox
      width 100%
      height 185px
      .indexModelTitle
        width 100%
        height 58px
        color #333
        font-size 17px
        padding 18px 16px
        .titleCon
          img 
            width 11px
            height 23px
            vertical-align middle
      
        
 
      
      
      
</style>
