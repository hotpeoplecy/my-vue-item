import Vue from 'vue'
import App from './App'
import router from './router/'

// 引入VueResource
import VueResource from 'vue-resource'
// 注册VueResource
Vue.config.productionTip = false

// 按需按需导入Mui部分组件
import { Header } from 'mint-ui'
// 注册组件
Vue.component(Header.name, Header)

// 导入轮播图组件
import { Swipe, SwipeItem } from 'mint-ui'
// 注册轮播图组件
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)




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
