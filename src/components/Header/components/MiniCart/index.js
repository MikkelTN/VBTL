import { h } from 'preact'
import { Link } from 'react-router-dom'

import styles from './styles.scss'

const Cart = ({
  cart,
  closeNav
}) => (
  <div class="cart-btn">
    <Link
      to="/cart"
      onClick={() => closeNav()}
    >
      <img src={require('./images/cart.png')} />
    </Link>
    <p class="cart-inventory-count">{cart.total}</p>
    <div class="cart-split-line"></div>
  </div>
)

export default Cart