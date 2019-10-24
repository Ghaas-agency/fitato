import React from 'react';
import { withPrefix } from 'gatsby';

import Layout from 'components/index';
import FooterInfo from 'partials/FooterInfo';
import MetaTitleDescription from 'partials/MetaTitleDescription';
import DownloadSwipe from 'partials/DownloadSwipe';
import SectionPartners from 'partials/SectionPartners';

import { Hero, Freedom, Community } from 'css/hyderabad.styled';

const HyderabadPage = () => (
  <Layout>
    <MetaTitleDescription
      title="Fitato in Hyderabad"
      description="Access the top class gyms, fitness studios and a variety of exclusive community events through the Fitato Membership."
    />

    <Hero>
      <div className="container">
        <div className="content">
          <h1 className="white italic extra-bold uppercase">
            The Most Flexible And Exciting Fitness Membership In
            <span className="red"> Hyderabad</span>
          </h1>
          <p className="white">
            Access the best gyms, fitness studios and a range of exclusive
            community events through the Fitato Membership.
          </p>
        </div>
      </div>
    </Hero>

    <Freedom>
      <div className="container">
        <h2 className="heading-underline align-center">
          Freedom To Get Fit And Workout The Way You Like
        </h2>
        <div className="items">
          <div className="item align-center">
            <img
              src={withPrefix('/static/hyderabad/workout-wherever.jpg')}
              alt="workout wherever you want"
            />
          </div>
          <div className="item">
            <h3>Workout Wherever You Want</h3>
            <p>
              Not getting the time to hit the gym after work? Use your Fitato
              Pass to workout near your home, college or on the way. Find a gym
              near you with your Fitato Pass.
            </p>
          </div>
        </div>
        <div className="items">
          <div className="item">
            <h3>Workout Whenever You Want</h3>
            <p>
              Missed your favourite Yoga class? Overslept? Sudden meetings?
              Overextended client calls? Don&apos;t worry we&apos;ve got your
              back. With Fitato you&apos;ll always have options regardless of
              the time!
            </p>
          </div>
          <div className="item align-center">
            <img
              src={withPrefix('/static/hyderabad/workout-whenever.jpg')}
              alt="workout whenever you want"
            />
          </div>
        </div>
        <div className="items">
          <div className="item align-center">
            <img
              src={withPrefix('/static/hyderabad/workout-the-way.jpg')}
              alt="workout wherever the way you want"
            />
          </div>
          <div className="item">
            <h3>Workout The Way You Want</h3>
            <p>
              Spice Up Your Fitness Routine! Pump iron today at the gym, do
              Zumba tomorrow and get some well-deserved relaxation over the
              weekend with yoga or a swimming class.
            </p>
          </div>
        </div>
      </div>
    </Freedom>

    <SectionPartners city="hyderabad" />

    <Community>
      <div className="container">
        <div className="items">
          <div className="item">
            <h2 className="heading-underline left">Your Fitato Community</h2>
            <p>
              Join us for exclusive fitness community workouts and mega-events
              like fitness parties, treks, aqua fests and more hosted by Fitato
              and conducted by top-class instructors in town.
            </p>
            <a
              href="https://blog.fitato.fit/category/fitato-exclusives/"
              target="_blank"
              rel="noopener noreferrer"
              className="button">
              Explore Fitato Community
            </a>
          </div>
          <div className="item align-center">
            <img
              src={withPrefix('/static/hyderabad/fitato-community.jpg')}
              alt="fitato community"
            />
          </div>
        </div>
      </div>
    </Community>

    <DownloadSwipe />

    <FooterInfo />
  </Layout>
);

export default HyderabadPage;
