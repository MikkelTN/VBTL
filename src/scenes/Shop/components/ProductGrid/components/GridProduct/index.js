import { h } from 'preact'
import { Link } from 'react-router-dom'

import styles from './styles.scss'

import Image from '../../../../../../components/Image/index'

import AddCartButton from '../../../AddCartButton/index'

const GridProduct = ({
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
      <AddCartButton
        id={product.id}
      />
      <Link
        to={`/shop/${product.code}`}
        class="grid-product-link"
      >
        <button>
          Read more
        </button>
      </Link>
    </div>
  </div>
)

export default GridProduct
