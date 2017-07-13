const searchBar = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SEARCH':
      return !state
    case 'CLOSE_SEARCH':
      return false
    default:
      return state
  }
}

export default searchBar
