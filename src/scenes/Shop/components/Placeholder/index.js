import { h } from 'preact'
import { Link } from 'react-router-dom'

import styles from './styles.scss'

const Placeholder = () => (
  <div class="grid-placeholder">
    <Link
      to='/shop/placeholder'
      class="grid-placeholder-link"
    >
      <div class="grid-placeholder-image">
      </div>
    </Link>
      <div class="grid-placeholder-caption">
      </div>
      <div class="grid-placeholder-text">
      </div>
    <strong class="grid-placeholder-add-cart uppercase orange">
      Add to cart
    </strong>
  </div>
)

export default Placeholder
