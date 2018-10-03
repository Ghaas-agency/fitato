import React from 'react'

import '../css/footer.css'

var d = new Date();

const Footer = () => (
  <div className="footer-copyright">
    <div className="container">
      <small>&copy; {d.getFullYear()} Fitato Health Solutions Private Limited.</small>
    </div>
  </div>
)

export default Footer
