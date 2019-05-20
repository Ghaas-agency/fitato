import React from 'react';
import { Link, withPrefix } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from 'components/index';
import Main from 'css/corporate.styled';
import {
  AppIcons,
  SocialLinks,
  ContactLinks,
  WorkplaceMCForm,
  CurrentlyOperatingIn,
} from 'partials';

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
        <div
          className="workplace-section-intro"
          style={{
            backgroundImage: `url('${withPrefix(
              '/static/workplace/fitato-for-workplace-bg.jpg',
            )}')`,
          }}>
          <div className="container">
            <div className="workplace-section-intro__content">
              <h1>Holistic Wellness For The New Age Workplace</h1>
              <p>
                Get the Fitato advantage for your employees and see the
                happiness, health and productivity soar!
              </p>
              <span className="button" style={{ marginLeft: '0' }}>
                Learn More
              </span>
            </div>
          </div>
        </div>

        <div className="workplace-section-onepass">
          <div className="container">
            <h2>One Pass | Limitless Fitness Options</h2>
          </div>
        </div>

        <div className="workplace-section-your">
          <div className="container">
            <h2>Your Holistic Health and Wellness Partner</h2>
            <div className="workplace-section-your__items">
              <div className="workplace-section-your__item">
                <img
                  src={withPrefix('/static/workplace/mind.svg')}
                  alt="mind"
                />
                <h3>Mentally Fit</h3>
                <p>
                  An uncluttered mind will always triumph. Our corporate
                  wellness program includes activities and exercises that boost
                  productivity, decreas stress levels, increase creativity and
                  guarantee great results. Show your employees you care with our
                  corporate wellness program.
                </p>
              </div>
              <div className="workplace-section-your__item">
                <img
                  src={withPrefix('/static/workplace/body.svg')}
                  alt="body"
                />
                <h3>Physically Fit</h3>
                <p>
                  Give your employees the gift of health! Healthier employees
                  mean less absenteeism, better performance, and faster results.
                  Employees are the most important asset in your organization
                  and your healthy, happy employees will stay with you for a
                  long, long time.
                </p>
              </div>
              <div className="workplace-section-your__item">
                <img
                  src={withPrefix('/static/workplace/community.svg')}
                  alt="community"
                />
                <h3>Socially Fit</h3>
                <p>
                  Tough times never last, tough teams do. Our workplace wellness
                  program boosts employee morale and encourages camaraderie and
                  teamwork. Happier employees support each other and work
                  towards a common goal.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="workplace-section-about">
          <div className="container">
            <h2>What is Fitato For The Workplace?</h2>
            <p>
              Fitato is a hyperlocal, tech-enabled fitness solution which is
              sweeping India by storm. Gift your employees a single membership
              pass to access the best gyms and fitness studios across the city -
              so your employees can access gyms they want, whenever and wherever
              they want.
            </p>
            <p>
              What’s more, our customized corporate plans bring you a variety of
              on-demand fitness sessions right at your workplace.
            </p>
            <p>
              This is the corporate fitness program for the new age offices!
            </p>
            <span className="button">Get in touch</span>
          </div>
        </div>

        <div className="workplace-section-employees">
          <div className="container">
            <div className="workplace-section-employees__wrapper">
              <h2 className="align-center">The Fitato Advantage</h2>
              <div className="workplace-section-employees__row">
                <div>
                  <h3>For Employees</h3>
                  <p>
                    Each and every one of your employees and team members get a
                    flexible fitness plan they’re bound to love. Customised
                    fitness options - from Yoga to MMA, Crossfit to Swimming,
                    there’s something for everybody!
                  </p>
                  <p>
                    Nothing says Employee Benefits better than a Fitato Pass.
                  </p>
                </div>
                <div className="workplace-section-employees__row--img">
                  <img
                    src={withPrefix('/static/workplace/employees.svg')}
                    alt="employee"
                  />
                </div>
              </div>
              <div className="workplace-section-employees__row">
                <div className="workplace-section-employees__row--img workplace-section-employees__row--img2">
                  <img
                    src={withPrefix('/static/workplace/employer.svg')}
                    alt="employer"
                  />
                </div>
                <div className="workplace-section-employees__row--c2">
                  <h3>For Employers</h3>
                  <p>
                    It’s very difficult to make everyone happy. And run it well!
                    Fitato For Workplaces is built for the new age workplace.
                    All the stats you need, on a single dashboard. Plus a range
                    of in-office activities you can choose from.
                  </p>
                  <p>Caring for your employees was never this easy!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="workplace-section-why">
          <div className="container">
            <h2>
              The Corporate Wellness Program
              <br />
              for the Indian Workplace
            </h2>
            <div className="workplace-section-why__items">
              <div className="workplace-section-why__item">
                <div className="workplace-section-why__item--left">
                  <img
                    src={withPrefix('/static/workplace/money.svg')}
                    alt="money"
                  />
                </div>
                <div className="workplace-section-why__item--right">
                  <p>Cost-efficient plans, perfect for organisations.</p>
                </div>
              </div>
              <div className="workplace-section-why__item">
                <div className="workplace-section-why__item--left">
                  <img
                    src={withPrefix('/static/workplace/barbell.svg')}
                    alt="barbell"
                  />
                </div>
                <div className="workplace-section-why__item--right">
                  <p>On-demand fitness for everyone in the organisation.</p>
                </div>
              </div>
              <div className="workplace-section-why__item">
                <div className="workplace-section-why__item--left">
                  <img
                    src={withPrefix('/static/workplace/face.svg')}
                    alt="face"
                  />
                </div>
                <div className="workplace-section-why__item--right">
                  <p>Variety of activities makes fitness fun.</p>
                </div>
              </div>
              <div className="workplace-section-why__item">
                <div className="workplace-section-why__item--left">
                  <img
                    src={withPrefix('/static/workplace/clock.svg')}
                    alt="clock"
                  />
                </div>
                <div className="workplace-section-why__item--right">
                  <p>Offers flexibility of time and place.</p>
                </div>
              </div>
            </div>
            <span className="button align-center">Arrange a Call Back</span>
          </div>
        </div>

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
