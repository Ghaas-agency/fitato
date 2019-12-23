import React from 'react';
import { withPrefix } from 'gatsby';

import Layout from 'components/index';

import MetaTitleDescription from 'partials/MetaTitleDescription';
import FooterInfo from 'partials/FooterInfo';

import { ReferHero, ReferPrizes } from 'css/how-to-refer.styled';

const ReferPage = () => (
  <Layout>
    <MetaTitleDescription
      title="How to Refer Your Friends | Fitato"
      description="Working out is more fun with friends. Learn how to refer Fitato to your friends here."
    />
    <ReferHero>
      <div className="first-half"></div>
      <img
        src={withPrefix(`/static/refer/models.png`)}
        alt="models"
        className="models"
      />
      <div className="container">
        <h1 title="Achieve Your New Year's Resolutions Together">
          <img
            src={withPrefix(`/static/refer/together.png`)}
            alt="Achieve Your New Year's Resolutions Together"
          />
        </h1>
        <p className="refer-text white align-center">
          Refer 5 or more friend, and stand a chance to
          <br />
          <span className="bold">Win a fully paid couples trip to Goa.</span>
        </p>
        <div className="share align-center">
          <a href="https://fitato.page.link/app" className="button-inverted">
            Refer Now
          </a>
        </div>
      </div>
    </ReferHero>

    <ReferPrizes>
      <div className="bottom-bar"></div>
      <div className="container">
        <h2 className="normal align-center">
          Help your friends achieve their long lost new year resolutions, and if
          your referrals are successful (they buy the Fitato pass), stand a
          chance to win exciting prizes*
        </h2>
        <div className="row">
          <div className="col">
            <div
              className="card"
              style={{
                backgroundImage: `url('${withPrefix(
                  `/static/refer/goa-trip.jpg`,
                )}'), linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.45))`,
              }}>
              <div className="card-red">
                <span>
                  {/* eslint-disable */}
                  1<sup>st</sup>
                  {/* eslint-enable */}
                </span>
                <br />
                PRIZE
              </div>
              <p>Two nights and three days paid Goa trip for two</p>
            </div>
          </div>
          <div className="col">
            <div
              className="card"
              style={{
                backgroundImage: `url('${withPrefix(
                  `/static/refer/vh1-supersonic.jpg`,
                )}'), linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.45))`,
              }}>
              <div className="card-red">
                <span>
                  {/* eslint-disable */}
                  2<sup>nd</sup>
                  {/* eslint-enable */}
                </span>
                <br />
                PRIZE
              </div>
              <p>Vh1 Supersonic Pass for two</p>
            </div>
            <div
              className="card"
              style={{
                backgroundImage: `url('${withPrefix(
                  `/static/refer/fitato-passes.jpg`,
                )}'), linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.45))`,
              }}>
              <div className="card-red">
                <span>
                  {/* eslint-disable */}
                  3<sup>rd</sup>
                  {/* eslint-enable */}
                </span>
                <br />
                PRIZE
              </div>
              <p>Two Fitato Quarterly Passes</p>
            </div>
          </div>
        </div>
        <p className="conditions white align-center">
          *&nbsp;Two Successful Quarterly Pass referrals must
          <br />
          *&nbsp;Winners will be announced in January 2020
        </p>
      </div>
    </ReferPrizes>
    <FooterInfo />
  </Layout>
);

export default ReferPage;
