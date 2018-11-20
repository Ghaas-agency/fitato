import React from 'react'
import { Link, withPrefix } from 'gatsby'
import Helmet from 'react-helmet'
import FooterInfo from '../partials/FooterInfo'
import AppIcons from '../partials/AppIcons'
import Plans from '../partials/Plans'
import MCForm from '../partials/MailChimpForm'
import DownloadSwipe from '../partials/DownloadSwipe'
import SignupPopup from '../partials/SignupPopup'
import Layout from '../components/index'
import '../css/index.css'

const HomePage = () => (
  <Layout>
    <Helmet title="Fitato&reg;: Fitness for the Intelligent Indian" />
    <div className="home-page">
      
      <div className="index-section-hero">
        <div className="container">
          <div className="index-section-hero__content">
            <h1><span style={{color: '#EB1F2E', fontSize: '50%', fontStyle: 'italic'}}>Welcome to your</span><br /><span style={{textTransform: 'uppercase', fontStyle: 'italic', fontSize: '125%', fontWeight: '900'}}>Fitness Freedom</span></h1>
            <div className="line"></div>
            <div className="index-section-hero__content--text">
              <p>The best fitness facilities, fun events and a huge community rooting for you.</p>
              {/* <Link to="/download/" className="button">Download the app</Link> */}
              <p style={{color: '#EB1F2E', marginTop: '35px', marginBottom: '10px'}}>Start here:</p>
              <AppIcons btnClass="f-ai-index-hero" />
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `.index-section-hero {background-image: url('${withPrefix('/static/fitato-home-hero-bg.jpg')}')}@media (max-width: 767px) {.index-section-hero {background-image: url('${withPrefix('/static/fitato-home-hero-bg-mobile.jpg')}')}}`
      }}/>

      <div className="index-section-pass" /* style={{backgroundImage: 'url(' + withPrefix('/static/gradient-bg.png') + ')'}} */>
        <div className="container">
          <div className="align-center">
            <h2>Your One-Stop Fitness Solution</h2>
          </div>
          <div>
            <p>Take your pick from Yoga, Zumba, MMA, CrossFit, Swimming, Strength Training and plenty more.</p>
            <p>Workout in any of our 300+ fitness studios spread across your city with one single Fitato Pass. Everything at the cost of one membership.</p>
            <p>Fitato is the most holistic approach to fitness out there! Join us and be a part of our Fitness Revolution!</p>
            <Link to="/partners/" className="button" style={{marginLeft: '0'}}>Explore our Facilities</Link>
          </div>
        </div>
      </div>

      <div className="index-section-join">
        <div className="container">
          <h2>Workout At The Best Fitness Studios<br />With Your Fitato Pass</h2>
          <p>Do you want a guide to the best fitness studios near you?<br />Just put in your details and we’ll get back to you with a personalized fitness plan!</p>
          <MCForm formClass="f-cf-index-join" />
        </div>
      </div>

      <div className="index-section-how"/*  style={{backgroundImage: 'url(' + withPrefix('/static/index/index-section-how.webp') + ')'}} */>
        <div className="container">
          <h2>How It Works</h2>
          <div className="index-section-how__steps">
            <div className="index-section-how__step">
              <img src={withPrefix('/static/index/section-four-1.png')} height="450" width="auto" alt="fitato app membership screenshot" />
              <h3>Get a Fitato Membership</h3>
              <p>Click on the 'Buy Pass' button on the home screen of the app. Choose a membership plan, pay for it and you're good to go.</p>
            </div>
            <div className="index-section-how__step">
              <img src={withPrefix('/static/index/section-four-2.png')} height="450" width="auto" alt="fitato app activities screenshot" />
              <h3>Choose Your Adventure</h3>
              <p>Scroll through our categories, and choose your choice of workout. Pick from the Highest Rated Gyms, MMA, Zumba and much more.</p>
            </div>
            <div className="index-section-how__step">
              <img src={withPrefix('/static/index/section-four-3.png')} height="450" width="auto" alt="fitato app reserve screenshot" />
              <h3>Reserve Your Activity</h3>
              <p>Reserve the activity and you’ll get an access code. Share that code at the facility you’re visiting, and that’s it. You’re ready to sweat it out!</p>
            </div>
          </div>
          <AppIcons btnClass="f-ai-index-how" />
        </div>
      </div>

      <div className="index-section-plans">
        <Plans />
      </div>

      <div className="index-section-partners">
        <div className="container">
          <h2 className="align-center">One Pass - Limitless Possibilities</h2>
          <h3 style={{fontWeight: 'normal', textAlign: 'center'}}>#FitatoTrending</h3>
          <div className="index-section-partners__items">
            <div className="index-section-partners__item">
              <img src={withPrefix('/static/index/partners/evolve-fitness.jpg')} alt="evolve fitness" />
              <p>Evolve Fitness, Wanowrie<br />Gym: 6AM - 11PM<br /><span className="red">95 Fitato Clan Members Going</span></p>
            </div>
            <div className="index-section-partners__item">
              <img src={withPrefix('/static/index/partners/recomp.jpg')} alt="recomp" />
              <p>Recomp Fitness, Koregaon Park<br />Gym: 6AM - 11PM<br /><span className="red">97 Fitato Clan Members Going</span></p>
            </div>
            <div className="index-section-partners__item">
              <img src={withPrefix('/static/index/partners/multifit.jpg')} alt="multifit" />
              <p>MultiFit, Pimple Nilakh<br />Functional Training: 8PM - 9PM<br /><span className="red">33 Fitato Clan Members Going</span></p>
            </div>
            <div className="index-section-partners__item hide-in-small">
              <img src={withPrefix('/static/index/partners/blitz.jpg')} alt="blitz athletics" />
              <p>Blitz Athletics, Baner<br />Mixed Martial Arts: 6:30PM - 7:30PM<br /><span className="red">21 Fitato Clan Members Going</span></p>
            </div>
            <div className="index-section-partners__item hide-in-small">
              <img src={withPrefix('/static/index/partners/crossfit.jpg')} alt="crossfit graybar" />
              <p>CrossFit Graybar, Chandan Nagar<br />Crossfit: 7AM - 11AM<br /><span className="red">11 Fitato Clan Members Going</span></p>
            </div>
            <div className="index-section-partners__item hide-in-small">
              <img src={withPrefix('/static/index/partners/firstfitt.jpg')} alt="firstfitt" />
              <p>FirstFitt, Viman Nagar<br />Gym &amp; Circuit Training: 6AM - 11PM<br /><span className="red">123 Fitato Clan Members Going</span></p>
            </div>
            <div className="index-section-partners__item hide-in-small">
              <img src={withPrefix('/static/index/partners/capoeira.jpg')} alt="capoeira pune" />
              <p>Capoeira Pune, Kalyani Nagar<br />Mixed Martial Arts: 7:45PM - 8:45PM<br /><span className="red">7 Fitato Clan Members Going</span></p>
            </div>
            <div className="index-section-partners__item hide-in-small">
              <img src={withPrefix('/static/index/partners/shree.jpg')} alt="shree gym" />
              <p>Shree Gym, Chandan Nagar<br />Swimming: 7AM - 9PM<br /><span className="red">21 Fitato Clan Members Going</span></p>
            </div>
          </div>
          <div className="align-center">
            <h4 style={{fontWeight: 'normal'}}>1000+ Fitness Activities - One Pass To All</h4>
            <Link to="/partners/" className="button-inverted">View all our facilities</Link>
          </div>
        </div>
      </div>

      <div className="index-section-testimonials">
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
      </div>

      <div className="index-section-media">
        <div className="container">
          <h2>In The News</h2>
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

      <div className="index-section-download">
        <DownloadSwipe btnClass="f-ai-index-download" />
      </div>

      <div className="index-section-callback">
        <div className="container">
          <h2>Still Not Sure? Speak to a Fitness Concierge</h2>
          <p>Fill out the form below and let us tailor a customized plan for you.</p>
          <div className="index-section-callback__form">
            <MCForm formClass="f-cf-index-speak" />
          </div>
        </div>
      </div>

      <FooterInfo />
    </div>
    <SignupPopup />
  </Layout>
)

export default HomePage
