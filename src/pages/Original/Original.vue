<template>
  <section id="original">
    <nav class="original_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:" class="loop">
              <div class="loop-item">
                <img src="../../common/images/swiper/guanyu.jpg">
              </div>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="loop">
              <div class="loop-item">
                <img src="../../common/images/swiper/shaonian.jpg">
              </div>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="loop">
              <div class="loop-item">
                <img src="../../common//images/swiper/huizhan.jpg">
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
    <Type4 />
    <DaryceBox />
    <StrongPush />
    <NewBook />
  </section>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  import Type4 from '../../components/Type4/Type4'
  import DaryceBox from '../../components/DaryceBox/DaryceBox'
  import StrongPush from '../../components/StrongPush/StrongPush'
  import NewBook from '../../components/NewBook/NewBook'
  import {getNovalList} from '../../api'
  export default {
    components: {Type4, DaryceBox,StrongPush,NewBook},
   async mounted(){
      new Swiper('.swiper-container',{
        loop : true,
        autoplay:true
      })

      let result = await getNovalList()
      if (result.code===0) {
         console.log(result)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #original  //首页
    width 100%
    .original_nav
      width 100%
      height 200px
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            height 100%
            .loop-item
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0
              img
                display inline-block
                width 100%
                height 222px
</style>
