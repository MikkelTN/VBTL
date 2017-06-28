import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../../actions/index'

import Home from '../../scenes/Home/index'

const mapDispatchToProps = (
  dispatch
) => (
  bindActionCreators(
    actionCreators,
    dispatch
  )
)

const ConnectedHome = connect(
  null,
  mapDispatchToProps
)(Home)

export default ConnectedHome
