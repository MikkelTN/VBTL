import { h } from 'preact'

import styles from './styles.scss'

const CartProduct = ({
  onRemoveClick,
  onIncreaseClick,
  onDecreaseClick,
  product,
  cart,
  i
}) => (
  <div class="cart-product">
      <img
        src={require(`../../images/${product.img_grid}`)}
        alt={product.caption}
        class="grid-product-img"
      />
    <div
      class="grid-product-list"
    >
      <div
        class="grid-product-caption description"
      >
        <p>Product</p>
        <strong>
          {product.caption}
        </strong>
        </div>
        <div
          class="grid-product-price description"
        >
          <p>Price</p>
          <strong>${product.price}</strong>
        </div>
        <div
          class="grid-product-quantity description"
        >
          <p>Quantity</p>
          <div
            class="grid-product-quantity-control"
          >
          <button
            class="grid-product-btn"
            onClick={onDecreaseClick}
          >
            -
          </button>
          <p
            class="grid-product-count"
          >
            <strong>
              {cart[product.id]}
            </strong>
          </p>
          <button
            class="grid-product-btn"
            onClick={onIncreaseClick}
          >
            +
          </button>
        </div>
      </div>
      <div
        class="grid-product-price description"
      >
        <p>Total</p>
        <strong>${(product.price * cart[product.id]).toFixed(2)}</strong>
      </div>
    </div>
    <button
      class="grid-product-add-cart orange uppercase"
      onClick={onRemoveClick}
    >
      <strong>
        Remove from cart
      </strong>
    </button>
    <div
      class="hr-line"
    >
    </div>
  </div>
)

export default CartProduct
