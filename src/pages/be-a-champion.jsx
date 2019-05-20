/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Helmet from 'react-helmet';
import { /* Link, */ withPrefix } from 'gatsby';
import Layout from 'components/index-app';
import 'css/be-a-champion.css';
// import SocialLinks from 'partials/SocialLinks'

const CollegePage = () => (
  <>
    <Layout>
      <div className="college-page">
        <Helmet
          title="Represent Fitato On You Campus | Fitato Champion"
          style={[
            {
              cssText: `
              .college-hero {background-image: url('${withPrefix(
                '/static/champion/fitato-campus-champion-hero.jpg',
              )}')}/* @media (max-width: 767px) {.college-hero {background-image: url('${withPrefix(
                '/static/fitato-home-hero-bg-mobile.jpg',
              )}')}} */
              .college-what, .college-get {background-image: url('${withPrefix(
                '/static/champion/fitato-campus-champion-pattern.jpg',
              )}')}
            `,
            },
          ]}>
          <meta
            name="description"
            content="If you are passionate about leading a healthy lifestyle and wish to inspire others towards it, join us as a campus ambassador. Lead the Fitness revolution on your campus."
          />
          <meta
            itemProp="name"
            content="Represent Fitato On You Campus | Fitato Champion"
          />
          <meta
            itemProp="description"
            content="If you are passionate about leading a healthy lifestyle and wish to inspire others towards it, join us as a campus ambassador. Lead the Fitness revolution on your campus."
          />
          <meta
            name="twitter:title"
            content="Represent Fitato On You Campus | Fitato Champion"
          />
          <meta
            name="twitter:description"
            content="If you are passionate about leading a healthy lifestyle and wish to inspire others towards it, join us as a campus ambassador. Lead the Fitness revolution on your campus."
          />
          <meta
            property="og:title"
            content="Represent Fitato On You Campus | Fitato Champion"
          />
          <meta
            property="og:description"
            content="If you are passionate about leading a healthy lifestyle and wish to inspire others towards it, join us as a campus ambassador. Lead the Fitness revolution on your campus."
          />
        </Helmet>

        <section className="college-hero">
          <div className="container">
            <div className="college-hero__wrapper">
              <h1>
                Become a&nbsp;
                <span className="yellow">#FitatoCampusChampion</span>
              </h1>
              <p className="yellow">Be The Fitness Star On Your Campus</p>
              <a href="#signup" className="button-inverted">
                Sign up
              </a>
            </div>
          </div>
        </section>

        <section className="college-who">
          <div className="container">
            <h2>
              Would you like to be a
              <br />
              <span className="yellow">#FitatoCampusChampion?</span>
            </h2>
            <p>
              Fitato is a fitness membership that is revolutionising the way
              people in Pune think about fitness. And we want you to help us
              bring this revolution to your college! If you&apos;re deeply
              passionate about fitness and see yourself as a changemaker - hop
              on this journey with us. As a Fitato Campus Champion - you&apos;ll
              get exclusive Champion-only access to merchandise, cool parties
              and you&apos;ll get to be the face of fitness in your college.
            </p>
          </div>
        </section>

        <section className="college-what">
          <div className="college-what--angle-top" />
          <div className="container">
            <h2>What will you get?</h2>
            <div className="college-what__items">
              <div className="college-what__item">
                <img
                  src={withPrefix('/static/champion/id-card.png')}
                  alt="id card"
                />
                <h3>Free Fitato Membership</h3>
                <p>For all Fitato Champions</p>
              </div>
              <div className="college-what__item">
                <img
                  src={withPrefix('/static/champion/tickets.png')}
                  alt="tickets."
                />
                <h3>Your Due Share</h3>
                <p>Commission on the sales you make</p>
              </div>
              <div className="college-what__item">
                <img
                  src={withPrefix('/static/champion/discount.png')}
                  alt="discount"
                />
                <h3>Resume Boost</h3>
                <p>Experience letter to credit your work</p>
              </div>
              <div className="college-what__item">
                <img
                  src={withPrefix('/static/champion/resume.png')}
                  alt="resume"
                />
                <h3>Free Supersonic Passes</h3>
                <p>Two passes for the top performing champion</p>
              </div>
              <div className="college-what__item">
                <img
                  src={withPrefix('/static/champion/merchandise.png')}
                  alt="merchandise"
                />
                <h3>Free Fitato Merchandise</h3>
                <p>Cool T-shirts, gym bags, bands, badges, sippers and more</p>
              </div>
              <div className="college-what__item">
                <img src={withPrefix('/static/champion/tag.png')} alt="tag" />
                <h3>Exclusive Promo Codes</h3>
                <p>Special deals and discounts for your friends</p>
              </div>
            </div>
          </div>
          <div className="college-what--angle-bottom" />
        </section>

        <section className="college-be">
          <div className="container">
            <h2>What would you do?</h2>
            <div className="college-be__items">
              <div className="college-be__item">
                <h3>Expand the Fitness Revolution Offline</h3>
                <p>
                  We want you to help us help your college mates adopt a fitter
                  lifestyle. The more people you bring in, the bigger the cause
                  becomes! You would be in charge of getting more and more
                  people to know about us and join our revolution of providing
                  fitness freedom that comes with a Fitato membership.
                </p>
              </div>
              <div className="college-be__item">
                <h3>Lead the Fitness Revolution Online</h3>
                <p>
                  We want you to help us spread the idea of making fitness a
                  priority in their lifestyle. You would be our social media
                  influencer and lead the #fitato campaign across social media
                  platforms by inspiring people to stay fit.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="college-get">
          <div className="container">
            <h2>
              What do you need to be a&nbsp;
              <br />
              <span className="yellow">#FitatoCampusChampion?</span>
            </h2>
            <p>
              All you need is a strong passion for fitness and a desire to make
              people’s lives healthier. Needless to say, you must still be in
              college. Your relationship with us will go on for at least two
              months (December and January).
            </p>
          </div>
        </section>

        <section className="college-signup" id="signup">
          <div className="container">
            <h2>
              So, you think you have what it takes?
              <br />
              <span className="yellow">Sign up now!</span>
            </h2>
            <div id="mc_embed_signup" className="college-signup--form">
              <form
                action="https://fit.us18.list-manage.com/subscribe/post?u=c70dd7220cee163ff5b3fa95d&amp;id=a3cb1ebece"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                noValidate>
                <div id="mc_embed_signup_scroll">
                  <div className="mc-field-group">
                    <label htmlFor="mce-FNAME">Name </label>
                    <input
                      type="text"
                      value=""
                      name="FNAME"
                      className="required"
                      id="mce-FNAME"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="mc-field-group">
                    <label htmlFor="mce-EMAIL">Email Address </label>
                    <input
                      type="email"
                      value=""
                      name="EMAIL"
                      className="required email"
                      id="mce-EMAIL"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="mc-field-group size1of2">
                    <label htmlFor="mce-PHONE">Phone Number </label>
                    <input
                      type="text"
                      name="PHONE"
                      className="required"
                      value=""
                      id="mce-PHONE"
                      placeholder="9876543210"
                    />
                  </div>
                  <div className="mc-field-group">
                    <label htmlFor="mce-COLLEGE">College Name </label>
                    <input
                      type="text"
                      value=""
                      name="COLLEGE"
                      className="required"
                      id="mce-COLLEGE"
                      placeholder="Pune City College"
                    />
                  </div>
                  <div id="mce-responses" className="clear">
                    <div
                      className="response"
                      id="mce-error-response"
                      style={{ display: 'none' }}
                    />
                    <div
                      className="response"
                      id="mce-success-response"
                      style={{ display: 'none' }}
                    />
                  </div>
                  <div
                    style={{ position: 'absolute', left: '-5000px' }}
                    aria-hidden="true">
                    <input
                      type="text"
                      name="b_c70dd7220cee163ff5b3fa95d_a3cb1ebece"
                      tabIndex="-1"
                      value=""
                    />
                  </div>
                  <div className="clear">
                    <input
                      type="submit"
                      value="Submit"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="college-signup__contact">
              <p>For queries, contact us:</p>
              <p>
                <a href="mailto:ridhant@fitato.fit">ridhant@fitato.fit</a>
                <br />
                <a href="tel:+919764126961">+91 9764126961</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
    <script
      dangerouslySetInnerHTML={{
        __html: `new SmoothScroll('a[href*="#"]', {updateURL: false,easing: 'easeInOutCubic'});`,
      }}
    />
  </>
);

export default CollegePage;
