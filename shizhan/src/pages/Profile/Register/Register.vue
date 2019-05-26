<template>
  <div class="register">
    <header class="profileheader">
      <i class="iconfont icon-home" @click="$router.push('/home')"></i>
      <i class="logo"></i>
      <i class="iconfont icon-search"></i>
      <i class="iconfont icon-cart"></i>
    </header>
    <section class="register-container">
      <router-view></router-view>
    </section>

  </div>
</template>
<script>
  export default {
    data () {
      return {
        errorMsg: '', // 验证失败提示错误信息
        isSelect: true, // 是否勾选同意协议
        phone: '', // 用户注册的手机号
        email: '', // 用户注册的邮箱
        code: '', // 用户输入的手机验证码
        pwd: '', // 用户输入的密码
        confirmPwd: '' // 用户输入的确认密码
      }
    },
    props: {
      setIsShow: Function
    },
    methods: {
      toggleLoginMethod () {
        this.setIsShow();
      },
      register () {
        const {phone, code, email, pwd, confirmPwd} = this;
        if (this.$route.query.isPhoneRegis) {
          // 手机号注册
          if (phone.trim() === '') {
            this.errorMsg = '手机号不能为空';
          } else if (!(/^1[3456789]\d{9}$/.test(phone))) {
            this.errorMsg = '手机号格式不正确';
          } else if (code.trim() === '') {
            this.errorMsg = '验证码不能为空';
          } else if (!(/^\d{6}$/.test(code))) {
            this.errorMsg = '请输入正确的6位数字验证码';
          } else if (pwd.trim() === '') {
            this.errorMsg = '密码不能为空';
          } else if (pwd.length < 6) {
            this.errorMsg = '密码应不小于6位';
          } else if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[a-zA-Z0-9]{6,20}/.test(pwd)) {
            this.errorMsg = '密码必须由数字和字母组成';
          } else if (pwd !== confirmPwd) {
            this.errorMsg = '两次输入的密码不一致';
          } else {
            this.errorMsg = '';
            console.log('注册成功');
          }
        } else {
          // 邮箱注册
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
          } else if (pwd !== confirmPwd) {
            this.errorMsg = '两次输入的密码不一致';
          } else {
            this.errorMsg = '';
            console.log('注册成功');
          }
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl";
  .register
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

    .register-container
      height 100%
      background-color #fff
      padding 0 40px
      .regis-title
        padding-top 28px
        display flex
        justify-content center
        span
          font-size 36px
          color #333
      .phone-regis, .email-regis
        padding-top 120px
        .error-message
          font-size 24px
          color $red
          margin 10px 0
        .phone, .code, .pwd, .email, .confirm-pwd
          width 670px
          height 90px
          border-bottom 1px solid #ddd
          margin-top 20px
          clearFix()
          input
            float left
            margin 28px 0
            font-size 28px
            color #666
            border 1px solid rgba(0,0,0,0)
            outline none
          button
            float right
            width 168px
            height 58px
            font-size 28px
            color #333
            outline none
            margin 15px 10px 0 0
            background-color #fff
            border-radius 10px
            border 1px solid #333
        .register
          width 670px
          height 100px
          font-size 28px
          color #fff
          outline none
          background-color $red
          border 1px solid $red

</style>
