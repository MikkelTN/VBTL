import { h } from 'preact'

import styles from './styles.scss'

const SingleProduct = ({
  increaseQuantity,
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
        src={require(`../../images/${product.img_single[product.active_single]}`)}
        alt={product.caption}
        class="single-product-img"
      />
      <div
        class="single-product-carousel"
      >
      {product.img_carousel.map((img, i) =>
        <img
          src={require(`../../images/${product.img_carousel[i]}`)}
          alt={product.caption}
          class="single-product-carousel-img"
          onClick={() => changeCarousel(product.id, i)}
          />
      )}
      </div>
      <div
        class="hr-line"
      >
      </div>
      <div
        class="single-product-description"
      >
        <h2
          class="single-product-caption uppercase"
        >
          {product.caption}
        </h2>
        <h2
          class="single-product-price orange"
        >
          ${product.price}
        </h2>
        <p
          class="single-product-text"
        >
          {product.text}
        </p>
      </div>
      <div
        class="single-product-btns"
      >
        <button
          class="single-product-add-cart orange uppercase"
          onClick={() => increaseQuantity(product.id)}
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
