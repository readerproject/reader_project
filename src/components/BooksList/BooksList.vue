<template>
  <div class="book_list1">
    <div class="swiper-wrapper1" v-for="(book, index) in books" :key="index">
      <div class="swiper-slide1" >
        <div class="book_left">
          <img class="book_img" :src="book.novel_cover" alt="">
        </div>
        <div class="book_right1">
            <section class="novelName">
              <h4>{{book.novel_name}}</h4>
            </section>
            <section class="novelIntroduce">
              <h5>{{book.novel_tag_txt}}</h5>
            </section>
            <section class="tagBox">
              <span class="authorName">锦文小说</span>
              <span class="novelLabel">综合</span>
              <span class="novelLabel">搞笑</span>
            </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    mounted(){
       this.$store.dispatch('getBooksAction')
    },
    computed: {
      ...mapState({
        books:state => state.books
      }),
     
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
    .book_list1
      .swiper-wrapper1
        width 100%
        height 130px
        .swiper-slide1
          display flex
          width 305px
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
            display flex
            flex-direction: column
            justify-content: space-around
            padding  6px
            .novelName
              width 100%
              height 19px
              font-size 14px
              color #333
              font-family Arail
              font-weight:bold
            .novelIntroduce
              width 100%
              height 19px
              margin 6px 0
              font-size 12px
              color rgba(166,166,182,1)
            .tagBox
              wodth 100%
              box-sizing border-box
              padding-right 10px
              .authorName
                float left
                overflow hidden
                font-size 12px
                color rgba(166,166,182,1)
              .novelLabel
                float right
                width 20px
                height 17px
                line-height 17px
                padding 0 7px
                font-size 10px
                background #F3F3F3
                border-radius 40%
                margin-left 3px
                color rgba(166,166,182,1)
 
</style>
