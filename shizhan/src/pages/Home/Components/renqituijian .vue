<template>
  <section class="reco-container">
    <div class="reco-header">
      <span>人气推荐</span>
      <span>
        更多
        <i class="iconfont icon-52"></i>
      </span>
    </div>
    <div class="reco-list">
      <div class="reco-list-top">
        <img :src="popularItem[0].listPicUrl" alt="好物推荐">
        <div class="good-info">
          <span v-show="isShow">520特惠</span>
          <p class="ellipsis">{{popularItem[0].name}}</p>
          <p class="ellipsis">{{popularItem[0].simpleDesc}}</p>
          <p>￥{{popularItem[0].counterPrice}}</p>
        </div>
      </div>
      <ul class="reco-list-bottom">
        <li v-for="(item, index) in getPopularItem" :key="index">
          <img :src="item.listPicUrl" alt="商品图">
          <div class="good-name">
            <span>{{item.name}}</span>
            <span class="good-price">￥{{item.counterPrice}}</span>
          </div>
          <div class="good-advantage" v-if="false">
            <span>爆品</span>
            <span>限时购</span>
          </div>
          <div class="good-full-reduction" v-if="false">
            <div>
              <span class="half-circle"></span>
              <span>每满99减10券</span>
              <span class="half-circle"></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex';
  export default {
    data () {
      return {
        isShow: true
      }
    },
    computed: {
      ...mapState({
        popularItem: state => state.home.popularItem
      }),
      getPopularItem () {
        return [...this.popularItem].splice(1, 4);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl";
  .reco-container
    padding 0 0 20px
    background #fff
    .reco-header
      display flex
      justify-content space-between
      align-items center
      font-size 30px
      height 100px
      padding 0 30px
      i
        font-size 30px
    .reco-list
      .reco-list-top
        display flex
        justify-content space-around
        align-items center
        margin 0 30px 20px
        img
          width 220px
          height 220px
        .good-info
          width 350px
          span
            font-size 20px
            display inline-block
            padding 0 8px
            text-align center
            color #B4282D
            border 1px solid #B4282D
            background-color #fff
          p
            font-size 30px
            &:nth-of-type(2)
              font-size 24px
              color #666
              margin 5px 0
            &:nth-of-type(3)
              color #B4282D
      .reco-list-bottom
        clearFix()
        padding-left 10px
        li
          float left
          width 216px
          height 354px
          font-size 24px
          margin-left 20px
          padding-bottom 20px
          img
            width 216px
            height 216px
            background-color #F5F5F5
          .good-name
            height 72px
            line-height 35px
            margin-top 10px
            .good-price
              color #B4282D
          .good-advantage
            span
              font-size 20px
              color #B4282D
              padding 0 10px
              margin 0 5px 10px
              border 1px solid #B4282D
              border-radius 10px

          .good-full-reduction
            width 150px
            height 30px
            line-height 30px
            font-size 20px
            color #B4282D
            text-align center
            border 1px solid #B4282D
            .half-circle
              width 6px
              height 12px
              border-top 1px solid #B4282D
              border-bottom 1px solid #B4282D
              background-color #fff
              &:nth-of-type(1)
                float left
                border-right 1px solid #B4282D
                margin 10px 0 0 -1.5px
                border-radius 0 10px 10px 0
              &:nth-of-type(2)
                float left
              &:nth-of-type(3)
                float right
                border-left 1px solid #B4282D
                margin 10px -1.5px 0 0
                border-radius 10px 0 0 10px
</style>
