<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <template v-slot:itemIconActive>
        <img src="~img/tabbar/home.active.svg" alt="">
      </template>
      <template v-slot:itemIcon>
        <img src="~img/tabbar/home.svg" alt="">
      </template>
      <template v-slot:itemText>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <template v-slot:itemIconActive>
        <img src="~img/tabbar/category.active.svg" alt="">
      </template>
      <template v-slot:itemIcon>
        <img src="~img/tabbar/category.svg" alt="">
      </template>
      <template v-slot:itemText>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <template v-slot:itemIconActive>
        <img src="~img/tabbar/shopping-cart.active.svg" alt="">
      </template>
      <template v-slot:itemIcon>
        <img src="~img/tabbar/shopping-cart.svg" alt="">
      </template>
      <template v-slot:itemText>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template v-slot:itemIconActive>
        <img src="~img/tabbar/mine.active.svg" alt="">
      </template>
      <template v-slot:itemIcon>
        <img src="~img/tabbar/mine.svg" alt="">
      </template>
      <template v-slot:itemText>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  const TabBar = () => import('./TabBar')
  const TabBarItem = () => import('./TabBarItem')

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
