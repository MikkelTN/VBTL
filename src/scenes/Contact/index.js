import { h } from 'preact'

import styles from './styles.scss'

const Contact = () => (
  <div
    class="section-contact"
  >
    <h1
      class="contact-caption"
    >
      Contact us
    </h1>
    <div
      class="contact-content"
    >
      <a
        href="mailto:mtn.dtu@gmail.com"
        class="contact-link"
      >
        <img
          src={require('./images/mail-icon.png')}
        />
      </a>
    </div>
  </div>
)

export default Contact
