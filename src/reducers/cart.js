const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      console.log('Added to cart!')
      return state
    case 'CHANGE_CAROUSEL':
      return state
    case 'INCREMENT_LIKES':
      const id = action.productId
      return [
        ...state.slice(0, id),
        {
          ...state[id],
          likes: state[id].likes + 1
        },
        ...state.slice(id + 1)
      ]
    default:
      return state
  }
}

export default cart
