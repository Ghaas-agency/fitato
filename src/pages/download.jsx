import React from 'react';
import MetaTitleDescription from 'partials/MetaTitleDescription';
import { withPrefix } from 'gatsby';
import Layout from 'components/index';
import AppIcons from 'partials/AppIcons';
import MailChimpForm from 'partials/MailChimpForm';
import { IndexCallback } from 'css/index.styled';

const DownloadPage = () => (
  <Layout>
    <MetaTitleDescription
      title="Fitato App For Android & iOS | Download For Free"
      description="Download the Fitato App. A single pass to access all our partner fitness facilities. Fitness, redefined!"
    />
    <div className="download-page align-center">
      <div className="container">
        <h1>Download the Fitato App</h1>
        <p>
          Your single pass to access over 300 health and fitness studios.
          Fitness, redefined!
        </p>
        <AppIcons btnClass="f-ai-download" />
        <img
          src={withPrefix('/static/fitato-app.png')}
          className="download-page__preview"
          alt="fitato app preview"
        />
      </div>
    </div>
    <IndexCallback>
      <div className="container">
        <div className="wrapper">
          <h2>Have any queries? Speak to a Fitness Concierge</h2>
          <p>
            Fill out the form below and let us tailor a customized plan for you.
          </p>
          <div className="form">
            <MailChimpForm formClass="f-cf-index-speak" />
          </div>
        </div>
      </div>
    </IndexCallback>
  </Layout>
);

export default DownloadPage;
