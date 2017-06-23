import {h, render, Component} from 'preact'
import {Route} from 'react-router-dom'

import styles from './styles.scss'

import ProductGrid from './components/ProductGrid/index'
import ProductSingle from './components/ProductSingle/index'

const Shop = ({match}) => (
  <div class="section-shop">
    <h2>This is the shop!</h2>
    <Route path={`${match.url}/:productId`} component={ProductSingle} />
    <Route exact path={match.url} component={ProductGrid} />
  </div>
)

export default Shop
