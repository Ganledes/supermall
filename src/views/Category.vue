<template>
  <div>
    <input type="text" @input="input($event)">
    <div>{{message}}</div>
  </div>
</template>

<script>
  import {debounce} from "@/common/utils";

  export default {
    name: "Category",
    data() {
      return {
        message: ''
      }
    },
    methods: {
      input(event) {
        debounce(() => {
          this.message = event.target.value
        }, 1000)()
      }
    }
  }
</script>

<style scoped>
</style>
