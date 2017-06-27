import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../../../../actions/index'

import MiniCart from '../../components/MiniCart/index'

const mapStateToProps = (
  state
) => (
  {
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

const ConnectedMiniCart = connect(
  mapStateToProps,
  mapDispatchToProps
)(MiniCart)

export default ConnectedMiniCart
