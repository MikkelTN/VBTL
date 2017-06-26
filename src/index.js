import {h, render, Component} from 'preact'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import styles from './styles.scss'
import store from './store'

import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Cart from './scenes/Cart/index'
import Home from './scenes/Home/index'
import NotFound from './scenes/NotFound/index'
import Shop from './scenes/Shop/index'


const Main = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/cart" component={Cart} />
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
