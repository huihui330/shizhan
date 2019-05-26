<template>
  <div class="shopcart">
    <header class="shopcartheader">
      <span class="left">购物车</span>
      <a class="right" @click="$router.push('/profile')">领卷</a>
    </header>
    <ul class="service">
      <li class="item">
        <i class="circle"></i>
        <span>30天无忧退货</span>
      </li>
      <li class="item">
        <i class="circle"></i>
        <span>48小时无忧退款</span>
      </li>
      <li class="item">
        <i class="circle"></i>
        <span>满88元免邮费</span>
      </li>
    </ul>
    <div class="shopcartcontainer">
      <div class="img"></div>
      <div class="txt">去添加点什么吧</div>
      <mt-button type="danger" class="shopcartbutton" @click="$router.push('/profile')">登录</mt-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "shopcart"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .shopcart
    height 100%
    padding-top 88px
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
        margin-right 50px
    .service
      position relative
      height 70px
      padding 0 .4rem
      background #f4f4f4
      display flex
      flex-flow row nowrap
      align-items center
      justify-content space-between
      .item
        display flex
        align-items center
        /*font-size .32rem*/
        color #666
        .circle
          display inline-block
          vertical-align middle
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-0ec842d966.png)
          background-repeat no-repeat
          background-size: 98%
          width 10px
          height 10px
          margin-right .08rem
          position relative
          top -1px

    .shopcartcontainer
      position absolute
      top 50px
      right 0
      bottom 0
      left 0
      height 4rem
      margin auto
      text-align center
      .img
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png)
        vertical-align middle
        width 250px
        height 240px
        background-size 250px 240px
        background-position center center;
        background-repeat no-repeat
        margin auto
      .txt
        margin-top -10px
        margin-bottom: 50px;
        line-height: 1;
        font-size: 26px;
        color: #999;
      .shopcartbutton
        font-size 30px
        width 65%
        height 90px
        text-align center
        vertical-align middle
        background-color #b4282d

</style>
