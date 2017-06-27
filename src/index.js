import {
  h,
  render
} from 'preact'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import {
  Provider
} from 'react-redux'
import {
  createStore
} from 'redux'

import styles from './styles.scss'
import store from './store'

import Header from './components/Header/index'
import Footer from './components/Footer/index'
import ConnectedCart from './containers/ConnectedCart/index'
import Home from './scenes/Home/index'
import NotFound from './scenes/NotFound/index'
import ConnectedShop from './containers/ConnectedShop/index'

const Main = () => (
  <Provider store={store}>
    <Router>
      <div class="main">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={ConnectedShop} />
          <Route path="/cart" component={ConnectedCart} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  </Provider>
)

render(
  <Main />,
  document.body
);
