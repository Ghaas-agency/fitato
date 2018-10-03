import React from 'react'
import Helmet from 'react-helmet'
import Plans from '../partials/Plans'
import Layout from '../components/index'

const PricingPage = () => (
  <Layout>
    <div className="pricing-page">
      <Helmet
        title="Fitato Pass Pricing | Choose Your Pass Plan"
      >
        <meta name="description" content="A Fitato Pass gives you access to multiple fitness facilities and activities. Choose Your preferred Pass. Choice, control & convenience for your health goals." />
      </Helmet>
      <Plans tag="h1" />
    </div>
  </Layout>
)

export default PricingPage
