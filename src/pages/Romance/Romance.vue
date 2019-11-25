<template>
  <section class="romance">   
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:">
              <img src="../../common/images/swiper/guanyu.jpg" alt="">
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:">
              <img src="../../common/images/swiper/huizhan.jpg" alt="">
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:">
              <img src="../../common/images/swiper/shaonian.jpg" alt="">
            </a>
          </div>
        </div>
      </div>
      <Classify/>
      <div class="PageContent">
        <div>
          <img src="../../common/images/icon/small/laba.png" alt="">
          <p></p>
        </div>
      </div>
      <div class="dayrecBox1">
        <span class="indexModelTitle">
          <span class="titleCon">
            <img src="../../common/images/icon/small/title2.png" alt="">
          </span>
          <span>今日必读</span>
          
          <Booklist/>
          
        </span>
        
      </div>
      <div class="dayrecBox2">
        <div class="indexModelTitle">
          <span class="titleCon">
            <img src="../../common/images/icon/small/title2.png" alt="">
          </span>
          <span>本周强推</span>
        </div>
        <div class="pushList" @click="$router.push('/novaldetail')">
          <div class="ui-link" v-for="(book,index) in books" :key="index">
            <img :src="book.novel_cover" alt="">
            <p class="novelName">{{book.novel_name}}</p>
            <p class="authorName">{{book.novel_author}}</p>
          </div>
        </div>
        
      </div>
  </section>

</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
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
      }),
      this.$store.dispatch('getBooksAction')
    },
    computed: {
      ...mapState({
        books:state => state.books
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
        overflow hidden
        .ui-link
          width 70px
          height 155px
          img 
            width 70px
            height 93px
          .novelName
            font-size 13px
            margin 6px 0
            white-space nowrap
            text-overflow: ellipsis
            overflow hidden
          .authorName
            font-size 13px
            color #8F8F9E
            white-space nowrap
            text-overflow: ellipsis
            overflow hidden
</style>
