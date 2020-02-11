import React from 'react';
import { withPrefix } from 'gatsby';

import Layout from 'components/index';

import MetaTitleDescription from 'partials/MetaTitleDescription';

import { Page } from 'css/2020.styled';

const Page2020 = () => (
  <Layout hideOfferPopup>
    <MetaTitleDescription
      title="Stepping Up to 2020. Together. | Fitato"
      description="Presenting a new, improved Fitato to help you bring out the best of you."
    />
    <Page>
      <div className="offers-page-hero">
        <div className="red-triangle" />
        <div className="container">
          <div className="offers-page-hero__wrapper">
            <h1 title="Stepping up to 2020. Together.">
              <img
                src={withPrefix('/static/2020/stepping-up.svg')}
                alt="stepping up"
              />
            </h1>
            <p
              className="focus align-center white"
              style={{ marginBottom: 10 }}>
              A new, improved Fitato to help you bring out the best of you.
            </p>
            <div className="align-center" style={{ marginTop: 30 }}>
              <a className="button button-yellow" href="#get-started">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="offer-features align-center">
        <div className="container">
          <p className="offer-features--heading">
            <span className="bold">In the year 2020 </span>
            <span>
              - our resolution is to make fitness more enjoyable for you.
              Something you can easily stick with. Something you don’t have to
              struggle with each morning (or evening). A fitness community
              that’ll drive you to be the best version of yourself. And to do
              that, we have:
            </span>
          </p>
          <div className="offer-features__items">
            <div className="offer-features__item">
              <img
                src={withPrefix('/static/2020/fitato-exclusive-workouts.jpg')}
                alt="fitato exclusive workouts"
              />
              <div>
                <h3>Fitato Exclusive Workouts</h3>
                <p>
                  The best fitness classNamees your city has to offer, conducted
                  by experienced instructors, Fitato Exclusives is designed to
                  introduce you to a world of fitness beyond the traditional
                  gyms. Parkour, Rock Climbing, Martial Arts, Aerial Yoga and a
                  lot more - Fitato Exclusives will change how you imagine
                  fitness.
                </p>
              </div>
            </div>
            <div className="offer-features__item">
              <img
                src={withPrefix('/static/2020/weekend-specials.jpg')}
                alt="weekend specials"
              />
              <div>
                <h3>Weekend Specials</h3>
                <p>
                  Ever wanted to try your hands on Kayaking? Or a night trek
                  under serene stars - far away from the city’s hustle-bustle.
                  Join us for the Weekend Specials where we bring you exciting
                  activities that’ll recharge you to take on the week ahead.
                </p>
              </div>
            </div>
          </div>
          <p className="offer-features--footer bold">
            Check out the Fitato Exclusive sections on your Fitato app to know
            more.
          </p>
        </div>
      </div>
      <div className="offer-coupon align-center">
        <div className="container">
          <div className="offer-coupon__items">
            <div className="offer-coupon__item"></div>
            <div className="offer-coupon__item">
              <p>
                Have you been a Fitato member and have not renewed your Fitato
                pass? We’d love to have you try the Fitato Exclusives!
              </p>
              <p className="offer-coupon--offer bold">
                Get 25% Off + 25% Cashback
                <br />
                <span>On All Fitato Passes</span>
              </p>
              <p className="offer-coupon--code">
                <span>STEPUP</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="offers-page-intro" id="get-started">
        <div className="container">
          <div className="offers-page-plans__items">
            <div className="offers-page-plans__item">
              <div className="offers-page-plans__item--title">
                <h3>
                  Fitato Quarterly
                  <br />
                  <small className="normal">(3 months)</small>
                </h3>
              </div>
              <div className="offers-page-plans__item--body">
                <p>
                  Get unlimited access to every Fitato partner facility for
                  three months.
                </p>
                <p className="offers-page-plans__item--price-strike">₹6,599</p>
                <p className="offers-page-plans__item--price">₹4,949</p>
                <p className="offers-page-plans__item--get-cb">
                  Get Cashback: ₹1,237
                </p>
              </div>
              <div className="offers-page-plans__item--cta">
                <a
                  className="button button-fluid"
                  href="https://www.instamojo.com/@fitato/l4c2bd36a8fb241a293006bf6ff6b70bb/"
                  target="_blank"
                  rel="noopener noreferrer">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="offers-page-plans__item">
              <div className="offers-page-plans__item--title">
                <h3>
                  Fitato Bi-Monthly
                  <br />
                  <small className="normal">(2 months)</small>
                </h3>
              </div>
              <div className="offers-page-plans__item--body">
                <p>
                  Get unlimited access to every Fitato partner facility for two
                  months.
                </p>
                <p className="offers-page-plans__item--price-strike">₹4,599</p>
                <p className="offers-page-plans__item--price">₹3,449</p>
                <p className="offers-page-plans__item--get-cb">
                  Get Cashback: ₹682
                </p>
              </div>
              <div className="offers-page-plans__item--cta">
                <a
                  className="button button-fluid"
                  href="https://www.instamojo.com/@fitato/le0fbac56a28b4782a8e2555342f6db73/"
                  target="_blank"
                  rel="noopener noreferrer">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="offers-page-plans__item">
              <div className="offers-page-plans__item--title">
                <h3>
                  Fitato Monthly
                  <br />
                  <small className="normal">(1 month)</small>
                </h3>
              </div>
              <div className="offers-page-plans__item--body">
                <p>
                  Get unlimited access to every Fitato partner facility for one
                  month.
                </p>
                <p className="offers-page-plans__item--price-strike">₹2,499</p>
                <p className="offers-page-plans__item--price">₹1,874</p>
                <p className="offers-page-plans__item--get-cb">
                  Get Cashback: ₹469
                </p>
              </div>
              <div className="offers-page-plans__item--cta">
                <a
                  className="button button-fluid"
                  href="https://www.instamojo.com/@fitato/l1d485ef93419405baaa9a95516984ab7/"
                  target="_blank"
                  rel="noopener noreferrer">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <small className="white">
            Offer valid till 31
            <sup>st</sup>
            &nbsp;January 2020 midnight only.
          </small>
          <br />
          <small className="white">
            Fitato wallet money can be used for payments.
          </small>
          <div className="offers-page-plans__help">
            <h4 className="white">Have questions? Let us help.</h4>
            <a
              className="offers-page-plans__help--call button-inverted"
              href="tel:+918448448546">
              <img src={withPrefix('/static/2020/call.svg')} alt="call" />
              Talk to us
            </a>
          </div>
        </div>
      </div>
      <section className="offer-facilities align-center">
        <div className="container">
          <h2>
            Your one pass to the best fitness facilities the city has to offer
          </h2>
          <div className="offer-facilities__items">
            <div className="offer-facilities__item">
              <div>
                <img
                  src={withPrefix('/static/2020/spinning.png')}
                  alt="spinning"
                />
                <span>Spinning</span>
              </div>
              <div>
                <img src={withPrefix('/static/2020/gym.png')} alt="gym" />
                <span>Gym</span>
              </div>
              <div>
                <img src={withPrefix('/static/2020/yoga.png')} alt="yoga" />
                <span>Yoga</span>
              </div>
              <div>
                <img
                  src={withPrefix('/static/2020/meditation.png')}
                  alt="meditation"
                />
                <span>Meditation</span>
              </div>
              <div>
                <img
                  src={withPrefix('/static/2020/community-events.png')}
                  alt="community events"
                />
                <span>Community Events</span>
              </div>
              <div>
                <img
                  src={withPrefix('/static/2020/swimming.png')}
                  alt="swimming"
                />
                <span>Swimming</span>
              </div>
              <div>
                <img src={withPrefix('/static/2020/zumba.png')} alt="zumba" />
                <span>Zumba</span>
              </div>
              <div>
                <img src={withPrefix('/static/2020/mma.png')} alt="mma" />
                <span>MMA</span>
              </div>
            </div>
            <div className="offer-facilities__item">
              <img
                src={withPrefix('/static/2020/fitato-mobile-app.jpg')}
                alt="fitato mobile app"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="offer-clan">
        <div className="container">
          <h2 className="align-center">
            Check out what the Fitato Clan was up to in recent months
          </h2>
          <div className="offer-clan__items">
            <a
              href="https://blog.fitato.fit/fitato-exclusive-events-december-2019/"
              target="_blank"
              rel="noopener noreferrer"
              className="offer-clan__item">
              <img
                src={withPrefix('/static/2020/Exclusive-Dec2019.jpg')}
                alt="Fitato Exclusive Events (December 2019)"
              />
              <h3>Fitato Exclusive Events (December 2019)</h3>
              <p>
                The last month was no different for us than the rest of the
                year. Like every other month, this month too we enjoyed a series
                of fun fitess activities as a part.
              </p>
            </a>
            <a
              href="https://blog.fitato.fit/fitato-exclusive-events-november-2019/"
              target="_blank"
              rel="noopener noreferrer"
              className="offer-clan__item">
              <img
                src={withPrefix('/static/2020/Exclusive_NOV2019.jpg')}
                alt="Fitato Exclusive Events (November 2019)"
              />
              <h3>Fitato Exclusive Events (November 2019)</h3>
              <p>
                From exciting Gokarting sessions to serene Yoga Carnival, here
                are all the Fitato Exclusive Events we are a part of, in the
                month of November 2019.
              </p>
            </a>
            <a
              href="https://blog.fitato.fit/fitato-exclusive-events-october-2019/"
              target="_blank"
              rel="noopener noreferrer"
              className="offer-clan__item">
              <img
                src={withPrefix('/static/2020/Exclusive_Oct2019.jpg')}
                alt="Fitato Exclusive Events (October 2019)"
              />
              <h3>Fitato Exclusive Events (October 2019)</h3>
              <p>
                Here are all the amazing fitness events the Fitato Community
                enjoyed in October as a part of the Fitato Exclusive Events.
              </p>
            </a>
          </div>
          <div className="align-center offer-clan--cta">
            <a
              href="https://blog.fitato.fit"
              target="_blank"
              rel="noopener noreferrer">
              See All Posts
            </a>
          </div>
        </div>
      </section>

      <section className="offer-game align-center">
        <div className="container">
          <h2 className="white">
            We&apos;re stepping up our game in 2020.
            <br />
            Are you?
          </h2>
          <a className="button" href="#get-started">
            Get Started
          </a>
        </div>
      </section>
    </Page>
  </Layout>
);

export default Page2020;
