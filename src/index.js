import {
  h,
  render
} from 'preact'
import {
  Route,
  Switch
} from 'react-router-dom'
import {
  Provider
} from 'react-redux'
import {
  createStore
} from 'redux'
import {
  ConnectedRouter
} from 'react-router-redux'
import createHistory from 'history/createHashHistory'

import styles from './styles.scss'
import store from './store'

import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Cart from './scenes/Cart/index'
import Home from './scenes/Home/index'
import NotFound from './scenes/NotFound/index'
import ConnectedShop from './containers/ConnectedShop/index'

const history = createHistory()

const Main = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div class="main">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={ConnectedShop} />
          <Route path="/cart" component={Cart} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </ConnectedRouter>
  </Provider>
)

render(
  <Main />,
  document.body
);
