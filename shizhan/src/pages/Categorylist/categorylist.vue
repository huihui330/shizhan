<template>
  <div class="categorylist">
    <header>
      <div class="headercontainer">
        <i class="iconfont icon-search"></i>
        <span>搜索商品, 共22604款好物</span>
      </div>
    </header>
    <div class="categorylistcontainer">
      <div class="container-left">
        <div class="leftwrapper">
          <ul class="categoryList">
            <li :class="{active: currentId * 1 === category.id}" v-for="category in categoryList" :key="category.id">
              <router-link :to="{path: 'category', query: {id: category.id}}">{{category.name}}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    name: "categorylist",
    data(){
      return{
        currentId: '',//每一个category的id，为了显示active类名
        scrollY:0
      }
    },
    computed:{
      ...mapState({
        categoryList:state=>state.categoryList.categoryList
      }),
    },
    mounted(){
      this.$store.dispatch('getCategoryList')
      this.currentId = this.$route.query.id ? this.$route.query.id : '1022001';
      console.log(this.currentId)
      console.log(this.categoryList)
      this.$nextTick(() => {
        /* eslint-disable no-new */
        new BScroll('.container-left', {
          //click: true,
          scrollY: true
        });
      })

    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .categorylist
    background #fff
    header
      height 88px
      display flex
      align-items center
      border-bottom 1px solid #EDEDED
      .headercontainer
        display flex
        justify-content center
        align-items center
        height 56px
        width 100%
        margin 0 30px
        background #EDEDED
        border-radius 8px
        color #666
        i
          margin-right 8px
          font-size 30px
        span
          font-size 28px
    .categorylistcontainer
      width 100%
      overflow auto
      position absolute
      top 88px
      bottom 100px
      overflow hidden
      .container-left
        float left
        width 2.16rem
        position absolute
        top 0px
        bottom 0px
        overflow hidden
        .leftwrapper
          background #fff
          .categoryList
            padding .53333rem 0
            li
              width 100%
              height .66667rem
              line-height .66667rem
              text-align center
              margin-top .53333rem
              font-size 26px
              box-sizing border-box
              &:nth-of-type(1)
                margin 0
              &.active
                border-left 6px solid #ab2b2b
                color #ab2b2b


</style>
