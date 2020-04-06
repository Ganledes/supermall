<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="discount" v-if="goods.discount.length !== 0">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span v-for="item in goods.columns">{{item}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="(item,index) in goods.services" :key="index">
        <img :src="item.icon" alt="">
        <span>{{item.name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: {
        type: Object,
        default: {}
      }
    }
  }
</script>

<style scoped>
  .base-info {
    color: #999;
    margin: 15px 4px;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-title {
    color: #000;
    font-size: 16px;
  }

  .info-price {
    line-height: 45px;
  }

  .info-price span {
    margin-right: 4px;
  }

  .n-price {
    font-size: 24px;
    color: var(--color-high-text);
  }

  .o-price {
    font-size: 13px;
    text-decoration: line-through;
  }

  .discount {
    font-size: 13px;
    color: #fff;
    background-color: var(--color-tint);
    padding: 3px 6px;
    border-radius: 8px;
  }

  .info-other {
    display: flex;
    justify-content: space-between;
    line-height: 30px;
    font-size: 13px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }

  .info-service {
    color: #111;
    font-size: 13px;
    line-height: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .info-service-item img {
    width: 13px;
    height: 13px;
    margin-right: 2px;
    padding-bottom: 0;
  }
</style>
