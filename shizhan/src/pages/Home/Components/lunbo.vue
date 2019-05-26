<template>
  <swiper :options="swiperOption" ref="mySwiper" >
    <!-- slides -->
    <swiper-slide>
      <img src="./images/9.9.jpg" alt="实时热销top100">
    </swiper-slide>
    <swiper-slide>
      <img src="./images/a45c727b09ded1e0554df1fac12b94b1.jpg" alt="2019新品发布会">
    </swiper-slide>
    <swiper-slide>
      <img src="./images/gaobaiji.jpg" alt="愚人不如悦己">
    </swiper-slide>
    <swiper-slide>
      <img src="./images/jia.jpg" alt="福利站">

    </swiper-slide>
    <swiper-slide>
      <img src="./images/jintie.jpg" alt="春季四件套换新">

    </swiper-slide>
    <swiper-slide>
      <img src="./images/jiu.jpg" alt="护理好物集">

    </swiper-slide>
    <swiper-slide>
      <img src="./images/qiusheng.jpg" alt="护理好物集">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script type="text/ecmascript-6">
  import 'swiper/dist/css/swiper.min.css';
  import Swiper from 'swiper';
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          pagination: { el: '.swiper-pagination' }, // 分页按钮
          autoplay: {
            disableOnInteraction: false,  // 用户操作swiper之后，是否禁止autoplay
            delay: 3000, // 自动切换的时间间隔（单位ms）
          },
          loop: true,//无缝轮播
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
//      console.log('this is current swiper instance object', this.swiper)
//      this.swiper.slideTo(3, 1000, false)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .swiper-container
    width 750px
    height 400px
    img
      width 100%
      height 100%
    .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets
      width 100%
      height 4px
      bottom 50px
      .swiper-pagination-customs
        width 40px
        height 4px
        display inline-block
        margin-right 10px
        background-color rgba(255, 255, 255, .5)
      .swiper-pagination-customs-active
        width 40px
        height 4px
        display inline-block
        border-radius 2px
        background-color $red

</style>
