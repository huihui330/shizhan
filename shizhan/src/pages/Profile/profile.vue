<template>
  <div class="profile">
    <header class="profileheader">
      <i class="iconfont icon-home" @click="goto('/home')"></i>
      <i class="logo"></i>
      <i class="iconfont icon-search"></i>
      <i class="iconfont icon-cart"></i>
    </header>
    <div class="profilecontainer" >
      <div class="profilecontainerup" >
        <div class="logowrap">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="btnwrap">
          <div @click="goto('/login/phonelogin')">
            <i class="iconfont icon-phone"></i>
            <span>手机号码登录</span>
          </div>
          <div class="btnemail" @click="goto('/login/emaillogin')">
            <i class="iconfont icon-email"></i>
            <span>邮箱账号登录</span>
          </div>
          <p @click="goto('/register/phoneregister')">
            <span>手机号快速注册</span>
            <i class="iconfont icon-52 special"></i>
          </p>
        </div>
      </div>
      <div class="profilecontainerdown">
        <div class="Wechat">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </div>
        <div class="QQ">
          <i class="iconfont icon-icon"></i>
          <span>QQ</span>
        </div>
        <div class="Weibo">
          <i class="iconfont icon-7"></i>
          <span>微博</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "profile",
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .profile
    position absolute
    left 0
    top 0
    height 100%
    width 100%
    clearFix()
    .profileheader
      width 10rem
      margin auto
      overflow hidden
      position relative
      padding 0 .21333rem 0 .32rem
      height 1.17333rem;
      background #fff
      display flex
      align-items center
      font-size 35px
      .iconfont
        display inline-block
        width .66667rem
        heigh .66667rem
        background-size 100%
        background-repeat no-repeat
        vertical-align middle
        font-size 48px
        position absolute
      .icon-cart
        right 90px
      .icon-search
        right 180px
      .logo
        position absolute
        left 280px
        width 150px
        height 50px
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)
        background-size 100%
        background-repeat no-repeat

    .profilecontainer
      clearFix()
      position relative
      height 100%
      background #F2F5F4
      .logowrap
        text-align: center;
        padding-top: 2.13333rem;
        padding-bottom: 2.13333rem;
        img
          margin 0 auto
          width: 3.57333rem;
          height: 1.2rem;
      .btnwrap
        div
          width 90%
          height 100px
          line-height 100px
          background red
          text-align center
          margin 0 auto 40px
          border-radius 2px
          border 2px solid #b4282d
          background-color #b4282d
          color #fff
          font-size 26px
          overflow hidden
        .btnemail
          color #b4282d;
          background-color transparent
        p
          text-align center
          font-size 26px
          color #333
          i
            margin-right 8px
            font-size 40px
            vertical-align middle
          .special
            font-size 24px



    .profilecontainerdown
      position absolute
      width 100%
      left 0
      bottom 180px
      height .53333rem
      text-align center
      display flex
      margin-left 60px
      div
        width 200px
        color #7F7F7F
        font-size 26px
      .Wechat
        border-right 1px solid #979797
      .QQ
        border-right 1px solid #979797



</style>
