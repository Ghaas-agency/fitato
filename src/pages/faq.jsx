import React from 'react';
import Helmet from 'react-helmet';
import MetaTitleDescription from 'partials/MetaTitleDescription';
import Layout from '../components/index-app';
import FAQs from '../partials/FAQs/FAQs';
import { getFaqs } from '../utils/contentProvider';
import '../css/faq.css';

const FAQPage = () => (
  <Layout>
    <MetaTitleDescription
      title="Frequently Asked Questions | Fitato"
      description="Resolve your doubts related to registrations, memberships, pass activation, how it works, facility queries and pass types."
    />
    <Helmet>
      <link rel="canonical" href="https://www.fitato.fit/faqs/" />
    </Helmet>
    <div
      className="faq-page"
      style={{ paddingTop: '50px', paddingBottom: '50px' }}>
      <div className="container">
        <h1>Frequently Asked Questions</h1>
        <p>Let&apos;s help you step by step.</p>
        <FAQs data={getFaqs} />
      </div>
    </div>
  </Layout>
);

export default FAQPage;
