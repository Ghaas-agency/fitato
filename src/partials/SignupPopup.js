import React from 'react'
import { withPrefix } from 'gatsby'
import MCForm from './MailChimpForm'

const displayBlock = {
  display: 'flex'
}

const displayNone = {
  display: 'none'
}

class SignupPopup extends React.Component {
  state = {
    showPopup: false
  }

  setSessionStorage = () => {
    if(!(typeof(sessionStorage) === "undefined")) {
      sessionStorage.setItem('fitato_plan_pop', 'f');
    }
  }

  sessionStorageCheck = () => {
    if(!(typeof(sessionStorage) === "undefined")) {
      if(sessionStorage.getItem('fitato_plan_pop') === 'f') {
        return false;
      } else {
        return true;
      }
    }
  }

  handlePopupClose = e => {
    if(e.target.className === 'partial-signup-popup' || e.target.className === 'partial-signup-popup__content--close') {
      this.setState({showPopup: false});
      this.setSessionStorage();
    }
  }

  componentDidMount() {
    if(this.sessionStorageCheck()) {
      setTimeout(() => {
        this.setState({showPopup: true});
      }, 10000);
    }
  }

  render() {
    return (
      <>
        <div 
          className="partial-signup-popup" 
          style={(this.state.showPopup) ? displayBlock : displayNone}
          onClick={this.handlePopupClose}
        >
          <div className="partial-signup-popup__content">
            <span 
              className="partial-signup-popup__content--close"
              onClick={this.handlePopupClose}
            >X</span>
            <div className="partial-signup-popup__items">
              <div className="partial-signup-popup__item-left" style={{backgroundImage: 'url(' + withPrefix('/static/fitato-discover.jpg') + ')'}}></div>
              <div className="partial-signup-popup__item-right">
                <h3>Discover The Best Fitness Options Your City Has To Offer</h3>
                <MCForm formClass="f-cf-popup" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
} 

export default SignupPopup