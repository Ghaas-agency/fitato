import React from 'react'
import MCForm from './MailChimpForm'
/* import { withPrefix } from 'gatsby' */

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
            <h3>Discover The Best Fitness Options Your City Has To Offer</h3>
            <MCForm />
          </div>
        </div>
      </>
    );
  }
} 

export default SignupPopup