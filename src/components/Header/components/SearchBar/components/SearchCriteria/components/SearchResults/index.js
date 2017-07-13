import { h } from 'preact'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { closeSearch } from '../../../../../../../../actions/index'

import styles from './styles.scss'

const SearchResults = ({
  results,
  dispatch
}) => (
  <div
    class="search-results"
  >
    {results.map((item) => (
      <div
        class="search-item"
        key={item.id}
      >
        <Link
          class="search-item-link"
          to={`/shop/${item.code}`}
          onClick={() => dispatch(closeSearch())}
        >
          <span>
            {item.product}
          </span>
          <span>
            ${item.price}
          </span>
        </Link>
      </div>
    ))}
  </div>
)

const mapStateToProps = (state) => (
  {
    results: state.searchResults
  }
)

export default connect(
  mapStateToProps
)(SearchResults)
