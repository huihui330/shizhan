<template>
  <div class="find">
    <div class="header-nav" >
      <ul class="header-nav-left">
        <li @click="$router.push(`/shiwu/find/${index}`)" v-for="(recommendTab, index) in recommendTabs" :key="index"
        >
          {{recommendTab.tabName}}
        </li>
      </ul>
    </div>
    <div class="reco-page">
      <div class="reco-goods">
        <ul  v-for="(reco, index) in recommends" :key="index + Date.now()">
          <li v-for="(item, index) in reco.topics" :key="index">
            <div class="style-LR">
              <div class="style-top">
              <span class="user-info">
                <img :src="item.avatar" alt="avatar">
                <span>{{item.nickname}}</span>
              </span>
                <p class="title">{{item.title}}</p>
              </div>
              <div class="style-bottom">
                <img :src="item.picUrl" alt="mainImg">
              </div>
              <span class="view-count">
                <i class="iconfont icon-view"></i>
                <span>{{(item.readCount/1000).toFixed(1)}}k人看过</span>
              </span>
            </div>
            <Split></Split>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    name: "",
    computed:{
      ...mapState({
        //识物页面导航列表
        recommends: state => state.recommend.recommends,
        autoRecommends: state => state.recommend.autoRecommends,
        recommendTabs: state => state.recommend.recommendTabs
      })
    },
    mounted(){
      this.$store.dispatch('getRecommends')
      this.$store.dispatch('updateTabIndex')
      //console.log(this.autoRecommends)
      this.$nextTick(() => {
        new BScroll('.reco-page', {
          //click: true,
          scrollY: true,
        });
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl";
  .find
    .header-nav
      /*position relative*/
      height 60px
      overflow hidden
      background #fff
      .header-nav-left
        width 1200px
        font-size 30px
        /*height 60px*/
        /*overflow hidden*/
        display flex
        height 100%
        /*padding-bottom .2rem*/
        white-space nowrap
        overflow hidden
        li
          margin 5px 20px
          padding 0 10px
          text-align center
          &.active
            border-bottom 4px solid red
            color red
            a
              color red

    .reco-page
      position absolute
      top 180px
      bottom 60px
      .reco-goods
        .style-LR
          clearFix()
          width 100%
          padding 32px 30px 20px
          box-sizing border-box
          /*margin 16px 0*/
          background-color #fff
          .style-top
            .user-info
              display flex
              align-items center
              font-size 30px
              img
                width 50px
                height 50px
                border-radius 50%
                margin-right 10px
            .title
              font-size 34px
              margin-top 20px
              i
                font-size 30px
                margin 0 10px
          .style-bottom
            height 300px
            position: relative;
            margin-bottom .2rem
            overflow hidden
            border-radius 10px
            img
              width 100%
              height 100%
              display block
          .view-count
            display flex
            color #999
            margin-top 30px
</style>
