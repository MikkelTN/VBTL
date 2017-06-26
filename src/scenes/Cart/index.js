import { h } from 'preact'

import styles from './styles.scss'

import Footer from '../../components/Footer/index'
import Timer from './components/Timer/index'

const Cart = () => (
  <div class="section-cart">
    <p>
      This is the shopping cart, it currently shows what time it is. Neat!
    </p>
    <Timer />
  </div>
)

export default Cart
