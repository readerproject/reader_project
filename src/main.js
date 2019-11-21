import Vue from 'vue'
import App from './App.vue'
import router from './router'
import HeaderTitle from './components/HeaderTitle/HeaderTitle'
import './veevalidate'

Vue.config.productionTip = false
Vue.component('HeaderTitle',HeaderTitle)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
