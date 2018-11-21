import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({
  routes: [
    // 匹配首页的路由规则
    {path: '/', redirect: '/home'}
  ],
  // 修改mui里的默认样式，实现选中高亮
  linkActiveClass: 'mui-active'
})
