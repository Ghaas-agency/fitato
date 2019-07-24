import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const MetaTitleDescription = ({ title, description }) => (
  <Helmet title={title}>
    <meta name="description" content={description} />
    <meta itemProp="name" content={title} />
    <meta itemProp="description" content={description} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
  </Helmet>
);

MetaTitleDescription.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default MetaTitleDescription;
