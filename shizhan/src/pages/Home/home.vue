<template>
  <div class="home">
    <Header></Header>
    <div class="homemain">
      <div>
        <lunbo></lunbo>
        <ul class="wangyi-grow">
          <li>
            <i class="grow-icon"></i>
            <span>网易自营品牌</span>
          </li>
          <li>
            <i class="grow-icon"></i>
            <span>30天无忧退货</span>
          </li>
          <li>
            <i class="grow-icon"></i>
            <span>48小时快速退款</span>
          </li>
        </ul>
        <swiperslide></swiperslide>
        <Split></Split>
        <gift></gift>
        <Split></Split>
        <manufacturer></manufacturer>
        <Split></Split>
        <popular></popular>
        <Split></Split>
        <renqituijian></renqituijian>
        <Split></Split>
        <xianshigo></xianshigo>
        <newItem></newItem>
        <Split></Split>
        <Classify />
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import Header from './Components/header.vue'
  import lunbo from './Components/lunbo.vue'
  import gift from './Components/gift.vue'
  import swiperslide from './Components/swiper-silde.vue'
  import manufacturer from './Components/manufacturer.vue'
  import popular from './Components/pupular.vue'
  import renqituijian from './Components/renqituijian .vue'
  import xianshigo from './Components/xianshigo.vue'
  import newItem from './Components/newItem.vue'
  import Classify from './Components/Classify.vue'

  export default {
    name: "home",
    data(){
      return{
        scrollY: 0
      }
    },
    components: {
      Header,
      lunbo,
      swiperslide,
      gift,
      manufacturer,
      popular,
      renqituijian,
      xianshigo,
      newItem,
      Classify
    },
    mounted() {
      this.$nextTick(() => {
        /* eslint-disable no-new */
        new BScroll('.homemain', {
          click: true,
          scrollX: true
        });
      })

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .home
    padding-bottom 100px
    .homemain
      height 1200px
      overflow hidden
      .wangyi-grow
        display flex
        justify-content space-around
        align-items center
        height 72px
        background #fff
        li
          display flex
          color #B4282D
          &:nth-of-type(1)
            i
              background-image url("http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png")
          &:nth-of-type(2)
            i
              background-image url("http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png")
          &:nth-of-type(3)
            i
              background-image url("http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png")
          .grow-icon
            width 32px
            height 32px
            background-image url("http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png")
            background-size 32px 32px
            background-repeat no-repeat
            background-position center
            margin 0 10px 0 0
</style>
