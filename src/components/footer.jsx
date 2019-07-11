import React from 'react';

import '../css/footer.css';

const d = new Date();

const Footer = () => (
  <footer className="footer-copyright">
    <div className="container">
      <small>
        &copy;&nbsp;
        {d.getFullYear()}
        &nbsp;Fitato Health Solutions Private Limited.
      </small>
    </div>
  </footer>
);

export default Footer;
