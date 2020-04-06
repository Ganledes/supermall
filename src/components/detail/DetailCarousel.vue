<template>
  <carousel class="detail-carousel">
    <carousel-item v-for="(item, index) in images" :key="index">
      <img :src="item" alt="image" @load="imageLoad">
    </carousel-item>
  </carousel>
</template>

<script>
  import Carousel from "@/components/carousel/Carousel";
  import CarouselItem from "@/components/carousel/CarouselItem";

  import {imageLoadMixin} from "@/common/mixin";

  export default {
    name: "DetailCarousel",
    components: {
      Carousel,
      CarouselItem
    },
    props: {
      images: {
        type: Array,
        default() {
          return []
        }
      }
    },
    mixins: [imageLoadMixin],
    methods: {
      imageLoad() {
        this.imageLoadEmit()
      }
    }
  }
</script>

<style scoped>
  .detail-carousel {
    height: 300px;
    overflow: hidden;
  }
</style>
