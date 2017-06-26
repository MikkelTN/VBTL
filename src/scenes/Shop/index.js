import { h } from 'preact'
import { Route, Switch } from 'react-router-dom'

import styles from './styles.scss'

import ProductGrid from './components/ProductGrid/index'
import ProductSingle from './components/ProductSingle/index'

const Shop = ({
  match
}) => (
  <div class="section-shop">
    <Switch>
      <Route exact path={match.url} component={ProductGrid} />
      <Route path={`${match.url}/:productId`} component={ProductSingle} />
    </Switch>
  </div>
)

export default Shop
