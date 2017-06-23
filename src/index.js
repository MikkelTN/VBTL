import {h, render, Component} from 'preact'
import {BrowserRouter as Router, Route, browserHistory} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import styles from './styles.scss'
import store from './store'

import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Blog from './scenes/Blog/index'
import Home from './scenes/Home/index'
import Shop from './scenes/Shop/index'


const Main = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/shop" component={Shop} />

        <Footer />
      </div>
    </Router>
  </Provider>
)

render(
  <Main />,
  document.body
);
