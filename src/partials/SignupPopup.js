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

  handlePopup = e => {
    if(e.target.className === 'partial-signup-popup' || e.target.className === 'partial-signup-popup__content--close') {
      this.setState({showPopup: !this.state.showPopup});
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({showPopup: true});
    }, 10000);
  }

  render() {
    return (
      <>
        <div 
          className="partial-signup-popup" 
          style={(this.state.showPopup) ? displayBlock : displayNone}
          onClick={this.handlePopup}
        >
          <div className="partial-signup-popup__content">
            <span 
              className="partial-signup-popup__content--close"
              onClick={this.handlePopup}
            >X</span>
            <h3>Let Us Create A Customized Fitness Plan For You</h3>
            <MCForm />
          </div>
        </div>
      </>
    );
  }
} 

export default SignupPopup