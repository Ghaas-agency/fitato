/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { withPrefix } from 'gatsby';
import MCForm from './MailChimpForm';

const displayBlock = {
  display: 'flex',
};

const displayNone = {
  display: 'none',
};

class SignupPopup extends React.Component {
  state = {
    showPopup: false,
  };

  setSessionStorage = () => {
    // Set session storage for popup to avoid repetition
    // during a single session.
    if (!(typeof sessionStorage === 'undefined')) {
      sessionStorage.setItem('fitato_plan_pop', 'f');
    }
  };

  sessionStorageCheck = () => {
    // Check if session storage item exists to avoid
    // popup from opening.
    let r;

    if (!(typeof sessionStorage === 'undefined')) {
      if (sessionStorage.getItem('fitato_plan_pop') === 'f') {
        r = false;
      }
      r = true;
    }

    return r;
  };

  handlePopupClose = (e) => {
    // Close popup on pressing (x) button or outside container.
    if (
      e.target.className === 'partial-signup-popup' ||
      e.target.className === 'partial-signup-popup__content--close' ||
      e.target.parentElement.className ===
        'partial-signup-popup__content--close'
    ) {
      this.setState({ showPopup: false });
      this.setSessionStorage();
    }
  };

  escFunction = (e) => {
    // Close popup on pressing escape key.
    if (e.keyCode === 27) {
      this.setState({ showPopup: false });
      this.setSessionStorage();
    }
  };

  componentDidMount() {
    // Calls function to check if session storage item exists.
    // If not, then show popup after ten seconds on page load.
    if (this.sessionStorageCheck()) {
      setTimeout(() => {
        this.setState({ showPopup: true });
      }, 10000);
    }

    // Add event listener for keydown event.
    if (!(typeof document === 'undefined')) {
      document.addEventListener('keydown', this.escFunction, false);
    }
  }

  componentWillUnmount() {
    // Remove event listener for keydown event.
    if (!(typeof document === 'undefined')) {
      document.removeEventListener('keydown', this.escFunction, false);
    }
  }

  render() {
    return (
      <>
        <div
          className="partial-signup-popup"
          style={this.state.showPopup ? displayBlock : displayNone}
          onClick={this.handlePopupClose}>
          <div className="partial-signup-popup__content">
            <span
              className="partial-signup-popup__content--close"
              onClick={this.handlePopupClose}>
              <img
                src={withPrefix('/static/icons/close-dark.svg')}
                alt="close"
              />
            </span>
            <div className="partial-signup-popup__items">
              <div
                className="partial-signup-popup__item-left"
                style={{
                  backgroundImage: `url('${withPrefix(
                    '/static/fitato-discover.jpg',
                  )}')`,
                }}
              />
              <div className="partial-signup-popup__item-right">
                <h3>
                  Discover The Best Fitness Options Your City Has To Offer
                </h3>
                <MCForm formClass="f-cf-popup" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SignupPopup;
