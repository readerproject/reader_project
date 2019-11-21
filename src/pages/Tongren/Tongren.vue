<template>
  <div id="wrapper">
    <!-- 顶部轮播 -->
    <div class="headerBgBox">
      <div class="indexTopBanner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><div class="banner-box"><a class="ui-link" href="#"><img src="../../assets/image/swiper/guanyu.jpg" alt="1"></a></div></div>
            <div class="swiper-slide"><div class="banner-box"><a class="ui-link" href="#"><img src="../../assets/image/swiper/huizhan.jpg" alt="2"></a></div></div>
            <div class="swiper-slide"><div class="banner-box"><a class="ui-link" href="#"><img src="../../assets/image/swiper/shaonian.jpg" alt="3"></a></div></div>
          </div> 
        </div>  
      </div>    
    </div>
    <p class="line"></p>
    <!-- 本周强推 -->
    <div class="strongPush">
      <div class="indexModelTitle">
        <span class="titleCon"></span>
        <span>本周强推</span>
      </div>
      <ul></ul>
    </div>
    <p class="line"></p>
    <div class="newBook"></div>
    <p class="line"></p>
    <div class="newBook"></div>
    <p class="line"></p>
    <div class="vipChange"></div>
    <div id="footer"></div>
  </div>
</template>


<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'

  export default {
    async mounted(){
    this.$nextTick(() => { //$nextTick代表下次页面全部渲染完毕
          new Swiper('.swiper-container', {
            autoplay:true,
            loop: true,
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >
  /* 顶部轮播 */
  .headerBgBox  
    width 100%
    .indexTopBanner
      // margin-top 45px
      height 226px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            width 100%
            height 100%
            .banner-box
              width 100%
              height 100%
              a 
                height 100%
                width 100%
                img
                  display inline-block
                  width 100%
                  height 226px
  //间隔空隙
  .line 
    height 14px
    background rgba(206,206,206,0.1)
  //本周强推
  .strongPush            
    width 100%
    height 100%
    .indexModelTitle
      box-sizing border-box
      padding 18px 16px
      width 100%
      height 58px 
      .titleCon
        width 11px
        height 23px
        float left 
        background url(https://m.gongzicp.com/h5/img/title.png) 0 0 no-repeat
        background-size 100% 100%
        span 
          font-size 22px 
  
</style>
