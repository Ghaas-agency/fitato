import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby';

const AppIcons = ({ btnClass, googleLink, appleLink }) => (
  <div className="partial-app-icons">
    <a
      href={
        googleLink ||
        'https://play.google.com/store/apps/details?id=fit.fitato.health&hl=en'
      }
      target="_blank"
      rel="noopener noreferrer"
      className={btnClass ? `${btnClass}-android` : ''}>
      <img
        src={withPrefix('/static/icons/google-play-store.svg')}
        className="partial-app-icon"
        alt="fitato on google play store"
      />
    </a>
    <a
      href={appleLink || 'https://itunes.apple.com/in/app/fitato/id1300323768'}
      target="_blank"
      rel="noopener noreferrer"
      className={btnClass ? `${btnClass}-ios` : ''}>
      <img
        src={withPrefix('/static/icons/apple-app-store.svg')}
        className="partial-app-icon"
        alt="fitato on app store"
      />
    </a>
  </div>
);

AppIcons.propTypes = {
  btnClass: PropTypes.string,
  googleLink: PropTypes.string,
  appleLink: PropTypes.string,
};

export default AppIcons;
