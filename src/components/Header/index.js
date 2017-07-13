import { h } from 'preact'
import styles from './styles.scss'

import ConnectedMiniCart from './containers/ConnectedMiniCart/index'
import HeadLogo from './components/HeadLogo/index'
import ConnectedSearchBar from './containers/ConnectedSearchBar/index'
import SearchBar from './components/SearchBar/index'
import NavVisible from './containers/NavVisible/index'

const Header = () => {
  return (
    <div class="header">
      <HeadLogo />
      <ConnectedSearchBar />
      <ConnectedMiniCart />
      <NavVisible />
    </div>
  );
}

export default Header
