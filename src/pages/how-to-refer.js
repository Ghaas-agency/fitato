import React from 'react'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby'
import FooterInfo from '../partials/FooterInfo'
import SignupPopup from '../partials/SignupPopup'
import Layout from '../components/index'

import '../css/refer.css'

const displayBlock = {
  display: 'block'
}

const displayNone = {
  display: 'none'
}

const navActive = {
  backgroundColor: '#EB1F2E',
  color: '#ffffff',
  border: '1px solid #EB1F2E'
}

class ReferPage extends React.Component {
  state = {
    currentView: 1
  }

  handleNavClick = e => {
    if(e.target.id === 'show-android') {
      this.setState({currentView: 1});
    } else if (e.target.id === 'show-ios') {
      this.setState({currentView: 2});
    };
  }

  render() {
    return (
      <Layout>
        <div className="refer-page">
          <Helmet
            title="How to Refer Your Friends | Fitato"
          >
            <meta name="description" content="Working out is more fun with friends. Learn how to refer Fitato to your friends here." />
          </Helmet>
    
          <div className="refer-page__hero">
            <div className="container">
              <h1>Share The Wealth, Spread The Joy!</h1>
              <div className="refer-page__hero-spl">
                <div className="refer-page__hero-spl--left">
                  <img src={withPrefix('/static/icons/giftcard.svg')} alt=""/>
                </div>
                <div className="refer-page__hero-spl--right">
                  <p className="refer-page__hero-spl--title">Refer A Friend And Get 40% Cashback On All Passes</p>
                  <p>Your Friend Gets 40% Cashback  + 20% OFF</p>
                  <small>Offer valid till 13<sup>th</sup> November 2018</small>
                </div>
              </div>
              <h3>How To Refer Your Friends</h3>
              <ul className="refer-page__hero-items">
                <li>
                  <span onClick={this.handleNavClick} id="show-android"
                  style={(this.state.currentView === 1) ? navActive : {}}
                  >
                  Android</span>
                </li>
                <li>
                  <span onClick={this.handleNavClick} id="show-ios"
                  style={(this.state.currentView === 2) ? navActive : {}}
                  >
                  iOS</span>
                </li>
              </ul>
            </div>
          </div>
    
          <div className="refer-page__show" 
            style={(this.state.currentView === 1) ? displayBlock : displayNone}
            >
            <div className="container">
              <div className="refer-page__steps">
                <div className="refer-page__step">
                  <div className="refer-page__step--title">
                    <h3>1. Go to the profile section</h3>
                  </div>
                  <div className="refer-page__step--img">
                    <img src={withPrefix('/static/refer/fitato-refer-android-step-1.jpg')} alt=""/>
                  </div>
                </div>
                <div className="refer-page__step">
                  <div className="refer-page__step--title">
                    <h3>2. Tap "REFER AND EARN"</h3>
                  </div>
                  <div className="refer-page__step--img">
                    <img src={withPrefix('/static/refer/fitato-refer-android-step-2.jpg')} alt=""/>
                  </div>
                </div>
                <div className="refer-page__step">
                  <div className="refer-page__step--title">
                    <h3>3. Tap "REFER"</h3>
                  </div>
                  <div className="refer-page__step--img">
                    <img src={withPrefix('/static/refer/fitato-refer-android-step-3.jpg')} alt=""/>
                  </div>
                </div>
                <div className="refer-page__step">
                  <div className="refer-page__step--title">
                    <h3>4. Choose your preferred option</h3>
                  </div>
                  <div className="refer-page__step--img">
                    <img src={withPrefix('/static/refer/fitato-refer-android-step-4.jpg')} alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <div className="refer-page__show" 
            style={(this.state.currentView === 2) ? displayBlock : displayNone}
            >
            <div className="container">
              <div className="refer-page__steps">
                <div className="refer-page__step">
                  <div className="refer-page__step--title">
                    <h3>1. Go to the profile section</h3>
                  </div>
                  <div className="refer-page__step--img">
                    <img src={withPrefix('/static/refer/fitato-refer-ios-step-1.jpg')} alt=""/>
                  </div>
                </div>
                <div className="refer-page__step">
                  <div className="refer-page__step--title">
                    <h3>2. Tap "Refer &amp; Earn"</h3>
                  </div>
                  <div className="refer-page__step--img">
                    <img src={withPrefix('/static/refer/fitato-refer-ios-step-2.jpg')} alt=""/>
                  </div>
                </div>
                <div className="refer-page__step">
                  <div className="refer-page__step--title">
                    <h3>3. Tap "REFER"</h3>
                  </div>
                  <div className="refer-page__step--img">
                    <img src={withPrefix('/static/refer/fitato-refer-ios-step-3.jpg')} alt=""/>
                  </div>
                </div>
                <div className="refer-page__step">
                  <div className="refer-page__step--title">
                    <h3>4. Choose your preferred option</h3>
                  </div>
                  <div className="refer-page__step--img">
                    <img src={withPrefix('/static/refer/fitato-refer-ios-step-4.jpg')} alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <FooterInfo />
        </div>
        <SignupPopup />
      </Layout>
    )
  }
}

export default ReferPage
