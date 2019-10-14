import React, { useState } from 'react';
import MetaTitleDescription from 'partials/MetaTitleDescription';
import { withPrefix } from 'gatsby';
import { HowHero, HowSteps } from 'css/how-it-works';
import FooterInfo from 'partials/FooterInfo';
import DownloadSwipe from 'partials/DownloadSwipe';
import Layout from 'components/index';

const greyed = {
  backgroundColor: '#aaaaaa',
  borderColor: '#aaaaaa',
};

const notGreyed = {
  backgroundColor: '#EB1F2E',
  borderColor: '#EB1F2E',
};

const StepsButtons = ({ active, onClick }) =>
  [1, 2, 3, 4].map((i) => (
    <button
      key={i}
      type="button"
      className={`step${i === active ? ' step-active' : ''}`}
      id={`step-${i}`}
      onClick={onClick}>
      {`Step ${i}`}
    </button>
  ));

const HowItWorksPage = () => {
  const [howToPosition, setHowToPosition] = useState(1);

  function handleStepClick(e) {
    if (e.target.id.startsWith('step-'))
      setHowToPosition(Number(e.target.id.split('-')[1]));
  }

  function handleNavClick(e) {
    const current = howToPosition;

    if (
      e.target.className === 'nav-left' ||
      e.target.parentElement.className === 'nav-left'
    ) {
      if (current > 1) setHowToPosition(current - 1);
    } else if (
      e.target.className === 'nav-right' ||
      e.target.parentElement.className === 'nav-right'
    ) {
      if (current < 4) setHowToPosition(current + 1);
    }
  }

  return (
    <Layout>
      <MetaTitleDescription
        title="How Fitato Works | Flexibility At Your Fingertips"
        description="Fitato is your single membership to access the best gyms and fitness studios in your city. Learn how it works."
      />
      <HowHero>
        <div className="container">
          <h1>Flexibility At Your Fingertips</h1>
          <p>
            Fitato is your single membership to access the best gyms and fitness
            studios in your city. Welcome to your Fitness Freedom.
          </p>
        </div>
      </HowHero>

      <HowSteps>
        <div className="container">
          <button
            type="button"
            className="nav-left"
            onClick={handleNavClick}
            style={howToPosition < 2 ? greyed : notGreyed}>
            <img
              src={withPrefix('/static/icons/arrow-back-white.svg')}
              alt="arrow back"
            />
          </button>
          <button
            type="button"
            className="nav-right"
            onClick={handleNavClick}
            style={howToPosition > 3 ? greyed : notGreyed}>
            <img
              src={withPrefix('/static/icons/arrow-forward-white.svg')}
              alt="arrow forward"
            />
          </button>
          <div className="steps-container">
            <div className={`steps active-${howToPosition}`}>
              <div className="step-left">
                <StepsButtons active={1} onClick={handleStepClick} />
                <h2>Get The Fitato App</h2>
                <p>
                  Fitato membership is only accessible with the Fitato app. The
                  apps are available on both Android and iOS.
                </p>
                <p>
                  Don’t have the app yet?&nbsp;
                  <a href="#downloadnow">Download now.</a>
                </p>
              </div>
              <div className="step-right">
                <img
                  src={withPrefix(
                    '/static/how-it-works/fitato-how-it-works-step-1.jpg',
                  )}
                  alt="how fitato app works download the app"
                />
              </div>
            </div>
            <div className={`steps active-${howToPosition}`}>
              <div className="step-left">
                <StepsButtons active={2} onClick={handleStepClick} />
                <h2>Signup</h2>
                <p>
                  Once you have the app on your phone, we need to get to know
                  each other a little. Signup for an account using your Email or
                  Facebook account.
                </p>
              </div>
              <div className="step-right">
                <img
                  src={withPrefix(
                    '/static/how-it-works/fitato-how-it-works-step-2.jpg',
                  )}
                  alt="how fitato app works signup"
                />
              </div>
            </div>
            <div className={`steps active-${howToPosition}`}>
              <div className="step-left">
                <StepsButtons active={3} onClick={handleStepClick} />
                <h2>Choose Your Preferred Membership</h2>
                <p>
                  Monthy, Bi-monthly or Quarterly, choose the membership
                  duration that suits you the best. Tap on the Buy Pass button
                  and select your preferred membership style.
                </p>
              </div>
              <div className="step-right">
                <img
                  src={withPrefix(
                    '/static/how-it-works/fitato-how-it-works-step-3.jpg',
                  )}
                  alt="how fitato app works choose membership"
                />
              </div>
            </div>
            <div className={`steps active-${howToPosition}`}>
              <div className="step-left">
                <StepsButtons active={4} onClick={handleStepClick} />
                <h2>Get Ready to Sweat</h2>
                <p>
                  As soon as you purchase your membership, you’d be able to
                  choose and reserve your favourite activity from the list. Gym,
                  Zumba, Yoga, Crossfit, Swimming and a host of options to
                  choose from.
                </p>
              </div>
              <div className="step-right">
                <img
                  src={withPrefix(
                    '/static/how-it-works/fitato-how-it-works-step-4.jpg',
                  )}
                  alt="how fitato app works workout"
                />
              </div>
            </div>
          </div>
        </div>
      </HowSteps>

      <section id="downloadnow">
        <DownloadSwipe
          btnClass="f-ai-index-download"
          style={{
            backgroundColor: '#f5f5f5',
            borderBottom: '1px solid #e6dcdc',
          }}
        />
      </section>

      <FooterInfo />
    </Layout>
  );
};

export default HowItWorksPage;
