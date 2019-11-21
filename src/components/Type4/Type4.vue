<template>
  <ul class="typeList">
    <li>
      <a href="javascritp::">
        <img src="../../assets/image/icon/home/1_type_d.png">
      </a>
      <span>分类</span>
    </li>
    <li>
      <a href="javascritp::">
        <img src="../../assets/image/icon/home/2_rank_d.png">
      </a>
      <span>排行</span>
    </li>
    <li>
      <a href="javascritp::">
        <img src="../../assets/image/icon/home/3_booklist_d.png">
      </a>
      <span>书单</span>
    </li>
    <li>
      <a href="javascritp::">
        <img src="../../assets/image/icon/home/4_end_d.png">
      </a>
      <span>完结</span>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .typeList
    width 299px
    height 56px
    margin 9px 38px 0 38px
    display flex
    justify-content space-between
    li
      img 
        width 40px
        height 40px
      span
        display block
        text-align center
        font-size 12px
</style>
