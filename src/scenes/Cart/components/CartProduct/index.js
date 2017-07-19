import { h } from 'preact'

import styles from './styles.scss'

import Image from '../../../../components/Image/index'

const CartProduct = ({
  onRemoveClick,
  onIncreaseClick,
  onDecreaseClick,
  product,
  cart,
  i
}) => (
  <div class="cart-product">
      <Image
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
          <div
            class="grid-product-btn"
            onClick={onDecreaseClick}
          >
            -
          </div>
          <p
            class="grid-product-count"
          >
            <strong>
              {cart[product.id]}
            </strong>
          </p>
          <div
            class="grid-product-btn"
            onClick={onIncreaseClick}
          >
            +
          </div>
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
      class="grid-product-add-cart"
      onClick={onRemoveClick}
    >
      Remove from cart
    </button>
    <div
      class="hr-line"
    >
    </div>
  </div>
)

export default CartProduct
