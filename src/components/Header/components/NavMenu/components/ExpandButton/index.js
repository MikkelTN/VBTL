import { h } from 'preact'

import styles from './styles.scss'

const ExpandButton = ({
  onClick
}) => (
  <div class="nav-btn-container">
    <strong class="uppercase">Menu</strong>
    <div class="nav-expand-btn" onClick={onClick}>
      <div class="nav-expand-bar bar1"></div>
      <div class="nav-expand-bar bar2"></div>
      <div class="nav-expand-bar bar3"></div>
    </div>
  </div>
)

export default ExpandButton
