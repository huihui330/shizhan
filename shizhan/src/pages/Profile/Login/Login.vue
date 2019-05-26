<template>
  <div class="login">
    <header class="profileheader">
      <i class="iconfont icon-home" @click="$router.push('/home')"></i>
      <i class="logo"></i>
      <i class="iconfont icon-search"></i>
      <i class="iconfont icon-cart"></i>
    </header>
    <section class="login-container">
      <div class="main-logo">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="logo">
      </div>
      <router-view></router-view>
    </section>
  </div>

</template>
<script>
  export default {
    data () {
      return {
        errorMsg: '', // 验证失败提示错误信息
        phone: '', // 用户输入手机号
        code: '', // 用户输入验证码
        email: '', // 用户输入邮箱
        pwd: '' // 用户输入密码
      }
    },
    props: {
      setIsShow: Function
    },
    methods: {
      toggleLoginMethod () {
        this.setIsShow();
      },
      login () {
        // 进行前端表单验证
        const {phone, code, email, pwd} = this;
        if (this.$route.query.isPhoneLogin) {
          // 手机登录
          if (phone.trim() === '') {
            this.errorMsg = '手机号不能为空';
          } else if (!(/^1[3456789]\d{9}$/.test(phone))) {
            this.errorMsg = '手机号格式不正确';
          } else if (code.trim() === '') {
            this.errorMsg = '验证码不能为空';
          } else if (!(/^\d{6}$/.test(code))) {
            this.errorMsg = '请输入正确的6位数字验证码';
          } else {
            this.errorMsg = '';
            console.log('登录成功');
          }
        } else {
          // 邮箱登陆
          if (email.trim() === '') {
            this.errorMsg = '邮箱不能为空';
          } else if (!(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(email))) {
            this.errorMsg = '邮箱格式不正确';
          } else if (pwd.trim() === '') {
            this.errorMsg = '密码不能为空';
          } else if (pwd.length < 6) {
            this.errorMsg = '密码应不小于6位';
          } else if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[a-zA-Z0-9]{6,20}/.test(pwd)) {
            this.errorMsg = '密码必须由数字和字母组成';
          } else {
            this.errorMsg = '';
            console.log('登录成功');
          }
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl";
  .login
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

    .login-container
      height 100%
      background-color #fff
      padding 0 40px
      .main-logo
        padding-top 56px
        display flex
        justify-content center
        img
          width 200px
          height 64px



</style>
