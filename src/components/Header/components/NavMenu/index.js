import { h, render, Component } from 'preact'
import styles from './styles.scss'

import ExpandButton from './components/ExpandButton/index'
import Nav from './components/Nav/index'

const NavMenu = ({
  visible,
  onExpandClick
}) => {
  const style = visible ? "nav-menu-active" : "nav-menu"
  return (
  <div class={style}>
    <ExpandButton
      onClick={() => onExpandClick()}
    />
    <Nav
      visible = {visible}
    />
  </div>
  )
}

export default NavMenu
