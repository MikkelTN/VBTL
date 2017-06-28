import { h } from 'preact'
import { Link } from 'react-router-dom'

import styles from './styles.scss'

const Home = ({
  closeNav
}) => (
  <div class="section-home">
    <h1
      class="home-caption"
    >
      Welcome to VBTL
    </h1>
    <button
      class="home-to-shop-btn uppercase"
      onClick={() => closeNav()}
    >
      <Link
        to="/shop"
      >
        <h4>
          Enter the store
        </h4>
      </Link>
    </button>
  </div>
)

export default Home
