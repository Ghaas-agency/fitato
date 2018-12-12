import React from 'react'

import '../css/footer.css'

var d = new Date();

const Footer = () => (
  <footer className="footer-copyright">
    <div className="container">
      <small>&copy; {d.getFullYear()} Fitato Health Solutions Private Limited.</small>
    </div>
  </footer>
)

export default Footer
