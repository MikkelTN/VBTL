import { h } from 'preact'

import styles from './styles.scss'

import Timer from './components/Timer/index';

const Blog = () => (
  <div class="section-blog">
    <p>
      This is the blog, it currently shows what time it is. Neat!
    </p>
    <Timer />
  </div>
)

export default Blog;
