//Add to cart
export const addToCart = (productId) => (
  {
    type: "ADD_TO_CART",
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
