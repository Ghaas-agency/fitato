import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/index-app'
import '../css/college.css'
// import SocialLinks from '../partials/SocialLinks'

const CollegePage = () => (
  <Layout>
    <div className="college-page">
      <Helmet
        title="College Program | Fitato"
      >
        <meta name="description" content="" />
      </Helmet>
      
      <section className="college-hero">
        <div className="container">
          <h1>Lead The Fitness Revolution On Your Campus</h1>
          <p>Become a #FitatoCampusChampion</p>
        </div>
      </section>

      <section className="college-who">
        <div className="container">
          <h2>Who is a <span className="red">#FitatoCampusChampion?</span></h2>
          <p>Fitato Campus Champions would be the college ambassadors for Fitato. Their primary role is to spread awareness about Fitato and get the maximum people associate with it.</p>
        </div>
      </section>

      <section className="college-what">
        <div className="container">
          <h2>What would a <span className="red">#FitatoCampusChampion</span> do?</h2>
          <div className="college-what__items">
            <div className="college-what__item">
              <h3>On-ground activation</h3>
              <p>The champion has to get on-ground activations. This includes:</p>
              <ol>
                <li>Getting people to download the Fitato App</li>
                <li>Ensuring downloads convert to Fitato membership purchase</li>
              </ol>
            </div>
            <div className="college-what__item">
              <h3>Social media campaign</h3>
              <p>The champion will also lead the #fitato campaign in their own way. This includes:</p>
              <ol>
                <li>Sharing fitness related content on social media platforms</li>
                <li>Using the hashtags <span className="red">#campuschampion</span> and <span className="red">#fitato</span> rigorously</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="college-be">
        <div className="container">
          <h2>Who can be a <span className="red">#FitatoCampusChampion</span>?</h2>
          <p>A campus champion should be an active college student with a strong passion for fitness and a desire to make people’s lives healthier. The student should be available for two months (December and January).</p>
        </div>
      </section>

      <section className="college-get">
        <div className="container">
          <h2>What will a <span className="red">#FitatoCampusChampion</span> get?</h2>
          <div className="college-get__items">
            <div className="college-get__item">
              <h3>Champion Powers</h3>
              <ul>
                <li>Access to exclusive promo codes for generating purchases.</li>
                <li>Access to a CRM system to track and manage workflow.</li>
                <li>Access to all Fitato partner facilities with a free Fitato membership.</li>
              </ul>
            </div>
            <div className="college-get__item">
              <h3>Champion Privileges</h3>
              <ul>
                <li>Free Fitato merchandise like T-shirts, gym bags, bands, badges, sippers and more.</li>
                <li>Commission on the sales generated.</li>
                <li>Experience letter to boost your resume.</li>
                <li>Supersonic passes for top performers of each month.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="college-signup">
        <div className="container">
          <p>If you think you have what it takes, then sign up here.</p>
          <span className="button-inverted">Sign up now</span>
        </div>
      </section>

    </div>
  </Layout>
)

export default CollegePage
