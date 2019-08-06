<template>
        <!-- 底部Tabbar区域 -->
      <nav class="mui-bar mui-bar-tab mui-active">
        <router-link to="/home" class="mui-tab-item-llb">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link to="/category" class="mui-tab-item-llb">
          <span class="mui-icon mui-icon-list"></span>
          <span class="mui-tab-label">分类</span>
        </router-link>
        <router-link to="/car" class="mui-tab-item-llb">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
            <span class="mui-badge" id="badge">{{$store.getters.getGoodsCountAndAmount.count}}</span>
          </span>
          <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link to="/user" class="mui-tab-item-llb">
          <span class="mui-icon mui-icon-gear"></span>
          <span class="mui-tab-label">个人中心</span>
        </router-link>
		</nav>
</template>

<script>
export default {
    
}
</script>
<style lang="less" scoped>

  // 该类名，解决 tabbar 点击无法切换的问题
  .mui-bar-tab .mui-tab-item-llb.mui-active {
    color: #007aff;
  }

  .mui-bar-tab .mui-tab-item-llb {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
  }

  .mui-bar-tab .mui-tab-item-llb .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .mui-bar-tab .mui-tab-item-llb .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  } 
</style>
