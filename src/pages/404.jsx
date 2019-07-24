import React from 'react';
import MetaTitleDescription from 'partials/MetaTitleDescription';
import { Link, withPrefix } from 'gatsby';
import Layout from 'components/index';

const NotFoundPage = () => (
  <Layout>
    <MetaTitleDescription
      title="404 - Page Not Found - Fitato"
      description="This is just a 404 - Page Not Found page."
    />
    <div className="page-404">
      <div className="container">
        <img
          src={withPrefix('/static/icons/confused.svg')}
          alt="confused"
          width="100"
        />
        <h1>Hey sorry, that page you’re looking for doesn’t exist!</h1>
        <p>
          You may have stumbled on to a page that doesn’t exist, but you’re
          definitely on the right domain.
        </p>
        <p>Let&apos;s take you back to the home page!</p>
        <Link to="/" className="button">
          Fitato Home
        </Link>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
