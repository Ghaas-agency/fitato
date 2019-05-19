import React from 'react';
import { Link, withPrefix } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from 'components/index';
import {
  getIndexActivities,
  getIndexReviews,
  getIndexPartners,
  getIndexMedia,
} from 'utils/contentProvider';
import Separator from 'partials/Separator';
import FooterInfo from 'partials/FooterInfo';
import AppIcons from 'partials/AppIcons';
import MCForm from 'partials/MailChimpForm';
import DownloadSwipe from 'partials/DownloadSwipe';
import theme from 'css/theme';
import {
  IndexHero,
  IndexPass,
  IndexCommunity,
  IndexAccess,
  IndexFlexible,
  IndexJoin,
  IndexPartners,
  IndexTestimonials,
  IndexMedia,
  IndexCallback,
} from 'css/index.styled';

const Index = () => (
  <Layout>
    <Helmet title="Fitato&reg;: Fitness for the Intelligent Indian" />
    <div className="home-page">
      <IndexHero>
        <div className="container">
          <div className="content">
            <h1>
              <span
                style={{
                  color: theme.colors.red,
                  fontSize: '50%',
                  fontStyle: 'italic',
                }}>
                Welcome to your
              </span>
              <br />
              <span
                style={{
                  textTransform: 'uppercase',
                  fontStyle: 'italic',
                  fontSize: '125%',
                  fontWeight: '900',
                }}>
                Fitness Freedom
              </span>
            </h1>
            <div className="line" />
            <div className="content--text">
              <p>
                Your universal all access pass to premium gyms, studios &amp;
                exclusive Fitato community events.
              </p>
              {/* <Link to="/download/" className="button">Download the app</Link> */}
              <p
                style={{
                  color: theme.colors.red,
                  marginTop: '35px',
                  marginBottom: '10px',
                }}>
                Start here:
              </p>
              <AppIcons btnClass="f-ai-index-hero" />
            </div>
          </div>
        </div>
      </IndexHero>

      <IndexPass>
        <div className="container">
          <div className="items">
            <div className="item">
              <img
                src={withPrefix('/static/fitato-discover.jpg')}
                alt="fitato discover"
              />
            </div>
            <div className="item">
              <h2 className="italic">
                Fitness, That is
                <br />
                <span className="red">Addictive</span>
              </h2>
              <p>
                Pick from Yoga, Zumba, MMA, CrossFit, Swimming, Strength
                Training and plenty more.
              </p>
              <p>
                Workout in any of our 650+ fitness studios spread across Pune
                and Hyderabad — with one single Fitato Pass.
              </p>
              <p>Join us and be a part of our Fitness Revolution!</p>
              <Link
                to="/how-it-works/"
                className="button"
                style={{ marginLeft: '0' }}>
                Learn how it works
              </Link>
            </div>
          </div>
        </div>
      </IndexPass>

      <Separator />

      <IndexAccess>
        <div className="container">
          <div className="items">
            <div className="item">
              <h2>One Pass To Access Them All</h2>
              <div className="activities">
                {getIndexActivities().map((i) => (
                  <div key={i.id} className="activity">
                    <img src={withPrefix(i.imgSrc)} alt={i.title} />
                    <span>{i.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="item">
              <img
                src={withPrefix('/static/index/fitato-app-home.png')}
                alt="fitato app home"
              />
            </div>
          </div>
        </div>
      </IndexAccess>

      <Separator />

      <IndexFlexible>
        <div className="container">
          <h2>The Most Flexible Fitness Membership Ever</h2>
          <div className="items">
            <div className="item">
              <img
                src={withPrefix('/static/index/premium-gyms.jpg')}
                alt="premium gyms"
              />
              <h3>Premium Gyms &amp; Studios</h3>
              <p>
                Premium fitness facilities with best-in-class equipment and
                expert professionals providing 1000&apos;s of workout options.
              </p>
            </div>
            <div className="item">
              <img
                src={withPrefix('/static/index/unlimited-access-fitness.jpg')}
                alt="premium gyms"
              />
              <h3>Unlimited Access</h3>
              <p>
                Workout Anytime, Anywhere in our partner facilities all across
                Pune &amp; Hyderabad. Buy a pass and book your happy hour today!
              </p>
            </div>
            <div className="item">
              <img
                src={withPrefix('/static/index/fitness-app-access-all.jpg')}
                alt="premium gyms"
              />
              <h3>All @ Cost of One</h3>
              <p>
                Monthly &amp; Quarterly all access subscriptions to all workouts
                you love and the ones you didn&apos;t know you loved. We have it
                all.
              </p>
            </div>
          </div>
        </div>
      </IndexFlexible>

      <IndexCommunity>
        <div className="container">
          <div className="index-section-community__wrapper">
            <h2>More Than Just a Fitness Membership</h2>
            <p>
              You don&apos;t just get a fitness membership, you get a fitness
              community — The Fitato Community. Enjoy workouts, treking,
              dancing, sports, fitness, and much more together.
            </p>
            <p>Join the Fitato Community at Fitato Exclusive Events.</p>
          </div>
        </div>
      </IndexCommunity>

      <IndexJoin>
        <div className="container">
          <h2>
            Workout At The Best Fitness Studios
            <br />
            With Your Fitato Pass
          </h2>
          <p>
            Intrigued? Looking for more information on the Fitato exclusive
            events?
            <br />
            Let us arrange a call back from our team.
          </p>
          <MCForm formClass="f-cf-index-join" />
        </div>
      </IndexJoin>

      <IndexPartners>
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <h2>Our Featured Facilities</h2>
            </div>
            <div className="right">
              <div className="items">
                {getIndexPartners().map((i) => (
                  <div key={i.id} className="item">
                    <img
                      src={withPrefix(i.imgSrc)}
                      alt={i.title}
                      title={i.title}
                    />
                  </div>
                ))}
                <div className="item">
                  <p>...and many more.</p>
                </div>
              </div>
            </div>
          </div>
          <Link to="/partners/" className="button">
            Explore Facilities
          </Link>
        </div>
      </IndexPartners>

      <Separator />

      <IndexTestimonials>
        <div className="container">
          <h2>Our Customers Fell In Love With Us</h2>
          <div className="items">
            {getIndexReviews().map((i) => (
              <div key={i.id} className="item">
                <img
                  src={withPrefix(i.imgSrc)}
                  alt={i.name}
                  className="item--img"
                />
                <h4>{i.name}</h4>
                <p className="item--review">
                  <em>{i.content}</em>
                </p>
              </div>
            ))}
          </div>
          <Link
            to="/reviews/"
            className="button-inverted"
            style={{ marginTop: '20px' }}>
            Read more reviews
          </Link>
        </div>
      </IndexTestimonials>

      <Separator />

      <IndexMedia>
        <div className="container">
          {/* <div className="left">
            <h2>In The News</h2>
          </div> */}
          <div className="right">
            <div className="items">
              {getIndexMedia().map((i) => (
                <a
                  key={i.id}
                  href={i.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow">
                  <img
                    src={withPrefix(i.imgSrc)}
                    alt={i.title}
                    title={i.title}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </IndexMedia>

      <section style={{ background: 'none' }}>
        <DownloadSwipe btnClass="f-ai-index-download" />
      </section>

      <IndexCallback>
        <div className="container">
          <div className="wrapper">
            <h2>Still Not Sure? Speak to a Fitness Concierge</h2>
            <p>
              Fill out the form below and let us tailor a customized plan for
              you.
            </p>
            <div className="form">
              <MCForm formClass="f-cf-index-speak" />
            </div>
          </div>
        </div>
      </IndexCallback>

      <FooterInfo />
    </div>
    {/* <SignupPopup /> */}
  </Layout>
);

export default Index;
