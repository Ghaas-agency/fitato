import React from 'react';
import { Link, withPrefix } from 'gatsby';

import Layout from 'components/index';
import FooterInfo from 'partials/FooterInfo';
import MetaTitleDescription from 'partials/MetaTitleDescription';
import DownloadSwipe from 'partials/DownloadSwipe';
import SectionPartners from 'partials/SectionPartners';

import { Hero, Features, What, Find } from 'css/pune.styled';

const PunePage = () => (
  <Layout>
    <MetaTitleDescription
      title="Fitato in Pune"
      description="Access the top class gyms, fitness studios and a variety of exclusive community events through the Fitato Membership."
    />
    <Hero>
      <div className="container">
        <h1 className="uppercase italic extra-bold white">
          The Most Versatile And Fun-Filled Fitness Membership In
          <span className="red"> Pune</span>
        </h1>
        <p className="white">
          Access the top class gyms, fitness studios and a variety of exclusive
          community events through the Fitato Membership.
        </p>
      </div>
    </Hero>

    <Features>
      <div className="container">
        <h2 className="align-center heading-underline">
          Flexibility, Freedom, Fun and Fitness That You&apos;ll Love
        </h2>
        <div className="items">
          <div className="item">
            <h3>Get Fitness Flexibility</h3>
            <p>
              Get access to 400+ gyms and fitness studios in Pune providing
              multiple fitness activities ranging from the gym, CrossFit, Zumba,
              Yoga, swimming, spinning and more. Try different workouts at
              different facilities every day.
            </p>
          </div>
          <div className="item">
            <h3>Get A Fitness Community</h3>
            <p>
              Become a part of the most fun-filled community in town. Be a part
              for exclusive fitness events ranging from outdoor workouts, treks,
              sports championships and more. Experience fitness with the Fitato
              Community.
            </p>
          </div>
        </div>
      </div>
    </Features>

    <SectionPartners city="pune" />

    <What>
      <div className="container">
        <div className="items">
          <div className="item">
            <h2 className="heading-underline left">What is Fitato Community</h2>
            <p>
              Fitato community is our warm-little world of fitness which has
              exclusive access to the fitness activities facilitated and hosted
              by the Fitato Captains.
            </p>
            <Link to="/community/" className="button">
              Explore Fitato Community
            </Link>
          </div>
          <div className="item">
            <span></span>
          </div>
        </div>
        <div className="items">
          <div className="item">
            <img
              src={withPrefix('/static/pune/fitato-captains.jpg')}
              alt="fitato captains"
            />
          </div>
          <div className="item">
            <h3>The Fitato Captains</h3>
            <p>
              From the World Powerlifting Champion Sehej Maini, the Yoga gazelle
              Mallika Rathod or the Strong By Zumba instructor, Ritika
              Narwariya, our Captains are experts who conduct engaging workouts
              and plan exciting fitness events for you.
            </p>
            <a
              href="https://blog.fitato.fit/?s=meet+the+captains"
              target="_blank"
              rel="noopener noreferrer"
              className="button">
              Know Your Captains
            </a>
          </div>
        </div>
      </div>
    </What>

    <Find className="align-center">
      <div className="container">
        <h2>Find Your Captains At</h2>
        <div className="items">
          <div className="item">
            <img
              src={withPrefix('/static/pune/fitato-community-workouts.png')}
              alt="fitato community workouts"
            />
            <h3>Fitato Community Workouts</h3>
            <p>
              Sometimes at the best fitness studios in town and sometimes in the
              most serene outdoor spaces, Fitato Captains facilitate Community
              Workouts for the Fitato Community every day of the week for you at
              different locations across the city.
            </p>
          </div>
          <div className="item">
            <img
              src={withPrefix('/static/pune/fitato-exclusive-events.png')}
              alt="fitato exclusive events"
            />
            <h3>Fitato Exclusive Events</h3>
            <p>
              Sometimes they take you to climb mountains and sometimes to play
              cricket, football and hockey. Sometimes they host Yoga, Parkour
              and Powerlifting workshops with experts. Fitato Captains bring you
              events that make fitness fun.
            </p>
          </div>
        </div>
        <div className="align-center">
          <a
            href="https://blog.fitato.fit/category/fitato-exclusives/"
            target="_blank"
            rel="noopener noreferrer"
            className="button">
            Explore Fitato Exclusives
          </a>
        </div>
      </div>
    </Find>

    <DownloadSwipe style={{ marginTop: 40 }} />

    <FooterInfo />
  </Layout>
);

export default PunePage;
