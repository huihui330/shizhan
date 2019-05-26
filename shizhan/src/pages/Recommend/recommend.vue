<template>
  <div class="recommend">
    <header class="profileheader">
      <i class="iconfont icon-home" @click="$router.push('/home')"></i>
      <div class="content">
        <span :class="{active:$route.path===`/recommend/find/102201`}" @click="$router.push(`/recommend/find/102201`)">发现</span>
        <span :class="{active:$route.path==='/recommend/zhenxuan'}" @click="$router.push('/recommend/zhenxuan')">甄选家</span>
      </div>
      <i class="iconfont icon-search"></i>
      <i class="iconfont icon-cart"></i>
    </header>

    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import {reqRecommendData,reqRecommendTabs} from '../../api'
  export default {
    name: "recommend",
    data(){
      return{
        scrollX: 0,
        children:[],
        tabIndex:'',
      }
    },
    methods:{
      ...mapState({
        //识物页面导航列表
        recommendTabs: state => state.recommend.recommendTabs
      })
    },
    async mounted(){

      this.$store.dispatch('getRecommendTabs')
      this.$store.dispatch('getRecommends');
      this.tabIndex = this.$route.query.id ? this.$route.query.id : '1022001';
      this.$router.push(`/recommend/find/${this.tabIndex}`)
      console.log(this.tabIndex)
      const result = await reqRecommendData()
      console.log(this.recommendTabs)
      this.$nextTick(() => {
        /* eslint-disable no-new */
        new BScroll('.header-nav', {
          //click: true,
          scrollX: true,
        });
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .recommend
    clearFix()
    .profileheader
      width 10rem
      margin auto
      overflow hidden
      position relative
      padding 0 .21333rem 0 .32rem
      height 100px
      background #fff
      display flex
      align-items center
      font-size 35px
      box-sizing border-box
      border-bottom 2px solid #666
      .iconfont
        display inline-block
        width .66667rem
        heigh .66667rem
        background-size 100%
        background-repeat no-repeat
        vertical-align middle
        font-size 44px
        position absolute
      .icon-cart
        right 35px
      .icon-search
        right 110px
      .content
        position absolute
        left 280px
        width 200px
        height 50px
        //line-height 50px
        span
          font-size 30px
          color #7F7F7F
          padding-top 5px
          vertical-align middle
          &:nth-child(1)
            float left
          &:nth-child(2)
            float right
          &.active
            padding 0
            font-size 40px
            color #b4282d
            font-weight 700

</style>
