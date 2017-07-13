import { h, Component } from 'preact'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../actions/index'

import styles from './styles.scss'

import SearchResults from './components/SearchResults/index'

class SearchCriteria extends Component {
  componentDidMount() {
    this.searchInput.focus()
  }

  componentWillUnmount() {
    this.searchForm.reset()
  }

  render ({
    products,
    updateSearch
  }) {
    return (
      <div
        class="search-criteria"
      >
        <form
          class="search-criteria-form"
          ref={(input) => {this.searchForm = input}}
          onReset={() => updateSearch([])}
        >
          <input
            class="search-criteria-input"
            ref={(input) => {this.searchInput = input}}
            type="text"
            placeholder="Search VBTL"
            onKeyUp={(e) => {
              const regex = new RegExp(e.target.value, 'gi')
              const results = e.target.value.trim() !== '' ?
                products.filter((item) =>
                  item.product.match(regex)
                ) :
                []
              updateSearch(results)
            }}
          />
        </form>
        <SearchResults />
      </div>
    )
  }
}

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchCriteria)
