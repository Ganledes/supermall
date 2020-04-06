<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo">
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="count">
            {{shop.sells | sellCountFilter}}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="count">
            {{shop.goodsCount}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShopInfo",
    props: {
      shop: {
        type: Object,
        default: {}
      }
    },
    filters: {
      sellCountFilter(sellCount) {
        if (sellCount > 9999) {
          return (sellCount / 10000).toFixed(1) + '万'
        } else {
          return sellCount
        }
      }
    }
  }
</script>

<style scoped>
  .shop-info {
    margin: auto 10px;
    border-bottom: 5px solid #f2f5f8;
  }

  .shop-top {
    display: flex;
    align-items: center;
  }

  .shop-top img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, .2);
    margin-right: 6px;
  }

  .shop-middle {
    display: flex;
    text-align: center;
    justify-content: space-between;
    margin-top: 15px;
    align-items: center;
  }

  .shop-middle-item {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .shop-middle-item div {
    flex: 1;
  }

  .shop-middle-left {
    color: #333;
    display: flex;
    height: 40px;
    align-items: center;
    border-right: 1px solid rgba(100, 100, 100, .2);
  }

  .count {
    font-size: 18px;
    line-height: 34px;
  }

  .sells-text, .goods-text {
    font-size: 13px;
  }

  .shop-middle-right table td {
    font-size: 13px;
    padding: 5px;
  }

  .score {
    color: #5ea732;
  }

  .better {
    color: #fff;
    border-radius: 3px;
    padding: 0 3px !important;
    background-color: #5ea732;
  }

  .score-better {
    color: #f13e3a;
  }

  .better-more {
    background-color: #f13e3a;
  }

  .shop-bottom {
    text-align: center;
    line-height: 60px;
  }

  .enter-shop {
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    line-height: 30px;
    border-radius: 10px;
  }
</style>
