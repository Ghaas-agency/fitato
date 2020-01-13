import React, { useState, useEffect, useRef } from 'react';
import { withPrefix } from 'gatsby';

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
        ? `${ref.current.getBoundingClientRect().height + 77}px`
        : '77px';
    }
  }, [showTopbar]);

  useEffect(() => {
    const distance =
      new Date('January 15, 2020 23:59:59').getTime() - new Date().getTime();

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
            More reasons to stick to your New Year’s resolution. Fitato
            Quarterly at an unbeatable price!
          </span>
          <a
            href="https://offer.fitato.fit/"
            target="_blank"
            rel="noreferrer noopener"
            className="button-inverted"
            onClick={handleClose}>
            Book Now
          </a>
          {/* <Link to="/partners/#hyderabad" onClick={handleClose}>
            We&apos;re now in Hyderabad. Check out our facility partners.
          </Link> */}
        </p>
      </div>
    </StyledTopbar>
  );
};

export default Topbar;
