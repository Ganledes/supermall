<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="this.isActive">
      <slot name="itemIconActive"></slot>
    </div>
    <div v-else>
      <slot name="itemIcon"></slot>
    </div>
    <div :style="textStyle">
      <slot name="itemText"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    computed: {
      isActive() {
        return this.$route.path.includes(this.path)
      },
      textStyle() {
        return this.isActive ? {
          color: this.color
        } : {}
      }
    },
    props: {
      path: String,
      color: {
        type: String,
        default: '#d81e06'
      }
    },
    methods: {
      itemClick() {
        if (!this.isActive) {
          this.$router.replace(this.path)
        }
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: -5px;
  }
</style>
