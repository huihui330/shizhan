<template>
  <div>
    <div class="phone-login">
      <div class="phone">
        <input type="text" maxlength="11" placeholder="请输入手机号" v-model="phone"
               name="phone" v-validate="{required: true,regex:/^1\d{10}$/}">
      </div>
      <div class="code">
        <input class="msg-code" type="text" placeholder="请输入短信验证码" v-model="code"
               name="code" v-validate="{required: true,regex:/^\d{6}$/}">
        <button class="get-code" :disabled="!isRightPhone || computeTime>0" @click="sendcode" >
          {{computeTime>0 ? `已发送(${computeTime}s)` : '获取验证码'}}
        </button>
      </div>
      <div class="error-message">
        <span>{{errors.first('phone')?errors.first('phone'):errors.first('code')}}</span>
      </div>
      <div class="get-help">
        <span>遇到问题？</span>
        <span>使用密码验证登录</span>
      </div>
      <button class="login" @click="login">登录</button>
    </div>
    <div class="other-login" @click="$router.push('/profile')">
      <span>其他登录方式</span>
    </div>
    <div class="register" @click="$router.push('/register/phoneregister')">
      <span>注册账号</span>
      <i class="iconfont icon-52"></i>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        phone:'',//获取手机号
        code:'',//获取验证码
        computeTime: 0, // 倒计时剩余的时间
      }
    },
    methods:{
      sendcode(){
        this.computeTime = 30
        // 启动循环定时器, 每隔1s, 将计时减1
        const intervalId = setInterval(() => {
          // 一旦变为了0, 停止计时
          if(this.computeTime===0) {
            clearInterval(intervalId)
          } else {
            this.computeTime--
          }

        }, 1000)
      },
      async login(){
        const success = await this.$validator.validateAll() // 对所有表单项进行验证
        if(success){
          alert('请求登陆')
        }
      }


    },
    computed:{
      //判断是否是一个正确的手机号
      isRightPhone(){
        return /^1\d{10}$/.test(this.phone)
      },

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  div
    .phone-login
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
          //width 168px
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
