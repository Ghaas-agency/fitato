import React from 'react';
import Helmet from 'react-helmet';
import MetaTitleDescription from 'partials/MetaTitleDescription';
import GetStarted from '../partials/GetStarted';
import FooterInfo from '../partials/FooterInfo';
import FAQs from '../partials/FAQs/FAQs';
/* import SignupPopup from '../partials/SignupPopup' */
import Layout from '../components/index';
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
    <div className="faq-page">
      <div className="container">
        <h1>Frequently Asked Questions</h1>
        <p>Let&apos;s help you step by step.</p>
        <FAQs data={getFaqs} />
      </div>
    </div>
    <GetStarted />
    <FooterInfo />
    {/* <SignupPopup /> */}
  </Layout>
);

export default FAQPage;
