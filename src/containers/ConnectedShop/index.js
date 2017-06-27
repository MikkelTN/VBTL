import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../../actions/index'

import Shop from '../../scenes/Shop/index'

const mapStateToProps = (
  state
) => (
  {
    products: state.products
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

const ConnectedShop = connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop)

export default ConnectedShop
