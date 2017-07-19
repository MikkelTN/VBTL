import { h } from 'preact'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../../../actions/index'

import styles from './styles.scss'

const AddCartButton = ({
  hidePopup,
  id,
  increaseQuantity,
  popup,
  showPopup
}) => (
  <button
    class="product-add-cart"
    onClick={() => {
      increaseQuantity(id)
      console.log(popup.productId)
      if(popup.productId === null) {
        setTimeout(() => {
          hidePopup()
        }, 2000)
      }
      showPopup(id)
    }}
  >
    <p>
      Add to cart
    </p>
  </button>
)

const mapStateToProps = (
  state
) => (
  {
    popup: state.popup
  }
)

const mapDispatchToProps = (
  dispatch
) => (
  bindActionCreators(
    actionCreators,
    dispatch
  )
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCartButton)
