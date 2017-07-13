import { h } from 'preact'

import { Link } from 'react-router-dom'

import styles from './styles.scss'

const HeadLogo = () => (
  <Link
    class="head-logo"
    to="/"
  >
    <h1>
      VBTL
    </h1>
  </Link>
)

export default HeadLogo
