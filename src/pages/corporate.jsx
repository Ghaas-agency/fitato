/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link, withPrefix } from 'gatsby';
import MetaTitleDescription from 'partials/MetaTitleDescription';
import Layout from 'components/index';
import { SocialLinks, ContactLinks, CurrentlyOperatingIn } from 'partials';
import {
  WorkplaceIntro,
  WorkplaceAbout,
  WorkplaceAdvantage,
  WorkplaceWellness,
  WorkplaceClasses,
  WorkplaceClients,
  WorkplaceCTA,
} from 'css/corporate.styled';

const Form = () => (
  <div id="mc_embed_signup" className="form">
    <form
      action="https://fit.us18.list-manage.com/subscribe/post?u=c70dd7220cee163ff5b3fa95d&amp;id=13392e4199"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
      noValidate>
      <div id="mc_embed_signup_scroll">
        <div className="fields">
          <div className="mc-field-group">
            <label htmlFor="mce-FULLNAME">Your Name </label>
            <input
              type="text"
              name="FULLNAME"
              className="required"
              id="mce-FULLNAME"
              placeholder="John Doe"
            />
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-CNAME">Company Name </label>
            <input
              type="text"
              name="CNAME"
              className="required"
              id="mce-CNAME"
              placeholder="Doe Corp."
            />
          </div>
          <div className="mc-field-group size1of2">
            <label htmlFor="mce-PHONE">Phone Number </label>
            <input
              type="text"
              name="PHONE"
              className="required"
              id="mce-PHONE"
              placeholder="9876543210"
            />
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">Business Email </label>
            <input
              type="email"
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
              placeholder="name@company.com"
            />
          </div>
          <div className="mc-field-group size1of2">
            <label htmlFor="mce-TEAMSIZE">Team Size </label>
            <input
              type="number"
              name="TEAMSIZE"
              className="required"
              id="mce-TEAMSIZE"
              placeholder="15"
            />
          </div>
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
            name="b_c70dd7220cee163ff5b3fa95d_13392e4199"
            tabIndex="-1"
          />
        </div>
        <div className="clear">
          <input
            type="submit"
            value="Get in touch"
            style={{ marginLeft: '0' }}
            name="subscribe"
            id="mc-embedded-subscribe"
            className="button"
          />
        </div>
      </div>
    </form>
  </div>
);

const WorkplacePage = () => (
  <Layout style={{ overflow: 'hidden' }} hideOfferPopup>
    <MetaTitleDescription
      title="Workplace Wellness Programs | Fitato"
      description="Corporate Wellness Programs for your workplace, brought to you by Fitato. Get customized wellness programs for your team’s health and fitness needs."
    />
    <WorkplaceIntro>
      <div className="container">
        <div className="content">
          <h1 className="red">
            <span style={{ fontSize: '0.95em' }}>Give Your Employees</span>
            <br />
            The Gift Of Fitness And Well-Being
          </h1>
          <p>Try Corporate Wellness Solutions For The New Age Workplace</p>
          <Form />
          {/* <button
              type="button"
              className="button"
              onClick={() => setShowModal(true)}
              style={{ marginLeft: '0' }}>
              Know More
            </button> */}
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
            flexibility in fitness by offering a single membership to the best
            gyms and fitness studios in the city. With that, one could enjoy
            yoga one day, go for a swim the other and trek the next day.
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
              Fitato allows users to choose a fitness activity of their choice,
              at a facility they like for a time slot of their convenience.
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
              fitness events like treks, go-karting and so much more with the
              fun-loving Fitato community.
            </p>
          </div>
        </div>
      </div>
    </WorkplaceAdvantage>

    <WorkplaceWellness>
      <div className="container align-center">
        <h2 className="white">Our Corporate Wellness Program</h2>
        <p className="white intro">
          We bring to you a holistic wellness program for your organisation
          which not only allows your employees to access multiple fitness
          facilities across the city but also lets you organise in-house health
          and fitness sessions for them.
        </p>
        <div className="benefits">
          <h3 className="uppercase align-center">Program Benefits</h3>
          <div className="benefits-items">
            <div className="content">
              <h4>Fitato Pass For All</h4>
              <p>
                Each an every employee at your organisation will get a
                single-access pass to all the best gyms and fitness studios in
                the city. So, you don’t have to worry about where your employee
                stays, he will find a Fitato partner facility nearby.
              </p>
            </div>
            <div className="img">
              <img
                src={withPrefix('/static/workplace/fitato-pass-for-all.png')}
                alt="fitato pass for all"
              />
            </div>
          </div>
          <div className="benefits-items">
            <div className="img">
              <img
                src={withPrefix(
                  '/static/workplace/in-house-wellness-activities.png',
                )}
                alt="In-house Wellness Activities"
              />
            </div>
            <div className="content">
              <h4>In-house Wellness Activities</h4>
              <p>
                Choose from a host of fitness activities that we organise at
                your office campus at a time of your convenience for your
                employees to promote employee fitness as well as employee
                relations.
              </p>
            </div>
          </div>
          <div className="benefits-items">
            <div className="content">
              <h4>Your Fitness Dashboard</h4>
              <p>
                A single dashboard access that tracks and analyses all the
                fitness activities that each of your employees takes part in.
              </p>
            </div>
            <div className="img">
              <img
                src={withPrefix('/static/workplace/your-fitness-dashboard.png')}
                alt="Your Fitness Dashboard"
              />
            </div>
          </div>
        </div>
        {/* <button
            type="button"
            onClick={() => setShowModal(true)}
            className="button">
            Get in touch with us
          </button> */}
      </div>
    </WorkplaceWellness>

    <WorkplaceClasses>
      <div className="container">
        <h2>Variety of On-Demand Classes</h2>
        <div className="items">
          {[
            { id: 1, title: 'Yoga' },
            { id: 2, title: 'Self-Defence' },
            { id: 3, title: 'MMA' },
            { id: 4, title: 'Zumba' },
            { id: 5, title: 'Meditation' },
            { id: 6, title: 'Aqua Zumba Event' },
            { id: 7, title: 'Capoeira' },
            { id: 8, title: 'Drumcircles' },
            { id: 9, title: 'Kho Kho' },
            { id: 10, title: 'HIIT' },
            { id: 11, title: 'Functional Training' },
            { id: 12, title: 'Bokwa' },
            { id: 13, title: 'Piloxing' },
            { id: 14, title: 'Diet Workshop' },
            { id: 15, title: 'Dance' },
            { id: 16, title: 'Aerobics' },
          ].map((i) => (
            <div key={i.id} className="item">
              <p>{i.title}</p>
            </div>
          ))}
        </div>
      </div>
    </WorkplaceClasses>

    <CurrentlyOperatingIn redBg />

    <WorkplaceClients>
      <div className="container">
        <h2>Our Clients</h2>
        <div className="items">
          <div className="item">
            <img src={withPrefix('/static/workplace/ola-cabs.svg')} alt="ola" />
          </div>
          <div className="item">
            <img
              src={withPrefix('/static/workplace/infosys.png')}
              alt="infosys"
            />
          </div>
          <div className="item">
            <img src={withPrefix('/static/workplace/uber.png')} alt="uber" />
          </div>
          <div className="item">
            <img src={withPrefix('/static/workplace/tieto.png')} alt="tieto" />
          </div>
          <div className="item">
            <img
              src={withPrefix('/static/workplace/zocdoc.png')}
              alt="zocdoc"
            />
          </div>
          <div className="item">
            <img
              src={withPrefix('/static/workplace/bajaj-finserv.png')}
              alt="bajaj finserv"
            />
          </div>
        </div>
      </div>
    </WorkplaceClients>

    <WorkplaceCTA>
      <div className="container">
        <div className="content">
          <h2>
            The Corporate Wellness Program
            <br />
            You Need At Your Workplace
          </h2>
          <p>Corporate Wellness Solutions For The New Age Workplace</p>
          <Form />
        </div>
      </div>
    </WorkplaceCTA>

    {/* <Modal show={showModal} onClick={() => setShowModal(false)}>
        <div className="content">
          <div className="title">
            <h3>Learn More About the Fitato Corporate Program</h3>
          </div>
          <button
            type="button"
            className="button-unstyled modal-close"
            onClick={() => setShowModal(false)}>
            <img
              src={withPrefix('/static/icons/close-dark.svg')}
              alt="close icon"
            />
          </button>
          <div className="form-container">
            <small>
              Please fill out this form, and we&apos;ll get in touch shortly.
            </small>
            <Form />
          </div>
        </div>
      </Modal> */}

    <footer className="footer-info">
      <div className="container">
        <div className="footer-info__col1">
          <img
            src={withPrefix('/static/fitato-logo-colored.svg')}
            alt="fitato"
            style={{ width: '120px' }}
          />
          <p>
            The Fitato for Workplace program is a corporate health and wellness
            program designed specially for the modern Indian workplace. Diet
            plans, workout plans, team building exercises - it&apos;s the only
            wellness membership your office will ever need!
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
    </footer>
  </Layout>
);

export default WorkplacePage;
