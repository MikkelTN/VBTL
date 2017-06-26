import { h } from 'preact'
import { Link } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'

import styles from './styles.scss'

const NavMenuLink = ({
  scene,
  children
}) => (
  <div class="nav-menu-link">
    <Link
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
  visible
}) => {
  let menu;
  menu = visible ? (
    <div class="nav-menu-container" key={"nav-menu"}>
      <NavMenuLink scene="/home">
        Home
      </NavMenuLink>
      <div class="hr-line">
      </div>
      <NavMenuLink scene="/shop">
        Shop
      </NavMenuLink>
      <div class="hr-line">
      </div>
      <NavMenuLink scene="/contact">
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
