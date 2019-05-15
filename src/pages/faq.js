import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/index-app';
import FAQs from '../partials/FAQs/FAQs';
import { getFaqs } from '../utils/contentProvider';
import '../css/faq.css';

const FAQPage = () => (
  <Layout>
    <Helmet title="Frequently Asked Questions | Fitato">
      <meta
        name="description"
        content="Resolve your doubts related to registrations, memberships, pass activation, how it works, facility queries and pass types."
      />
      <meta itemProp="name" content="Frequently Asked Questions | Fitato" />
      <meta
        itemProp="description"
        content="Resolve your doubts related to registrations, memberships, pass activation, how it works, facility queries and pass types."
      />
      <meta
        name="twitter:title"
        content="Frequently Asked Questions | Fitato"
      />
      <meta
        name="twitter:description"
        content="Resolve your doubts related to registrations, memberships, pass activation, how it works, facility queries and pass types."
      />
      <meta property="og:title" content="Frequently Asked Questions | Fitato" />
      <meta
        property="og:description"
        content="Resolve your doubts related to registrations, memberships, pass activation, how it works, facility queries and pass types."
      />
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
