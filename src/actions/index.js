//Expand menu
export const toggleNav = () => (
  {
    type: 'TOGGLE_NAV'
  }
)

//Close menu
export const closeNav = () => (
  {
    type: 'CLOSE_NAV'
  }
)

//Add to cart or increase quantity
export const increaseQuantity = (productId) => (
  {
    type: "INCREASE_QUANTITY",
    productId
  }
)

//Remove from cart
export const removeFromCart = (productId) => (
  {
    type: "REMOVE_FROM_CART",
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

//Increment likes
export const incrementLikes = (productId) => (
  {
    type: "INCREMENT_LIKES",
    productId
  }
)
