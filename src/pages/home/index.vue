<template>
    <div class="home-container">
        <!-- 录播图区域 -->
        <mt-swipe class="binner-container" :auto="4000">
            <!-- 7.将轮播图用模板渲染到页面上 通过v-for遍历出每个得到的数据-->
            <!-- 只要是属性绑定，都需要使用vue语法v-blind进行属性绑定，可以简写成: -->
            <mt-swipe-item v-for="(item, index) in bannerList" :key="index">
                 <a :href="item.url">
                    <img :src="item.img">
                </a>
            </mt-swipe-item>
        </mt-swipe>

        <!-- 网格布局模块   里面的样式有公共样式，写在src/scc/common里面 -->
         <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newsList">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul> 

    </div>
</template>

<script>
   // 将轮播图渲染到页面上
   // 5.导入toast插件，不加{}就表示是default组件私有的，而它是全局的
   import {Toast} from "mint-ui"
   // 1.把轮播图数据暴露出去
   export default   {
       // 3.把数据渲染到页面通过过data函数接收的返回数据来实现
       data() {
           return {
               bannerList: []
           };
       },
       // 4.函数加载完，想要执行，必须要用函数合适的生命周期调用
       created() {
           this.getBannerData();
       },
       methods: {
           // 2.查看接口文档，定义加载数据的方法函数
           getBannerData() {
                 // 6.判断轮播图加载的业务逻辑
                this.$http.get("http://www.lovegf.cn:8899/api/getlunbo").then(result => {
                    console.log(result)
                   if (result.body.status === 0) {
                        this.bannerList = result.body.message;
                   } else {
                       toast ("获取轮播图数据失败，请稍后重试")
                   }
               });
           }
       }
   };
</script>

<style lang="less">
.home-container {
  // 轮播图的样式
  .binner-container {
    height: 200px;

    .mint-swipe-item {
      &:nth-child(1) {
        background-color: yellow;
      }
      &:nth-child(2) {
        background-color: blue;
      }
      &:nth-child(3) {
        background-color: skyblue;
      }

      a {
        display: block;
        width: 100%;
        height: 100%;
      }

      img {
        width: 100%;
      }
    }
  }
  // 九宫格样式
  .mui-grid-view {
    background-color: #fff;
    border: none;
    .mui-table-view-cell {
      border: none;
      img {
        width: 60px;
        height: 60px;
      }
      .mui-media-body {
        font-size: 13px;
      }
    }
  }
}
</style>
    // 轮播图样式
    .home-container {
        .binner-container {
            height: 200px;
            .mint-swipe-item:nth-child(1) {
                background-color: yellow;
            }
            .mint-swipe-item:nth-child(2) {
                background-color: blue;
            }
            .mint-swipe-item:nth-child(3) {
                background-color: red;
            }
            a {
                display: block;
                width: 100px;
                height: 1px;
            }
            img {
                width: 100px;
            }
        }
    }

    // 九宫格样式
  .mui-grid-view {
    background-color: #fff;
    border: none;
    .mui-table-view-cell {
      border: none;
      img {
        width: 60px;
        height: 60px;
      }
      .mui-media-body {
        font-size: 13px;
      }
    }
  }
</style>