/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { withPrefix } from 'gatsby';
import MetaTitleDescription from 'partials/MetaTitleDescription';
import {
  CommHero,
  CommAbout,
  CommAdvantage,
  CommCommunity,
  CommWorkouts,
  CommCaptains,
} from 'css/community.styled';
import Layout from '../components/index-comm';

class CommunityPage extends React.Component {
  state = {
    showCTA: false,
  };

  hideBar = () => {
    if (window.scrollY > 800) {
      this.setState({ showCTA: true });
    } else {
      this.setState({ showCTA: false });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.hideBar);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideBar);
  }

  render() {
    return (
      <Layout>
        <MetaTitleDescription
          title="Experience the Fitato Way of Life | Join Fitato Community"
          description="Know all about Fitato Community and Fitato exclusives events - India's biggest fitness community."
        />

        <CommHero>
          <div className="container">
            <div className="wrapper">
              <h1>
                Experience the
                <br />
                <span className="title">Fitato Way of Life!</span>
              </h1>
              <p>Be A Part Of The Biggest Fitness Community In India</p>
              <a
                href="https://fitato.page.link/app"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
                style={{ marginLeft: '0' }}>
                Experience Fitato
              </a>
            </div>
          </div>
        </CommHero>

        <CommAbout>
          <div className="container">
            <div className="wrapper">
              <h2>About Fitato</h2>
              <p>
                Fitato is a hyper-local fitness solution that aims at providing
                you fitness freedom. With a single membership, you get access to
                the best gyms and fitness centres in your city anytime you want.
              </p>
            </div>
          </div>
        </CommAbout>

        <CommAdvantage>
          <div className="container">
            <h2>The Fitato Advantage</h2>
            <div className="items">
              <div className="item">
                <h3>Say No To Restrictions</h3>
                <p>
                  Choose a fitness activity of your choice, at a facility you
                  like for a time slot of your convenience. Don’t let anyone
                  else decide your fitness schedule.
                </p>
              </div>
              <div className="item">
                <h3>Get Your Fitness Community</h3>
                <p>
                  Engage in Fitato Exclusive community workouts and fitness
                  events like treks, go-karting and much more, with the
                  fun-loving Fitato community.
                </p>
              </div>
            </div>
          </div>
        </CommAdvantage>

        <CommCommunity>
          <div className="tri-top" />
          <div className="container">
            <div className="wrapper">
              <h2>The Fitato Community</h2>
              <p style={{ marginBottom: 25 }}>
                The Fitato Community gets to enjoy Fitato Exclusive Events that
                we host weekly. Fitato exclusive events include a range of
                fitness expeditions like thrilling treks, relaxing yoga carnival
                and exciting fitness pool parties. We have everything from
                sports tournaments to aqua fests for you to indulge in.
              </p>
              <p style={{ marginBottom: 20 }}>
                Sounds interesting, right? We have a whole bunch of memories for
                you to know what our Exclusives really are.
              </p>
              <a
                href="https://blog.fitato.fit/category/fitato-exclusives/"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
                style={{ marginLeft: '0' }}>
                Explore Fitato Exclusives
              </a>
            </div>
          </div>
        </CommCommunity>

        <CommWorkouts>
          <div className="container">
            <h2>Thousands Of Community Workouts To Choose From</h2>
            <div className="items">
              <div
                className="item"
                style={{
                  backgroundImage: `url(${withPrefix(
                    '/static/community/workouts/zumba.jpg',
                  )})`,
                }}>
                <p>Zumba</p>
              </div>
              <div
                className="item"
                style={{
                  backgroundImage: `url(${withPrefix(
                    '/static/community/workouts/aerial-yoga.jpg',
                  )})`,
                }}>
                <p>Aerial Yoga</p>
              </div>
              <div
                className="item"
                style={{
                  backgroundImage: `url(${withPrefix(
                    '/static/community/workouts/salsa.jpg',
                  )})`,
                }}>
                <p>Salsa Nights</p>
              </div>
              <div
                className="item"
                style={{
                  backgroundImage: `url(${withPrefix(
                    '/static/community/workouts/strength-flexibility.jpg',
                  )})`,
                }}>
                <p>Strength and Flexibility</p>
              </div>
              <div
                className="item"
                style={{
                  backgroundImage: `url(${withPrefix(
                    '/static/community/workouts/mallakhamb.jpg',
                  )})`,
                }}>
                <p>Mallakhamb</p>
              </div>
              <div
                className="item"
                style={{
                  backgroundImage: `url(${withPrefix(
                    '/static/community/workouts/core-training.jpg',
                  )})`,
                }}>
                <p>Activate Your Core</p>
              </div>
              <div
                className="item"
                style={{
                  backgroundImage: `url(${withPrefix(
                    '/static/community/workouts/pop-pilates.jpg',
                  )})`,
                }}>
                <p>Pop-Pilates</p>
              </div>
              <div
                className="item"
                style={{
                  backgroundImage: `url(${withPrefix(
                    '/static/community/workouts/piloxing.jpg',
                  )})`,
                }}>
                <p>Piloxing</p>
              </div>
              <div
                className="item"
                style={{
                  backgroundImage: `url(${withPrefix(
                    '/static/community/workouts/aqua-yoga.jpg',
                  )})`,
                }}>
                <p>Aqua Yoga</p>
              </div>
            </div>
          </div>
        </CommWorkouts>

        <CommCaptains>
          <div className="container">
            <h2>The Fitato Captains</h2>
            <div className="wrapper">
              <div className="wrapper-item">
                <div className="items">
                  <div className="left">
                    <img
                      src={withPrefix('/static/community/sehej-maini.jpg')}
                      alt="sehej maini"
                    />
                  </div>
                  <div className="right">
                    <h3>
                      <a
                        href="https://blog.fitato.fit/captains-of-fitato-sehej/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Sehej Maini
                      </a>
                    </h3>
                    <p>
                      Crossfit addict and trainer and an international
                      powerlifting champion.
                      <br />
                      <small>Kharadi, Pune</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="wrapper-item">
                <div className="items">
                  <div className="left">
                    <img
                      src={withPrefix('/static/community/mallika-rathod.jpg')}
                      alt="mallika rathod"
                    />
                  </div>
                  <div className="right">
                    <h3>
                      <a
                        href="https://blog.fitato.fit/captains-of-fitato-mallika-rathod/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Mallika Rathod
                      </a>
                    </h3>
                    <p>
                      Yoga practitioner and trainer, an expert in aerial and
                      aqua yoga.
                      <br />
                      <small>NIBM Road, Pune</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="wrapper-item">
                <div className="items">
                  <div className="left">
                    <img
                      src={withPrefix('/static/community/kaaba-khan.jpg')}
                      alt="kaaba khan"
                    />
                  </div>
                  <div className="right">
                    <h3>
                      <a
                        href="https://blog.fitato.fit/meet-our-captains-kaaba-khan/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Kaaba Khan
                      </a>
                    </h3>
                    <p>
                      Yoga practitioner and trainer with over three years of
                      experience.
                      <br />
                      <small>Koregaon Park, Pune</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="wrapper-item">
                <div className="items">
                  <div className="left">
                    <img
                      src={withPrefix('/static/community/reetu-thakur.jpg')}
                      alt="reetu thakur"
                    />
                  </div>
                  <div className="right">
                    <h3>
                      <a
                        href="https://blog.fitato.fit/captains-of-fitato-reetu-thakoor/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Reetu Thakur
                      </a>
                    </h3>
                    <p>
                      Functional training expert and trainer and also a young
                      mother.
                      <br />
                      <small>Kothrud, Pune</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="wrapper-item">
                <div className="items">
                  <div className="left">
                    <img
                      src={withPrefix('/static/community/atharva-deshmukh.jpg')}
                      alt="atharva deshmukh"
                    />
                  </div>
                  <div className="right">
                    <h3>
                      <a
                        href="https://blog.fitato.fit/fitato-captain-atharva-deshmukh/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Atharva Deshmukh
                      </a>
                    </h3>
                    <p>
                      Professional trainer for multiple activities like HIIT,
                      Crossfit, etc.
                      <br />
                      <small>Aundh/Baner, Pune</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="wrapper-item">
                <div className="items">
                  <div className="left">
                    <img
                      src={withPrefix('/static/community/suraj-chhajed.jpg')}
                      alt="trisha kapur"
                    />
                  </div>
                  <div className="right">
                    <h3>
                      <a
                        href="https://blog.fitato.fit/fitato-captain-suraj-chhajed/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Suraj Chhajed
                      </a>
                    </h3>
                    <p>
                      Professional Capoeira and functional training expert who
                      loves football.
                      <br />
                      <small>Viman Nagar, Pune</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="wrapper-item">
                <div className="items">
                  <div className="left">
                    <img
                      src={withPrefix('/static/community/ritika-narwariya.jpg')}
                      alt="ritika narwariya"
                    />
                  </div>
                  <div className="right">
                    <h3>
                      <a
                        href="https://blog.fitato.fit/captains-of-fitato-ritika-narwariya/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Ritika Narwariya
                      </a>
                    </h3>
                    <p>
                      Certified Pop-pilates expert as well as a Strong by Zumba
                      instructor.
                      <br />
                      <small>PCMC, Pune</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CommCaptains>

        <a
          href="https://fitato.page.link/app"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
          style={{
            position: 'fixed',
            bottom: this.state.showCTA ? 20 : -70,
            right: 20,
            zIndex: 99,
          }}>
          Experience Fitato
        </a>
      </Layout>
    );
  }
}

export default CommunityPage;
