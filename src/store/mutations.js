export default {
  incItemCount(state, {cartGoods}) {
    cartGoods.count++
  },
  addToCart(state, {goods}) {
    state.cart.push(goods)
  },
  changeChecked: (state, {index}) => {
    state.cart[index].isChecked = !state.cart[index].isChecked
  }
}
