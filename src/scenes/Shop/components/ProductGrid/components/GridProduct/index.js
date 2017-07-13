import { h } from 'preact'
import { Link } from 'react-router-dom'

import styles from './styles.scss'

import Image from '../../../../../../components/Image/index'

const GridProduct = ({
  onCartClick,
  onLikeClick,
  product,
  i
}) => (
  <div class="grid-product">
    <Image
      src={require(`../../../../images/${product.img_grid}`)}
      alt={product.caption}
    />
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
        class="grid-product-add-cart orange"
        onClick={onCartClick}
      >
        <strong>
          Add to cart
        </strong>
      </button>
      <Link
        to={`/shop/${product.code}`}
        class="grid-product-link"
      >
        <button
          class="orange"
        >
          <strong>
            Read more
          </strong>
        </button>
      </Link>
    </div>
  </div>
)

export default GridProduct
