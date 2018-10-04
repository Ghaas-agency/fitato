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
      document.querySelector('.main-header-placeholder').style.height = '80px';
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

  componentDidMount() {
    // Add height to the header placeholder if topbar is active.
    if(!(typeof(document) === "undefined")) {
      if(this.state.showTopbar === 'false' || this.state.showTopbar === false) {
        document.querySelector('.main-header-placeholder').style.height = '80px';
      } else {
        document.querySelector('.main-header-placeholder').style.height = '150px';
      }
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