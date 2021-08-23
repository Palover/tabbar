<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/homepage">
        <img slot="item-img" src="@/assets/img/tabbar/homepage.png" />
        <img slot="item-img-active" src="@/assets/img/tabbar/homepage-a.png" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-img" src="@/assets/img/tabbar/category.png" />
        <img slot="item-img-active" src="@/assets/img/tabbar/category-a.png" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-img" src="@/assets/img/tabbar/cart.png" />
        <img slot="item-img-active" src="@/assets/img/tabbar/cart-a.png" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/my">
        <img slot="item-img" src="@/assets/img/tabbar/my.png" />
        <img slot="item-img-active" src="@/assets/img/tabbar/my-a.png" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/TabBar/TabBar";
import TabBarItem from "./components/TabBar/TabBarItem";
export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
@import './assets/css/base.css';
</style>
