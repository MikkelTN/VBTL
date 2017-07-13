import { h } from 'preact'

import styles from './styles.scss'

import ExpandingElement from '../ExpandingElement/index'
import SearchButton from './components/SearchButton/index'
import SearchCriteria from './components/SearchCriteria/index'
import SplitLine from '../SplitLine/index'

const SearchBar = ({
  active
}) => {
  const search = active ?
    <SearchCriteria /> :
    ''
  return (
    <div class="search-bar-container">
      <div class="search-input-container">
        <ExpandingElement>
          {search}
        </ExpandingElement>
      </div>
      <SearchButton
        active={active}
      />
      <SplitLine />
    </div>
  )
}

export default SearchBar
