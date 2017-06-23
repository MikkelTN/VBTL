import { h, render, Component } from 'preact'

import styles from './styles.scss'

const ExpandButton = ({
  onClick,
  visible
}) => {
  const style = visible ? "nav-expand-container active" : "nav-expand-container"
  return (
    <div class={style}>
      <div class="nav-expand-btn" onClick={onClick}>
        <div class="nav-expand-bar bar1"></div>
        <div class="nav-expand-bar bar2"></div>
        <div class="nav-expand-bar bar3"></div>
      </div>
    </div>
  )
}

export default ExpandButton
