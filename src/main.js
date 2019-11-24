import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Romance from './pages/Romance/Romance.vue'
import 'lib-flexible/flexible'
import HeaderTitle from './components/HeaderTitle/HeaderTitle'
import './veevalidate'
import {Button} from 'mint-ui'
import * as API from './api'
import store from './store'
import TitleBar from './components/TitleBar/TitleBar.vue'

Vue.config.productionTip = false
Vue.component('HeaderTitle',HeaderTitle)
Vue.component('TitleBar',TitleBar)
Vue.component(Button.name, Button)
Vue.prototype.$API = API
new Vue({
  components: {Romance},
  render: h => h(App),
  router,
  store
}).$mount('#app')
