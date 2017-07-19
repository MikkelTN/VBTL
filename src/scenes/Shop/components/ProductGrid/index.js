import { h } from 'preact'

import styles from './styles.scss'

import GridHeader from './components/GridHeader/index'
import GridProduct from './components/GridProduct/index'

const ProductGrid = ({
  products
}) => (
  <div class="section-product-grid">
    <GridHeader />
    <div class="product-grid">
      {products.map((product, i) =>
        <GridProduct
          {...products}
          key={i}
          i={i}
          product={product}
        />)}
    </div>
  </div>
)

export default ProductGrid
