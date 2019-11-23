<template>
 <div class="newBook">
      <div class="indexModelTitle">
        <span class="titleCon"></span>
        <span class="block-item">新书精选</span>
      </div>
      <div class="strongPushList">
        <div class="swiper-container-newBook">
          <ul class="swiper-wrapper">
            <li class="swiper-slide"><a class="ui-link" href="#"><img src="../../common/images/swiper/shaonian.jpg" alt="1"></a></li>
            <li class="swiper-slide"><a class="ui-link" href="#"><img src="../../common/images/swiper/shaonian.jpg" alt="1"></a></li>
            <li class="swiper-slide"><a class="ui-link" href="#"><img src="../../common/images/swiper/shaonian.jpg" alt="1"></a></li>
            <li class="swiper-slide"><a class="ui-link" href="#"><img src="../../common/images/swiper/shaonian.jpg" alt="1"></a></li>
            <li class="swiper-slide"><a class="ui-link" href="#"><img src="../../common/images/swiper/shaonian.jpg" alt="1"></a></li>
            <li class="swiper-slide"><a class="ui-link" href="#"><img src="../../common/images/swiper/shaonian.jpg" alt="1"></a></li>
            <li class="swiper-slide"><a class="ui-link" href="#"><img src="../../common/images/swiper/shaonian.jpg" alt="1"></a></li>
            <li class="swiper-slide"><a class="ui-link" href="#"><img src="../../common/images/swiper/shaonian.jpg" alt="1"></a></li>
            <li class="swiper-slide"><a class="ui-link" href="#"><img src="../../common/images/swiper/shaonian.jpg" alt="1"></a></li>
          </ul> 
        </div> 
      </div> 
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

export default {
  async mounted(){
    this.$nextTick(() => { //$nextTick代表下次页面全部渲染完毕
        new Swiper('.swiper-container-newBook', {
            slidesPerView : 4,
            centeredSlides :false
        })
       
      })
    }
}

</script>
<style lang='stylus' rel='stylesheet/stylus' >
 .newBook
    width 100%
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
      .block-item 
        line-height 22px
    .strongPushList
      width 100%
      box-sizing border-box
      padding 0 16px 16px 
      .swiper-container-newBook
        margin 0 auto 
        //position relative
        overflow hidden
        list-style none 
        .swiper-wrapper
          width 100%
          height 100%
          display flex
          // flex-wrap nowrap
          justify-content space-between
          //position relative
          .swiper-slide
            width  25% 
            height 100%
            a 
              height 100%
              width 100%
              img
                float left
                width 70px
                height 93px
  
</style>