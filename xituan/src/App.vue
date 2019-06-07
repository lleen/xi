
<template>
  <div id="app">
    <router-view></router-view>
    <tabbar>
      <tabbar-item link="/home" :selected="$route.name==='home'">
        <img slot="icon" src="./assets/店铺-2复制@2x.png">
        <span slot="label">首页</span>
        <img slot="icon-active" src="./assets/店铺-2复制@2x(1).png">
      </tabbar-item>
      <tabbar-item link="/giftBag" :selected="$route.name==='giftBag'">
        <img slot="icon" src="./assets/礼包@2x.png">
        <span slot="label">礼包</span>
        <img slot="icon-active" src="./assets/礼包@2x(1).png">
      </tabbar-item>
      <tabbar-item link="/component/demo">
        <img slot="icon" src="./assets/gouwuche@2x.png">
        <span slot="label">购物车</span>
        <img slot="icon-active" src="./assets/gouwuche@2x(1).png">
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="./assets/个人中心@2x.png">
        <span slot="label">我的</span>
        <img slot="icon-active" src="./assets/个人中心@2x(1).png">
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vux";
export default {
  name: "app",
  components: {
    Tabbar,
    TabbarItem
  },
  watch: {
    $route(n) {
      console.log(n);
    }
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";

body {
  background-color: #fbf9fe;
  .weui-tabbar__icon {
    width: 18px;
    height: 18px;
  }
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i,
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
    color: #888;
  }
}
</style>
