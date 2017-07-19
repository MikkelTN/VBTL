import { h, render, Component } from 'preact'
import styles from './styles.scss'

import ToggleButton from '../ToggleButton/index'
import Nav from './components/Nav/index'

const NavMenu = ({
  active,
  closeNav
}) => {
  return (
  <div class="nav-container">
    <ToggleButton
      active = {active}
      toggle = "nav"
    >
      <strong class="nav-caption uppercase">Menu</strong>
      <div class="nav-expand-btn">
        <div class="nav-expand-bar bar1"></div>
        <div class="nav-expand-bar bar2"></div>
        <div class="nav-expand-bar bar3"></div>
      </div>
    </ToggleButton>
    <Nav
      active = {active}
      onClick = {() => closeNav()}
    />
  </div>
  )
}

export default NavMenu
