import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Romance from './pages/Romance/Romance.vue'
import 'lib-flexible/flexible'
import HeaderTitle from './components/HeaderTitle/HeaderTitle'
import './veevalidate'

Vue.config.productionTip = false
Vue.component('HeaderTitle',HeaderTitle)

new Vue({
  components: {Romance},
  render: h => h(App),
  router
}).$mount('#app')
