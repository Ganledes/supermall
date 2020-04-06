<template>
  <div class="back-to-top" @click="backToTop">
    <img src="~img/top.svg" alt="top">
  </div>
</template>

<script>
  export default {
    name: "BackToTop",
    methods: {
      backToTop() {
        window.scroll({
          top: 0,
          behavior: "smooth"
        });
      },
    }
  }
</script>

<style scoped>
  .back-to-top {
    width: 37px;
    position: fixed;
    right: 8px;
    bottom: 62px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0 5px #777;
  }

  .back-to-top img {
    width: 100%;
    padding: 10px;
  }
</style>
