<template>
  <div id="appContainer">
    <HeaderTitle/>
   <div class="tab">
      <div class="tab-item">
        <router-link to="/original">原创</router-link>
      </div>
      <div class="tab-item" >
        <router-link to="/romance">言情</router-link>
      </div>
      <div class="tab-item" >
        <router-link to="/tongren">同人</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import HeaderTitle from './components/HeaderTitle/HeaderTitle'
  export default {
     components:{
       HeaderTitle
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #appContainer
    .tab
      width 322px
      height 50px
      display flex
      .tab-item
        margin 0 20px
        height 50px
        line-height 50px
</style>

