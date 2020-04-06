<template>
  <div class="checkbox" @click="onClick">
    <img src="~img/tick.svg" alt="checkbox" :class="{checked: isChecked}">
  </div>
</template>

<script>
  export default {
    name: "Checkbox",
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onClick() {
        this.$emit('on-check')
      }
    }
  }
</script>

<style scoped>
  .checked {
    border: 1px solid orangered !important;
    background-color: orangered !important;
  }

  .checkbox {
    width: 18px;
    height: 18px;
    text-align: center;
  }

  .checkbox img {
    vertical-align: middle;
    width: 18px;
    height: 18px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
  }
</style>
