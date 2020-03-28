<template>
  <div>
    <nav-bar v-slot:center>购物街</nav-bar>
    <home-carousel :banners="banners"/>
    <home-recommend :recommends="recommends"/>
  </div>
</template>

<script>
  import NavBar from "@/components/navbar/NavBar";
  import HomeCarousel from "@/components/carousel/HomeCarousel";
  import HomeRecommend from "@/components/HomeRecommend";

  import {getMultiData} from "@/network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeCarousel,
      HomeRecommend
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      getMultiData().then(value => {
        this.banners = value.data.banner.list
        this.recommends = value.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  .nav-bar {
    color: #fff;
    background-color: var(--color-tint);
  }
</style>
