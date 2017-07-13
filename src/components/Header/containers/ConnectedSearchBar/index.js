import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../../../../actions/index'

import SearchBar from '../../components/SearchBar/index'

const mapStateToProps = (
  state
) => (
  {
    active: state.searchBar
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

const ConnectedSearchBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)

export default ConnectedSearchBar
