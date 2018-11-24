<template>

  <!-- 头部模块 -->
  <div class="app-container">
    <mt-header fixed title="Vue-item"></mt-header>
		

    <!-- 底部模块 -->
    <nav class="mui-bar mui-bar-tab">
       <!-- 去掉首页显示一直高亮 去掉mui-active-->
			<router-link class="mui-tab-item" to="/home">
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
		<!-- 让四个组件切换实现动画需用transition标签包裹 -->
		<transition>
					<router-view></router-view>
		</transition>

  </div>
</template>


<script>
</script>


	<style lang="less">
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;

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
}
</style>
