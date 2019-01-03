import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/index'

const ThankYouPage = () => (
  <Layout>
    <div className="thank-you-page">
      <Helmet
        title="Thank You for Getting in Touch"
      >
        <meta name="description" content="Thank you for contact us. We'll get back to you soon." />
        <meta itemprop="name" content="Thank You for Getting in Touch"/>
        <meta itemprop="description" content="Thank you for contact us. We'll get back to you soon."/>
        <meta name="twitter:title" content="Thank You for Getting in Touch"/>
        <meta name="twitter:description" content="Thank you for contact us. We'll get back to you soon."/>
        <meta property="og:title" content="Thank You for Getting in Touch"/>
        <meta property="og:description" content="Thank you for contact us. We'll get back to you soon."/>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="container">
        <h1>Thank You for Getting in Touch With Us!</h1>
        <p>We appreciate you contacting us. We will get in touch with you shortly.</p>
        <p>In the meantime, you can check out the following:</p>
        <ul>
          <li><Link to="/faqs/">Frequently Asked Questions (FAQ)</Link></li>
          <li><a href="http://blog.fitato.fit">Our Blog</a></li>
          <li><Link to="/partners/">Locate a Fitato Partner Facility near you</Link></li>
        </ul>
        <p>Have a great day!</p>
      </div>
    </div>
  </Layout>
)

export default ThankYouPage
