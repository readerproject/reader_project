<template>
  <div class="newBook">
    <div class="indexModelTitle">
      <span class="titleCon"></span>
      <span class="push">新书上架</span>
    </div>
    <ul class="newBookList">
      <li>
        <a href="" class="bookContent">
          <img class="booksImg" src="../../common/images/swiper/4f8027546d6a0e30fbe69f1b712e50e7.jpg" />
          <div class="novelRightBox">
            <p class="novelName">经久</p>
            <p class="novelIntroduce">小少爷的摸爬滚打成(爱)长(情)史</p>
            <div class="tagBox">
              <span class="authorName">青小雨</span>
              <span class="novelLabel">都市</span>
              <span class="novelLabel">年上</span>
              <span class="novelLabel">32.5万</span>
            </div>
          </div>
        </a>
      </li>
      <li>
        <a href="" class="bookContent">
          <img class="booksImg" src="../../common/images/swiper/4f8027546d6a0e30fbe69f1b712e50e7.jpg" />
          <div class="novelRightBox">
            <p class="novelName">经久</p>
            <p class="novelIntroduce">小少爷的摸爬滚打成(爱)长(情)史</p>
            <div class="tagBox">
              <span class="authorName">青小雨</span>
              <span class="novelLabel">都市</span>
              <span class="novelLabel">年上</span>
              <span class="novelLabel">32.5万</span>
            </div>
          </div>
        </a>
      </li>
      <li>
        <a href="" class="bookContent">
          <img class="booksImg" src="../../common/images/swiper/4f8027546d6a0e30fbe69f1b712e50e7.jpg" />
          <div class="novelRightBox">
            <p class="novelName">经久</p>
            <p class="novelIntroduce">小少爷的摸爬滚打成(爱)长(情)史</p>
            <div class="tagBox">
              <span class="authorName">青小雨</span>
              <span class="novelLabel">都市</span>
              <span class="novelLabel">年上</span>
              <span class="novelLabel">32.5万</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
    <div class="changeMoreBox">
      <a href="javascript::" class="changeBtn">
        <i class="iconfont icon-quanbu"></i>
        <span>全部</span>
      </a>
      <span class="changeBtn">
        <i class="iconfont icon-huanyihuan"></i>
        <span>换一换</span>
      </span>
    </div> 
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .newBook
    width 100%
    height 431px
    .indexModelTitle
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
      .push
        width 100%
        font-size 16px
        line-height 23px
        font-weight 500
    .newBookList
      width 100%
      height 326px
      li
        margin-bottom 10px
        .bookContent
          display flex
          width 100%
          height 95px
          .booksImg
            margin 0 15px
            width 71px
            height 95px
          .novelRightBox
            margin-left 5px
            .novelName
              font-size 15px
              color #333
            .novelIntroduce
              margin  6px 0
              color rgba(166,166,182,1)
              font-size 12px
              height 37.5px
              width 261px
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
            .tagBox
              .authorName
                float left
                font-size 12px
              .novelLabel
                color #333
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
    .changeMoreBox
      display flex
      justify-content space-between
      padding 0 16px 6px
      height 46px
      .changeBtn
        display inline-block
        width 163px
        height 40px
        background rgba(211,211,211,0.2)
        border-radius 34px
        text-align center
        line-height 40px
        font-size 16px
        color #333
</style>


