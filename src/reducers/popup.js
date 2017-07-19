const popup = (
  state = {
    productId: null
  },
  action
) => {
  switch (action.type) {
    case 'SHOW_POPUP':
      return {
        productId: action.productId
      }
    case 'HIDE_POPUP':
      return {
        productId: null
      }
    default:
      return state
  }
}

export default popup
