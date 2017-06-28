import { h } from 'preact'

import styles from './styles.scss'

import Footer from '../../components/Footer/index'
import CartProduct from './components/CartProduct/index'
import CartTotal from './components/CartTotal/index'

const Cart = ({
  products,
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
}) => {
  let cartDisplay;
  if (cart.total > 0) {
    cartDisplay = (
      <CartTotal
        cart={cart}
        products={products}
      />
    )
  } else {
    cartDisplay = (
      <h2
        class="cart-empty"
      >
        The cart is empty!
      </h2>
    )
  }
  return (
    <div
      class="section-cart"
    >
      <h1
        class="cart-caption"
      >
        Shopping cart
      </h1>
      <div
        class="cart-content"
      >
        {products.map((product, i) => {
          if (cart[product.id] > 0) {
            return (
              <CartProduct
                cart={cart}
                key={i}
                i={i}
                product={product}
                onRemoveClick={() => removeFromCart(product.id)}
                onIncreaseClick={() => increaseQuantity(product.id)}
                onDecreaseClick={() => decreaseQuantity(product.id)}
              />
            )
          }
        })}
        {cartDisplay}
      </div>
    </div>
  )
}

export default Cart
