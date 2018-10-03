import React from 'react'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby'
import GetStarted from '../partials/GetStarted'
import FooterInfo from '../partials/FooterInfo'
import { Accordion, AccordionItem } from 'react-sanfona'
import Layout from '../components/index'
import '../css/partners.css'

const PartnersPage = () => (
  <Layout>
    <Helmet
      title="Fitato Partners"
    >
      <meta name="description" content="View the list of all the Fitness centers partnered with us. Everything Crossfit to MMA, Swmming to yoga, Boxing to Zumba and lot more." />
    </Helmet>
    <div className="partners-page">
      <div className="container">
        <h1>Fitato Partner Network</h1>
        <h2>300+ Fitness Studios | 1000+ Activities | One Pass</h2>
        <Accordion allowMultiple>
          <AccordionItem title="Viman Nagar" className="accordion-item" expandedClassName="accordion-item-active">
            <img src={withPrefix('/static/partners/viman-nagar.jpg')} alt="fitato partners in viman nagar pune" />
          </AccordionItem>
          <AccordionItem title="Kalyani Nagar" className="accordion-item" expandedClassName="accordion-item-active">
            <img src={withPrefix('/static/partners/kalyani-nagar.jpg')} alt="fitato partners in kalyani nagar pune" />
          </AccordionItem>
          <AccordionItem title="Koregaon Park" className="accordion-item" expandedClassName="accordion-item-active">
            <img src={withPrefix('/static/partners/koregaon-park.jpg')} alt="fitato partners in koregaon park pune" />
          </AccordionItem>
          <AccordionItem title="Shivaji Nagar, Deccan, Law Road" className="accordion-item" expandedClassName="accordion-item-active">
            <img src={withPrefix('/static/partners/shivaji-nagar-deccan-and-law-college-road.jpg')} alt="fitato partners in shivaji nagar deccan law road pune" />
          </AccordionItem>
          <AccordionItem title="Aundh" className="accordion-item" expandedClassName="accordion-item-active">
            <img src={withPrefix('/static/partners/aundh.jpg')} alt="fitato partners in aundh pune" />
          </AccordionItem>
          <AccordionItem title="Baner" className="accordion-item" expandedClassName="accordion-item-active">
            <img src={withPrefix('/static/partners/baner.jpg')} alt="fitato partners in baner pune" />
          </AccordionItem>
          <AccordionItem title="Kothrud" className="accordion-item" expandedClassName="accordion-item-active">
            <img src={withPrefix('/static/partners/kothrud.jpg')} alt="fitato partners in kothrud pune" />
          </AccordionItem>
          <AccordionItem title="Kondhwa" className="accordion-item" expandedClassName="accordion-item-active">
            <img src={withPrefix('/static/partners/kondhwa.jpg')} alt="fitato partners in kondhwa pune" />
          </AccordionItem>
          <AccordionItem title="Wanowrie &amp; Camp" className="accordion-item" expandedClassName="accordion-item-active">
            <img src={withPrefix('/static/partners/wanowrie-and-camp.jpg')} alt="fitato partners in wanowrie and camp pune" />
          </AccordionItem>
          <AccordionItem title="Pimpri Chinchwad" className="accordion-item" expandedClassName="accordion-item-active">
            <img src={withPrefix('/static/partners/pimpri-chinchwad.jpg')} alt="fitato partners in pimpri chinchwad pune" />
          </AccordionItem>
          <AccordionItem title="Pimple Saudagar" className="accordion-item" expandedClassName="accordion-item-active">
            <img src={withPrefix('/static/partners/pimple-saudagar.jpg')} alt="fitato partners in pimple saudagar pune" />
          </AccordionItem>
          <AccordionItem title="Wakad and Hinjewadi" className="accordion-item" expandedClassName="accordion-item-active">
            <img src={withPrefix('/static/partners/wakad-and-hinjewadi.jpg')} alt="fitato partners in wakad and hinjewadi pune" />
          </AccordionItem>
          <AccordionItem title="Kharadi and Hadapsar" className="accordion-item" expandedClassName="accordion-item-active">
            <img src={withPrefix('/static/partners/kharadi-and-hadapsar.jpg')} alt="fitato partners in kharadi and hadapsar pune" />
          </AccordionItem>
          <AccordionItem title="City Areas and Satara Road" className="accordion-item" expandedClassName="accordion-item-active">
            <img src={withPrefix('/static/partners/city-areas-and-satara-road.jpg')} alt="fitato partners in city areas and satara road pune" />
          </AccordionItem>
          <AccordionItem title="Sinhagadh Road and Nanded City" className="accordion-item" expandedClassName="accordion-item-active">
            <img src={withPrefix('/static/partners/sinhagadh-road-and-nanded-city.jpg')} alt="fitato partners in sinhagadh road and nanded city pune" />
          </AccordionItem>
        </Accordion>
      </div>
    </div>
    <GetStarted />
    <FooterInfo />
  </Layout>
)

export default PartnersPage
