import { h } from 'preact'
import { NavLink } from 'react-router-dom'

import styles from './styles.scss'

import ExpandingElement from '../../../../../ExpandingElement/index'

const NavMenuLink = ({
  scene,
  children,
  onClick
}) => (
  <div class="nav-menu-link">
    <NavLink
      onClick={onClick}
      exact to={scene}
      activeStyle={{
        fontWeight: "bold"
      }}
    >
      <p class="uppercase">
        {children}
      </p>
    </NavLink>
  </div>
)

const Nav = ({
  active,
  onClick
}) => {
  const menu = active ? (
    <div class="nav-menu">
      <NavMenuLink
        scene="/"
        onClick={onClick}
      >
        Home
      </NavMenuLink>
      <div class="hr-line">
      </div>
      <NavMenuLink
        scene="/shop"
        onClick={onClick}
      >
        Shop
      </NavMenuLink>
      <div class="hr-line">
      </div>
      <NavMenuLink
        scene="/contact"
        onClick={onClick}
      >
        Contact
      </NavMenuLink>
    </div>
  ) : null
  return (
    <div class="nav-menu-container">
      <ExpandingElement>
        {menu}
      </ExpandingElement>
    </div>
  )
}

export default Nav
