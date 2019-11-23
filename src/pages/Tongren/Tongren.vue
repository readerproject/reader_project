<template>
  <div id="wrapper">
    <!-- 顶部轮播 -->
      <SwiperHeader />
    <p class="line"></p>
    <!-- 本周强推 -->
      <StrongPushaaa />
    <p class="line"></p>
    <!-- 新书精选 -->
      <NewBookaaa />
    <p class="line"></p>
    <!-- 完结推荐 -->
      <HaveDone />
    <p class="line"></p>
    <!-- 底部 -->
    <div id="footer"></div>
  </div>
</template>


<script type="text/ecmascript-6">
  
  import SwiperHeader from '../../components/SwiperHeader/SwiperHeader'
  import StrongPushaaa from '../../components/StrongPushaaa/StrongPushaaa'
  import NewBookaaa from '../../components/NewBookaaa/NewBookaaa'
  import HaveDone from '../../components/HaveDone/HaveDone'

  export default {
    components:{SwiperHeader,StrongPushaaa,NewBookaaa,HaveDone}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >
.wrapper
    width 100% !important
    font-size 12px
    background #fff
  /* 顶部轮播 */
 //间隔空隙
  .line 
    height 8px
    background rgba(206,206,206,0.1)
  //本周强推
  //新书
 //完结
  </style>
