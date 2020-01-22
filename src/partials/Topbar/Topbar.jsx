import React, { useState, useEffect, useRef } from 'react';
import { Link, withPrefix } from 'gatsby';

import StyledTopbar from './Topbar.styled';

const Topbar = () => {
  const [showTopbar, setShowTopbar] = useState(true);
  const ref = useRef();

  function handleClose() {
    setShowTopbar(false);
    if (!(typeof sessionStorage === 'undefined')) {
      sessionStorage.setItem('show_topbar_fitato', 'hide');
      document.getElementsByClassName(
        'main-header-placeholder',
      )[0].style.height = '77px';
    }
  }

  useEffect(() => {
    if (!(typeof document === 'undefined')) {
      document.getElementsByClassName(
        'main-header-placeholder',
      )[0].style.height = showTopbar
        ? `${ref.current.getBoundingClientRect().height +
            (window.innerWidth >= 767 ? 77 : 72)}px`
        : `${window.innerWidth >= 767 ? '77px' : '72px'}`;
    }
  }, [showTopbar]);

  useEffect(() => {
    const distance =
      new Date('January 15, 2021 23:59:59').getTime() - new Date().getTime();

    if (!(typeof sessionStorage === 'undefined'))
      setShowTopbar(
        distance > 0 && sessionStorage.getItem('show_topbar_fitato') !== 'hide',
      );
  }, []);

  return (
    <StyledTopbar ref={ref} style={{ display: showTopbar ? 'block' : 'none' }}>
      <button
        type="button"
        className="close button-unstyled"
        onClick={handleClose}>
        <img src={withPrefix('/static/icons/close.svg')} alt="close" />
      </button>
      <div className="container">
        <p>
          {/* <img
            src={withPrefix('/static/icons/confetti.svg')}
            alt="fitato in hyderabad"
          /> */}
          <span>
            We have stepped up our fitness game in 2020. Are you ready for the
            challenge?
          </span>
          <Link to="/2020/" className="button-inverted" onClick={handleClose}>
            Know More
          </Link>
          {/* <Link to="/partners/#hyderabad" onClick={handleClose}>
            We&apos;re now in Hyderabad. Check out our facility partners.
          </Link> */}
        </p>
      </div>
    </StyledTopbar>
  );
};

export default Topbar;
