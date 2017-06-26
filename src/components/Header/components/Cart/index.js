import { h } from 'preact'
import { Link } from 'react-router-dom'

import styles from './styles.scss'

const Cart = () => (
  <div class="cart-btn">
    <Link
      to="/cart"
    >
      <img src={require('./images/cart.png')} />
    </Link>
    <p class="cart-inventory-count">0</p>
    <div class="cart-split-line"></div>
  </div>
)

export default Cart
