const cart = (state = {}, action) => {
  const id = action.productId
  switch (action.type) {
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        [id]: state[id] + 1 || 1,
        total: state.total + 1
      }
    case 'DECREASE_QUANTITY':
      if (state[id] > 1) {
        return {
          ...state,
          [id]: state[id] - 1,
          total: state.total - 1
        }
      } else {
        return state
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        total: state.total - state[id],
        [id]: 0
      }
    default:
      return state
  }
}

export default cart
