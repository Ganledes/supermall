<template>
  <carousel>
    <carousel-item v-for="item in banners">
      <a href="">
        <img :src="item.image" alt="" @load="CarouselImgLoad">
      </a>
    </carousel-item>
  </carousel>
</template>

<script>
  import Carousel from "@/components/carousel/Carousel";
  import CarouselItem from "@/components/carousel/CarouselItem";

  export default {
    name: "HomeCarousel",
    components: {
      Carousel,
      CarouselItem
    },
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        isLoad: false
      }
    },
    methods: {
      CarouselImgLoad() {
        if (!this.isLoad) {
          this.$emit('CarouselImgLoad')
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>

</style>
