const navMenu = (state = {
  visible: false
}, action) => {
  switch (action.type) {
    case 'TOGGLE_NAV':
      return {
        ...state,
        visible: !state.visible
      }
    default:
      return state
  }
}

export default navMenu
