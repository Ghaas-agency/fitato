import React, { useState, useEffect } from 'react';
import { Link, withPrefix } from 'gatsby';
import StyledTopbar from './Topbar.styled';

const Topbar = () => {
  const [showTopbar, setShowTopbar] = useState(true);

  function handleClose() {
    setShowTopbar(false);
    if (!(typeof sessionStorage === 'undefined')) {
      sessionStorage.setItem('show_topbar_fitato', 'hide');
      document.getElementsByClassName(
        'main-header-placeholder',
      )[0].style.height = '77px';
    }
  }

  function topbarLocalStorageCheck() {
    let r;

    if (!(typeof sessionStorage === 'undefined')) {
      r = sessionStorage.getItem('show_topbar_fitato') === 'hide';
    }

    return r;
  }

  useEffect(() => {
    if (!(typeof document === 'undefined')) {
      if (topbarLocalStorageCheck()) {
        setShowTopbar(false);
        document.getElementsByClassName(
          'main-header-placeholder',
        )[0].style.height = '77px';
      } else {
        setShowTopbar(true);
        document.getElementsByClassName(
          'main-header-placeholder',
        )[0].style.height = '133px';
      }
    }
  });

  return (
    <StyledTopbar style={{ display: showTopbar ? 'block' : 'none' }}>
      <div className="container">
        <button
          type="button"
          className="close button-unstyled"
          onClick={() => handleClose()}>
          <img src={withPrefix('/static/icons/close.svg')} alt="close" />
        </button>
        <p>
          <img
            src={withPrefix('/static/icons/confetti.svg')}
            alt="fitato in hyderabad"
          />
          {/* <a href="https://offer.fitato.fit/commitment" target="_blank" rel="noreferrer noopener" onClick={this.handleClose}>
          Commit to a new you, this new year <img src={withPrefix('/static/icons/arrow-forward-white.svg')} alt="arrow forward white" className="partial-topbar--arrow"/>
          </a> */}
          <Link to="/partners/#hyderabad" onClick={() => handleClose()}>
            We&apos;re now in Hyderabad. Check out our facility partners.
          </Link>
        </p>
      </div>
    </StyledTopbar>
  );
};

export default Topbar;
