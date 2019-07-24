import React from 'react';
import MetaTitleDescription from 'partials/MetaTitleDescription';
import Plans from 'partials/Plans';
import Layout from 'components/index';
import FAQs from 'partials/FAQs/FAQs';
import { getPricingFaqs } from 'utils/contentProvider';
import PricingFaq from 'css/purchaseFitato.styled';

const PricingPage = () => (
  <Layout>
    <MetaTitleDescription
      title="Fitato Pass Pricing | Choose Your Pass Plan"
      description="A Fitato Pass gives you access to multiple fitness facilities and activities. Choose Your preferred Pass. Choice, control & convenience for your health goals."
    />
    <div className="pricing-page">
      <Plans tag="h1" />
      <PricingFaq>
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div style={{ maxWidth: 850, margin: 'auto' }}>
            <FAQs data={getPricingFaqs} />
          </div>
        </div>
      </PricingFaq>
    </div>
  </Layout>
);

export default PricingPage;
