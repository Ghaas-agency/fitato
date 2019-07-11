import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby';
import { Accordion, AccordionItem } from 'react-sanfona';
import { PartnersStyled, Menu } from 'css/partners.styled';
import GetStarted from '../partials/GetStarted';
import FooterInfo from '../partials/FooterInfo';
import Layout from '../components/index';

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

        <h2 id="pune" className="partners-page__location-title">
          Facilities in Pune
        </h2>

        <Accordion allowMultiple>
          <AccordionItem
            title="Viman Nagar"
            className="accordion-item"
            expandedClassName="accordion-item-active">
            <img
              src={withPrefix('/static/partners/pune/viman-nagar.jpg')}
              alt="fitato partners in viman nagar pune"
            />
          </AccordionItem>
          <AccordionItem
            title="Kalyani Nagar"
            className="accordion-item"
            expandedClassName="accordion-item-active">
            <img
              src={withPrefix('/static/partners/pune/kalyani-nagar.jpg')}
              alt="fitato partners in kalyani nagar pune"
            />
          </AccordionItem>
          <AccordionItem
            title="Koregaon Park"
            className="accordion-item"
            expandedClassName="accordion-item-active">
            <img
              src={withPrefix('/static/partners/pune/koregaon-park.jpg')}
              alt="fitato partners in koregaon park pune"
            />
          </AccordionItem>
          <AccordionItem
            title="Shivaji Nagar, Deccan, Law Road"
            className="accordion-item"
            expandedClassName="accordion-item-active">
            <img
              src={withPrefix(
                '/static/partners/pune/shivaji-nagar-deccan-and-law-college-road.jpg',
              )}
              alt="fitato partners in shivaji nagar deccan law road pune"
            />
          </AccordionItem>
          <AccordionItem
            title="Aundh"
            className="accordion-item"
            expandedClassName="accordion-item-active">
            <img
              src={withPrefix('/static/partners/pune/aundh.jpg')}
              alt="fitato partners in aundh pune"
            />
          </AccordionItem>
          <AccordionItem
            title="Baner"
            className="accordion-item"
            expandedClassName="accordion-item-active">
            <img
              src={withPrefix('/static/partners/pune/baner.jpg')}
              alt="fitato partners in baner pune"
            />
          </AccordionItem>
          <AccordionItem
            title="Kothrud"
            className="accordion-item"
            expandedClassName="accordion-item-active">
            <img
              src={withPrefix('/static/partners/pune/kothrud.jpg')}
              alt="fitato partners in kothrud pune"
            />
          </AccordionItem>
          <AccordionItem
            title="Kondhwa"
            className="accordion-item"
            expandedClassName="accordion-item-active">
            <img
              src={withPrefix('/static/partners/pune/kondhwa.jpg')}
              alt="fitato partners in kondhwa pune"
            />
          </AccordionItem>
          <AccordionItem
            title="Wanowrie &amp; Camp"
            className="accordion-item"
            expandedClassName="accordion-item-active">
            <img
              src={withPrefix('/static/partners/pune/wanowrie-and-camp.jpg')}
              alt="fitato partners in wanowrie and camp pune"
            />
          </AccordionItem>
          <AccordionItem
            title="Pimpri Chinchwad"
            className="accordion-item"
            expandedClassName="accordion-item-active">
            <img
              src={withPrefix('/static/partners/pune/pimpri-chinchwad.jpg')}
              alt="fitato partners in pimpri chinchwad pune"
            />
          </AccordionItem>
          <AccordionItem
            title="Pimple Saudagar"
            className="accordion-item"
            expandedClassName="accordion-item-active">
            <img
              src={withPrefix('/static/partners/pune/pimple-saudagar.jpg')}
              alt="fitato partners in pimple saudagar pune"
            />
          </AccordionItem>
          <AccordionItem
            title="Wakad and Hinjewadi"
            className="accordion-item"
            expandedClassName="accordion-item-active">
            <img
              src={withPrefix('/static/partners/pune/wakad-and-hinjewadi.jpg')}
              alt="fitato partners in wakad and hinjewadi pune"
            />
          </AccordionItem>
          <AccordionItem
            title="Kharadi and Hadapsar"
            className="accordion-item"
            expandedClassName="accordion-item-active">
            <img
              src={withPrefix('/static/partners/pune/kharadi-and-hadapsar.jpg')}
              alt="fitato partners in kharadi and hadapsar pune"
            />
          </AccordionItem>
          <AccordionItem
            title="City Areas and Satara Road"
            className="accordion-item"
            expandedClassName="accordion-item-active">
            <img
              src={withPrefix(
                '/static/partners/pune/city-areas-and-satara-road.jpg',
              )}
              alt="fitato partners in city areas and satara road pune"
            />
          </AccordionItem>
          <AccordionItem
            title="Sinhagadh Road and Nanded City"
            className="accordion-item"
            expandedClassName="accordion-item-active">
            <img
              src={withPrefix(
                '/static/partners/pune/sinhagadh-road-and-nanded-city.jpg',
              )}
              alt="fitato partners in sinhagadh road and nanded city pune"
            />
          </AccordionItem>
        </Accordion>

        <h2 id="hyderabad" className="partners-page__location-title">
          Facilities in Hyderabad
        </h2>

        <Accordion allowMultiple>
          <AccordionItem
            title="Banjara Hills"
            className="accordion-item"
            expandedClassName="accordion-item-active">
            <img
              src={withPrefix('/static/partners/hyderabad/banjara-hills.jpg')}
              alt="fitato partners in banjara hills hyderabad"
            />
          </AccordionItem>
          <AccordionItem
            title="Jubilee Hills"
            className="accordion-item"
            expandedClassName="accordion-item-active">
            <img
              src={withPrefix('/static/partners/hyderabad/jubilee-hills.jpg')}
              alt="fitato partners in jubilee hills hyderabad"
            />
          </AccordionItem>
          <AccordionItem
            title="Madhapur"
            className="accordion-item"
            expandedClassName="accordion-item-active">
            <img
              src={withPrefix('/static/partners/hyderabad/madhapur.jpg')}
              alt="fitato partners in madhapur hyderabad"
            />
          </AccordionItem>
          <AccordionItem
            title="Kondapur"
            className="accordion-item"
            expandedClassName="accordion-item-active">
            <img
              src={withPrefix('/static/partners/hyderabad/kondapur.jpg')}
              alt="fitato partners in kondapur hyderabad"
            />
          </AccordionItem>
          <AccordionItem
            title="Gachibowli"
            className="accordion-item"
            expandedClassName="accordion-item-active">
            <img
              src={withPrefix('/static/partners/hyderabad/gachibowli.jpg')}
              alt="fitato partners in gachibowli hyderabad"
            />
          </AccordionItem>
          <AccordionItem
            title="Tolichowki"
            className="accordion-item"
            expandedClassName="accordion-item-active">
            <img
              src={withPrefix('/static/partners/hyderabad/tolichowki.jpg')}
              alt="fitato partners in tolichowki hyderabad"
            />
          </AccordionItem>
          <AccordionItem
            title="Ameerpet"
            className="accordion-item"
            expandedClassName="accordion-item-active">
            <img
              src={withPrefix('/static/partners/hyderabad/ameerpet.jpg')}
              alt="fitato partners in ameerpet hyderabad"
            />
          </AccordionItem>
          <AccordionItem
            title="Kukatpally"
            className="accordion-item"
            expandedClassName="accordion-item-active">
            <img
              src={withPrefix('/static/partners/hyderabad/kukatpally.jpg')}
              alt="fitato partners in kukatpally hyderabad"
            />
          </AccordionItem>
          <AccordionItem
            title="KPHB"
            className="accordion-item"
            expandedClassName="accordion-item-active">
            <img
              src={withPrefix('/static/partners/hyderabad/kphb.jpg')}
              alt="fitato partners in kphb hyderabad"
            />
          </AccordionItem>
          <AccordionItem
            title="Miyapur"
            className="accordion-item"
            expandedClassName="accordion-item-active">
            <img
              src={withPrefix('/static/partners/hyderabad/miyapur.jpg')}
              alt="fitato partners in miyapur hyderabad"
            />
          </AccordionItem>
          <AccordionItem
            title="Secunderabad"
            className="accordion-item"
            expandedClassName="accordion-item-active">
            <img
              src={withPrefix('/static/partners/hyderabad/secunderabad.jpg')}
              alt="fitato partners in secunderabad hyderabad"
            />
          </AccordionItem>
          <AccordionItem
            title="Secunderabad"
            className="accordion-item"
            expandedClassName="accordion-item-active">
            <img
              src={withPrefix('/static/partners/hyderabad/secunderabad-2.jpg')}
              alt="fitato partners in secunderabad hyderabad"
            />
          </AccordionItem>
          <AccordionItem
            title="Other Areas"
            className="accordion-item"
            expandedClassName="accordion-item-active">
            <img
              src={withPrefix('/static/partners/hyderabad/other.jpg')}
              alt="fitato partners in hyderabad"
            />
          </AccordionItem>
        </Accordion>
      </div>
    </PartnersStyled>
    <GetStarted />
    <FooterInfo />
  </Layout>
);

export default PartnersPage;
