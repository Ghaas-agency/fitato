import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/index'
import MCForm from '../partials/MailChimpForm'
import FooterInfo from '../partials/FooterInfo'
import SocialLinks from '../partials/SocialLinks'
import ContactLinks from '../partials/ContactLinks'
import SignupPopup from '../partials/SignupPopup'

const ContactPage = () => (
  <Layout>
    <div className="contact-page align-center">
      <Helmet
        title="Contact Us | Fitato"
      >
        <meta name="description" content="The Fitato Team is always here to help you out. Simply drop in your details and we'll get in touch ASAP." />
      </Helmet>
      <div className="container">
        <h1>Get in Touch With Us - Available 24/7</h1>
        <div className="contact-page-form">
          <p>We’re always here, burning the midnight oil. If you have any queries/questions or even need yourself a workout partner, talk to us. Just put in your details and we’ll get back to you. You can even call us on the numbers listed below!</p>
          <MCForm />
        </div>
        <ContactLinks cname="footer-ul" />
        <SocialLinks cname="footer-social" />
      </div>
    </div>
    <FooterInfo />
    <SignupPopup />
  </Layout>
)

export default ContactPage
