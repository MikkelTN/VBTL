import { h } from 'preact'

import styles from './styles.scss'

import Placeholder from '../../../Placeholder/index'

const SinglePlaceholder = () => (
  <div class="single-placeholder">
    <div class="single-placeholder-imageview">
      <div class="single-placeholder-image">
      </div>
      <div class="single-placeholder-image-carousel">
        <div class="placeholder-carousel-image">
        </div>
        <div class="placeholder-carousel-image">
        </div>
        <div class="placeholder-carousel-image">
        </div>
        <div class="placeholder-carousel-image">
        </div>
        <div class="placeholder-carousel-image">
        </div>
        <div class="placeholder-carousel-image">
        </div>
      </div>
    </div>
    <div class="single-placeholder-description">
      <h2 class="single-placeholder-caption">
        This is some great stuff!
      </h2>
      <h3 class="single-placeholder-price orange">
        $199.99
      </h3>
      <p class="single-placeholder-text">
        This stuff is the greatest, and you should totally buy it at once! It is definitely worth every penny.
      </p>
    </div>
    <div class="single-placeholder-add-cart">
      <strong class="uppercase orange">
        Add to cart
      </strong>
    </div>
    <div class="hr-line">
    </div>
    <div class="single-placeholder-related">
      <h3 class="placeholder-related-caption">
        You might also like
      </h3>
      <div class="placeholder-related-products">
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </div>
    </div>
  </div>
)

export default SinglePlaceholder
