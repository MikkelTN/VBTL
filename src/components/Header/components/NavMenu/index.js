import { h, render, Component } from 'preact'
import styles from './styles.scss'

import ExpandButton from './components/ExpandButton/index'
import Nav from './components/Nav/index'

const NavMenu = ({
  visible,
  onExpandClick,
  onCloseClick
}) => {
  const style = visible ? "nav-menu-active" : "nav-menu"
  return (
  <div class={style}>
    <ExpandButton
      onClick={() => onExpandClick()}
    />
    <Nav
      visible = {visible}
      onClick={() => onCloseClick()}
    />
  </div>
  )
}

export default NavMenu
