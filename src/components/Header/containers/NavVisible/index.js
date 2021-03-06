import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../../../../actions/index'

import NavMenu from '../../components/NavMenu/index'

const mapStateToProps = (
  state
) => (
  {
    active: state.navMenu
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

const NavVisible = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavMenu)

export default NavVisible
