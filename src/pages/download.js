import React from 'react'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby'
import Layout from '../components/index'
import AppIcons from '../partials/AppIcons'

const DownloadPage = () => (
  <Layout>
    <Helmet
      title="Fitato App For Android & iOS | Download For Free"
    >
      <meta name="description" content="Download the Fitato App. A single pass to access all our partner fitness facilities. Fitness, redefined!" />
      <meta itemprop="name" content="Fitato App For Android & iOS | Download For Free"/>
      <meta itemprop="description" content="Download the Fitato App. A single pass to access all our partner fitness facilities. Fitness, redefined!"/>
      <meta name="twitter:title" content="Fitato App For Android & iOS | Download For Free"/>
      <meta name="twitter:description" content="Download the Fitato App. A single pass to access all our partner fitness facilities. Fitness, redefined!"/>
      <meta property="og:title" content="Fitato App For Android & iOS | Download For Free"/>
      <meta property="og:description" content="Download the Fitato App. A single pass to access all our partner fitness facilities. Fitness, redefined!"/>
    </Helmet>
    <div className="download-page align-center">
      <div className="container">
        <h1>Download the Fitato App</h1>
        <p>Your single pass to access over 300 health and fitness studios. Fitness, redefined!</p>
        <AppIcons btnClass="f-ai-download" />
        <img src={withPrefix('/static/fitato-app.png')} className="download-page__preview" alt="fitato app preview"/>
      </div>
    </div>
  </Layout>
)

export default DownloadPage
