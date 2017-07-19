import { h } from 'preact'

import { connect } from 'react-redux'

import ExpandingElement from '../../../../components/ExpandingElement/index'

import styles from './styles.scss'

const AddCartPopup = ({
  popup,
  products
}) => {
  const showPopup = popup.productId !== null ? (
    <div class="add-cart-popup">
      <p>
        <strong>
          {products[popup.productId].product}
        </strong> was added to the cart.
        </p>
    </div>
  ) : null
  return (
    <div class="add-cart-popup-container">
      <ExpandingElement>
        {showPopup}
      </ExpandingElement>
    </div>
  )
}

const mapStateToProps = (
  state
) => (
  {
    popup: state.popup,
    products: state.products,
  }
)

export default connect(
  mapStateToProps
)(AddCartPopup)
