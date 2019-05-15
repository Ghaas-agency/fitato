import React from 'react';
import PropTypes from 'prop-types';

const ContactLinks = ({ cname }) => (
  <ul className={cname}>
    <li>
      <a href="mailto:connect@fitato.fit">connect@fitato.fit</a>
    </li>
    <li>
      <a href="tel:+918448448546">+91 8448448546</a>
    </li>
  </ul>
);

ContactLinks.propTypes = {
  cname: PropTypes.string,
};

export default ContactLinks;
