import Vue from 'vue'
import App from './App'
import router from './router/'
import moment from 'moment'

// 将轮播图渲染到页面 上时引入VueResource
// 先装包：npm install
// 引入VueResource
import VueResource from 'vue-resource'
// 注册VueResource
Vue.use(VueResource) 

// 引入提取根域名的地址
Vue.http.options.root = 'http://www.lovegf.cn:8899/'


Vue.config.productionTip = false

// 按需按需导入Mui部分组件
import { Header } from 'mint-ui'
// 注册组件
Vue.component(Header.name, Header)

// 导入自己的网格布局样式
import './css/common.less'

// 导入轮播图组件
import { Swipe, SwipeItem } from 'mint-ui'
// 注册轮播图组件
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)




// 引入mui的样式文件
import './lib/mui/css/mui.css'
// 引入mui图标样式文件
import './lib/mui/css/icons-extra.css'
 

// 定义全局时间过滤器
Vue.filter('dateFormat', function(dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  // 直接调用表示获取当前的时间
  return moment(dateStr).format(pattern)
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
