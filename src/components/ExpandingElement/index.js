import { h } from 'preact'
import { CSSTransitionGroup } from 'react-transition-group'

import styles from './styles.scss'

const ExpandingElement = ({
  children
}) => {
  return (
    <CSSTransitionGroup
      transitionName="expanding-element"
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}
    >
      {children}
    </CSSTransitionGroup>
  )
}

export default ExpandingElement
