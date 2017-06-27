import { h, render } from 'preact'
import { Route, Switch } from 'react-router-dom'

import styles from './styles.scss'

import ProductGrid from './components/ProductGrid/index'
import SingleProduct from './components/SingleProduct/index'

const Shop = ({
  products,
  increaseQuantity,
  changeCarousel,
  incrementLikes,
  match
}) => (
  <div class="section-shop">
    <Switch>
      <Route
        exact path={match.url}
        render={(props) => (
          <ProductGrid
            {...props}
            products={products}
            increaseQuantity={increaseQuantity}
            incrementLikes={incrementLikes}
          />
        )}
      />
      <Route
        path={`${match.url}/:productId`}
        render={(props) => (
          <SingleProduct
          {...props}
          products={products}
          increaseQuantity={increaseQuantity}
          changeCarousel={changeCarousel}
          incrementLikes={incrementLikes}
          />
        )}
      />
    </Switch>
  </div>
)

export default Shop
