<template>
  <div id="app">

    <router-view></router-view>
    <Footer v-show="$route.meta.isShowFooter"></Footer>
  </div>
</template>

<script>

import Footer from './components/Footer/Footer.vue'
import Header from './components/Header/Header.vue'
import home from './pages/Home/home.vue'
import {mapstate} from 'vuex'
import {reqHomeData}from './api'
export default {
  name: 'App',
  components: {
    Footer,
    Header,
    home
  },
  created () {
    // 在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
    }
    // 在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    })
  },
  async mounted(){
    const result=await reqHomeData()
    //console.log(result)
  }
}
</script>

<style>

</style>
