import {h, render, Component} from 'preact'
import styles from './styles.scss'

import NavVisible from './containers/NavVisible/index'
import HeadLogo from './components/HeadLogo/index'

const Header = () => {
  return (
    <div class="header">
      <HeadLogo />
      <NavVisible />
    </div>
  );
}

export default Header
