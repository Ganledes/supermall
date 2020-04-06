<template>
  <nav-bar class="nav-bar">
    <template v-slot:center>
      购物车({{length}})
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from "@/components/navbar/NavBar";

  import {mapGetters} from 'vuex'

  export default {
    name: "CartNavBar",
    components: {NavBar},
    computed: {
      ...mapGetters({
        length: 'cartLength',
        cart: 'cart'
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
