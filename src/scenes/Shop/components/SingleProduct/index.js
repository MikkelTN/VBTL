import { h } from 'preact'

import styles from './styles.scss'

import Image from '../../../../components/Image/index'

import AddCartButton from '../AddCartButton/index'

const SingleProduct = ({
  changeCarousel,
  products,
  match,
}) => {
  const id = products.findIndex((product) =>
    product.code === match.params.productId
  )
  const product = products[id]
  return (
    <div class="single-product">
      <Image
        src={require(`../../images/${product.img_single[product.active_single]}`)}
        alt={product.caption}
      />
      <div
        class="single-product-carousel"
      >
      {product.img_carousel.map((img, i) =>
        <Image
          src={require(`../../images/${product.img_carousel[i]}`)}
          alt={product.caption}
          onClick={() => changeCarousel(product.id, i)}
          />
      )}
      </div>
      <div
        class="hr-line"
      >
      </div>
      <div
        class="single-product-description"
      >
        <h2
          class="single-product-caption uppercase"
        >
          {product.caption}
        </h2>
        <h2
          class="single-product-price orange"
        >
          ${product.price}
        </h2>
        <p
          class="single-product-text"
        >
          {product.text}
        </p>
      </div>
      <div
        class="single-product-btns"
      >
        <AddCartButton
          id={product.id}
        />
      </div>
    </div>
  )
}

export default SingleProduct
