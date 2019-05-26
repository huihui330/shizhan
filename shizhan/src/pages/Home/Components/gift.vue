<template>
  <section class="gift-container">
    <p class="name">—— 新人专享礼 ——</p>
    <div class="gift-box">
      <div class="gift-left">
        <span>新人专享礼包</span>
        <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="新人专享礼包">
      </div>
      <div class="gift-right">
        <div class="gift-right-top">
          <div class="title">
            <p>福利社</p>
            <span>今日特价</span>
          </div>
          <img src="http://yanxuan.nosdn.127.net/042fa68e8179420a9203436256b14a01.png?imageView&thumbnail=200x200&quality=75" alt="福利社">
        </div>
        <div class="gift-right-bottom">
          <div class="title">
            <p>新人拼团</p>
            <span>1元起包邮</span>
          </div>
          <img src="http://yanxuan.nosdn.127.net/f608f7868d43c5ac67fc03189b07c589.png" alt="新人拼团">
        </div>
      </div>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "gift"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .gift-container
    padding 0 30px 30px
    background #fff
    .name
      font-size 32px
      height 90px
      line-height 90px
      text-align center
    .gift-box
      display flex
      font-size 32px
      .gift-left
        /*flex 5*/
        /*text-align center*/
        /*margin-right 5px*/
        /*background-color #F9E9CF*/
        display: block;
        width: 4.57333rem;
        height: 5.78667rem;
        background: #F9E9CF;
        border-radius: .05333rem;
        margin-right: .05333rem;
        float: left;
        color: #333
        span
          display block
          margin-top 30px
        img
          margin 20px auto
          width 260px
      .gift-right
        flex 5
        height: 5.78667rem;
        float left
        .gift-right-top
          background: #FBE2D3;
          border-radius: 4px;
          width: 4.57333rem;
          height: 2.86667rem;
          margin-bottom: .05333rem
          position relative
          img
            width 200px
            height 200px
            position absolute
            right 0
            bottom 0
        .gift-right-bottom
          background: #FFECC2;
          border-radius: 4px;
          width: 4.57333rem;
          height: 2.86667rem
          position relative
          img
            width 200px
            height 200px
            position absolute
            right 0
            bottom 0
          .title
            display flex
            font-size 32px
            flex-direction column
            span
              font-size 24px
              margin-top 10px
              color #777
        .gift-right-top
          flex 5
          background-color #FBE2D3
        .gift-right-bottom
          flex 5
          background-color #FFECC2
</style>
