import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible'
import HeaderTitle from './components/HeaderTitle/HeaderTitle'
import './veevalidate'
import {Button} from 'mint-ui'
import * as API from './api'

Vue.config.productionTip = false
Vue.component('HeaderTitle',HeaderTitle)
Vue.component(Button.name, Button)
Vue.prototype.$API = API
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
