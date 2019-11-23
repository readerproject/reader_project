<template>
  <div class="headerBgBox">
      <div class="indexTopBanner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><div class="banner-box"><a class="ui-link" href="#"><img src="../../common/images/swiper/guanyu.jpg" alt="1"></a></div></div>
            <div class="swiper-slide"><div class="banner-box"><a class="ui-link" href="#"><img src="../../common/images/swiper/huizhan.jpg" alt="2"></a></div></div>
            <div class="swiper-slide"><div class="banner-box"><a class="ui-link" href="#"><img src="../../common/images/swiper/shaonian.jpg" alt="3"></a></div></div>
          </div> 
        </div>  
      </div>    
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

export default {
   async mounted(){
    this.$nextTick(() => { 
          new Swiper('.swiper-container', {
            autoplay:true,
            loop: true,
        })
        })
        
    }
}
   

</script>
<style lang='stylus' rel='stylesheet/stylus' >
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
  
</style>