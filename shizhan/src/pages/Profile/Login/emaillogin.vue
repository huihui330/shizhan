<template>
  <div>
    <div class="email-login" >
      <div class="email">
        <input type="text" placeholder="邮箱账号" v-model="email"
               name="email" v-validate="'required|email'">
      </div>
      <div class="pwd">
        <input type="password" placeholder="密码" v-model="pwd"
               name="pwd" v-validate="'required'">
      </div>
      <div class="error-message">
        <span>{{errors.first('email')}}</span>
      </div>
      <div class="get-help">
        <span @click="$router.push('/register/emailregister')">注册账号</span>
        <span>忘记密码</span>
      </div>
      <button class="login" >登录</button>
    </div>
    <div class="other-login" @click="$router.push('/profile')">
      <span>其他登录方式</span>
    </div>
    <div class="register" @click="$router.push('/register/emailregister')">
      <span>注册账号</span>
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
    .email-login
      padding-top 120px
      .phone, .code, .email, .pwd
        width 670px
        height 90px
        margin-top 20px
        border-bottom 1px solid #ddd
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
      .error-message
        font-size 24px
        color #b4282d
        margin 10px 0
      .get-help
        padding 40px 0 40px
        display flex
        justify-content space-between
        font-size 30px
        color #333
      .login
        width 670px
        height 100px
        font-size 28px
        color #fff
        outline none
        background-color #b4282d
        border 1px solid #b4282d
    .other-login
      width 670px
      height 100px
      text-align center
      line-height 100px
      font-size 28px
      color #b4282d
      border 1px solid #b4282d
      margin-top 30px
    .register
      display flex
      justify-content center
      align-items baseline
      margin-top 30px
      font-size 28px
      i
        font-size 28px

</style>
