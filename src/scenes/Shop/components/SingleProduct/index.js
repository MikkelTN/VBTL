import { h } from 'preact'
import { Link } from 'react-router-dom'

import styles from './styles.scss'

const path = "/src/data/images/"

const SingleProduct = ({
  addToCart,
  changeCarousel,
  incrementLikes,
  products,
  match
}) => {
  const id = products.findIndex((product) =>
    product.code === match.params.productId
  )
  const product = products[id]
  return (
    <div class="single-product">
      <img
        src={`${path}${product.img_single[product.active_single]}`}
        alt={product.caption}
        class="single-product-img"
      />
      <strong
        class="single-product-caption uppercase"
      >
      <div
        class="single-product-carousel"
      >
      {product.img_carousel.map((img, i) =>
        <img
          src={`${path}${product.img_carousel[i]}`}
          alt={product.caption}
          class="single-product-carousel-img"
          onClick={() => changeCarousel(product.id, i)}
          />
      )}
      </div>
        {product.caption}
      </strong>
      <strong
        class="single-product-price orange"
      >
        {product.price}
      </strong>
      <div
        class="single-product-btns"
      >
        <button
          class="single-product-add-cart orange uppercase"
          onClick={() => addToCart(product.id)}
        >
          <strong>
            Add to cart
          </strong>
        </button>
        <button
          class="single-product-like"
          onClick={() => incrementLikes(product.id)}
        >
          &#10084; {product.likes}
        </button>
      </div>
    </div>
  )
}

export default SingleProduct
