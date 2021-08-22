<template>
  <div id="app">
    <div id="tab-bar">
      <div class="tab-bar-item">
        <img src="./assets/img/tabbar/homepage.png" />
        <div>首页</div></div>
      <div class="tab-bar-item">
        <img src="./assets/img/tabbar/category.png" />
        <div>分类</div></div>
      <div class="tab-bar-item">
        <img src="./assets/img/tabbar/cart.png" />
        <div>购物车</div></div>
      <div class="tab-bar-item">
        <img src="./assets/img/tabbar/my.png" />
        <div>我的</div></div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
@import './assets/css/base.css';
#tab-bar{
  height: 49px;
  background-color: #f6f6f6;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

}
.tab-bar-item{
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item img{
  width: 22px;
  height: 22px;
  margin: 3px;
  vertical-align: middle;
}

</style>
