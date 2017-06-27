import { h } from 'preact'

import styles from './styles.scss'

const CartTotal = ({
  cart,
  products
}) => (
  <div
    class="cart-total-list"
  >
    <div
      class="cart-sub-total"
    >
      <h2>Cart total</h2>
      <h2>
        ${products
          .map((product) => (
            cart[product.id] * product.price || 0
          ))
          .reduce((total, price) => (
            total + price
          ), 0)
        }
      </h2>
    </div>
    <button
      class="cart-check-out uppercase"
    >
    <h3>
      Checkout
    </h3>
    </button>
  </div>
)

export default CartTotal
