/* eslint-disable react/no-danger */
import React from 'react';
import { withPrefix } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from 'components/index-app';
import { Hero, Be, Get, Do, Need, CTA } from 'css/be-a-social-media-wizard';

const SocialMediaWizardPage = () => (
  <>
    <Layout>
      <Helmet title="Represent Fitato On You Campus | Fitato Social Wizard">
        <meta
          name="description"
          content="If you are passionate about leading a healthy lifestyle and are a social buff, join us as a Social Wizard. Lead the Fitness revolution on your campus."
        />
        <meta
          itemProp="name"
          content="Represent Fitato On You Campus | Fitato Social Wizard"
        />
        <meta
          itemProp="description"
          content="If you are passionate about leading a healthy lifestyle and are a social buff, join us as a Social Wizard. Lead the Fitness revolution on your campus."
        />
        <meta
          name="twitter:title"
          content="Represent Fitato On You Campus | Fitato Social Wizard"
        />
        <meta
          name="twitter:description"
          content="If you are passionate about leading a healthy lifestyle and are a social buff, join us as a Social Wizard. Lead the Fitness revolution on your campus."
        />
        <meta
          property="og:title"
          content="Represent Fitato On You Campus | Fitato Social Wizard"
        />
        <meta
          property="og:description"
          content="If you are passionate about leading a healthy lifestyle and are a social buff, join us as a Social Wizard. Lead the Fitness revolution on your campus."
        />
      </Helmet>
      <Hero>
        <div className="container">
          <img
            src={withPrefix(
              '/static/social-media-wizard/fitato-social-wizard.png',
            )}
            alt="fitato social media wizard"
          />
          <div className="content">
            <h1 className="italic white">
              Become a
              <br />
              <span className="yellow">#FitatoSocialWizard</span>
            </h1>
            <p className="white">Be The Social Media Star On Your Campus</p>
            <a href="#signUp" className="button button-inverted">
              Sign Up
            </a>
          </div>
        </div>
      </Hero>
      <Be>
        <div className="container">
          <h2 className="italic white">
            Would you like to be a&nbsp;
            <br />
            <span className="yellow">#FitatoSocialWizard?</span>
          </h2>
          <p className="white">
            Fitato is a fitness membership that is revolutionizing the way
            people in Pune think about fitness. And we want you to help us bring
            this revolution to your college! If you’re deeply passionate about
            fitness and see yourself as a changemaker - hop on this journey with
            us. As a Fitato Social Wizard- you’ll get exclusive access to
            merchandise, cool parties and you’ll get to be the face of fitness
            in your college and on social media.
          </p>
        </div>
      </Be>
      <Get>
        <div className="container">
          <h2 className="italic white">What will you get?</h2>
          <div className="items">
            <div className="item">
              <img
                src={withPrefix(
                  '/static/social-media-wizard/free-fitato-membership.png',
                )}
                alt="free fitato membership"
              />
              <h3>Free Fitato Membership</h3>
              <p>For all Fitato Social Wizards</p>
            </div>
            <div className="item">
              <img
                src={withPrefix(
                  '/static/social-media-wizard/your-due-share.png',
                )}
                alt="your due share"
              />
              <h3>Your Due Share</h3>
              <p>Monthly Stipends for top three performers</p>
            </div>
            <div className="item">
              <img
                src={withPrefix('/static/social-media-wizard/resume-boost.png')}
                alt="resume boost"
              />
              <h3>Résumé Boost</h3>
              <p>An experience letter to credit your work</p>
            </div>
            <div className="item">
              <img
                src={withPrefix(
                  '/static/social-media-wizard/recommendation-letter.png',
                )}
                alt="recommendation letter"
              />
              <h3>Letter Of Recommendation</h3>
              <p>Additional letters for top performers</p>
            </div>
            <div className="item">
              <img
                src={withPrefix(
                  '/static/social-media-wizard/pre-placement-offer.png',
                )}
                alt="pre-placement offer"
              />
              <h3>Pre-Placement Offer</h3>
              <p>Show us your worth and be hired</p>
            </div>
            <div className="item">
              <img
                src={withPrefix(
                  '/static/social-media-wizard/free-fitato-merchandise.png',
                )}
                alt="free fitato merchandise"
              />
              <h3>Free Fitato Merchandise</h3>
              <p>Cool T-shirts, gym bags, bands, badges, sippers and more</p>
            </div>
          </div>
        </div>
      </Get>
      <Do>
        <div className="container">
          <h2 className="white italic">What would you do?</h2>
          <div className="items">
            <div className="item">
              <h3 className="red">Expand the Fitness Revolution Offline</h3>
              <p>
                We want you to help us help your college mates adopt a fitter
                lifestyle. The more people you bring in, the bigger the cause
                becomes! You would be in charge of getting more and more people
                to know about us and join our revolution of providing fitness
                freedom that comes with a Fitato membership.
              </p>
            </div>
            <div className="item">
              <h3 className="red">Lead the Fitness Revolution Online</h3>
              <p>
                We want you to help us spread the idea of making fitness a
                priority in their lifestyle. You would be our social media
                influencer and lead the #fitato campaign across social media
                platforms by inspiring people to stay fit.
              </p>
            </div>
          </div>
        </div>
      </Do>
      <Need>
        <div className="container">
          <h2 className="italic white">
            What do you need to be a&nbsp;
            <br />
            <span className="yellow">#FitatoSocialWizard?</span>
          </h2>
          <p className="white">
            All you need is a strong passion for fitness and a desire to make
            people’s lives healthier. Needless to say, you must still be in
            college. You must be active on social media, especially Facebook and
            Instagram and have a good reach.
          </p>
        </div>
      </Need>
      <CTA id="signUp">
        <div className="container">
          <h2 className="italic white">
            So, you think you have what it takes?
            <br />
            <span className="yellow">Sign up now!</span>
          </h2>
          <div id="mc_embed_signup" className="form">
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
                  <label htmlFor="mce-FNAME">
                    Name
                    <input
                      type="text"
                      name="FNAME"
                      className="required"
                      id="mce-FNAME"
                      placeholder="John Doe"
                    />
                  </label>
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL">
                    Email Address
                    <input
                      type="email"
                      name="EMAIL"
                      className="required email"
                      id="mce-EMAIL"
                      placeholder="name@example.com"
                    />
                  </label>
                </div>
                <div className="mc-field-group size1of2">
                  <label htmlFor="mce-PHONE">
                    Phone Number
                    <input
                      type="text"
                      name="PHONE"
                      className="required"
                      id="mce-PHONE"
                      placeholder="9876543210"
                    />
                  </label>
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-COLLEGE">
                    College Name
                    <input
                      type="text"
                      name="COLLEGE"
                      className="required"
                      id="mce-COLLEGE"
                      placeholder="Pune City College"
                    />
                  </label>
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
          <div className="contact">
            <p className="white">For queries, contact us:</p>
            <p>
              <a href="mailto:ridhant@fitato.fit">ridhant@fitato.fit</a>
              <br />
              <a href="tel:+919764126961">+91 9764126961</a>
            </p>
          </div>
        </div>
      </CTA>
    </Layout>
    <script
      dangerouslySetInnerHTML={{
        __html: `new SmoothScroll('a[href*="#"]', {updateURL: false,easing: 'easeInOutCubic'});`,
      }}
    />
  </>
);

export default SocialMediaWizardPage;
