import React from 'react'
import Helmet from 'react-helmet'
import { Link, withPrefix } from 'gatsby'
import FooterInfo from '../partials/FooterInfo'
import SignupPopup from '../partials/SignupPopup'
import Layout from '../components/index'

import '../css/how-it-works.css'

/* const displayBlock = {
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
 */
class HowItWorksPage extends React.Component {

  render() {
    return (
      <Layout>
        <div className="works-page">
          <Helmet
            title="How It Works | Fitato"
          >
            <meta name="description" content="Working out is more fun with friends. Learn how to refer Fitato to your friends here." />
            <meta itemprop="name" content="How It Works | Fitato"/>
            <meta itemprop="description" content="Working out is more fun with friends. Learn how to refer Fitato to your friends here."/>
            <meta name="twitter:title" content="How It Works | Fitato"/>
            <meta name="twitter:description" content="Working out is more fun with friends. Learn how to refer Fitato to your friends here."/>
            <meta name="og:title" content="How It Works | Fitato"/>
            <meta name="og:description" content="Working out is more fun with friends. Learn how to refer Fitato to your friends here."/>
          </Helmet>
    
          <section className="works-hero">
            <div className="container">
              <h1>How It Works</h1>
              <p>Fitato is your single membership to access the best gyms and fitness studios in your city. Welcome to your Fitness Freedom.</p>
            </div>
          </section>

          <section className="works-steps">
            <div className="container">
              <div className="works-steps__items">
                <div className="works-steps__item">
                  <p className="works-steps--step">Step 1</p>
                  <h2>Get The Fitato App</h2>
                  <p>Fitato membership is only accessible with the Fitato app. The apps are available on both Android and iOS.</p>
                  <p>Don’t have the app yet?</p>
                  <Link to="/download/" className="button" style={{marginLeft: '0'}}>Download Now</Link>
                </div>
                <div className="works-steps__item works-steps__item--center ">
                  <img src={withPrefix('/static/index/section-four-1.png')} alt=""/>
                </div>
              </div>
              <div className="works-steps__items">
                <div className="works-steps__item works-steps__item--center ">
                  <img src={withPrefix('/static/index/section-four-1.png')} alt=""/>
                </div>
                <div className="works-steps__item">
                  <p className="works-steps--step">Step 2</p>
                  <h2>Signup</h2>
                  <p>Once you have the app on your phone, we need to get to know each other a little. Signup for an account using your Email or Facebook account.</p>
                </div>
              </div>
              <div className="works-steps__items">
                <div className="works-steps__item">
                <p className="works-steps--step">Step 3</p>
                  <h2>Choose Your Preferred Membership</h2>
                  <p>Monthy, Bi-monthly or Quarterly, choose the membership duration that suits you the best. Tap on the Buy Pass button and select your preferred membership style.</p>
                </div>
                <div className="works-steps__item works-steps__item--center ">
                  <img src={withPrefix('/static/index/section-four-2.png')} alt=""/>
                </div>
              </div>
              <div className="works-steps__items">
                <div className="works-steps__item works-steps__item--center ">
                  <img src={withPrefix('/static/index/section-four-3.png')} alt=""/>
                </div>
                <div className="works-steps__item">
                <p className="works-steps--step">Step 4</p>
                  <h2>Get Ready to Sweat</h2>
                  <p>As soon as you purchase your membership, you’d be able to choose and reserve your favourite activity from the list. Gym, Zumba, Yoga, Crossfit, Swimming and a host of options to choose from.</p>
                </div>
              </div>
            </div>
          </section>
          
          <FooterInfo />
        </div>
        <SignupPopup />
      </Layout>
    )
  }
}

export default HowItWorksPage
