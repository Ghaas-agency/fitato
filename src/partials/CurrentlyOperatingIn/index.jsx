import React from 'react';
import { withPrefix } from 'gatsby';
import StyledLocations from './index.styled';

const CurrentlyOperatingIn = () => (
  <StyledLocations>
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

export default CurrentlyOperatingIn;
