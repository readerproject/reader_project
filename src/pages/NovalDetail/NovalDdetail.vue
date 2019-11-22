<template>
  <div class="novalDetailContainer">
     <div class="header">
       <span class="iconfont icon-gongxiangtubiaozhuangtaileicaozuolei59" @click="$router.back()"></span>
       <span class="iconfont icon-gengduo1"></span>
    </div>
    <div class="detailheader">
      <div class="boxbg">
        <div class="mask"></div>
        <img src="https://resourcecp.oss-cn-beijing.aliyuncs.com/uploads/20190331/ea375d030733c620a315f67012e4e6b8.jpg" alt="">
      </div>
      <div class="detailContent">
        <div class="detailtop"> 
          <img src="https://resourcecp.oss-cn-beijing.aliyuncs.com/uploads/20190331/ea375d030733c620a315f67012e4e6b8.jpg" alt="">
          <div class="detailtopMsg">
            <p>云开见月明</p>
             <span>连载</span>
          </div>
          <div class="authourname">
             <p>明鹿</p>
             <img src="../../common/images/icon/vipauthor.png" alt="">
           </div>
           <div class="numberbox">
             <span>52420字</span>
             <span>CP145832</span>
             <span>2277点击</span>
           </div>
           <div class="icontext">
             <span>言情</span>
             <span>现代</span>
           </div>
        </div>       
        <div class="detailbottom">
          <ul class="novalsatuaction">
            <li>
              <p>31</p>
              <span>收藏</span>
            </li>
             <li>
              <p>14</p>
              <span>海星</span>
            </li>
             <li>
              <p>28</p>
              <span>评论</span>
            </li>
             <li>
              <p>-</p>
              <span>打赏</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="rederBox">
      <span class="readnow">立即阅读</span>
      <span class="cancle">取消收藏</span>
    </div>
    <div class="novalContent">
      <div class="novalIntradution">
            <div class="intraductionParagraph" >
                <p>云开第一次见月明，喂了她一个麻核桃；第二次见面他养的大象喷了她一身水。一个差点叫他舅舅的毛丫头，最后让他情根深重。</p>
                <p></p>
                <p>月明遭到恶搞，以为两人必是不死不休，可他教她学英文，带她上山下河的玩耍，她觉得这个差点成了她舅舅的人，也是挺好的。</p>
                <p></p>
                <p></p>
                <p>本来想给刘子业同学一个交待，但土司家的傻儿子呼声太高了，只能先安排上，我真是一个善解人意的好太太。</p>
                <p></p>                
                <img   class="isToggle" src="../../common/images/icon/zhankai.png" alt="展开" style="">
            </div>
          </div>
       <div class="label">
         <p>甜宠</p>
         <p>乡士</p>
         <p>欢喜冤家</p>
       </div>
    </div>
    <div class="navText">
        <p>查看目录</p>
        <span class="content">18 第18章</span>
        <i class="iconfont icon-gengduo"></i>
    </div>
    <div class="ahtourInfo">
        <img src="../../common/images/icon/nohead.png" alt="">
        <span class="content">明鹿</span>
        <i class="iconfont icon-gengduo"></i>
    </div>
    <div class="comment">
      <img src="../../common/images/icon/small/title2.png" alt="">
      <span >评论区</span>
      <i class="iconfont icon-gengduo"></i>
    </div>
    <Comments/>
  </div>
  </div>
   
</template>

<script type="text/ecmascript-6">
import Comments from '../../components/Comments/Comments'
  export default {
    components:{
      Comments
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .novalDetailContainer
    position relative
    .header
      width 100%
      height 212px
      text-align center
      z-index 20
      padding-top 14px
      .icon-gongxiangtubiaozhuangtaileicaozuolei59
        margin-left 15px
        float left
        height 34px
        text-align center
        line-height 30px
        color #fff
        font-size 30px
      .icon-gengduo1
        float right 
        margin-right 15px
        height 34px
        text-align center
        line-height 30px
        color #fff
        font-size 30px
    .detailheader
      .boxbg
        position absolute
        top 0px
        right 0px
        background #fff
        width 100%
        height 212px
        font-size 15px
        box-sizing border-box
        border-radius 1px
        .mask
          width 100%
          height 100%
          background rgba(0,0,0,0.3)
          position absolute
          top 0
          left 0
          z-index 1
          background linear-gradient(to bottom, rgba(0,0,0,.4) 0%,rgba(0,0,0,0) 100%)
        img
          width 66%
          height 100%
          overflow hidden
          filter blur(0.18rem)
          z-index 0
          position relative
          margin 0 auto
          display block
    .detailContent
      .detailtop
          margin 20px
          position absolute
          top 50px
          left 0
          right 0
          z-index 2
          background rgba(255,255,255,.65)
          border-radius 7px
          overflow hidden
          img
            width 104px
            height 140px
            border-radius 7px
            padding 3px
            float left
          .detailtopMsg
            height 24px
            float left 
            margin 15px 10px
            p
              display inline-block
              font-size 18px
              color #333
            span 
              height  14px
              font-size 11px
              color #959595
              border-radius 10px
              white-space nowrap
              border 1px solid #959595
              color #959595
              line-height 14px
              display inline-block
              padding 2px
              margin-left 5px
          .authourname
              left 0px
              font-size 12px
              color #959595
              line-height 18px
              margin-top 5px
              display flex
              position relative
              left -130px
              top 40px
              right 0

              p
               display inline-block
              img
                width 10px
                height 8px
            .numberbox
                position relative
                left -130px
                top 50px
                right 0
                font-size 11px
                color #959595
                display flex
                justify-content space-between
                white-space nowrap
                span 
                  &:nth-child(2)
                     margin 0 10px
            .icontext
                position relative
                left -130px
                top 70px
                right 0
                font-size 11px
                color #959595
                display flex
                justify-content space-between
                white-space nowrap
                span 
                   margin 0 10px
      .detailbottom
        width 100%
        margin-top 12px
        .novalsatuaction
          border-color red
          display flex
          justify-content space-between
          margin 0 25px
          bottom 20px
          font-size 14px
          li
            span
              line-height 22px
              text-align center
    .rederBox
      width 100%
      display flex
      justify-content space-between
      .readnow
        width 168px
        color #fff
        font-size 15px
        height 40px
        line-height 40px
        text-align center
        margin 20px 10px 20px 20px
        border-radius 7px
        background-color #26c2bf
      .cancle
        width 168px 
        color #fff
        font-size 15px
        height 40px
        line-height 40px
        text-align center
        margin 20px 20px 20px 0
        border-radius 7px
        background-color #999999
    .novalContent
       width 100%  
       padding-bottom 5px
       border-bottom 5px solid rgba(206,206,206,0.1)
      .novalIntradution
        margin 10px 10px
        position relative
        .intraductionParagraph
          display block
          overflow hidden
          font-size 14px 
          color #333
          line-clamp 3
          max-height 60px 
          p
           line-height 20px
         
        .isToggle      
          position absolute
          bottom 0
          right 0     
          z-index 1
          width 44px
          height 18px
      .label
        display flex
        margin 10px 10px 
        p 
         height 17px
         line-height 17px
         margin 5px 5px
         border 1px solid #eee
         border-radius 10px
         background-color #eee
         font-size 10px
         color #8D8D8D
         padding 2px 4px
    .navText
      width 100%
      height 60px
      box-sizing border-box 
      border-bottom 5px solid rgba(206,206,206,0.1)
      p
        font-size 15px
        line-height 60px 
        display inline-block 
        margin-left 10px
      span 
        font-size 11px
        line-height 60px 
      .content
        margin  0 10px  
      i
       line-height 60px 
       font-size 15px
      .icon-gengduo
        float right
        color  #333
        margin-right 15px
    .ahtourInfo
      img
         width 60px
         height 60px
         border-radius 50%
         vertical-align middle
         margin 0px 10px
      span 
        font-size 11px
        line-height 60px 
        margin-left 10px
        vertical-align middle
      i
       line-height 60px 
       font-size 15px
      .icon-gengduo
        float right
        color  #333
        margin-right 15px
    .comment
      margin 5px 10px
      img 
        width 11px
        height 23px
        vertical-align middle
      span 
        font-size 11px
        line-height 40px 
        margin-left 10px
        vertical-align middle
      i
        line-height 40px 
        font-size 15px
      .icon-gengduo
        float right
        color  #333
        margin-right 10px
</style>
