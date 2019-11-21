import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Romance from './pages/Romance/Romance.vue'

Vue.config.productionTip = false

new Vue({
  components: {Romance},
  render: h => h(App),
  router
}).$mount('#app')
