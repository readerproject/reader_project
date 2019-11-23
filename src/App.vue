<template>
  <div>
     <HeaderTitle v-if="$route.meta.isShowTitle"/>
     <HeaderGuide v-if="$route.meta.isShowHeader"/>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import HeaderGuide from './components/HeaderGuide/HeaderGuide'
  export default {
     components:{
       HeaderGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>

