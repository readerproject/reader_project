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
      <Classify/>
      <div class="PageContent">
        <div>
          <img src="../../common/image/icon/small/laba.png" alt="">
          <p></p>
        </div>
      </div>
      <div class="dayrecBox1">
        <span class="indexModelTitle">
          <span class="titleCon">
            <img src="../../common/image/icon/small/title2.png" alt="">
          </span>
          <span>今日必读</span>
          
          <Booklist/>
          
        </span>
        
      </div>
      <div class="dayrecBox2">
        <div class="indexModelTitle">
          <span class="titleCon">
            <img src="../../common/image/icon/small/title2.png" alt="">
          </span>
          <span>本周强推</span>
        </div>
        <div class="pushList">
          <div class="ui-link">
            <img src="../../common/image/item/153cb3a4bd6947b928a220e7eb18eaff9e9b.jpg" alt="">
            <p class="novelName">我们好像在哪见过</p>
            <p class="authorName">枣吞囵囫</p>
          </div>
          <div class="ui-link">
            <img src="../../common/image/item/153cb3a4bd6947b928a220e7eb18eaff9e9b.jpg" alt="">
            <p class="novelName">我们好像在哪见过</p>
            <p class="authorName">枣吞囵囫</p>
          </div>
          <div class="ui-link">
            <img src="../../common/image/item/180575c8985459251a2f32d961c7349e194efad.jpg" alt="">
            <p class="novelName">我们好像在哪见过</p>
            <p class="authorName">枣吞囵囫</p>
          </div>
          <div class="ui-link">
            <img src="../../common/image/item/76be0bf82e4d729de228990020dee116.png" alt="">
            <p class="novelName">我们好像在哪见过</p>
            <p class="authorName">枣吞囵囫</p>
          </div>
          <div class="ui-link">
            <img src="../../common/image/item/86142c5e0d4181cfa2f7918f2c2d7334703865.jpg" alt="">
            <p class="novelName">我们好像在哪见过</p>
            <p class="authorName">枣吞囵囫</p>
          </div>
          <div class="ui-link">
            <img src="../../common/image/item/990121cd393d038f2aa2f47c5931d2a0ee80bd2.jpg" alt="">
            <p class="novelName">我们好像在哪见过</p>
            <p class="authorName">枣吞囵囫</p>
          </div>
          <div class="ui-link">
            <img src="../../common/image/item/a32a6e528f13ef5efd331508211e2b67.jpg" alt="">
            <p class="novelName">我们好像在哪见过</p>
            <p class="authorName">枣吞囵囫</p>
          </div>
          <div class="ui-link">
            <img src="../../common/image/item/a984eb1f52c4c20de28e8c7fa9b09cf8.png" alt="">
            <p class="novelName">我们好像在哪见过</p>
            <p class="authorName">枣吞囵囫</p>
          </div>
        </div>
        
      </div>
  </section>

</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  import Classify from '../../components/Classify/Classify'
  import Booklist from '../../components/Booklist/Booklist'
  export default {
    components:{
      Classify,
      Booklist
    },
    mounted(){
      this.$nextTick(() => {
        new Swiper('.swiper-container',{
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
    .dayrecBox1
      width 100%
      height 158px
      .indexModelTitle
        width 100%
        color #333
        font-size 17px
        margin 18px 16px
        .titleCon
          img 
            width 11px
            height 23px
            vertical-align middle
      .pushList
        width 100%
        height 297px 
        background pink 
        box-sizing border-box
        padding 14px
    .dayrecBox2
      width 100%
      height 386px
      .indexModelTitle
        width 100%
        color #333
        font-size 17px
        margin 18px 16px
        .titleCon
          img 
            width 11px
            height 23px
            vertical-align middle
      .pushList
        width 100%
        height 297px 
        
        box-sizing border-box
        padding 0 14px
        display flex
        justify-content space-between
        flex-wrap wrap
        .ui-link
          width 70px
          height 155px
          img 
            width 70px
            height 93px
            
          .novelName
            font-size 13px
            margin 6px 0
          .authorName
            font-size 13px
            color #8F8F9E
</style>
