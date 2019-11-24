<template>
  <div class="wrapper">
    <!-- 固定头部 -->
    <div class="signUpTop">
      <a href="#" class="ui-link">
        <img src="../../common/images/icon/back.png" alt="" >
      </a>
      <span>全部</span>
    </div>
     <!-- 主体 -->
    <div class="mescrollParentBox contentBox">
      <div class="novelfilterPageContent">
        <ul class="typeBox">
          <li class="typeBoxli">
            <span class="typeId">全部</span>
            <div class="titscrollBox">
              <div class="innerScrollBox">
                <span class="typeId">动漫</span>
              </div>
            </div>
          </li>
        </ul>

      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
}

</script>
<style lang='stylus' rel='stylesheet/stylus' >
  .wrapper
    width 100% !important
    font-size 12px
    background #fff
    //固定头部
    .signUpTop
      width 100%
      height 36px
      line-height 36px
      font-size 16px
      color #333
      text-align center
      position relative
      font-weight 900 
      .ui-link
        position absolute
        left 18px
        top 4px
        img
          width 22px
          height 20px
    
</style>