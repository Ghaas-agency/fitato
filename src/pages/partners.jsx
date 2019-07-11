import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby';
import { Accordion, AccordionItem } from 'react-sanfona';
import { PartnersStyled, Menu, LocationTitle } from 'css/partners.styled';
import { getPartners } from 'utils/contentProvider';
import Layout from 'components/index';
import GetStarted from 'partials/GetStarted';
import FooterInfo from 'partials/FooterInfo';

const { pune, hyderabad } = getPartners();

const PartnersPage = () => (
  <Layout>
    <Helmet title="Fitato Partners">
      <meta
        name="description"
        content="View the list of all the Fitness centers partnered with us. Everything Crossfit to MMA, Swmming to yoga, Boxing to Zumba and lot more."
      />
      <meta itemProp="name" content="Fitato Partners" />
      <meta
        itemProp="description"
        content="View the list of all the Fitness centers partnered with us. Everything Crossfit to MMA, Swmming to yoga, Boxing to Zumba and lot more."
      />
      <meta name="twitter:title" content="Fitato Partners" />
      <meta
        name="twitter:description"
        content="View the list of all the Fitness centers partnered with us. Everything Crossfit to MMA, Swmming to yoga, Boxing to Zumba and lot more."
      />
      <meta property="og:title" content="Fitato Partners" />
      <meta
        property="og:description"
        content="View the list of all the Fitness centers partnered with us. Everything Crossfit to MMA, Swmming to yoga, Boxing to Zumba and lot more."
      />
    </Helmet>
    <PartnersStyled>
      <div className="container">
        <h1>Fitato Partner Network</h1>
        <h2>300+ Fitness Studios | 1000+ Activities | One Pass</h2>

        <Menu>
          <a href="#pune" className="item">
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
          </a>
          <a href="#hyderabad" className="item">
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
          </a>
        </Menu>

        <LocationTitle id="pune">Facilities in Pune</LocationTitle>

        <Accordion allowMultiple>
          {pune.map((i) => (
            <AccordionItem
              key={i.id}
              title={i.title}
              className="accordion-item"
              expandedClassName="accordion-item-active">
              <img
                src={withPrefix(i.src)}
                alt={`Fitato Partners in ${i.title}, Pune`}
              />
            </AccordionItem>
          ))}
        </Accordion>

        <LocationTitle id="hyderabad">Facilities in Hyderabad</LocationTitle>

        <Accordion allowMultiple>
          {hyderabad.map((i) => (
            <AccordionItem
              key={i.id}
              title={i.title}
              className="accordion-item"
              expandedClassName="accordion-item-active">
              <img
                src={withPrefix(i.src)}
                alt={`Fitato Partners in ${i.title}, Hyderabad`}
              />
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </PartnersStyled>
    <GetStarted />
    <FooterInfo />
  </Layout>
);

export default PartnersPage;
