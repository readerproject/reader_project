<template>
  <div class="rankContainer">
    <Ranking_top/>
    <p class="line"></p>
    <div class="rankingContainer">
      <div class="rankLeft">
        <ul class="UlLeft" >
          <li class="rankItem" v-for="(item,index) in rankArr" :key="index" @click="changeIndex(index)" :class="{active: navIndex === index}">
            <p>{{item}}</p>
          </li>
        </ul>
      </div>
      <div class="rankRight">
        <p class="rankHint">
          <img src="../../common/images/icon/small/rankicon.png" alt="">订阅收益排行
        </p>
        <div class="msgTitleBox">
          <div class="checked">
            <router-link to="/ranking/yesterday">昨日</router-link>
          </div>
          <div class="checked">
            <router-link to="/ranking/hebdomad">7天</router-link>
          </div>
          <div class="checked">
            <router-link to="/ranking/thirtydays">30天</router-link>
          </div>
        </div>
        <div class="mssBox"></div>
        <router-view></router-view>
      </div>
    </div>
    
  </div>
</template>

<script type="text/ecmascript-6">
  import Ranking_top from '../../components/Ranking_top/Ranking_top'
  export default {
      data(){
        return{
          navIndex:0,
          rankArr:[]
        }
      },
     components: {
      Ranking_top
    },
    methods: {
      changeIndex(index){
        this.navIndex = index
      }
    },
    mounted(){
      this.rankArr=[
        '畅销榜',
        '人气榜',
        '完结榜',
        '打赏榜',
        '勤奋榜',
        '土豪榜'] 
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .rankContainer
    width 100%
    height 100%
    overflow hidden
    .line
      width 100%
      height 7px
    .rankingContainer
      display flex
      overflow hidden
      width 100%
      height calc(100vh - 35px)
      .rankLeft
        width 70px
        background #FAFAFA
        .UlLeft
          width 100%
          .rankItem
            text-align center
            height 35px
            line-height 35px
            &.active
              border-left 4px solid #26C2BF
              color #26C2BF
              background #fff
            p
              width 66px
              margin 0 auto 
      .rankRight
        width 305px
        .rankHint
          color #7E7E7E
          width 290px
          height 25px
          line-height 25px
          padding-left 16px
          background #FAFAFA
          img 
            width 17px
            height 12px
            padding-right 6px
        .msgTitleBox
          width 100%
          height 37px
          line-height 37px
          font-size 14px
          box-sizing border-box
          padding 0 55px
          color #333
          .checked
            font-family Tabhoma
            float left 
            width 33.33333%
            text-align center
            a
              display block
              position relative
              &.router-link-active
                &::after
                  content ''
                  position absolute
                  left 50%
                  bottom 7px
                  width 35px
                  height 2px
                  transform translateX(-50%)
                  background #02a774
        .mssBox     
          width 100%
          height 15px   
</style>
