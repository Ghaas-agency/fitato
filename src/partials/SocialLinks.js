import React from 'react'
import { withPrefix } from 'gatsby'

const SocialLinks = props => (
  <ul className={props.cname}>
    <li>
      <a href="https://www.facebook.com/Fitato.fit/" target="_blank" rel="noopener noreferrer">
        <img src={withPrefix('/static/icons/facebook-circle-black.svg')} alt="facebook" className="partial-social-links__icon" />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/FitatoFit" target="_blank" rel="noopener noreferrer">
        <img src={withPrefix('/static/icons/twitter-circle-black.svg')} alt="twitter" className="partial-social-links__icon" />
      </a>
    </li>
    {/* <li>
      <a href="https://plus.google.com/+FitatoFitness" target="_blank" rel="noopener noreferrer">
        <img src={withPrefix('/static/icons/google-plus-square-black.svg')} alt="google plus" className="partial-social-links__icon" />
      </a>
    </li> */}
    <li>
      <a href="https://www.youtube.com/channel/UCUAcO5m8nXxqXHs42kyfzmg?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
        <img src={withPrefix('/static/icons/youtube-circle-black.svg')} alt="youtube" className="partial-social-links__icon" />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/fitato_fit/" target="_blank" rel="noopener noreferrer">
        <img src={withPrefix('/static/icons/instagram-circle-black.svg')} alt="instagram" className="partial-social-links__icon" />
      </a>
    </li>
  </ul>
);

export default SocialLinks