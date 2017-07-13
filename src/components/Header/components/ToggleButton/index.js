import { h } from 'preact'
import { connect } from 'react-redux'

import {
  toggleNav,
  toggleSearch
} from './actions/index'

import {
  closeNav,
  closeSearch
} from '../../../../actions/index'

import styles from './styles.scss'

let ToggleButton = ({
  dispatch,
  active,
  toggle,
  children
}) => {
  const activeStyle = active ? ' active' : ''
  return (
    <div
      class={`toggle-button${activeStyle}`}
      onClick = {() => {
        switch (toggle) {
          case "nav":
            dispatch(toggleNav())
            break
          case "search":
            dispatch(toggleSearch())
            break
        }
      }}
    >
      {children}
    </div>
  )
}

ToggleButton = connect()(ToggleButton)

export default ToggleButton
