import { h } from 'preact'
import { Link } from 'react-router-dom'

import styles from './styles.scss'

const GridProduct = ({
  onCartClick,
  onLikeClick,
  product,
  i
}) => (
  <div class="grid-product">
    <Link
      to={`shop/${product.code}`}
      class="grid-product-link"
    >
      <img
        src={require(`../../../../images/${product.img_grid}`)}
        alt={product.caption}
        class="grid-product-img"
      />
    </Link>
    <strong
      class="grid-product-caption uppercase"
    >
      {product.caption}
    </strong>
    <strong
      class="grid-product-price orange"
    >
      ${product.price}
    </strong>
    <div
      class="grid-product-btns"
    >
      <button
        class="grid-product-add-cart orange uppercase"
        onClick={onCartClick}
      >
        <strong>
          Add to cart
        </strong>
      </button>
      <button
        class="grid-product-like"
        onClick={onLikeClick}
      >
        &#10084; {product.likes}
      </button>
    </div>
  </div>
)

export default GridProduct
