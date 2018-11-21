# vue-cms

> 这是一个cms学习项目

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


## 修改首页tabBar图标
使用Vue框架mint-ui配合脚手架开发项目流程：

先创建结构目录

再装包npm i mint-ui -S

使用less，装包:npm install less less-loader -D

按需引入mint-ui的部分组件，装包npm install babel-plugin-component -D

根据文档操作，修改babelrc文件

在 main.js按需导部分组件:import { Button, Cell } from 'mint-ui'

在文档中找到header模块,按步骤引入模块，将Button改 为header

并注册组件：Vue.component(Header.name, Header);

在app.vue引入代码：<mt-header fixed title="固定在顶部"></mt-header>（目前只用这么多），修改样式

底部模块用mui,在第七条资料mui里面dist里面三个样式拷贝下来

在自己src文件新建文件夹lib,里面新建mui文件夹，将拷贝的文件放进去

使用mui创建底部：
  在F:\前端文件\Views\Day_007\资料\mui-master\mui-master\examples\hello-mui\examples找到tabbar.html文件，查看源代码，将底部源代码复制到app.vue中

  在main文件中引入刚拷贝的样式文件 import './lib/mui/css/mui.css'

  中间部分省略

  添加购物车图标后，需要在main.js中引入mui-icons-extra.css文件,购物车图标才会显现
  
   中间部分省略
  
  替换首页a标签为router-link

  // 修改mui里的默认样式linkActiveClass: 'mui-active'，实现选中高亮

  去掉首页显示一直高亮 去掉mui-active   	<router-link class="mui-tab-item mui-active" to="/home">

  新建文件夹pages，建立相应的文件home下面的home.vue，以后可以简写

  做轮播图需装包npm install -S vue-resource
    
  



1. 找到mui的扩展图标库
2. 将扩展图标库拷贝到项目中(连带字体文件一起拷贝)
3. 在main.js中引入字体图标的样式文件
4. 使用字体图标

## 设置当前选中的tab栏高亮

- 结合路由的`linkActiveClass`属性完成使用`mui-active`类样式的高亮

## 配置路由规则实现路由跳转

- 项目文件的结构注意事项, 可以参考现有的开源项目, 更方便的管理自己的文件结构

- 参考结构:

  src => pages => home => index.vue

配置路由规则:

  ```javascript
  import HomeComponent from '../pages/home/'
  import MemberComponent from '../pages/member/'
  import ShopcarComponent from '../pages/shopcar/'
  import SearchComponent from '../pages/search/'

  Vue.use(Router)

  export default new Router({
    routes: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: HomeComponent },
      { path: '/member', component: MemberComponent },
      { path: '/shopcar', component: ShopcarComponent },
      { path: '/search', component: SearchComponent },
    ],
    linkActiveClass: 'mui-active'
  })
  ```

## 制作首页轮播图

1. 通过mint-ui的swipe组件完成样式
2. 使用vue-resource获取接口中的数据, 进行渲染

## 首页九宫格的样式改造

- 由于mint-ui没有合适的组件可供参考, 所以我们使用mui的代码片段作为改造的基础模板
- 修改结构并覆盖mui的默认样式
- 抽取全局的common.less样式, 通过main.js引入

## 添加组件切换动画

- 切换动画的起点和终点不同, 所以单独设置v-enter和v-leave-to的样式

```css
.v-enter {
  transform: translateX(100%);
  opacity: 0;
}

.v-leave-to {
  position: absolute;
  transform: translateX(-100%);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.6s ease;
}
```