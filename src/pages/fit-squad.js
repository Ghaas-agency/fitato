import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/index'
/* import SignupPopup from '../partials/SignupPopup' */
import { withPrefix } from 'gatsby'
import DownloadSwipe from '../partials/DownloadSwipe'
import '../css/fit-squad.css'

const FitSquadPage = () => (
  <Layout>
    <div className="fit-squad-page">
      <Helmet
        title="Fit Squad Plans | Fitato"
      >
        <meta name="description" content="When at the gym, parter up! Bring your friends along and get group discounts on all your passes!" />
        <meta itemprop="name" content="Fit Squad Plans | Fitato"/>
        <meta itemprop="description" content="When at the gym, parter up! Bring your friends along and get group discounts on all your passes!"/>
        <meta name="twitter:title" content="Fit Squad Plans | Fitato"/>
        <meta name="twitter:description" content="When at the gym, parter up! Bring your friends along and get group discounts on all your passes!"/>
        <meta property="og:title" content="Fit Squad Plans | Fitato"/>
        <meta property="og:description" content="When at the gym, parter up! Bring your friends along and get group discounts on all your passes!"/>
      </Helmet>

      <div className="fit-squad-page-hero" /* style={{backgroundImage: 'url(' + withPrefix('/static/') + ')'}} */>
        <div className="fit-squad-page-hero__left">
          <h1>When at the Gym,<br /><span className="red">partner up!</span></h1>
          <p>The more, the merrier. Bring your friends along and get group discounts on all your passes.</p>
        </div>
        <div className="fit-squad-page-hero__right">
          <img src={withPrefix('/static/fitato-fit-squad.jpg')} alt="fitato fit squad"/>
        </div>
      </div>

      <div className="fit-squad-page-exclusive">
        <div className="container">
          <h2>Exclusive Fit Squad Offer</h2>

          <div className="pricing-row">
            <div className="pricing-col">
              <div className="pricing-col__head">
                <h3>Squad of 5</h3>
              </div>
              <div className="pricing-col__body">
                <p>Group of 5 purchasing the 3-month Fitato Pass together</p>
                <p className="pricing-col__body--price"><strike>₹27,495</strike><br/>₹19,000</p>
              </div>
              <div className="pricing-col__cta">
                <a href="https://imjo.in/zaJZPk" target="_blank" rel="noopener noreferrer" className="button button-fluid">Buy Now</a>
              </div>
            </div>
            
            <div className="pricing-col">
              <div className="pricing-col__head">
                <h3>Squad of 3</h3>
              </div>
              <div className="pricing-col__body">
                <p>Group of 3 purchasing the 3-month Fitato Pass together</p>
                <p className="pricing-col__body--price"><strike>₹16,497</strike><br/>₹12,000</p>
              </div>
              <div className="pricing-col__cta">
                <a href="https://imjo.in/6mvyEf" target="_blank" rel="noopener noreferrer" className="button button-fluid">Buy Now</a>
              </div>
            </div>

            <div className="pricing-col">
              <div className="pricing-col__head">
                <h3>Squad of 2</h3>
              </div>
              <div className="pricing-col__body">
                <p>Group of 2 purchasing the 3-month Fitato Pass together</p>
                <p className="pricing-col__body--price"><strike>₹10,998</strike><br/>₹8,200</p>
              </div>
              <div className="pricing-col__cta">
                <a href="https://imjo.in/xAqb2Q" target="_blank" rel="noopener noreferrer" className="button button-fluid">Buy Now</a>
              </div>
            </div>

          </div>
          {/* <div style={{textAlign: 'center', marginBottom: '50px', marginTop: '-40px'}}><small><em>*Valid Till 26th August Only</em></small></div> */}

          <ul>
            <li>Post the payment, you'll receive a confirmation call and email as soon as your payment is processed.</li>
            <li>The email will have custom 100% off codes which your squad can use to activate their passes on their respective mobile apps.</li>
            <li>The pass starts when the user enters the activation code on the app.</li>
            <li>The Fitato pass will give each user who is part of the squad unlimited access to all the Fitato partner gyms &amp; fitness studios across the city of Pune for a period of 3 months.</li>
          </ul>
          
          <div className="fit-squad-page-exclusive__contact">
            <h4>Need recommendations or a crafted plan?</h4>
            <a href="tel:+918200396237" className="button">Speak to us</a>
          </div>
        </div>
      </div>
      
      <div className="fit-squad-page-banner">
        <div className="container">
          <h2>Workout in over 300+ fitness studios &amp; gyms across Pune with your squad through your single Fitato pass. Come, fall in love with fitness.</h2>
        </div>
      </div>

      <DownloadSwipe />
    </div>
    {/* <SignupPopup /> */}
  </Layout>
)

export default FitSquadPage
