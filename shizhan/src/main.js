// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import 'lib-flexible/flexible'
import {Button} from 'mint-ui'
import store from './store/index';
import './mock/mock-server';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Split from './components/Split/Split.vue'
import validate from './validate/index'

// 注册全局组件
Vue.component(Button.name, Button)
Vue.use(VueAwesomeSwiper)
Vue.component('Split', Split);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
