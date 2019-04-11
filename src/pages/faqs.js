import React from 'react'
import { withPrefix } from 'gatsby'
import Helmet from 'react-helmet'
import GetStarted from '../partials/GetStarted'
import FooterInfo from '../partials/FooterInfo'
/* import SignupPopup from '../partials/SignupPopup' */
import { Accordion, AccordionItem } from 'react-sanfona'
import Layout from '../components/index'
import { getFaqs } from '../utils/contentProvider'
import '../css/faq.css'

const FAQPage = () => (
  <Layout>
    <Helmet title="Frequently Asked Questions | Fitato">
      <meta
        name="description"
        content="Resolve your doubts related to registrations, memberships, pass activation, how it works, facility queries and pass types."
      />
      <meta itemprop="name" content="Frequently Asked Questions | Fitato" />
      <meta
        itemprop="description"
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
    <div className="faq-page">
      <div className="container">
        <h1>Frequently Asked Questions</h1>
        <p>Let&apos;s help you step by step.</p>
        <Accordion>
          {getFaqs().map(i => (
            <AccordionItem
              key={i.id}
              title={i.title}
              titleTag="h4"
              className="accordion-item"
              expandedClassName="accordion-item-active"
            >
              {i.content}
            </AccordionItem>
          ))}
        </Accordion>

        <style
          dangerouslySetInnerHTML={{
            __html: `.accordion-item>h4::before,.accordion-item>h3::before{content: url('${withPrefix(
              '/static/icons/arrow-down.svg'
            )}');}.accordion-item-active>h4::before,.accordion-item-active>h3::before{content: url('${withPrefix(
              '/static/icons/arrow-up.svg'
            )}');}`,
          }}
        />
      </div>
    </div>
    <GetStarted />
    <FooterInfo />
    {/* <SignupPopup /> */}
  </Layout>
)

export default FAQPage
