import Vue from 'vue'
import Router from 'vue-router'

// 引入首页的入口文件
import homeComponent from '../pages/home'
import memberContainer from '../pages/member'
import searchContainer from '../pages/search'
import shopcarContainer from '../pages/shopcar'
import newsListComponent from '../pages/newsList/'
// import newsInfoComponent from '../pages/newsInfo/'



Vue.use(Router)

export default new Router({
  routes: [
    // 匹配首页的路由规则
    {path: '/', redirect: '/home'},
    {path: '/home', component: homeComponent},
    {path: '/member', component: memberContainer},
    {path: '/search', component: searchContainer},
    {path: '/shopcar', component: shopcarContainer},
    { path: '/home/newsList', component: newsListComponent },
    // 新闻列表详情页面是根据id跳转
    // { path: '/home/newsInfo/:id', component: newsInfoComponent }
  ],
  // 修改mui里的默认样式，实现选中高亮
  linkActiveClass: 'mui-active'
})
