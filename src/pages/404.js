import React from 'react'
import Helmet from 'react-helmet'
import { Link, withPrefix } from 'gatsby'
import Layout from '../components/index'

const NotFoundPage = () => (
  <Layout>
    <div className="page-404">
      <Helmet
        title="404 - Page Not Found - Fitato"
      >
        <meta name="description" content="This is just a 404 - Page Not Found page." />
        <meta itemprop="name" content="404 - Page Not Found - Fitato"/>
        <meta itemprop="description" content="This is just a 404 - Page Not Found page."/>
        <meta name="twitter:title" content="404 - Page Not Found - Fitato"/>
        <meta name="twitter:description" content="This is just a 404 - Page Not Found page."/>
        <meta property="og:title" content="404 - Page Not Found - Fitato"/>
        <meta property="og:description" content="This is just a 404 - Page Not Found page."/>
      </Helmet>
      <div className="container">
        <img src={withPrefix('/static/icons/confused.svg')} alt="confused" width="100"/>
        <h1>Hey sorry, that page you’re looking for doesn’t exist!</h1>
        <p>You may have stumbled on to a page that doesn’t exist, but you’re definitely on the right domain.</p>
        <p>Let&apos;s take you back to the home page!</p>
        <Link to="/" className="button">Fitato Home</Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
