import React from 'react';
import { Link, withPrefix } from 'gatsby';

import Layout from 'components/index';
import MetaTitleDescription from 'partials/MetaTitleDescription';
import GetStarted from 'partials/GetStarted';
import FooterInfo from 'partials/FooterInfo';

import { PartnersStyled, Menu } from 'css/partners.styled';

const PartnersPage = () => (
  <Layout>
    <MetaTitleDescription
      title="Fitato Partners"
      description="View the list of all the Fitness centers partnered with us. Everything Crossfit to MMA, Swmming to yoga, Boxing to Zumba and lot more."
    />
    <PartnersStyled>
      <div className="container">
        <h1>Fitato Partner Network</h1>
        <h2>400+ Fitness Studios | 1000+ Activities | One Pass</h2>

        <Menu>
          <Link to="/pune/" className="item">
            <h3>Pune</h3>
            <p>
              See facilities&nbsp;
              <img
                src={withPrefix('/static/icons/arrow-forward.svg')}
                alt="arrow forward"
                className="item--arrow"
              />
            </p>
            <img
              src={withPrefix('/static/icons/pune.svg')}
              alt="fitato facilities in Pune"
              className="item--img"
            />
          </Link>
          <Link to="/hyderabad/" className="item">
            <h3>Hyderabad</h3>
            <p>
              See facilities&nbsp;
              <img
                src={withPrefix('/static/icons/arrow-forward.svg')}
                alt="arrow forward"
                className="item--arrow"
              />
            </p>
            <img
              src={withPrefix('/static/icons/hyderabad.svg')}
              alt="fitato facilities in Hyderabad"
              className="item--img"
            />
          </Link>
        </Menu>
      </div>
    </PartnersStyled>
    <GetStarted />
    <FooterInfo />
  </Layout>
);

export default PartnersPage;
