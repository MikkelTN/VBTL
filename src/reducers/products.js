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
    case 'INCREMENT_LIKES':
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

export default products
