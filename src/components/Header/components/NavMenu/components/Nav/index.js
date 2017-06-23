import { h, render, Component } from 'preact'
import { Link } from 'react-router-dom'

const NavMenuLink = ({
  scene,
  children
}) => (
  <li>
    <Link
      to={scene === 'home' ? '/' : scene}
    >
      {children}
    </Link>
  </li>
)

const Nav = ({
  visible
}) => {
  if (visible) {
    return (
      <ul>
        <NavMenuLink scene="home">
          Home
        </NavMenuLink>
        <NavMenuLink scene="blog">
          Blog
        </NavMenuLink>
        <NavMenuLink scene="shop">
          Shop
        </NavMenuLink>
      </ul>
    )
  }
}

export default Nav
