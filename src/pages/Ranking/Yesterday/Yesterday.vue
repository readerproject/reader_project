<template>
  <div class="bookWrapper">
    <div class="bookContent">
      <BooksList/>  
      <BooksList/>  
      <BooksList/>  
      <BooksList/>  
      <BooksList/>  
      <BooksList/>  
      <BooksList/>  
      <BooksList/>  
      <BooksList/>  
      <BooksList/>  
      <BooksList/>  
      <BooksList/>  
      <BooksList/>  
      <BooksList/>  
      <BooksList/>  
      
    </div>  
  </div>  
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import BooksList from '../../../components/BooksList/BooksList'
  export default {
    components:{
      BooksList
    },
    mounted(){ 
        new BScroll('.bookWrapper',{
          scrollY: true,
          click: true
        })
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .bookWrapper
    width 100%
    height calc(100vh - 101px)
    overflow hidden
    .bookContent
      width 100%
    
      
</style>    
