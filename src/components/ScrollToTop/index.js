import {
  h,
  render,
  Component
} from 'preact'
import { withRouter } from 'react-router-dom'

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render({children}) {
    return {children}
  }
}

export default withRouter(ScrollToTop)