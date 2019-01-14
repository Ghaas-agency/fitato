import React from 'react'
import { Link, withPrefix } from 'gatsby'
import Helmet from 'react-helmet'
import FooterInfo from '../partials/FooterInfo'
import AppIcons from '../partials/AppIcons'
import MCForm from '../partials/MailChimpForm'
import DownloadSwipe from '../partials/DownloadSwipe'
/* import SignupPopup from '../partials/SignupPopup' */
import Layout from '../components/index'
import '../css/next.css'

const Next = () => (
  <Layout>
    <Helmet title="Fitato&reg;: Fitness for the Intelligent Indian"
    style={[{
      "cssText": `.index-section-hero {background-image: url('${withPrefix('/static/fitato-home-hero-bg.jpg')}')}@media (max-width: 767px) {.index-section-hero {background-image: url('${withPrefix('/static/fitato-home-hero-bg-mobile.jpg')}')}} .index-section-callback{background-image:url('${withPrefix('/static/index/fitness-barbell.jpg')}')} .index-section-community{background-image:url('${withPrefix('/static/index/fitato-community-bg.jpg')}')}`
    }]}
    />
    <div className="home-page">
      
      <section className="index-section-hero">
        <div className="container">
          <div className="index-section-hero__content">
            <h1><span style={{color: '#EB1F2E', fontSize: '50%', fontStyle: 'italic'}}>Welcome to your</span><br /><span style={{textTransform: 'uppercase', fontStyle: 'italic', fontSize: '125%', fontWeight: '900'}}>Fitness Freedom</span></h1>
            <div className="line"></div>
            <div className="index-section-hero__content--text">
              <p>Get access to the best fitness facilities, fun events and a huge community rooting for you.</p>
              {/* <Link to="/download/" className="button">Download the app</Link> */}
              <p style={{color: '#EB1F2E', marginTop: '35px', marginBottom: '10px'}}>Start here:</p>
              <AppIcons btnClass="f-ai-index-hero" />
            </div>
          </div>
        </div>
      </section>

      <section className="index-section-pass">
        <div className="container">
          <div className="index-section-pass__items">
            <div className="index-section-pass__item">
              <img src={withPrefix('/static/fitato-discover.jpg')} alt=""/>
            </div>
            <div className="index-section-pass__item">
              <h2>Your One-Stop Fitness Solution</h2>
              <p>Pick from Yoga, Zumba, MMA, CrossFit, Swimming, Strength Training and plenty more.</p>
              <p>Workout in any of our 400+ fitness studios spread across Pune and Hyderabad — with one single Fitato Pass.</p>
              <p>Join us and be a part of our Fitness Revolution!</p>
              <Link to="/how-it-works/" className="button" style={{marginLeft: '0'}}>Learn how it works</Link>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="index-section-plans">
        <Plans />
      </section> */}

      {/* <div className="separator"><div className="container"></div></div>
      
      <section className="index-section-numbers">
        <div className="container">
          <h2>The numbers</h2>
          <div className="index-section-numbers__items">
            <div className="index-section-numbers__item">
              <p>Cities currently in: Pune, Hyderbad</p>
            </div>
            <div className="index-section-numbers__item">
              <p>Access to more than 300 gyms and fitness studios</p>
            </div>
            <div className="index-section-numbers__item">
              <p>5,000+ active Fitato members</p>
            </div>
            <div className="index-section-numbers__item">
              <p>1,000+ activities to choose from</p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="index-section-community">
        <div className="container">
          <div className="index-section-community__wrapper">
            <h2>More Than Just a Fitness Membership</h2>
            <p>You don't just get a fitness membership, you get a fitness community — The Fitato Community. Enjoy workouts, treking, dancing, sports, fitness, and much more together.</p>
            <p>Join the Fitato Community at Fitato Exclusive Events.</p>
          </div>
        </div>
      </section>

      <section className="index-section-join">
        <div className="container">
          <h2>Workout At The Best Fitness Studios<br />With Your Fitato Pass</h2>
          <p>Intrigued? Looking for more information on the Fitato exclusive events?<br />Let us arrange a call back from our team.</p>
          <MCForm formClass="f-cf-index-join" />
        </div>
      </section>

      <section className="index-section-partners">
        <div className="container">
          <div className="index-section-partners__wrapper">
            <div className="index-section-partners__left">
              <h2>Our Featured Facilities</h2>
            </div>
            <div className="index-section-partners__right">
              <div className="index-section-partners__items">
                <div className="index-section-partners__item">
                  <img src={withPrefix('/static/partners/featured/blitz-athletics.jpg')} alt="blitz athletics" title="Blitz Athletics"/>
                </div>
                <div className="index-section-partners__item">
                  <img src={withPrefix('/static/partners/featured/urbounce.jpg')} alt="urbounce" title="Urbounce"/>
                </div>
                <div className="index-section-partners__item">
                  <img src={withPrefix('/static/partners/featured/recomp.jpg')} alt="recomp fitness" title="Recomp Fitness"/>
                </div>
                <div className="index-section-partners__item">
                  <img src={withPrefix('/static/partners/featured/evolve-fitness.jpg')} alt="evolve fitness" title="Evolve Fitness"/>
                </div>
                <div className="index-section-partners__item">
                  <img src={withPrefix('/static/partners/featured/golds-gym.jpg')} alt="gold's gym" title="Gold's Gym"/>
                </div>
                <div className="index-section-partners__item">
                  <img src={withPrefix('/static/partners/featured/multifit.jpg')} alt="multifit" title="MultiFit"/>
                </div>
                <div className="index-section-partners__item">
                  <img src={withPrefix('/static/partners/featured/endure-fitness-club.jpg')} alt="endure fitness club" title="Endure Fitness Club"/>
                </div>
                <div className="index-section-partners__item">
                  <img src={withPrefix('/static/partners/featured/crossfit-graybar.jpg')} alt="crossfit graybar" title="Crossfit Graybar"/>
                </div>
                <div className="index-section-partners__item">
                  <img src={withPrefix('/static/partners/featured/talkwalkers.jpg')} alt="talkwalker's" title="Talkwalker's"/>
                </div>
                <div className="index-section-partners__item">
                  <p>...and many more.</p>
                </div>
              </div>
            </div>
          </div>
          <Link to="/partners/" className="button">Explore Facilities</Link>
        </div>
      </section>

      <div className="separator"><div className="container"></div></div>

      <section className="index-section-testimonials">
        <div className="container">
          <h2>What Our Members Have to Say</h2>
          <div className="index-section-testimonials__items">
            <div className="index-section-testimonials__item">
              <img src={withPrefix('/static/index/testimonials/vishesh.jpg')} alt="vishesh parashar" className="index-section-testimonials__item--img"/>
              <h4>Vishesh Parashar</h4>
              <p className="index-section-testimonials__item--review"><em>“It makes fitness fun &amp; flexible, being a sportsperson and adventure junkie I hated being tied down to a particular gym. With Fitato, it's like a new adventure waiting for you every day, sheer variety in fitness with a single pass.”</em></p>
            </div>
            <div className="index-section-testimonials__item">
              <img src={withPrefix('/static/index/testimonials/karen.jpg')} alt="karen jophy" className="index-section-testimonials__item--img" />
              <h4>Karen Jophy</h4>
              <p className="index-section-testimonials__item--review"><em>“Without the Fitato pass, I would never have been able to attend Pilates classes, Yoga studios or the other vastly available fitness options, that too at a very nominal price. Fitato makes it possible &amp; I have finally found activities I love.”</em></p>
            </div>
            <div className="index-section-testimonials__item">
              <img src={withPrefix('/static/index/testimonials/aninda.jpg')} alt="aninda verma" className="index-section-testimonials__item--img" />
              <h4>Aninda Verma</h4>
              <p className="index-section-testimonials__item--review"><em>“After paying gym fees for years and never getting my money's worth, I'm happy I can fit in workouts I want, when I want.”</em></p>
            </div>
          </div>
          <Link to="/reviews/" className="button-inverted" style={{marginTop: '20px'}}>Read more reviews</Link>
        </div>
      </section>

      <div className="separator"><div className="container"></div></div>

      <section className="index-section-media">
        <div className="container">
          {/* <div className="index-section-media___left">
            <h2>In The News</h2>
          </div> */}
          <div className="index-section-media__right">
            <div className="index-section-media__items">
              <a href="http://bwdisrupt.businessworld.in/article/Fitato-Aims-to-be-the-Umbrella-Brand-for-All-Niche-Fitness-Facilities-in-the-Country/14-02-2017-112929/" target="_blank" rel="noopener noreferrer nofollow">
                <img src={withPrefix('/static/index/media/businessworld.jpg')} alt="business world" />
              </a>
              <a href="http://www.indianweb2.com/2017/03/22/fitato-indias-classpass-fine-tuned-indian-market/" target="_blank" rel="noopener noreferrer nofollow">
                <img src={withPrefix('/static/index/media/indianweb2.jpg')} alt="indian web 2" />
              </a>
              <a href="https://yourstory.com/mystory/97218e7c14-i-need-2-minutes-of-your-time-this-is-for-us-" target="_blank" rel="noopener noreferrer nofollow">
                <img src={withPrefix('/static/index/media/yourstory.jpg')} alt="your story" />
              </a>
              <a href="http://www.iamwire.com/2017/02/fitato-story/148767" target="_blank" rel="noopener noreferrer nofollow">
                <img src={withPrefix('/static/index/media/iamwire.jpg')} alt="i am wire" />
              </a>
              <a href="http://www.letsintern.com/blog/weekly-spotlight-5-indian-start-ups-you-should-know-about-14/" target="_blank" rel="noopener noreferrer nofollow">
                <img src={withPrefix('/static/index/media/letsintern.jpg')} alt="lets intern" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="index-section-download">
        <DownloadSwipe btnClass="f-ai-index-download" />
      </section>

      <section className="index-section-callback">
        <div className="container">
          <div className="index-section-callback__wrapper">
            <h2>Still Not Sure? Speak to a Fitness Concierge</h2>
            <p>Fill out the form below and let us tailor a customized plan for you.</p>
            <div className="index-section-callback__form">
              <MCForm formClass="f-cf-index-speak" />
            </div>
          </div>
        </div>
      </section>

      <FooterInfo />
    </div>
    {/* <SignupPopup /> */}
  </Layout>
)

export default Next
