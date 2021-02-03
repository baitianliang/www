import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import 'bootstrap/dist/css/bootstrap.min.css'
// 组件扫描文件
import scanFile from "./scanFile"
// import store from "./store.js"
import store from "./store/index"
import axios from 'axios'
import router from './router'
Vue.use(scanFile)

// router.change = (data) => {
//   router.changePage = true
//   router.push(data)
// }
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
