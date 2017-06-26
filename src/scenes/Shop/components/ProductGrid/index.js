import { h } from 'preact'

import styles from './styles.scss'

import Footer from '../../../../components/Footer/index'
import GridHeader from './components/GridHeader/index'
import Placeholder from '../Placeholder/index'


const ProductGrid = () => (
  <div class="section-product-grid">
    <GridHeader />
    <div class="product-grid">
      <Placeholder />
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </div>
  </div>
)

export default ProductGrid
