import { h, render } from 'preact'
import { Route, Switch } from 'react-router-dom'

import styles from './styles.scss'

import ProductGrid from './components/ProductGrid/index'
import SingleProduct from './components/SingleProduct/index'

const Shop = ({
  products,
  addToCart,
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
            addToCart={addToCart}
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
          addToCart={addToCart}
          changeCarousel={changeCarousel}
          incrementLikes={incrementLikes}
          />
        )}
      />
    </Switch>
  </div>
)

export default Shop
