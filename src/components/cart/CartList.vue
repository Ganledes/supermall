<template>
  <div class="cart-list">
    <div v-for="(item, index) in cart" class="cart-item" :key="index">
      <checkbox class="selector" :is-checked="item.isChecked" @on-check="onCheck(index)"/>
      <div class="item-image">
        <img :src="item.image" alt="商品图片">
      </div>
      <div class="item-info">
        <div class="item-text">{{item.title}}</div>
        <div class="item-text desc">{{item.desc}}</div>
        <div class="">
          <span class="price">¥{{item.price}}</span>
          <span class="count">x{{item.count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Checkbox from "@/components/Checkbox";

  export default {
    name: "CartList",
    components: {Checkbox},
    computed: {
      ...mapGetters(['cart'])
    },
    methods: {
      onCheck(index) {
        this.$store.commit({
          type: 'changeChecked',
          index
        })
      }
    }
  }
</script>

<style scoped>
  .selector {
    display: flex;
    margin: 0 15px;
    justify-content: center;
    align-items: center;
  }

  .cart-item {
    display: flex;
    padding: 8px 0;
    border-bottom: 1px solid #ccc;
    align-items: center;
  }

  .item-image img {
    width: 80px;
    height: 100px;
    border-radius: 6px;
    object-fit: cover;
  }

  .item-info {
    overflow: hidden;
    height: 100px;
    position: relative;
    margin: 0 12px;
  }

  .item-text {
    font-size: 18px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .desc {
    font-size: 14px;
    margin-top: 15px;
  }

  .price, .count {
    position: absolute;
    bottom: 0;
  }

  .price {
    left: 0;
  }

  .count {
    right: 6px;
  }
</style>
