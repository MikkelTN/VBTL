//Close menu
export const closeNav = () => (
  {
    type: 'CLOSE_NAV'
  }
)

//Close search
export const closeSearch = () => (
  {
    type: 'CLOSE_SEARCH'
  }
)

//Shop product popup
export const showPopup = (productId) => (
  {
    type: "SHOW_POPUP",
    productId
  }
)

//Hide product popup
export const hidePopup = () => (
  {
    type: "HIDE_POPUP"
  }
)

//Remove from cart
export const removeFromCart = (productId) => (
  {
    type: "REMOVE_FROM_CART",
    productId
  }
)

//Increase quantity
export const increaseQuantity = (productId) => (
  {
    type: "INCREASE_QUANTITY",
    productId
  }
)

//Decrease quantity
export const decreaseQuantity = (productId) => (
  {
    type: "DECREASE_QUANTITY",
    productId
  }
)

//Change the main image
export const changeCarousel = (productId, index) => (
  {
    type: "CHANGE_CAROUSEL",
    productId,
    index
  }
)
