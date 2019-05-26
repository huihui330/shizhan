<template>
  <header class="header-container">
    <div class="header-search-login">
      <span class="logo"></span>
      <div class="searchInput" @click="$router.push('/search')">
        <i class="iconfont icon-search"></i>
        <span class="placeholder">搜索商品，共xxxxx款好物</span>
      </div>
      <button @click="$router.push('/profile')">登录</button>
    </div>
    <div class="header-nav" >
      <ul class="header-nav-left">
        <li :class="{active: activeIndex === recoIndex}" :data-index="filterNavList.length" ref="recoLi" @click="toggleActive()"><a href="javascript:void(0);">推荐</a></li>
        <li :class="{active: activeIndex === index}" v-for="(nav, index) in filterNavList" :key="index" @click="toggleActive(index)">
          <a href="javascript:void(0);">{{nav.text}}</a>
        </li>
      </ul>
      <span class="iconfont icon-54 header-nav-arrow"></span>
    </div>
  </header>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex';
  import BScroll from 'better-scroll'
  import {reqHomeData} from '../../../api/index';
  export default {
    name: "Header",
    data () {
      return {
        activeIndex: 10, // 当前选中的下标
        recoIndex: 0, // 选项'推荐'的下标 跟随请求回的导航列表长度改变
        scrollX: 0 // 列表水平滑动的距离
      }
    },
    methods: {
      toggleActive (index) {
        if ((index + 1) && (index + 1) <= this.recoIndex) {
          this.activeIndex = index;
        } else {
          this.activeIndex = this.recoIndex;
        }
      },

    },
    computed: {
      ...mapState({
        navList: state => state.home.navList
      }),
      filterNavList: {
        get: function () {
         return this.navList
        },
        set: function () {
          let newArr = this.navList.filter((nav, index) => (index + 1) % 5 !== 0);
          this.activeIndex = newArr.length;
          return newArr;
        }
      }
    },
    async mounted(){
      this.$nextTick(() => {
        /* eslint-disable no-new */
        new BScroll('.header-nav', {
          click: true,
          scrollX: true
        });
      })
//      const result = await reqHomeData()
//      console.log('result',result)

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .header-container
    position relative
    height 150px
    width 100%
    background-color #fff
    z-index 100
    .header-search-login
      display flex
      justify-content space-around
      align-items center
      width 100%
      height 88px
      font-size 30px
      padding 25px
      box-sizing border-box
      .logo
        flex 2
        height 40px
        background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
        background-repeat no-repeat
        background-size 138px 40px
        background-position center
        margin-right 10px
      .searchInput
        flex 7
        height 56px
        border-radius 10px
        border none
        background-color rgba(0,0,0,.1)
        text-align center
        line-height 56px
        i
          font-size 30px
        .placeholder
          font-size 30px
          color #666
      button
        flex 1
        height 40px
        margin-left 10px
        font-size 24px
        border-radius 10px
        outline none
        color red
        border 2px solid red
        background-color #fff
    .header-nav
      position relative
      width 100%
      height 60px
      overflow hidden
      .header-nav-left
        width 1650px
        font-size 30px
        height 60px
        li
          float left
          height 50px
          margin 5px 20px
          padding 0 10px
          text-align center
          &.active
            border-bottom 4px solid red
            color red
            a
              color red
      .header-nav-arrow
        position absolute
        right 0
        top 0
        width 100px
        height 60px
        font-size 30px
        text-align center
        line-height 60px
        background-color #fff

</style>
