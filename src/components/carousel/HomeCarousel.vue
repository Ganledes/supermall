<template>
  <carousel>
    <carousel-item v-for="item in banners">
      <a href="">
        <img :src="item.image" alt="">
      </a>
    </carousel-item>
  </carousel>
</template>

<script>
  import Carousel from "@/components/carousel/Carousel";
  import CarouselItem from "@/components/carousel/CarouselItem";

  export default {
    name: "HomeCarousel",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Carousel,
      CarouselItem
    }
  }
</script>

<style scoped>

</style>
