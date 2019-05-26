<template>
  <header class="shopcartheader">
    <span class="left">购物车</span>
    <a class="right">领卷</a>
  </header>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "Header"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .shopcartheader
    position fixed
    left 0
    top 0
    width 100%
    height 88px
    line-height 88px
    background #fff
    .left
      font-size 36px
      color #333
      float left
      margin-left 30px
    .right
      font-size 30px
      color #b4282d
      float right
      margin-right 30px
</style>
