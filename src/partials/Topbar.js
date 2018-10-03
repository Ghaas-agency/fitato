import React from 'react'
import { withPrefix } from 'gatsby'

const displayBlock = {
  display: 'block'
}

const displayNone = {
  display: 'none'
}

class Topbar extends React.Component {
  state = {
    showTopbar: this.topbarLocalStorageCheck()
  }

  handleClose = () => {
    this.setState({showTopbar: false});
    if(!(typeof(sessionStorage) === "undefined")) {
      sessionStorage.setItem("topbarToggle", false);
    }
  }

  topbarLocalStorageCheck() {
    if(!(typeof(sessionStorage) === "undefined")) {
      if(sessionStorage.getItem('topbarToggle') === 'false') {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }

  render() {
    return (
      <div 
        className="partial-topbar" 
        style={(this.state.showTopbar) ? displayBlock : displayNone}
      >
        <div className="container">
          <div className="partial-topbar-close" onClick={this.handleClose}>X</div>
          <p><img src={withPrefix('/static/icons/confetti.svg')} alt="fitato in hyderabad"/><a href="https://hyderabad.fitato.fit/?utm_source=website&utm_medium=sticky-bar" target="_blank" rel="noreferrer noopener">We&apos;re coming to Hyderabad soon. Special promo on pre-booking your Fitato pass there!</a></p>
        </div>
      </div>
    );
  }
} 

export default Topbar