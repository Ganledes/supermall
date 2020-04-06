<template>
  <div class="bottom-bar">
    <div class="select-all">
      <checkbox/>
      <span>全选</span>
    </div>
    <div class="total-price">
      合计：{{totalPrice}}
    </div>
    <div class="calculate">
      去计算({{goodsCount}})
    </div>
  </div>
</template>

<script>
  import Checkbox from "@/components/Checkbox";

  import {mapGetters} from 'vuex'

  export default {
    name: "CartBottomBar",
    components: {Checkbox},
    computed: {
      ...mapGetters(['cart']),
      totalPrice() {
        return '￥' + this.cart.filter(goods => goods.isChecked)
          .reduce((pre, goods) => {
            return pre + goods.price * goods.count
          }, 0).toFixed(2)
      },
      goodsCount() {
        return this.cart.filter(goods => goods.isChecked)
          .reduce((pre, current) => {
            return pre + current.count
          }, 0)
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    position: fixed;
    display: flex;
    left: 0;
    right: 0;
    align-items: center;
    bottom: 49px;
    height: 44px;
    background-color: #eee;
  }

  .select-all {
    display: flex;
    width: 80px;
    align-items: center;
    justify-content: center;
  }

  .select-all span {
    margin-left: 2px;
    padding-top: 2px;
  }

  .total-price {
    flex: 1;
    text-align: center;
    font-size: 15px;
  }

  .calculate {
    height: 44px;
    line-height: 44px;
    padding: 0 15px;
    color: #fff;
    background-color: orangered;
  }
</style>
