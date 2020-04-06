<template>
  <div id="home">
    <nav-bar v-slot:center class="nav-home">购物街</nav-bar>
    <home-carousel :banners="banners"/>
    <home-recommend :recommends="recommends"/>
    <feature/>
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl" class="home-tab-control"/>
    <goods-list :goods-list="goods[currentType].list"/>
    <back-to-top v-show="isShowTop"/>
  </div>
</template>

<script>
  import NavBar from "@/components/navbar/NavBar";
  import HomeCarousel from "@/components/home/HomeCarousel";
  import HomeRecommend from "@/components/home/HomeRecommend";
  import Feature from "@/components/home/Feature";
  import TabControl from "@/components/TabControl";
  import GoodsList from "@/components/GoodsList";

  import {getMultiData, getGoods} from "@/network/home";
  import {backTopMixin} from "@/common/mixin";

  export default {
    name: "Home",
    components: {
      GoodsList,
      Feature,
      NavBar,
      HomeCarousel,
      HomeRecommend,
      TabControl
    },
    mixins: [backTopMixin],
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        y: 0,
        tempY: 0,
        isGetGoods: true
      }
    },
    created() {
      this.getMultiData();
      this.getGoods('pop')
      this.getGoods('new')
      this.getGoods('sell')
    },
    mounted() {
      window.onscroll = this.homeScroll
    },
    activated() {
      window.scroll(0, this.tempY)
    },
    deactivated() {
      this.tempY = this.y
    },
    methods: {
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      homeScroll() {
        let scrollHeight = document.body.scrollHeight;
        let scrollTop = document.documentElement.scrollTop;
        let clientHeight = document.documentElement.clientHeight;
        let surplusHeight = scrollHeight - clientHeight - scrollTop
        if (surplusHeight < 100) {
          if (this.isGetGoods) {
            this.getGoods(this.currentType)
          }
        }
        this.isShowTop = scrollTop > 800
        this.y = scrollTop
      },

      /**
       * 网络请求
       */
      getMultiData() {
        getMultiData().then(value => {
          this.banners = value.data.banner.list
          this.recommends = value.data.recommend.list
        })
      },
      getGoods(type) {
        this.isGetGoods = false
        const page = this.goods[type].page + 1
        getGoods(type, page).then(value => {
          this.goods[type].list.push(...value.data.list)
          this.$nextTick(() => {
            this.isGetGoods = true
          })
        })
        this.goods[type].page++
      }
    }
  }
</script>

<style scoped>
  .nav-home {
    color: #fff;
    background-color: var(--color-tint);
    position: sticky;
    top: 0;
    z-index: 9;
  }

  .home-tab-control {
    background-color: #fff;
    position: sticky;
    top: 44px;
  }
</style>
