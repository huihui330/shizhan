<template>
  <div>
    <div class="regis-title">
      <span>邮箱账号注册</span>
    </div>
    <div class="email-regis">
      <div class="email">
        <input type="text" placeholder="邮箱账号" v-model="email"
               name="email" v-validate="'required|email'">
      </div>
      <div class="pwd">
        <input type="password" placeholder="请输入密码" v-model="pwd"
               name="pwd" v-validate="'required'">
      </div>
      <!--<div class="confirm-pwd">-->
        <!--<input type="password" placeholder="请确认密码">-->
      <!--</div>-->
      <div class="error-message">
        <span>{{errors.first('email')}}</span>
      </div>
      <button class="register">注册</button>
    </div>
    <div class="toash-info">
      <span class="select">
        <input type="checkbox">
      </span>
      <div class="text">
        <span>我同意</span>
        <a href="iavascript:void(0);">《网易服务条款》</a>
        <span>和</span>
        <a href="iavascript:void(0);">《网易隐私政策》</a>
      </div>
    </div>
    <div class="email-register" @click="$router.push('/register/phoneregister')">
      <span>手机号注册</span>
      <i class="iconfont icon-52"></i>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        email:'',//获取邮箱
        pwd:''//获取密码
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  div
    .regis-title
      padding-top 28px
      display flex
      justify-content center
      span
        font-size 36px
        color #333
    .email-regis
      padding-top 120px
      .error-message
        font-size 24px
        color #b4282d
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
        background-color #b4282d
        border 1px solid #b4282d
    .toash-info
      height 40px
      display flex
      align-items center
      margin-top 30px
      .select
        width 28px
        height 28px
        margin-right 10px
        border 1px solid #7f7f7f
        &.selected
          background-image url("https://urswebzj.nosdn.127.net/webzj_cdn101/sprite_61fbe151ab715649c6b7c4ec39156201.png")
          background-repeat no-repeat
          background-position -323px -86px
      input
        width 40px
        height 40px
        outline none
        visibility hidden
      .text
        a
          color #007AFF
    .email-register
      display flex
      justify-content center
      align-items baseline
      margin-top 30px
      font-size 28px
      i
        font-size 28px
</style>
