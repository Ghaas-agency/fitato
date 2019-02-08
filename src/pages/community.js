import React from 'react'
import Helmet from 'react-helmet'
import { /* Link, */ withPrefix } from 'gatsby'
import Layout from '../components/index-app'
import '../css/community.css'
import MCForm from '../partials/MailChimpForm'
// import SocialLinks from '../partials/SocialLinks'

const CommunityPage = () => (
  <>
    <Layout>
      <div className="comm-page">
        <Helmet
          title="Experience the Fitato Way of Life | Join Fitato Community"
          style={[{
            "cssText": `
            .comm-hero {background-image: url('${withPrefix('/static/community/fitato-community-hero.jpg')}')}/* @media (max-width: 767px) {.college-hero {background-image: url('${withPrefix('/static/fitato-home-hero-bg-mobile.jpg')}')}} */
            .comm-community {background-image: url('${withPrefix('/static/index/fitato-community-bg.jpg')}')}
            `
          }]}
        >
          <meta name="description" content="If you are passionate about leading a healthy lifestyle and wish to inspire others towards it, join us as a campus ambassador. Lead the Fitness revolution on your campus." />
          <meta itemprop="name" content="Experience the Fitato Way of Life | Join Fitato Community"/>
          <meta itemprop="description" content="If you are passionate about leading a healthy lifestyle and wish to inspire others towards it, join us as a campus ambassador. Lead the Fitness revolution on your campus."/>
          <meta name="twitter:title" content="Experience the Fitato Way of Life | Join Fitato Community"/>
          <meta name="twitter:description" content="If you are passionate about leading a healthy lifestyle and wish to inspire others towards it, join us as a campus ambassador. Lead the Fitness revolution on your campus."/>
          <meta property="og:title" content="Experience the Fitato Way of Life | Join Fitato Community"/>
          <meta property="og:description" content="If you are passionate about leading a healthy lifestyle and wish to inspire others towards it, join us as a campus ambassador. Lead the Fitness revolution on your campus."/>
        </Helmet>
        
        <section className="comm-hero">
          <div className="container">
            <div className="comm-hero__wrapper">
              <h1>Experience the<br/><span className="comm-hero--title">Fitato Way of Life!</span></h1>
              <p>Join us for a free community workout at a time and location that works for you.</p>
              <a href="#!" className="button" style={{marginLeft: '0'}}>Claim your community workout</a>
            </div>
          </div>
        </section>

        <section className="comm-join">
          <div className="container">
            <div className="comm-join__wrapper">
              <p>Trying to start your fitness journey? Not sure what the right path is? Well, we are here to help.</p>
              <p>Enjoy a free community workout facilitated by a Fitato Captain, stay on for a little chat and let them guide you what’s the best way to get fit for you.</p>
              <p>All you need to do is fill this sign up form and leave the rest to us!</p>
              <MCForm formClass="f-cf-community" />
            </div>
          </div>
        </section>

        {/* <section className="comm-about">
          <div className="container">
            <div className="comm-about__items">
              <div className="comm-about__item">
                <img src={withPrefix('/static/fitato-discover.jpg')} alt="fitato discover"/>
              </div>
              <div className="comm-about__item">
                <h2>About Fitato</h2>
                <p>Fitato is a hyper-local fitness solution that aims at providing you fitness freedom. With a single membership, you get access to the best gyms and fitness centres in your city anytime you want.</p>
              </div>
            </div>
          </div>
        </section> */}

        <section className="comm-advantage">
          <div className="container">
            <h2>The Fitato Advantage</h2>
            <div className="comm-advantage__items">
              <div className="comm-advantage__item">
                <h3>Say No To Restrictions</h3>
                <p>Choose a fitness activity of your choice, at a facility you like for a time slot of your convenience. Don’t let anyone else decide your fitness schedule.</p>
              </div>
              <div className="comm-advantage__item">
                <h3>Get Your Fitness Community</h3>
                <p>Engage in Fitato Exclusive community workouts and fitness events like treks, go-karting and much more, with the fun-loving Fitato community.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="comm-community">
          <div className="comm-community--tri-top"></div>
          <div className="container">
            <div className="comm-community__wrapper">
              <h2>The Fitato Community</h2>
              <p>You may choose to head out and go for a secluded, boring workout at a gym, but it will get mundane soon.  Not with Fitato.  The Fitato community makes your workout time, your happy hour. With the Fitato Community, you will laugh, you will click pictures, you will enjoy and you will workout.</p>
            </div>
          </div>
        </section>

        <section className="comm-workouts">
          <div className="container">
            <h2>Thousands Of Community Workouts To Choose From</h2>
            <div className="comm-workouts__items">
              <div className="comm-workouts__item" style={{backgroundImage: 'url(' + withPrefix('/static/community/workouts/zumba.jpg') + ')'}}>
                <p>Zumba</p>
              </div>
              <div className="comm-workouts__item" style={{backgroundImage: 'url(' + withPrefix('/static/community/workouts/aerial-yoga.jpg') + ')'}}>
                <p>Aerial Yoga</p>
              </div>
              <div className="comm-workouts__item" style={{backgroundImage: 'url(' + withPrefix('/static/community/workouts/salsa.jpg') + ')'}}>
                <p>Salsa Nights</p>
              </div>
              <div className="comm-workouts__item" style={{backgroundImage: 'url(' + withPrefix('/static/community/workouts/strength-flexibility.jpg') + ')'}}>
                <p>Strength and Flexibility</p>
              </div>
              <div className="comm-workouts__item" style={{backgroundImage: 'url(' + withPrefix('/static/community/workouts/mallakhamb.jpg') + ')'}}>
                <p>Mallakhamb</p>
              </div>
              <div className="comm-workouts__item" style={{backgroundImage: 'url(' + withPrefix('/static/community/workouts/core-training.jpg') + ')'}}>
                <p>Activate Your Core</p>
              </div>
              <div className="comm-workouts__item" style={{backgroundImage: 'url(' + withPrefix('/static/community/workouts/pop-pilates.jpg') + ')'}}>
                <p>Pop-Pilates</p>
              </div>
              <div className="comm-workouts__item" style={{backgroundImage: 'url(' + withPrefix('/static/community/workouts/piloxing.jpg') + ')'}}>
                <p>Piloxing</p>
              </div>
              <div className="comm-workouts__item" style={{backgroundImage: 'url(' + withPrefix('/static/community/workouts/aqua-yoga.jpg') + ')'}}>
                <p>Aqua Yoga</p>
              </div>
            </div>
          </div>
        </section>

        <section className="comm-captains">
          <div className="container">
            <h2>The Fitato Captains</h2>
            <div className="comm-captains__wrapper">
              <div className="comm-captains__wrapper-item">
                <div className="comm-captains__items">
                  <div className="comm-captains__left">
                    <img src={withPrefix('/static/community/sehej-maini.jpg')} alt="sehej maini"/>
                  </div>
                  <div className="comm-captains__right">
                    <h3>Sehej Maini</h3>
                    <p>Crossfit addict and trainer and a professional powerlifting champion. </p>
                  </div>
                </div>
              </div>
              <div className="comm-captains__wrapper-item">
                <div className="comm-captains__items">
                  <div className="comm-captains__left">
                    <img src={withPrefix('/static/community/mallika-rathod.jpg')} alt="mallika rathod"/>
                  </div>
                  <div className="comm-captains__right">
                    <h3>Mallika Rathod</h3>
                    <p>Yoga practitioner and trainer, an expert in aerial and aqua yoga.</p>
                  </div>
                </div>
              </div>
              <div className="comm-captains__wrapper-item">
                <div className="comm-captains__items">
                  <div className="comm-captains__left">
                    <img src={withPrefix('/static/community/kaaba-khan.jpg')} alt="kaaba khan"/>
                  </div>
                  <div className="comm-captains__right">
                    <h3>Kaaba Khan</h3>
                    <p>Yoga practitioner and trainer with over three years of experience.</p>
                  </div>
                </div>
              </div>
              <div className="comm-captains__wrapper-item">
                <div className="comm-captains__items">
                  <div className="comm-captains__left">
                    <img src={withPrefix('/static/community/reetu-thakur.jpg')} alt="reetu thakur"/>
                  </div>
                  <div className="comm-captains__right">
                    <h3>Reetu Thakur</h3>
                    <p>Functional training expert and trainer and also a young mother.</p>
                  </div>
                </div>
              </div>
              <div className="comm-captains__wrapper-item">
                <div className="comm-captains__items">
                  <div className="comm-captains__left">
                    <img src={withPrefix('/static/community/atharva-deshmukh.jpg')} alt="atharva deshmukh"/>
                  </div>
                  <div className="comm-captains__right">
                    <h3>Atharva Deshmukh</h3>
                    <p>Professional trainer for multiple activities like HIIT, Crossfit, etc.</p>
                  </div>
                </div>
              </div>
              <div className="comm-captains__wrapper-item">
                <div className="comm-captains__items">
                  <div className="comm-captains__left">
                    <img src={withPrefix('/static/community/trisha-kapur.jpg')} alt="trisha kapur"/>
                  </div>
                  <div className="comm-captains__right">
                    <h3>Trisha Kapur</h3>
                    <p>Professional swimmer and weight training expert and a law student.</p>
                  </div>
                </div>
              </div>
              <div className="comm-captains__wrapper-item">
                <div className="comm-captains__items">
                  <div className="comm-captains__left">
                    <img src={withPrefix('/static/community/ritika-narwariya.jpg')} alt="ritika narwariya"/>
                  </div>
                  <div className="comm-captains__right">
                    <h3>Ritika Narwariya</h3>
                    <p>Certified Pop-pilates expert as well as a  Strong by Zumba instructor.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  </>
)

export default CommunityPage
