import React, { useState, useEffect } from 'react';
import { Link, withPrefix } from 'gatsby';
import { PopupOverlay, PopupContainer, PopupClose } from './OfferPopup.styled';

const OfferPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (!(typeof sessionStorage === 'undefined'))
        setShowPopup(
          !(sessionStorage.getItem('fitato_offer_img_popup') === 'shown'),
        );
    }, 15000);
  }, []);

  useEffect(() => {
    if (!(typeof document === 'undefined')) {
      document.querySelector('html').style.overflow = showPopup
        ? 'hidden'
        : 'auto';
    }
  }, [showPopup]);

  function popupToggleHandler() {
    setShowPopup(!showPopup);
    if (!(typeof sessionStorage === 'undefined'))
      sessionStorage.setItem('fitato_offer_img_popup', 'shown');
  }

  return (
    <>
      <PopupOverlay
        onClick={popupToggleHandler}
        style={
          showPopup ? { opacity: 1, zIndex: 900 } : { opacity: 0, zIndex: -2 }
        }>
        <PopupContainer>
          <Link to="/download/" className="ga-click-offer-popup">
            <img
              src={withPrefix('/static/experience-fitness-freedom-offer.jpg')}
              alt="fitato experience fitness freedom offer"
              className="ga-click-offer-popup"
            />
          </Link>
        </PopupContainer>
      </PopupOverlay>
      <PopupClose
        onClick={popupToggleHandler}
        style={
          showPopup ? { opacity: 1, zIndex: 900 } : { opacity: 0, zIndex: -2 }
        }>
        <img src={withPrefix('/static/icons/close-dark.svg')} alt="close" />
      </PopupClose>
    </>
  );
};

export default OfferPopup;
