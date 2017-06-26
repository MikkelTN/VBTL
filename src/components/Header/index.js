import {h, render, Component} from 'preact'
import styles from './styles.scss'

import Cart from './components/Cart/index'
import HeadLogo from './components/HeadLogo/index'
import NavVisible from './containers/NavVisible/index'

const Header = () => {
  return (
    <div class="header">
      <HeadLogo />
      <Cart />
      <NavVisible />
    </div>
  );
}

export default Header
