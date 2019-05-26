<template>
  <div class="tabBar">
    <a class="item" href="javascript:;" @click="goTo('/home')" :class="{active: $route.path==='/home'}">
      <i class="u-icon" :class="$route.path==='/home'?'iconfont-home-active':'iconfont-home'"></i>
      <span >首页</span>
    </a>
    <a class="item" href="javascript:;" @click="goTo('/categorylist')" :class="{active: $route.path==='/categorylist'}">
      <i class="u-icon " :class="$route.path==='/categorylist'?'iconfont-category-active':'iconfont-category'"></i>
      <span>分类</span>
    </a>
    <a class="item" href="javascript:;" @click="goTo('/recommend')" :class="{active: $route.path==='/recommend'}">
      <i class="u-icon " :class="$route.path==='/recommend'?'iconfont-recommend-active':'iconfont-recommend'"></i>
      <span>识物</span>
    </a>
    <a class="item" href="javascript:;" @click="goTo('/shopcart')" :class="{active: $route.path==='/shopcart'}">
      <i class="u-icon " :class="$route.path==='/shopcart'?'iconfont-shopcart-active':'iconfont-shopcart'"></i>
      <span>购物车</span>
    </a>
    <a
      class="item" href="javascript:;" @click="goTo('/profile')":class="{active: $route.path==='/profile'}">
      <i class="u-icon " :class="$route.path==='/profile'?'iconfont-profile-active':'iconfont-profile'"></i>
      <span >个人</span>
    </a>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "Footer",
    methods: {
      goTo(path) {
        // 编程式路由跳转
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .tabBar
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    bottom 0
    background-color #fff
    border-top 1px solid #d9d9d9
    width 100%
    height 100px
    display flex
    flex-flow row nowrap
    .item
      flex 1
      text-align center
      &.active
        color #b4282d
      .u-icon
        display inline-block
        vertical-align middle
        width 40px
        height 40px
        background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-2a8cea5605.png")
        background-repeat no-repeat
        background-size 40px 490px
        margin-top 7px
      .iconfont-home
        background-position: 0 -250px
      .iconfont-home-active
        background-position: 0 -200px
      .iconfont-category
        background-position: 0 -150px
      .iconfont-category-active
        background-position: 0 -100px
      .iconfont-recommend
        background-position: 0 -350px
      .iconfont-recommend-active
        background-position: 0 -300px
      .iconfont-shopcart-active
        background-position: 0 0
      .iconfont-shopcart
        background-position: 0 -50px
      .iconfont-profile
        background-position: 0 -450px
      .iconfont-profile-active
        background-position: 0 -400px
      span
        display block
        font-size 24px
        margin-top: 6px;
</style>
