<template>
  <div class="book_list swiper-container2 ">
    <div class="swiper-wrapper ">
      <div class="swiper-slide">
        <div class="book_left">
            <img class="book_img" src="../../common/images/swiper/153cc96455475f245fd0479c125ed1cf10e9.jpg" alt="">
          </div>
          <div class="book_right">
            <section class="novelName">
              <h4>鬼斧</h4>
            </section>
            <section class="novelIntroduce">
              <h5>我不打人，打神</h5>
            </section>
            <section class="tagBox">
              <p class="authorName">何所尽</p>
              <p class="novelLabel">综合</p>
              <p class="novelLabel">搞笑</p>
            </section>
          </div>
      </div>
      <div class="swiper-slide">
        <div class="book_left">
          <img class="book_img" src="../../common/images/swiper/4f8027546d6a0e30fbe69f1b712e50e7.jpg" alt="">
        </div>
        <div class="book_right">
          <section class="novelName">
            <h4>鬼斧</h4>
          </section>
          <section class="novelIntroduce">
            <h5>我不打人，打神</h5>
          </section>
          <section class="tagBox">
            <p class="authorName">何所尽</p>
            <p class="novelLabel">综合</p>
            <p class="novelLabel">搞笑</p>
          </section>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="book_left">
          <img class="book_img" src="../../common/images/swiper/6310ad634445991abffc1f88c62451c5.jpg" alt="">
        </div>
        <div class="book_right">
          <section class="novelName">
            <h4>鬼斧</h4>
          </section>
          <section class="novelIntroduce">
            <h5>我不打人，打神</h5>
          </section>
          <section class="tagBox">
            <p class="authorName">何所尽</p>
            <p class="novelLabel">综合</p>
            <p class="novelLabel">搞笑</p>
          </section>
        </div>
      </div>
      
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  export default {
    mounted(){
      this.$nextTick(() => {
        new Swiper('.swiper-container2',{
          loop:true,
          pagination: {
            el: '.swiper-pagination'
          }
        })
      })
    
  }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .book_list
    width 100%
    height 158px
    .swiper-pagination-bullets
      position absolute
      bottom 86px
    .swiper-wrapper
      width 100%
      height 130px
      margin 22px
      display flex
      .swiper-slide
        display flex
        width 240px
        height 95px
        bottom border -1px(#f1f1f1)
        border-radius 10px
        .book_left
          img 
            width 71px
            height 95px
            border-radius 10px 0 0 10px
        .book_right
          border-radius 0 10px 10px 0
          background #eee
          width 229px
          display flex
          flex-direction: column
          justify-content: space-around
          padding  6px
          .novelName
            font-size 14px
            color #333
            font-family Arail
            font-weight:bold
          .novelIntroduce
            font-size 12px
          .tagBox
            .authorName
              float left
              overflow hidden
              font-size 12px
            .novelLabel
              float right
              font-size 10px
              background #F3F3F3
              border-radius 30%
              padding 8px
              margin 2px

</style>
