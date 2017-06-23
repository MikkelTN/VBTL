import { connect } from 'react-redux'
import { toggleNav } from '../../actions/index'

import NavMenu from '../../components/NavMenu/index'

const mapStateToProps = (
  state
) => (
  {visible: state.navMenu.visible}
)

const mapDispatchToProps = (
  dispatch
) => (
  {
    onExpandClick: () => {
      dispatch(toggleNav())
    }
  }
)

const NavVisible = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavMenu)

export default NavVisible
