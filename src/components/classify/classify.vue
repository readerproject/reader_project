<template>
  <div id="classify">
    <div class="classifyItem" >
      <span>
        <img src="../../common/images/icon/small/bg_1_type_d.png" alt="">
      </span>
      <span>分类</span>
    </div>
    <div class="classifyItem" @click="$router.push('/ranking')">
      <span>
        <img src="../../common/images/icon/small/bg_2_rank_d.png" alt="">
      </span>
      <span>排行</span>
    </div>
    <div class="classifyItem">
      <span>
        <img src="../../common/images/icon/small/bg_4_end_d.png" alt="">
      </span>
      <span>完结</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// hello
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #classify
    display flex
    justify-content:space-around
    width 100%
    height 47px
    font-size 12px
    text-align center
    .classifyItem
      width 40px
      height 47px
      img 
        width 40px
        height 32px


 
</style>
