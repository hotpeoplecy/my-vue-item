<template>
    <div class="news-list-container">
        <ul class="mui-table-view">
					<li v-for="(item) in newsList" :key="item.id" class="mui-table-view-cell mui-media">                  
                        <!-- 渲染的页面包含标签的应该用v-html来渲染 -->
                        <!-- 创建新闻列表点击详情页面 -->
                        <!-- 属性绑定后面接的是字符串，所以要用引号把他包起来   页面跳转到哪一个页面的依据是根据唯一的id-->
						<router-link :to="'/home/newsInfo/' + item.id">
							<img class="mui-media-object mui-pull-right" src="">
							<div class="mui-media-body">
                                <h4 class="title mui-ellipsis">{{ item.title }}</h4>
                                <p>
                                    <span class="ctime">发表时间:{{ item.add_time | dataFormat}}</span>
                                    <span class="click">点击:{{ item.click }}次</span>
                                </p>
							</div>
						</router-link>
					</li>
				</ul>
    </div>
</template>


<script>
    // 引入弹框插件
    import { Toast } from "mint-ui";
    // 将获取新闻列表的数据暴露出去
    export default {
        // 接收返回来的数据
        data() {
            return {
                newsList: []
            }
        },
        // 执行函数的生命周期函数
        created() {
            this.getNewsList();
        },
        methods: {
            getNewsList() {
                // 如果用了根域名的调用方法，后面的地址就不能加/
                this.$http.get("api/getnewslist").then(result => {
                    // console.log(result)
                    if(result.body.status === 0) {
                        this.newsList = result.body.message;
                    } else {
                        Toast('获取新闻列表数据失败');
                    }
                });
            }
        },
    }
</script>

<style lang="less">
.news-list-container {
  .mui-table-view {
    .mui-table-view-cell > a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    .mui-media-body {
      width: 100%;
      .title {
        font-size: 13px;
        font-weight: bold;
      }
      > p {
        width: 100%;
      }
      .ctime,
      .click {
        font-size: 13px;
        color: #26a2ff;
      }
    }
  }
}
</style>

