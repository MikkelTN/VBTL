const products = (state = [], action) => {
  const id = action.productId
  switch (action.type) {
    case 'CHANGE_CAROUSEL':
      return [
        ...state.slice(0, id),
        {
          ...state[id],
          active_single: action.index
        },
        ...state.slice(id + 1)
      ]
    default:
      return state
  }
}

export default products
