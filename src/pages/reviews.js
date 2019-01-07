import React from 'react'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby'
import GetStarted from '../partials/GetStarted'
import FooterInfo from '../partials/FooterInfo'
/* import SignupPopup from '../partials/SignupPopup' */
import Layout from '../components/index'

import '../css/reviews.css'

const ReviewsPage = () => (
  <Layout>
    <div className="reviews-page">
      <Helmet
        title="Fitato Reviews | Let's Hear From Our Users"
      >
        <meta name="description" content="We've already got thousands of people enjoying their fitato passes to the fullest. Let's hear from some of them!" />
        <meta itemprop="name" content="Fitato Reviews | Let's Hear From Our Users"/>
        <meta itemprop="description" content="We've already got thousands of people enjoying their fitato passes to the fullest. Let's hear from some of them!"/>
        <meta name="twitter:title" content="Fitato Reviews | Let's Hear From Our Users"/>
        <meta name="twitter:description" content="We've already got thousands of people enjoying their fitato passes to the fullest. Let's hear from some of them!"/>
        <meta property="og:title" content="Fitato Reviews | Let's Hear From Our Users"/>
        <meta property="og:description" content="We've already got thousands of people enjoying their fitato passes to the fullest. Let's hear from some of them!"/>
      </Helmet>
      <div className="reviews-page-header align-center" /* style={{backgroundImage: 'url(' + withPrefix('/static/reviews/reviews-header.jpg') + ')'}} */>
        <div className="container">
          <h1>Pune is in love with fitness</h1>
          <h2>One Pass | One Community</h2>
        </div>
      </div>
      <div className="reviews-page-content" /* style={{backgroundImage: 'url(' + withPrefix('/static/reviews/reviews-pattern.png') + ')'}} */>
        
        <div className="reviews-page-content__col">
          <div className="reviews-page-content__item">
            <img src={withPrefix('/static/reviews/chirag-patel.jpg')} alt="chirag patel" className="reviews-page-content__item--avatar" />
            <h3>Chirag Patel</h3>
            <p>“Great concept of accessing any gym/zumba/functional trainings in one pass. Miles to go and am sure it will get more and more popular across Pune hopefully in other cities soon”</p>
            <img src={withPrefix('/static/icons/comma.svg')} alt="comma" className="reviews-page-content__item--svg" />
          </div>
          <div className="reviews-page-content__item">
            <img src={withPrefix('/static/reviews/avatar-male.svg')} alt="fitato reviewer" className="reviews-page-content__item--avatar" />
            <h3>Ravi Kumar</h3>
            <p>"How good is fitato .. considering how limited and diverse each gym services are .. fitato made it possible to access them all from one place.. specially for people who are involved in different fitness & sports activities fitato is best thing they can use. You have raised the bar for fitness .. I would love to see fitato getting into organising social sports event for volleyball, basketball, swimming ( no cricket or football)... Especially for travellers who want to workout while hopping different cities this is the best place ... I don't see why I won't use fitato on my next visit back home .. Thanks for such a brilliant app . I hope it's just gets better and come"</p>
            <img src={withPrefix('/static/icons/comma.svg')} alt="comma" className="reviews-page-content__item--svg" />
          </div>
          <div className="reviews-page-content__item">
          <img src={withPrefix('/static/reviews/avatar-male.svg')} alt="fitato reviewer" className="reviews-page-content__item--avatar" />
            <h3>Anurag Mishra</h3>
            <p>“The customer support was really helpful with one of my issues. Although the no in the app and the invoice doesn't work, the contact details in Google search work fine. I love the app. :)”</p>
            <img src={withPrefix('/static/icons/comma.svg')} alt="comma" className="reviews-page-content__item--svg" />
          </div>
          <div className="reviews-page-content__item">
          <img src={withPrefix('/static/reviews/avatar-female.svg')} alt="fitato reviewer" className="reviews-page-content__item--avatar" />
            <h3>Sneha Goyal</h3>
            <p>“Excellent concept and execution.Love the flexibility to try and experience a number of quality gyms and fitness studios that fitato offers at such minimal rates. Hats off to the fitato customer relationship team who managed to partner with a gym suggested by me within a week's time”</p>
            <img src={withPrefix('/static/icons/comma.svg')} alt="comma" className="reviews-page-content__item--svg" />
          </div>
        </div>

        <div className="reviews-page-content__col">
          <div className="reviews-page-content__item">
            <img src={withPrefix('/static/reviews/karen-jophy.jpg')} alt="karen jophy" className="reviews-page-content__item--avatar" />
            <h3>Karen Jophy</h3>
            <p>“Without the  Fitato pass, I would never have been able to attend Pilates classes, Yoga studios or the other vastly available fitness options, that too at a very nominal price. Fitato makes it possible & I have finally found activities I love”</p>
            <img src={withPrefix('/static/icons/comma.svg')} alt="comma" className="reviews-page-content__item--svg" />
          </div>
          <div className="reviews-page-content__item">
          <img src={withPrefix('/static/reviews/avatar-male.svg')} alt="fitato reviewer" className="reviews-page-content__item--avatar" />
            <h3>Piyush Kulkarni</h3>
            <p>“It is best app for someone like me...! I wish u go to all big cities of India so that i can be fit when i will be at outstation most of the times in Chennai, Banglore, Mumbai and NCR.., Keep it up guys gr8 idea and gr8 work.,”</p>
            <img src={withPrefix('/static/icons/comma.svg')} alt="comma" className="reviews-page-content__item--svg" />
          </div>
          <div className="reviews-page-content__item">
            <img src={withPrefix('/static/reviews/ashvin.jpg')} alt="ashvin bhandare" className="reviews-page-content__item--avatar" />
            <h3>Ashvin Bhandare</h3>
            <p>“Have enrolled for the app since a month in Pune. Excellent customer service by Karan. Every week I access about 4 activities - gym, swimming, functional training and spinning. Its definitely worth it.”</p>
            <img src={withPrefix('/static/icons/comma.svg')} alt="comma" className="reviews-page-content__item--svg" />
          </div>
          <div className="reviews-page-content__item">
            <img src={withPrefix('/static/reviews/vishesh.jpg')} alt="vishesh parahshar" className="reviews-page-content__item--avatar" />
            <h3>Vishesh Parahshar</h3>
            <p>“It makes fitness fun &amp; flexible, being a sportsperson and adventure junkie I hated being tied down to a particular gym. With Fitato, it's like a new adventure waiting for you every day, sheer variety in fitness with a single pass”</p>
            <img src={withPrefix('/static/icons/comma.svg')} alt="comma" className="reviews-page-content__item--svg" />
          </div>
        </div>
        
        <div className="reviews-page-content__col">
          <div className="reviews-page-content__item">
            <img src={withPrefix('/static/reviews/aninda-verma.jpg')} alt="aninda verma" className="reviews-page-content__item--avatar" />
            <h3>Aninda Verma</h3>
            <p>“After paying gym fees for years and never getting my money's worth, I'm happy I can fit in workouts I want, when I want”</p>
            <img src={withPrefix('/static/icons/comma.svg')} alt="comma" className="reviews-page-content__item--svg" />
          </div>
          <div className="reviews-page-content__item">
            <img src={withPrefix('/static/reviews/mansi.jpg')} alt="mansi kapdia" className="reviews-page-content__item--avatar" />
            <h3>Mansi Kapdia</h3>
            <p>“I got to know about this app from my very good friend Rutusha, when she told me you can go to any possible gym near your area I was like wow ! I tried and explored all the possible options near my area in Pune. The best part is the people associated with Fitato Saransh, Aditya and Divyanshu and are very cooperative and will provide you with all the possible information required. I chose the flexi pass option which was the best according to my time and need. All the best Guys I hope you come up with other cities soon so one can get the best out of the fitness clubs and gyms and help ppl to stay fit and healthy”</p>
            <img src={withPrefix('/static/icons/comma.svg')} alt="comma" className="reviews-page-content__item--svg" />
          </div>
          <div className="reviews-page-content__item">
            <img src={withPrefix('/static/reviews/foram.jpg')} alt="foram mehta" className="reviews-page-content__item--avatar" />
            <h3>Foram Mehta</h3>
            <p>“My problem is I hate doing the same work out every single day and fitato is the solution to it. Everyday I can go do different activities in my area without having to worry about getting bored of the same activity. I love the fact that Fitato has tie-ups with the best gyms and fitness studios.”</p>
            <img src={withPrefix('/static/icons/comma.svg')} alt="comma" className="reviews-page-content__item--svg" />
          </div>

        </div>
        
      </div>
      <GetStarted />
      <FooterInfo />
    </div>
    {/* <SignupPopup /> */}
  </Layout>
)

export default ReviewsPage
