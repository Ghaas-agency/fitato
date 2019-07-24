/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Helmet from 'react-helmet';
import MetaTitleDescription from 'partials/MetaTitleDescription';
import { withPrefix } from 'gatsby';
import FooterInfo from '../partials/FooterInfo';
/* import SignupPopup from '../partials/SignupPopup' */
import DownloadSwipe from '../partials/DownloadSwipe';
import Layout from '../components/index';

import '../css/how-it-works.css';

const displayBlock = {
  display: 'flex',
};

const displayNone = {
  display: 'none',
};

const greyed = {
  backgroundColor: '#aaaaaa',
  borderColor: '#aaaaaa',
};

const notGreyed = {
  backgroundColor: '#EB1F2E',
  borderColor: '#EB1F2E',
};

class HowItWorksPage extends React.Component {
  state = {
    howToPosition: 1,
  };

  handleStepClick = (e) => {
    if (e.target.id === 'step-1') {
      this.setState({ howToPosition: 1 });
    } else if (e.target.id === 'step-2') {
      this.setState({ howToPosition: 2 });
    } else if (e.target.id === 'step-3') {
      this.setState({ howToPosition: 3 });
    } else if (e.target.id === 'step-4') {
      this.setState({ howToPosition: 4 });
    }
  };

  handleNavClick = (e) => {
    const current = this.state.howToPosition;

    if (
      e.target.className === 'work-steps--nav-left' ||
      e.target.parentElement.className === 'work-steps--nav-left'
    ) {
      if (current > 1) {
        this.setState({ howToPosition: current - 1 });
      }
    } else if (
      e.target.className === 'work-steps--nav-right' ||
      e.target.parentElement.className === 'work-steps--nav-right'
    ) {
      if (current < 4) {
        this.setState({ howToPosition: current + 1 });
      }
    }
  };

  render() {
    return (
      <Layout>
        <MetaTitleDescription
          title="How Fitato Works | Flexibility At Your Fingertips"
          description="Fitato is your single membership to access the best gyms and fitness studios in your city. Learn how it works."
        />
        <Helmet
          style={[
            {
              cssText: `.works-hero {background-image: url('${withPrefix(
                '/static/how-it-works/fitato-how-it-works-hero-bg.jpg',
              )}')}@media (max-width: 480px) {.works-hero {background-image: url('${withPrefix(
                '/static/how-it-works/fitato-how-it-works-hero-bg-mobile.jpg',
              )}')}}`,
            },
          ]}
        />
        <div className="works-page">
          <section className="works-hero">
            <div className="container">
              <h1>Flexibility At Your Fingertips</h1>
              <p>
                Fitato is your single membership to access the best gyms and
                fitness studios in your city. Welcome to your Fitness Freedom.
              </p>
            </div>
          </section>

          <section className="works-steps">
            <div className="container work-steps-container">
              <div
                className="work-steps--nav-left"
                onClick={this.handleNavClick}
                style={this.state.howToPosition < 2 ? greyed : notGreyed}>
                <img
                  src={withPrefix('/static/icons/arrow-back-white.svg')}
                  alt="arrow back"
                />
              </div>
              <div
                className="work-steps--nav-right"
                onClick={this.handleNavClick}
                style={this.state.howToPosition > 3 ? greyed : notGreyed}>
                <img
                  src={withPrefix('/static/icons/arrow-forward-white.svg')}
                  alt="arrow forward"
                />
              </div>
              <div
                className="works-steps__items"
                style={
                  this.state.howToPosition === 1 ? displayBlock : displayNone
                }>
                <div className="works-steps__item--left">
                  <p
                    className="works-steps--step works-steps--step-active"
                    id="step-1"
                    onClick={this.handleStepClick}>
                    Step 1
                  </p>
                  <p
                    className="works-steps--step"
                    id="step-2"
                    onClick={this.handleStepClick}>
                    Step 2
                  </p>
                  <p
                    className="works-steps--step"
                    id="step-3"
                    onClick={this.handleStepClick}>
                    Step 3
                  </p>
                  <p
                    className="works-steps--step"
                    id="step-4"
                    onClick={this.handleStepClick}>
                    Step 4
                  </p>
                  <h2>Get The Fitato App</h2>
                  <p>
                    Fitato membership is only accessible with the Fitato app.
                    The apps are available on both Android and iOS.
                  </p>
                  <p>
                    Don’t have the app yet?&nbsp;
                    <a href="#downloadnow">Download now.</a>
                  </p>
                </div>
                <div className="works-steps__item--right">
                  <img
                    src={withPrefix(
                      '/static/how-it-works/fitato-how-it-works-step-1.jpg',
                    )}
                    alt="how fitato app works download the app"
                  />
                </div>
              </div>
              <div
                className="works-steps__items"
                style={
                  this.state.howToPosition === 2 ? displayBlock : displayNone
                }>
                <div className="works-steps__item--left">
                  <p
                    className="works-steps--step"
                    id="step-1"
                    onClick={this.handleStepClick}>
                    Step 1
                  </p>
                  <p
                    className="works-steps--step works-steps--step-active"
                    id="step-2"
                    onClick={this.handleStepClick}>
                    Step 2
                  </p>
                  <p
                    className="works-steps--step"
                    id="step-3"
                    onClick={this.handleStepClick}>
                    Step 3
                  </p>
                  <p
                    className="works-steps--step"
                    id="step-4"
                    onClick={this.handleStepClick}>
                    Step 4
                  </p>
                  <h2>Signup</h2>
                  <p>
                    Once you have the app on your phone, we need to get to know
                    each other a little. Signup for an account using your Email
                    or Facebook account.
                  </p>
                </div>
                <div className="works-steps__item--right">
                  <img
                    src={withPrefix(
                      '/static/how-it-works/fitato-how-it-works-step-2.jpg',
                    )}
                    alt="how fitato app works signup"
                  />
                </div>
              </div>
              <div
                className="works-steps__items"
                style={
                  this.state.howToPosition === 3 ? displayBlock : displayNone
                }>
                <div className="works-steps__item--left">
                  <p
                    className="works-steps--step"
                    id="step-1"
                    onClick={this.handleStepClick}>
                    Step 1
                  </p>
                  <p
                    className="works-steps--step"
                    id="step-2"
                    onClick={this.handleStepClick}>
                    Step 2
                  </p>
                  <p
                    className="works-steps--step works-steps--step-active"
                    id="step-3"
                    onClick={this.handleStepClick}>
                    Step 3
                  </p>
                  <p
                    className="works-steps--step"
                    id="step-4"
                    onClick={this.handleStepClick}>
                    Step 4
                  </p>
                  <h2>Choose Your Preferred Membership</h2>
                  <p>
                    Monthy, Bi-monthly or Quarterly, choose the membership
                    duration that suits you the best. Tap on the Buy Pass button
                    and select your preferred membership style.
                  </p>
                </div>
                <div className="works-steps__item--right">
                  <img
                    src={withPrefix(
                      '/static/how-it-works/fitato-how-it-works-step-3.jpg',
                    )}
                    alt="how fitato app works choose membership"
                  />
                </div>
              </div>
              <div
                className="works-steps__items"
                style={
                  this.state.howToPosition === 4 ? displayBlock : displayNone
                }>
                <div className="works-steps__item--left">
                  <p
                    className="works-steps--step"
                    id="step-1"
                    onClick={this.handleStepClick}>
                    Step 1
                  </p>
                  <p
                    className="works-steps--step"
                    id="step-2"
                    onClick={this.handleStepClick}>
                    Step 2
                  </p>
                  <p
                    className="works-steps--step"
                    id="step-3"
                    onClick={this.handleStepClick}>
                    Step 3
                  </p>
                  <p
                    className="works-steps--step works-steps--step-active"
                    id="step-4"
                    onClick={this.handleStepClick}>
                    Step 4
                  </p>
                  <h2>Get Ready to Sweat</h2>
                  <p>
                    As soon as you purchase your membership, you’d be able to
                    choose and reserve your favourite activity from the list.
                    Gym, Zumba, Yoga, Crossfit, Swimming and a host of options
                    to choose from.
                  </p>
                </div>
                <div className="works-steps__item--right">
                  <img
                    src={withPrefix(
                      '/static/how-it-works/fitato-how-it-works-step-4.jpg',
                    )}
                    alt="how fitato app works workout"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="downloadnow">
            <DownloadSwipe btnClass="f-ai-index-download" />
          </section>

          <FooterInfo />
        </div>
        {/* <SignupPopup /> */}
      </Layout>
    );
  }
}

export default HowItWorksPage;
