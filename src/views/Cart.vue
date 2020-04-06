<template>
  <div>
    <cart-nav-bar/>
    <cart-list/>
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import CartNavBar from "@/components/cart/CartNavBar";
  import CartList from "@/components/cart/CartList";
  import CartBottomBar from "@/components/cart/CartBottomBar";
  export default {
    name: "Cart",
    components: {
      CartBottomBar,
      CartList,
      CartNavBar
    }
  }
</script>

<style scoped>

</style>
