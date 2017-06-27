import { connect } from 'react-redux'
import {
  toggleNav,
  closeNav
} from '../../actions/index'

import NavMenu from '../../components/NavMenu/index'

const mapStateToProps = (
  state
) => (
  {
    visible: state.navMenu
  }
)

const mapDispatchToProps = (
  dispatch
) => (
  {
    onExpandClick: () => {
      dispatch(toggleNav())
    },
    onCloseClick: () => {
      dispatch(closeNav())
    }
  }
)

const NavVisible = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavMenu)

export default NavVisible
