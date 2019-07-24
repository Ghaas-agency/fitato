import React from 'react';
import MetaTitleDescription from 'partials/MetaTitleDescription';
import { withPrefix } from 'gatsby';
import { CurrentlyOperatingIn, SocialLinks } from 'partials';
import {
  CareersHero,
  CareersAbout,
  CareersWhy,
  CareersJoin,
  CareersSocial,
} from 'css/careers.styled';
import Layout from '../components/index';

const CareersPage = () => (
  <Layout>
    <MetaTitleDescription
      title="Careers | Fitato"
      description="The Fitato Team is always here to help you out. Simply drop in your details and we'll get in touch ASAP."
    />
    <CareersHero>
      <div className="container align-center">
        <h1 className="uppercase white heading-underline">Build With Us</h1>
        <p className="white">
          At Fitato, we aim to build careers, instead of providing jobs. Careers
          are built around passion. Fitato is built on a shared passion for
          fitness and a healthy lifestyle. And that’s all you’d need to be a
          part of your team.
        </p>
        <a
          href="https://angel.co/company/fitato"
          target="_blank"
          rel="noopener noreferrer"
          className="button">
          Explore Jobs at Fitato
        </a>
      </div>
    </CareersHero>

    <CareersAbout>
      <div className="container align-center">
        <h2 className="uppercase heading-underline">Who are we?</h2>
        <div className="items">
          <div className="item">
            <img
              src={withPrefix('/static/careers/fitato-careers-mix.jpg')}
              alt="fitato careers mix"
            />
            <p>
              We are a mix of enthusiastic young adults and experienced
              professionals with the shared vision of making India fall in love
              with fitness by empowering them with the Fitato way of life.
            </p>
          </div>
          <div className="item">
            <img
              src={withPrefix('/static/careers/fitato-careers-get-fit.jpg')}
              alt="fitato careers get fit"
            />
            <p>
              We wish to make fitness addictive in India by providing as much
              fitness flexibility to our customers as possible. A Fitato
              Membership is a single, flexible membership that gets them access
              to the best gyms and fitness studios around them.
            </p>
          </div>
          <div className="item">
            <img
              src={withPrefix('/static/careers/fitato-careers-work.jpg')}
              alt="fitato careers work"
            />
            <p>
              We, at Fitato, strongly believe that what people take 20 years to
              achieve, can be achieved in two, with passion, devotion and hard
              work. And we strive each day to make that a reality.
            </p>
          </div>
        </div>
      </div>
    </CareersAbout>

    <CareersWhy>
      <div className="container white">
        <h2 className="align-center uppercase white heading-underline">
          Why Join Us
        </h2>
        <p
          className="align-center"
          style={{
            maxWidth: 750,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 70,
          }}>
          As said earlier, the driving force for any person who works in Fitato
          is their passion towards a fit and healthy lifestyle. Beyond that,
          here’s what working with Fitato means:
        </p>
        <div className="items">
          <div className="left">
            <h3 className="uppercase white heading-underline left">
              Explore The Startup Hustle
            </h3>
            <p>
              As a growing fitness startup, we have a small team that is
              occupied in managing work, fighting fires and expanding and
              exploring boundaries. Some days you’d find us celebrating our
              sky-rocketing sales or successful events. Some days you’d find us
              brainstorming next steps and planning the next big thing in the
              fitness landscape. We assure you, we won’t let you get bored with
              work.
            </p>
          </div>
          <div className="right">
            <img
              src={withPrefix('/static/careers/fitato-careers-explore.png')}
              alt="fitato careers explore"
            />
          </div>
        </div>
        <div className="items">
          <div className="right">
            <img
              src={withPrefix('/static/careers/fitato-careers-build.png')}
              alt="fitato careers build"
              style={{ marginLeft: -50 }}
            />
          </div>
          <div className="left">
            <h3 className="uppercase white heading-underline left">
              Build Your Career
            </h3>
            <p>
              We believe that everyone is capable of carving their paths to
              success. All they need is the right support, boost and guidance.
              And the freedom to explore and grow the way they wish. At Fitato,
              you’d not be tied to one profile. You can explore, seek and learn
              beyond your role and grow in your career the way you want.
            </p>
          </div>
        </div>
        <div className="items">
          <div className="left">
            <h3 className="uppercase white heading-underline left">Get Fit</h3>
            <p>
              We practice what we preach. So, get ready to join us on team
              workout sessions, fitness events and enjoy on treks, parties,
              workshops and a lot more. There’s no Fitato without fun and
              fitness. Be ready to explore fitness Fitato-style.
            </p>
          </div>
          <div className="right">
            <img
              src={withPrefix('/static/careers/fitato-careers-fit.png')}
              alt="fitato careers fit"
              style={{ transform: 'scale(1.4)' }}
            />
          </div>
        </div>
      </div>
    </CareersWhy>

    <CareersJoin>
      <div className="container">
        <div className="items">
          <div className="item">
            <h2 className="uppercase heading-underline left">Join our team</h2>
            <p>
              Wish to work with us? Find the latest opportunities available at
              our organisation here.
            </p>
            <a
              href="https://angel.co/company/fitato"
              className="button"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: 0 }}>
              Explore Jobs At Fitato
            </a>
          </div>
          <div className="item">
            <img
              src={withPrefix('/static/careers/fitato-careers-join.jpg')}
              alt="fitato careers join"
            />
          </div>
        </div>
      </div>
    </CareersJoin>

    <CurrentlyOperatingIn redBg title="Hiring Now In" />

    <CareersSocial>
      <div className="container align-center">
        <SocialLinks />
      </div>
    </CareersSocial>
  </Layout>
);

export default CareersPage;
