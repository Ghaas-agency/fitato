import React, { Component } from 'react'
import { Link, withPrefix } from 'gatsby'
import '../css/header.css'

class Header extends Component {
  render() {
    return (
      <>
        <nav className="main-header" style={{position: 'relative'}}>
          <div className="main-header-container" style={{textAlign: 'center'}}>
            <Link className="menu-logo" to="/">
              <img
                src={withPrefix('/static/fitato-logo-winter.svg')}
                title='Fitato wishes happy winters!'
                alt="fitato"
              />
            </Link>
          </div>
        </nav>
      </>
    )
  }
}

export default Header
