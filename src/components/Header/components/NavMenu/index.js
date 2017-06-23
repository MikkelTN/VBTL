import { h, render, Component } from 'preact'
import styles from './styles.scss'

import ExpandButton from './components/ExpandButton/index'
import Nav from './components/Nav/index'

const NavMenu = ({
  visible,
  onExpandClick
}) => (
  <div class="navmenu">
    <ExpandButton
      onClick={() => onExpandClick()}
      visible={visible}
    />
    <Nav
      visible={visible}
    />
  </div>
);

export default NavMenu
