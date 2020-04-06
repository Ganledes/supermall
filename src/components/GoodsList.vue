<template>
  <div class="goods-list">
    <goods-list-item v-for="(item, index) in goodsList" :goods="item" :key="index"/>
  </div>
</template>

<script>
  import GoodsListItem from "@/components/GoodsListItem";

  export default {
    name: "GoodsList",
    components: {GoodsListItem},
    props: {
      goodsList: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>
