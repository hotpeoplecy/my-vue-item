import Vue from 'vue'
import App from './App'
import router from './router/'


// 按需按需导入部分组件
import { Header } from 'mint-ui'
// 注册组件
Vue.component(Header.name, Header);

// 引入mui的样式文件
import './lib/mui/css/mui.css'
// 引入mui图标样式文件
import './lib/mui/css/icons-extra.css'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
