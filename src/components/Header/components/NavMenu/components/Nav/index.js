import { h } from 'preact'
import { Link } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'

import styles from './styles.scss'

const NavMenuLink = ({
  scene,
  children,
  onClick
}) => (
  <div class="nav-menu-link">
    <Link
      onClick={onClick}
      to={scene === '/home' ? '/' : scene}
    >
      <strong class="uppercase">
        {children}
      </strong>
    </Link>
    <h2>
      +
    </h2>
  </div>
)

const Nav = ({
  visible,
  onClick
}) => {
  let menu;
  menu = visible ? (
    <div class="nav-menu-container" key={"nav-menu"}>
      <NavMenuLink
        scene="/home"
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
  ) : ''
  return (
    <div>
      <CSSTransitionGroup
        transitionName="nav-menu-transition"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
      {menu}
      </CSSTransitionGroup>
    </div>
  )
}

export default Nav
