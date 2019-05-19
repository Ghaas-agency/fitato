import React from 'react';
import styled from 'styled-components';

const Separator = () => (
  <StyledSeparator>
    <div className="container" />
  </StyledSeparator>
);

const StyledSeparator = styled.div`
  .container {
    height: 1px;
    width: 75%;
    background-color: #eee3e3;
    margin: 0 auto;
  }
`;

export default Separator;
