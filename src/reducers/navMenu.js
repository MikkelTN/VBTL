const navMenu = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_NAV':
      return !state
    case 'CLOSE_NAV':
      return false
    default:
      return state
  }
}

export default navMenu
