<template>
  <div class="daryceBox">
    <div class="todayReader">
      <span class="titleCon"></span>
      <span class="today">今日必读</span>
    </div>
    <div class="card_content swiper-container2">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="booksImg">
            <img src="../../common/images/swiper/4f8027546d6a0e30fbe69f1b712e50e7.jpg" />
          </div>
          <div class="novelRight">
            <div class="novelName">
              <span>经久</span>
            </div>
            <p class="novelIntroduce">
              现代刑侦，稳中带皮年下攻X外冷内热淡定受
            </p>
            <div class="tagBox">
              <span class="authorName">卿淅</span>
              <span class="novelLabel">年下</span>
              <span class="novelLabel">推理</span>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="booksImg">
            <img
              src="../../common/images/swiper/153cc96455475f245fd0479c125ed1cf10e9.jpg"
            />
          </div>
          <div class="novelRight">
            <div class="novelName">
              <span>经久</span>
            </div>
            <p class="novelIntroduce">
              现代刑侦，稳中带皮年下攻X外冷内热淡定受
            </p>
            <div class="tagBox">
              <span class="authorName">卿淅</span>
              <span class="novelLabel">年下</span>
              <span class="novelLabel">推理</span>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="booksImg">
            <img
              src="../../common/images/swiper/6310ad634445991abffc1f88c62451c5.jpg"
            />
          </div>
          <div class="novelRight">
            <div class="novelName">
              <span>经久</span>
            </div>
            <p class="novelIntroduce">
              现代刑侦，稳中带皮年下攻X外冷内热淡定受
            </p>
            <div class="tagBox">
              <span class="authorName">卿淅</span>
              <span class="novelLabel">年下</span>
              <span class="novelLabel">推理</span>
            </div>
          </div>
        </div>
      </div> 
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  mounted(){
    new Swiper('.swiper-container2',{
      loop : true,
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.daryceBox
  width 100%
  height 185px
  overflow hidden
  .todayReader
    width 100%
    height 58px
    padding 18px 16px
    box-sizing border-box
    .titleCon
      float left
      width 11px
      height 23px
      background url(https://m.gongzicp.com/h5/img/title.png) 0 0 no-repeat
      background-size 100% 100%
    .today
      width 100%
      font-size 16px
      line-height 23px
      font-weight 500
  .card_content
    width 100%
    height 127px
    .swiper-slide
      display flex
      width 100%
      height 95px
      .booksImg
        img
          margin 0 15px
          width 71px
          height 95px
      .novelRight
        margin-left 5px
        display flex
        flex-direction column
        justify-content space-around
        span
          font-size 16px
          color #333
      .novelIntroduce
        font-size 12px
        height 25px
        line-height 25px
        color #8F8F9E
        width 229px
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
      .tagBox
        .authorName
          float left
          font-size 12px
        .novelLabel
          color #8D8D8D
          width 43px
          height 20px
          line-height 20px
          text-align center
          font-size 12px
          float right
          margin 0 2px 
          padding 0 7px
          background rgba(194,194,194,0.2)
          border-radius 50%
</style>
