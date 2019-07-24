import React from 'react';
import Helmet from 'react-helmet';
import MetaTitleDescription from 'partials/MetaTitleDescription';
import Layout from '../components/index-app';
import MCForm from '../partials/MailChimpForm';
import SocialLinks from '../partials/SocialLinks';

const ContactPage = () => (
  <Layout>
    <MetaTitleDescription
      title="Contact Us | Fitato"
      description="The Fitato Team is always here to help you out. Simply drop in your details and we'll get in touch ASAP."
    />
    <Helmet>
      <link rel="canonical" href="https://www.fitato.fit/contact-us/" />
    </Helmet>
    <div className="contact-page align-center">
      <div className="container">
        <h1>Get in Touch With Us - Available 24/7</h1>
        <div className="contact-page-form">
          <p>
            We’re always here, burning the midnight oil. If you have any
            queries/questions or even need yourself a workout partner, talk to
            us. Just put in your details and we’ll get back to you. You can even
            call us on the numbers listed below!
          </p>
          <MCForm formClass="f-cf-contact" />
        </div>
        <ul className="footer-ul">
          <li>
            <a href="mailto:connect@fitato.fit">connect@fitato.fit</a>
          </li>
          <li>
            <p>+91 8448448546</p>
          </li>
        </ul>
        <SocialLinks cname="footer-social" />
      </div>
    </div>
  </Layout>
);

export default ContactPage;
