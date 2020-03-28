<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends">
      <a href="">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      recommends: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    padding: 10px 0 15px 0;
    border-bottom: 7px solid #eee;
  }

  .recommend-item {
    flex: 1;
    font-size: 12px;
  }

  .recommend-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 5px;
  }
</style>
