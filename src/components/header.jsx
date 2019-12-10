/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { Link, withPrefix } from 'gatsby';

// import Topbar from '../partials/Topbar/Topbar';

import { MainHeader } from 'css/header.styled';

const wwidth = typeof window === 'undefined' ? 800 : window.innerWidth;

class Header extends Component {
  state = {
    toggleMenu: false,
    toggleMenuBg: false,
    windowWidth: wwidth,
    showPartnersMenu: false,
  };

  handleMenuClick = () => {
    const { toggleMenu, toggleMenuBg } = this.state;
    if (this.state.windowWidth > 767) {
      this.setState({
        toggleMenu: true,
        toggleMenuBg: false,
      });
    } else {
      this.setState({
        toggleMenu: !toggleMenu,
        toggleMenuBg: !toggleMenuBg,
      });
    }
  };

  handleBgClick = () => {
    this.setState({
      toggleMenu: false,
      toggleMenuBg: false,
    });
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateMenuToggle = () => {
    if (this.state.windowWidth > 791) {
      this.setState({ toggleMenu: true, toggleMenuBg: false });
    } else {
      this.setState({ toggleMenu: false, toggleMenuBg: false });
    }
  };

  updateWindowDimensions = () => {
    this.setState({
      windowWidth: window.innerWidth,
    });
    this.updateMenuToggle();
  };

  render() {
    return (
      <>
        <div
          className="main-header-placeholder"
          style={{ height: 77, backgroundColor: '#ffffff' }}
        />
        <MainHeader>
          {/* <Topbar /> */}
          <div className="main-header-container">
            <img
              src={withPrefix('/static/icons/menu.svg')}
              onClick={this.handleMenuClick}
              className="main-header-menu-icon"
              alt="menu"
            />
            <Link className="menu-logo" to="/">
              <img
                src={withPrefix('/static/fitato-logo-colored.svg')}
                title="Fitato"
                alt="fitato"
              />
            </Link>
            <ul
              className={`menu-links${this.state.toggleMenu ? ' active' : ''}
              `}>
              <li>
                <Link
                  to="/how-it-works/"
                  className="menu-link-item"
                  activeClassName="menu-link-item-active"
                  onClick={this.handleMenuClick}>
                  How It Works
                </Link>
              </li>
              <li className="menu-links__partners">
                <Link
                  to="/partners/"
                  className="menu-link-item"
                  activeClassName="menu-link-item-active"
                  onClick={this.handleMenuClick}>
                  Facilities
                </Link>
                <button
                  type="button"
                  className="button-unstyled"
                  style={
                    this.state.showPartnersMenu
                      ? { transform: 'rotate(180deg)' }
                      : {}
                  }
                  onClick={() =>
                    this.setState((prevState) => ({
                      showPartnersMenu: !prevState.showPartnersMenu,
                    }))
                  }>
                  <img
                    src={withPrefix('/static/icons/arrow-down.svg')}
                    alt="arrow down"
                  />
                </button>
                <ul
                  className={`menu-links__partners-items${
                    this.state.showPartnersMenu ? ' active' : ''
                  }`}>
                  <li>
                    <Link to="/pune/">Pune</Link>
                  </li>
                  <li>
                    <Link to="/hyderabad/">Hyderabad</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="/purchase-fitato/"
                  className="menu-link-item"
                  activeClassName="menu-link-item-active"
                  onClick={this.handleMenuClick}>
                  Pricing
                </Link>
              </li>
              <li>
                <a
                  href="https://blog.fitato.fit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="menu-link-item">
                  Blog
                </a>
              </li>
              <li>
                <Link
                  to="/corporate/"
                  className="menu-link-item"
                  activeClassName="menu-link-item-active"
                  onClick={this.handleMenuClick}>
                  For Coporate
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs/"
                  className="menu-link-item"
                  activeClassName="menu-link-item-active"
                  onClick={this.handleMenuClick}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/download/"
                  className="button"
                  onClick={this.handleMenuClick}
                  style={{
                    marginRight: '0',
                    marginTop: '0',
                    marginBottom: '0',
                    marginLeft: '10px',
                  }}>
                  Download now
                </Link>
              </li>
            </ul>
            <div
              className={`menu-close-x${
                this.state.toggleMenuBg ? ' active' : ''
              }`}
              onClick={this.handleMenuClick}>
              <img
                src={withPrefix('/static/icons/close-dark.svg')}
                alt="close icon"
              />
            </div>
          </div>
          <div
            className={`mobile-menu-bg${
              this.state.toggleMenuBg ? ' active' : ''
            }`}
            onClick={this.handleBgClick}
          />
        </MainHeader>
      </>
    );
  }
}

export default Header;
