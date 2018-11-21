<template>

  <!-- 头部模块 -->
  <div class="item-container">
    <mt-header fixed title="Vue-item"></mt-header>
		

    <!-- 底部模块 -->
    <nav class="mui-bar mui-bar-tab">
       <!-- 去掉首页显示一直高亮 去掉mui-active-->
			<router-link class="mui-tab-item mui-active" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>

			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
		  </router-link>

			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>

			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

    <!-- 中间模块 -->
		<!-- 提供内容占位符 -->
		<router-view></router-view>
  </div>
</template>


<script>
</script>


<style lang="less">
  .item-container {
    padding-top: 40px;
  }
</style>
