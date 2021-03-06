import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import axios from 'axios'
import TreeTable from 'vue-table-with-tree-grid'
//引入semantic-ui
// import semantic from 'semantic-ui-vue';
// import 'semantic-ui-css/semantic.min.css';

//配置请求的根路径
axios.defaults.baseURL = 'http://localhost:9003/'
//请求时携带cookie避免每次请求的session不同
axios.defaults.withCredentials = true
// 设置路由拦截器，在请求头中加入Authorization字段用于鉴权
axios.interceptors.request.use(config => {
  console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.component('tree-table',TreeTable)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

