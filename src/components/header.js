import React, { Component } from 'react'
import { Link, withPrefix } from 'gatsby'
import Topbar from '../partials/Topbar'
import '../css/header.css'

const displayBlock = {
  display: 'block'
}

const displayNone = {
  display: 'none'
}

let wwidth = (typeof(window) === "undefined") ? 800 : window.innerWidth;

class Header extends Component {
  state = {
    toggleMenu: false,
    toggleMenuBg: false,
    windowWidth: wwidth
  }

  handleMenuClick = () => {
    if(this.state.windowWidth > 767) {
      this.setState(
        {
          toggleMenu: true,
          toggleMenuBg: false,
        }
      );
    } else {
      this.setState(
        {
          toggleMenu: !this.state.toggleMenu,
          toggleMenuBg: !this.state.toggleMenuBg,
        }
      );
    }
  }

  handleBgClick = () => {
    this.setState(
      {
        toggleMenu: false,
        toggleMenuBg: false,
      }
    );
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateMenuToggle = () => {
    if(this.state.windowWidth > 791) {
      this.setState({ toggleMenu: true, toggleMenuBg: false });
    } else {
      this.setState({ toggleMenu: false, toggleMenuBg: false });
    }
  }
  
  updateWindowDimensions = () => {
    this.setState({ 
      windowWidth: window.innerWidth
    });
    this.updateMenuToggle();
  }

  render() {
    return (
      <>
        <div className="main-header-placeholder" />
        <div className="main-header">
          <Topbar />
          <div className="main-header-container">
            <img src={withPrefix('/static/icons/menu.svg')} onClick={this.handleMenuClick} className="main-header-menu-icon" alt="menu" />
            <Link className="menu-logo" to="/">
              <img
                src={withPrefix('/static/fitato-logo-colored.svg')}
                title='Fitato'
                alt="fitato"
              />
            </Link>
            <div className="menu-links" style={(this.state.toggleMenu) ? displayBlock : displayNone}>
              <Link to="/how-it-works/" className="menu-link-item" activeClassName="menu-link-item-active" onClick={this.handleMenuClick}>How It Works</Link>
              <Link to="/partners/" className="menu-link-item" activeClassName="menu-link-item-active" onClick={this.handleMenuClick}>Facilities</Link>
              <Link to="/purchase-fitato/" className="menu-link-item" activeClassName="menu-link-item-active" onClick={this.handleMenuClick}>Pricing</Link>
              <a href="https://blog.fitato.fit" target="_blank" rel="noopener noreferrer" className="menu-link-item">Blog</a>
              <Link to="/contact-us/" className="menu-link-item" activeClassName="menu-link-item-active" onClick={this.handleMenuClick}>Contact Us</Link>
              <Link to="/faqs/" className="menu-link-item" activeClassName="menu-link-item-active" onClick={this.handleMenuClick}>FAQ</Link>
              <Link to="/download/" className="button" onClick={this.handleMenuClick}
                style={
                  {
                    marginRight: '0',
                    marginTop: '0',
                    marginBottom: '0',
                    marginLeft:'10px',
                  }
                }>
                Download now
              </Link>
            </div>
            <div className="menu-close-x" onClick={this.handleMenuClick} style={(this.state.toggleMenuBg) ? displayBlock : displayNone}>x</div>
          </div>
          <div className="mobile-menu-bg" style={(this.state.toggleMenuBg) ? displayBlock : displayNone} onClick={this.handleBgClick}></div>
        </div>
      </>
    )
  }
}

export default Header
