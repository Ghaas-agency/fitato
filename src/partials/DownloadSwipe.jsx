import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby';
import AppIcons from './AppIcons';

const DownloadSwipe = ({ btnClass }) => (
  <div className="partial-download-swipe">
    <div className="container">
      <div className="partial-download-swipe__left">
        <h2>Download the Fitato App</h2>
        <p>
          Swim your way to Zumba via MMA and Yoga! Experiment each day with a
          new adventure and push your body to the limits with your Fitato Pass.
        </p>
        {btnClass ? <AppIcons btnClass={btnClass} /> : <AppIcons />}
      </div>
      <div className="partial-download-swipe__right">
        <img
          src={withPrefix('/static/fitato-app.png')}
          alt="download fitato smartphone app"
        />
      </div>
    </div>
  </div>
);

DownloadSwipe.propTypes = {
  btnClass: PropTypes.string,
};

export default DownloadSwipe;
