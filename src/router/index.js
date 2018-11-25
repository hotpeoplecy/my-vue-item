import Vue from 'vue'
import Router from 'vue-router'

// 引入首页的入口文件
import homeComponent from '../pages/home/'
import memberComponent from '../pages/member/'
import shopcarComponent from '../pages/shopcar/'
import searchComponent from '../pages/search/'
import newsListComponent from '../pages/newsList/'
import newsInfoComponent from '../pages/newsInfo/'




Vue.use(Router)

export default new Router({
  routes: [
    // 匹配首页的路由规则
    { path: '/', redirect: '/home' },
    { path: '/home', component: homeComponent },
    { path: '/member', component: memberComponent },
    { path: '/shopcar', component: shopcarComponent },
    { path: '/search', component: searchComponent },
    { path: '/home/newsList', component: newsListComponent },
    { path: '/home/newsInfo/:id', component: newsInfoComponent }
  ],
  // 修改mui里的默认样式，实现选中高亮
  linkActiveClass: 'mui-active'
})
