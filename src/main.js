import Vue from 'vue'
import router from './router/index'
import App from './app'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'
import mui from './assets/mui/js/mui.min.js'
import store from '@/vuex/store.js'
Vue.prototype.mui = mui
require('./http/mock.js')
Vue.prototype.$axios = axios

Vue.use(Mint)

new Vue({
  render: c => c(App),
  router,
  store
}).$mount('#app')
