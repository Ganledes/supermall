<template>
  <nav-bar>
    <template v-slot:left>
      <div @click="back">
        <img src="~img/back.svg" alt="back" class="back">
      </div>
    </template>
    <template v-slot:center>
      <div class="title">
        <div v-for="(item, index) in titles" class="title-item" @click="itemClick(index)"
             :class="{active: index === currentIndex}">
          {{item}}
        </div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from "@/components/navbar/NavBar";

  export default {
    name: "DetailNavBar",
    components: {NavBar},
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('titleClick', index)
      },
      back() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .title {
    display: flex;
  }

  .title-item {
    flex: 1;
    font-size: 14px;
  }

  .back {
    width: 16px;
  }

  .active {
    color: var(--color-high-text)
  }
</style>
