import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby';

import { partnersImages } from 'utils/contentProvider';

import { Section } from './SectionPartners.styled';

const SectionPartners = ({ city }) => (
  <Section>
    <div className="container">
      <h2 className="align-center heading-underline">Our Partners</h2>
      <div className="items">
        {partnersImages[city].map((i) => (
          <img
            key={i}
            src={withPrefix(`/static/partners/logos/${i}-logo.png`)}
            alt={`${i} logo`}
          />
        ))}
      </div>
    </div>
  </Section>
);

SectionPartners.propTypes = {
  city: PropTypes.string.isRequired,
};

export default SectionPartners;
