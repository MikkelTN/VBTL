import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../../actions/index'

import Cart from '../../scenes/Cart/index'

const mapStateToProps = (
  state
) => (
  {
    products: state.products,
    cart: state.cart
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

const ConnectedCart = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)

export default ConnectedCart
