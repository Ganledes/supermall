<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
    <detail-carousel :images="topImages"/>
    <detail-base-info :goods="goods"/>
    <shop-info :shop="shop"/>
    <detail-goods-info :detail-info="detailInfo"/>
    <detail-param-info ref="params" :param-info="paramInfo" id="params"/>
    <detail-comment ref="comment" :comment-info="commentInfo" id="comment"/>
    <goods-list ref="recommend" :goods-list="recommends" id="recommend"/>
    <back-to-top v-show="isShowTop"/>
    <detail-bottom-bar @add-to-cart="addToCart"/>
  </div>
</template>

<script>
  import DetailNavBar from "@/components/detail/DetailNavBar";
  import DetailCarousel from "@/components/detail/DetailCarousel";
  import DetailBaseInfo from "@/components/detail/DetailBaseInfo";
  import ShopInfo from "@/components/detail/ShopInfo";
  import DetailGoodsInfo from "@/components/detail/DetailGoodsInfo";
  import DetailParamInfo from "@/components/detail/DetailParamInfo";
  import DetailComment from "@/components/detail/DetailComment";
  import GoodsList from "@/components/GoodsList";
  import DetailBottomBar from "@/components/detail/DetailBottomBar";

  import {getDetail, getRecommend, Goods, Shop, GoodsParam} from "@/network/detail";
  import {debounce} from "@/common/utils";
  import {backTopMixin} from "@/common/mixin";
  import BackToTop from "@/components/BackToTop";

  export default {
    name: "Detail",
    components: {
      BackToTop,
      DetailBottomBar,
      GoodsList,
      DetailComment,
      DetailParamInfo,
      DetailGoodsInfo,
      ShopInfo,
      DetailBaseInfo,
      DetailCarousel,
      DetailNavBar
    },
    mixins: [backTopMixin],
    data() {
      return {
        id: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        offsetTops: [],
        setOffsetTop: null,
        currentIndex: 0
      }
    },
    created() {
      this.id = this.$route.params.id
      this.getDetail()
    },
    mounted() {
      this.setOffsetTop = debounce(this.pushOffsetTop, 200)
      this.$bus.$on('image-load', this.imageLoad)
      window.onscroll = this.onscroll
    },
    methods: {
      getDetail() {
        getDetail(this.id).then(value => {
          const data = value.result
          this.topImages = data.itemInfo.topImages
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
          this.shop = new Shop(data.shopInfo)
          this.detailInfo = data.detailInfo
          this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
          if (data.rate.list) {
            this.commentInfo = data.rate.list[0];
          }
          getRecommend().then(res => {
            this.recommends = res.data.list
          })
        })
      },
      titleClick(index) {
        window.scroll({
          top: this.offsetTops[index],
          behavior: "smooth"
        })
      },
      imageLoad() {
        this.$nextTick(() => this.setOffsetTop())
      },
      pushOffsetTop() {
        if (this.$refs.params) {
          this.offsetTops = []
          this.offsetTops.push(0)
          this.offsetTops.push(this.$refs.params.$el.offsetTop - 44)
          this.offsetTops.push(this.$refs.comment.$el.offsetTop - 44)
          this.offsetTops.push(this.$refs.recommend.$el.offsetTop - 44)
          this.offsetTops.push(Number.MAX_SAFE_INTEGER)
        }
      },
      onscroll() {
        const scrollTop = document.documentElement.scrollTop
        for (let i = 0; i < this.offsetTops.length - 1; i++) {
          if (this.currentIndex !== i && this.$refs.nav && scrollTop > this.offsetTops[i] - 1 && scrollTop < this.offsetTops[i + 1]) {
            this.currentIndex = i
            this.$refs.nav.currentIndex = i
          }
        }

        this.isShowTop = scrollTop > 800
      },
      addToCart() {
        const goods = {
          id: this.id,
          image: this.topImages[0],
          title: this.goods.title,
          desc: this.goods.desc,
          price: this.goods.realPrice
        }
        this.$store.dispatch({
          type: 'addToCart',
          goods
        })
      }
    }
  }
</script>

<style scoped>
  #detail {
    background-color: #fff;
    position: relative;
    z-index: 9;
  }

  .detail-nav {
    position: sticky;
    background-color: #fff;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9;
  }
</style>
