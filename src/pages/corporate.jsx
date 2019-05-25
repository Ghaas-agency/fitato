import React from 'react';
import { Link, withPrefix } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from 'components/index';
import {
  AppIcons,
  SocialLinks,
  ContactLinks,
  WorkplaceMCForm,
  CurrentlyOperatingIn,
} from 'partials';
import Main, {
  WorkplaceIntro,
  WorkplaceAbout,
  WorkplaceAdvantage,
  WorkplaceWellness,
} from 'css/corporate.styled';

const WorkplacePage = () => (
  <Layout>
    <Helmet title="Workplace Wellness Programs | Fitato">
      <meta
        name="description"
        content="Corporate Wellness Programs for your workplace, brought to you by Fitato. Get customized wellness programs for your team’s health and fitness needs."
      />
      <meta itemProp="name" content="Workplace Wellness Programs | Fitato" />
      <meta
        itemProp="description"
        content="Corporate Wellness Programs for your workplace, brought to you by Fitato. Get customized wellness programs for your team’s health and fitness needs."
      />
      <meta
        name="twitter:title"
        content="Workplace Wellness Programs | Fitato"
      />
      <meta
        name="twitter:description"
        content="Corporate Wellness Programs for your workplace, brought to you by Fitato. Get customized wellness programs for your team’s health and fitness needs."
      />
      <meta
        property="og:title"
        content="Workplace Wellness Programs | Fitato"
      />
      <meta
        property="og:description"
        content="Corporate Wellness Programs for your workplace, brought to you by Fitato. Get customized wellness programs for your team’s health and fitness needs."
      />
    </Helmet>
    <Main>
      <div className="workplace-page">
        <WorkplaceIntro>
          <div className="container">
            <div className="content">
              <h1 className="uppercase italic">Fitato For Workplace</h1>
              <p>Corporate Wellness Solutions For The New Age Workplace</p>
              <span className="button" style={{ marginLeft: '0' }}>
                Know More
              </span>
            </div>
          </div>
        </WorkplaceIntro>

        <WorkplaceAbout>
          <div className="container">
            <div className="content">
              <h2>About Us</h2>
              <p>
                Fitato is a hyper-local, tech-enabled fitness solution presently
                active in the city of Pune and Hyderabad. Our aim is to provide
                flexibility in fitness by offering a single membership to the
                best gyms and fitness studios in the city. With that, one could
                enjoy yoga one day, go for a swim the other and trek the next
                day.
              </p>
            </div>
          </div>
        </WorkplaceAbout>

        <WorkplaceAdvantage>
          <div className="container align-center">
            <h2>The Fitato Advantage</h2>
            <div className="items">
              <div className="item">
                <img
                  src={withPrefix(
                    '/static/workplace/fitato-advantage-no-restrictions.jpg',
                  )}
                  alt="fitness no restrictions"
                />
                <h3>No Restrictions</h3>
                <p>
                  Fitato allows users to choose a fitness activity of their
                  choice, at a facility they like for a time slot of their
                  convenience.
                </p>
              </div>
              <div className="item">
                <img
                  src={withPrefix(
                    '/static/workplace/fitato-advantage-fitness-community.jpg',
                  )}
                  alt="fitness community"
                />
                <h3>Fitness Community</h3>
                <p>
                  Users can engage in Fitato Exclusive community workouts and
                  fitness events like treks, go-karting and so much more with
                  the fun-loving Fitato community.
                </p>
              </div>
            </div>
          </div>
        </WorkplaceAdvantage>

        <WorkplaceWellness>
          <div className="container align-center">
            <h2>Our Corporate Wellness Program</h2>
            <p>
              Fitato is a hyper-local, tech-enabled fitness solution presently
              active in the city of Pune and Hyderabad. Our aim is to provide
              flexibility in fitness by offering a single membership to the best
              gyms and fitness studios in the city. With that, one could enjoy
              yoga one day, go for a swim the other and trek the next day.
            </p>
          </div>
        </WorkplaceWellness>

        <div className="workplace-section-classes">
          <div className="container">
            <h2>Variety of On-Demand Classes</h2>
            <div className="workplace-section-classes__items">
              <div className="workplace-section-classes__item">
                <p>Yoga</p>
              </div>
              <div className="workplace-section-classes__item">
                <p>Self-Defence</p>
              </div>
              <div className="workplace-section-classes__item">
                <p>MMA</p>
              </div>
              <div className="workplace-section-classes__item">
                <p>Zumba</p>
              </div>
              <div className="workplace-section-classes__item">
                <p>Meditation</p>
              </div>
              <div className="workplace-section-classes__item">
                <p>Aqua Zumba Event</p>
              </div>
              <div className="workplace-section-classes__item">
                <p>Capoeira</p>
              </div>
              <div className="workplace-section-classes__item">
                <p>Drumcircles</p>
              </div>
              <div className="workplace-section-classes__item">
                <p>Kho Kho</p>
              </div>
              <div className="workplace-section-classes__item">
                <p>HIIT</p>
              </div>
              <div className="workplace-section-classes__item">
                <p>Functional Training</p>
              </div>
              <div className="workplace-section-classes__item">
                <p>Bokwa</p>
              </div>
              <div className="workplace-section-classes__item">
                <p>Piloxing</p>
              </div>
              <div className="workplace-section-classes__item">
                <p>Diet Workshop</p>
              </div>
              <div className="workplace-section-classes__item">
                <p>Dance</p>
              </div>
              <div className="workplace-section-classes__item">
                <p>Aerobics</p>
              </div>
            </div>
          </div>
        </div>

        <CurrentlyOperatingIn />

        <div className="workplace-section-clients">
          <div className="container">
            <h2>Our Clients</h2>
            <div className="workplace-section-clients__items">
              <div className="workplace-section-clients__item">
                <img
                  src={withPrefix('/static/workplace/ola-cabs.svg')}
                  alt="ola"
                />
              </div>
              <div className="workplace-section-clients__item">
                <img
                  src={withPrefix('/static/workplace/infosys.png')}
                  alt="infosys"
                />
              </div>
              <div className="workplace-section-clients__item">
                <img
                  src={withPrefix('/static/workplace/uber.png')}
                  alt="uber"
                />
              </div>
              <div className="workplace-section-clients__item">
                <img
                  src={withPrefix('/static/workplace/tieto.png')}
                  alt="tieto"
                />
              </div>
              <div className="workplace-section-clients__item">
                <img
                  src={withPrefix('/static/workplace/zocdoc.png')}
                  alt="zocdoc"
                />
              </div>
              <div className="workplace-section-clients__item">
                <img
                  src={withPrefix('/static/workplace/bajaj-finserv.png')}
                  alt="bajaj finserv"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="workplace-section-happy">
          <div className="container">
            <h2>Testimonials</h2>
            <p>
              <em>
                &quot;Our team has loved such an innovative and personalised
                approach to wellness. It gives us all the opportunity to go to
                new styles of fitness we&apos;ve been wanting to try for a
                while. Best of all, many of our employees use Fitato to stay
                active together.&quot;
              </em>
            </p>
          </div>
        </div>

        <div className="workplace-section-plans">
          <div className="container">
            <h2>Our Membership Plan</h2>
            <div className="workplace-section-plans__items">
              {/* <div className="workplace-section-plans__item">
                <div className="workplace-section-plans__item--title">
                  <h3>Individual Employee Plan</h3>
                </div>
                <div className="workplace-section-plans__item--content">
                  <p>Memberships for individual employees</p>
                  <p>Complete access to the entire Fitato partners network</p>
                  <p><strong>Access 250+ Gyms &amp; Fitness Studios</strong></p>
                  <span className="button button-fluid">Get Started</span>
                </div>
              </div> */}
              <div className="workplace-section-plans__item">
                <div className="workplace-section-plans__item--title">
                  <h3>Corporate All Access Pass</h3>
                </div>
                <div className="workplace-section-plans__item--content">
                  <p>Premium Fitato access and a complete wellness plan</p>
                  <p>Monthly fitness/wellness sessions in the office campus</p>
                  <p>Dashboard for tracking and analytics</p>
                  <p>
                    <strong>
                      Additional Nutrition &amp; Wellness Sessions
                    </strong>
                  </p>
                  <span className="button button-fluid">Learn More</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="workplace-section-app">
          <div className="container">
            <div className="workplace-section-app__item">
              <h2>Health &amp; Fitness Was Never This Easy</h2>
              <p>
                Become a Fitato member, choose your next workout from many
                categories and reserve the activity — all through the Fitato
                app.
              </p>
              <AppIcons />
            </div>
            <div className="workplace-section-app__item align-center">
              <img
                src={withPrefix('/static/fitato-app.png')}
                className="workplace-section-app__item--img"
                alt="fitato smartphone app"
              />
            </div>
          </div>
        </div>

        <div className="workplace-section-cta">
          <div className="container">
            <h2>
              The Corporate Wellness Program
              <br />
              You Need At Your Workplace
            </h2>
            <small>
              Please fill out this form, and we&apos;ll get in touch shortly.
            </small>
            <WorkplaceMCForm />
          </div>
        </div>
      </div>

      <div className="workplace-modalbg" style={{ display: 'none' }}>
        <div className="workplace-modal">
          <div className="workplace-modal__title">
            <h3>Learn More About the Fitato Corporate Program</h3>
          </div>
          <div className="modal-close">
            <img
              src={withPrefix('/static/icons/close-dark.svg')}
              alt="close icon"
            />
          </div>
          <div className="workplace-modal__form">
            <small>
              Please fill out this form, and we&apos;ll get in touch shortly.
            </small>
            <WorkplaceMCForm />
          </div>
        </div>
      </div>

      <div className="footer-info">
        <div className="container">
          <div className="footer-info__col1">
            <img
              src={withPrefix('/static/fitato-logo-colored.svg')}
              alt="fitato"
              style={{ width: '120px' }}
            />
            <p>
              The Fitato for Workplace program is a corporate health and
              wellness program designed specially for the modern Indian
              workplace. Diet plans, workout plans, team building exercises -
              it&apos;s the only wellness membership your office will ever need!
            </p>
          </div>
          <div className="footer-info__col2">
            <h4>Learn More</h4>
            <ul className="footer-ul">
              <li>
                <a
                  href="https://blog.fitato.fit"
                  target="_blank"
                  rel="noopener noreferrer">
                  Blog
                </a>
              </li>
              <li>
                <Link to="/faqs/">FAQ</Link>
              </li>
              <li>
                <Link to="/reviews/">Reviews</Link>
              </li>
              <li>
                <Link to="/privacy-policy/">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="footer-info__col3">
            <h4>Contact</h4>
            <ContactLinks cname="footer-ul" />
            <SocialLinks cname="footer-social" />
          </div>
        </div>
      </div>
    </Main>
  </Layout>
);

export default WorkplacePage;
