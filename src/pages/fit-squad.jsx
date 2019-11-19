import React from 'react';
import MetaTitleDescription from 'partials/MetaTitleDescription';
import { withPrefix } from 'gatsby';
import Layout from '../components/index';
/* import SignupPopup from '../partials/SignupPopup' */
import DownloadSwipe from '../partials/DownloadSwipe';
import '../css/fit-squad.css';

const FitSquadPage = () => (
  <Layout>
    <MetaTitleDescription
      title="Fit Squad Plans | Fitato"
      description="When at the gym, parter up! Bring your friends along and get group discounts on all your passes!"
    />
    <div className="fit-squad-page">
      <div
        className="fit-squad-page-hero" /* style={{backgroundImage: 'url(' + withPrefix('/static/') + ')'}} */
      >
        <div className="fit-squad-page-hero__left">
          <h1 className="italic uppercase extra-bold">
            Get Fit With
            <br />
            <span className="red"> Your Squad!</span>
          </h1>
          <p>
            The more, the merrier. Bring your friends along and get group
            discounts on all your passes.
          </p>
        </div>
        <div className="fit-squad-page-hero__right">
          <img
            src={withPrefix('/static/fitato-fit-squad.jpg')}
            alt="fitato fit squad"
          />
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
                <p className="pricing-col__body--price">
                  <strike>₹32,995</strike>
                  <br />
                  ₹23,500
                </p>
              </div>
              <div className="pricing-col__cta">
                <a
                  href="https://imjo.in/YdHDCc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-fluid">
                  Buy Now
                </a>
              </div>
            </div>

            <div className="pricing-col">
              <div className="pricing-col__head">
                <h3>Squad of 3</h3>
              </div>
              <div className="pricing-col__body">
                <p>Group of 3 purchasing the 3-month Fitato Pass together</p>
                <p className="pricing-col__body--price">
                  <strike>₹19,797</strike>
                  <br />
                  ₹15,000
                </p>
              </div>
              <div className="pricing-col__cta">
                <a
                  href="https://imjo.in/GQTXsK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-fluid">
                  Buy Now
                </a>
              </div>
            </div>

            <div className="pricing-col">
              <div className="pricing-col__head">
                <h3>Squad of 2</h3>
              </div>
              <div className="pricing-col__body">
                <p>Group of 2 purchasing the 3-month Fitato Pass together</p>
                <p className="pricing-col__body--price">
                  <strike>₹13,198</strike>
                  <br />
                  ₹10,200
                </p>
              </div>
              <div className="pricing-col__cta">
                <a
                  href="https://imjo.in/c5gnK6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-fluid">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          {/* <div style={{textAlign: 'center', marginBottom: '50px', marginTop: '-40px'}}><small><em>*Valid Till 26th August Only</em></small></div> */}

          <ul>
            <li>
              Post the payment, you&apos;ll receive a confirmation call and
              email as soon as your payment is processed.
            </li>
            <li>
              The email will have custom 100% off codes which your squad can use
              to activate their passes on their respective mobile apps.
            </li>
            <li>
              The pass starts when the user enters the activation code on the
              app.
            </li>
            <li>
              The Fitato pass will give each user who is part of the squad
              unlimited access to all the Fitato partner gyms &amp; fitness
              studios across the city of Pune for a period of 3 months.
            </li>
          </ul>

          <div className="fit-squad-page-exclusive__contact">
            <h4>Need recommendations or a crafted plan?</h4>
            <a href="tel:+918448448546" className="button">
              Speak to us
            </a>
          </div>
        </div>
      </div>

      <div className="fit-squad-page-banner">
        <div className="container">
          <h2>
            Workout in over 300+ fitness studios &amp; gyms across Pune with
            your squad through your single Fitato pass. Come, fall in love with
            fitness.
          </h2>
        </div>
      </div>

      <DownloadSwipe />
    </div>
    {/* <SignupPopup /> */}
  </Layout>
);

export default FitSquadPage;
