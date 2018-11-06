import React from 'react'
import { Link, withPrefix } from 'gatsby'
import SocialLinks from './SocialLinks'
import ContactLinks from './ContactLinks'

const FooterInfo = () => (
  <div className="footer-info" style={{backgroundImage: 'url(' + withPrefix('/static/footer-bg.webp') + ')'}}>
    <div className="container">
      <div className="footer-info__col1">
        <h4>Do You Own a Fitness Facility? Become a Partner</h4>
        <p>Own a gym? Or a Health and Fitness Studio? Partner up with us and watch as your business reaches unprecedented heights in revenue and brand visibility. Tap into our customer base and put your fitness studio on the map!</p>
        <a href="http://partner.fitato.fit/">Become a Partner</a>
      </div>
      <div className="footer-info__col2">
        <h4>Know More</h4>
        <ul className="footer-ul">
          <li><a href="http://blog.fitato.fit">Blog</a></li>
          <li><Link to="/faq/">FAQ</Link></li>
          <li><Link to="/reviews/">Reviews</Link></li>
          <li><Link to="/how-to-refer/">Refer Your Friends</Link></li>
          <li><a href="http://corporate.fitato.fit">Fitato For The Workplace</a></li>
          <li><Link to="/privacy-policy/">Privacy Policy</Link></li>
        </ul>
      </div>
      <div className="footer-info__col3">
        <h4>Contact Us</h4>
        <ContactLinks cname="footer-ul" />
        <SocialLinks cname="footer-social" />
      </div>
    </div>
  </div>
)

export default FooterInfo
