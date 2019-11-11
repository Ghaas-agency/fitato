import React from 'react';
import { Link, withPrefix } from 'gatsby';

import { MainHeader } from 'css/header.styled';

const Header = () => (
  <>
    <MainHeader className="main-header" style={{ position: 'relative' }}>
      <div className="main-header-container" style={{ textAlign: 'center' }}>
        <Link className="menu-logo" to="/">
          <img
            src={withPrefix('/static/fitato-logo-colored.svg')}
            title="Fitato"
            alt="fitato"
          />
        </Link>
      </div>
    </MainHeader>
  </>
);

export default Header;
