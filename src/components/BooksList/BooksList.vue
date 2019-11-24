<template>
  <div class="book_list1">
    <div class="swiper-wrapper1">
      <div class="swiper-slide1">
        <div class="book_left">
            <img class="book_img" src="../../common/image/swiper/153cc96455475f245fd0479c125ed1cf10e9.jpg" alt="">
          </div>
          <div class="book_right1">
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
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
    .book_list1
      .swiper-wrapper1
        width 100%
        height 130px
        display flex
        .swiper-slide1
          display flex
          width 240px
          height 95px
          bottom border -1px(#f1f1f1)
          margin-left 16px
          display flex
          border-radius 10px
          .book_left
            img 
              width 56px
              height 74px
              border-radius 5px 0 0 5px
          .book_right1
            width 229px
            height 62px
            border-radius 0 10px 10px 0
            background #eee
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
