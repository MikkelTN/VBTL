import { h } from 'preact'

import styles from './styles.scss'

import ToggleButton from '../../../ToggleButton/index'

const SearchButton = ({
  active
}) => (
  <ToggleButton
    toggle="search"
    active={active}
  >
    <div class="search-btn">
      <div class="search-expand-bar bar1"></div>
      <img
        class="search-btn-img"
        src={require('../../images/search.png')}
        />
      <div class="search-expand-bar bar3"></div>
    </div>
  </ToggleButton>
)

export default SearchButton
