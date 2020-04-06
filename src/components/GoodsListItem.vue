<template>
  <div class="goods-item" @click="itemClick">
    <img :src="imgLink" alt="" @load="imageLoad">
    <div>
      <p>{{goods.title}}</p>
      <span class="price">{{goods.price}}</span>
      <span class="star">{{goods.cfav}}</span>
    </div>
  </div>
</template>

<script>
  import {imageLoadMixin} from "@/common/mixin";

  export default {
    name: "GoodsListItem",
    props: {
      goods: {
        type: Object,
        default: {}
      }
    },
    mixins: [imageLoadMixin],
    computed: {
      imgLink() {
        return this.goods.image || this.goods.show.img
      }
    },
    methods: {
      itemClick() {
        this.$router.push({
          path: '/detail/' + this.goods.iid
        })
      },
      imageLoad() {
        this.imageLoadEmit()
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    width: 45%;
    text-align: center;
    margin: 2px 0;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-item p {
    font-size: 13px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .goods-item span {
    font-size: 13px;
  }

  .price {
    color: var(--color-tint);
  }

  .star::before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    background: url("~img/star.svg");
    background-size: 12px 12px;
    margin-left: 3px;
  }
</style>
