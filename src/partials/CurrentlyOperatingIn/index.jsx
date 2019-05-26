import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby';
import StyledLocations from './index.styled';

const CurrentlyOperatingIn = ({ redBg }) => (
  <StyledLocations redBg={redBg}>
    <div className="container">
      <div className="heading">
        <h3>Currently Operating In</h3>
      </div>
      <div className="imgs">
        <div className="img">
          <img src={withPrefix('/static/icons/pune.svg')} alt="pune" />
          <p>Pune</p>
        </div>
        <div className="img">
          <img
            src={withPrefix('/static/icons/hyderabad.svg')}
            alt="hyderabad"
          />
          <p>Hyderabad</p>
        </div>
      </div>
    </div>
  </StyledLocations>
);

CurrentlyOperatingIn.propTypes = {
  redBg: PropTypes.bool,
};

export default CurrentlyOperatingIn;
