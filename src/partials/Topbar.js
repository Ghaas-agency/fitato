import React from 'react'
import { Link, withPrefix } from 'gatsby'

const displayBlock = {
  display: 'block'
}

const displayNone = {
  display: 'none'
}

class Topbar extends React.Component {
  state = {
    showTopbar: false
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
      if(sessionStorage.getItem('topbarToggle') === 'false' || sessionStorage.getItem('topbarToggle') === false) {
        return false;
      } else {
        return true;
      }
    }
  }

  componentDidMount() {
    // Check local storage, then show the topbar, and
    // add height to the header placeholder if topbar is active.
    if(this.topbarLocalStorageCheck()) {
      this.setState({showTopbar: true});
      if(!(typeof(document) === "undefined")) {
        document.getElementsByClassName('main-header-placeholder')[0].style.height = '150px';
      }
    } else {
      this.setState({showTopbar: false});
      if(!(typeof(document) === "undefined")) {
        document.getElementsByClassName('main-header-placeholder')[0].style.height = '80px';
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
          <p>
            <img src={withPrefix('/static/icons/confetti.svg')} alt="fitato in hyderabad"/>
            <Link to="/partners/#hyderabad" onClick={this.handleClose}>
            We&apos;re now in Hyderabad. Check out our facility partners.
            </Link>
          </p>
        </div>
      </div>
    );
  }
} 

export default Topbar