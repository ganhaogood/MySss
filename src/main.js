import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import App from './App'
import router from './router'
import store from './store'
import loading from './assets/images/loading.gif'
import 'swiper/dist/css/swiper.css'
import './mock/mockServer'
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  loading
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
