import { h } from 'preact'

import style from './style.scss'

const Image = ({
  src,
  alt,
  onClick
}) => (
  <div
    class="image"
  >
    <img
      src={src}
      alt={alt}
      onClick={onClick}
    />
  </div>
)

export default Image
