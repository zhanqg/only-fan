// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)
import VueLazyLoad from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper);
/* eslint-disable no-new */
console.log(VueJsonp);
// Vue.use(VueLazyLoad,{
//   error:'//misc.360buyimg.com/household/sheji-m/static/img/error.png',
//   loading:'//misc.360buyimg.com/household/sheji-m/static/img/error.png'
// })
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
