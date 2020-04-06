export default {
  addToCart({state, commit}, {goods}) {
    const cartGoods = state.cart.find(value => goods.id === value.id)
    if (cartGoods) {
      commit({
        type: 'incItemCount',
        cartGoods
      })
    } else {
      goods.count = 1
      goods.isChecked = true
      commit({
        type: 'addToCart',
        goods
      })
    }
  }
}
