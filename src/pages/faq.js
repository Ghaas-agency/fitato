import React from 'react'
import { Link, withPrefix } from 'gatsby'
import Helmet from 'react-helmet'
import { Accordion, AccordionItem } from 'react-sanfona'
import Layout from '../components/index-app'
import '../css/faq.css'

const FAQPage = () => (
    <Layout>
      <Helmet
        title="Frequently Asked Questions | Fitato"
      >
        <meta name="description" content="Resolve your doubts related to registrations, memberships, pass activation, how it works, facility queries and pass types." />
        <meta itemprop="name" content="Frequently Asked Questions | Fitato"/>
        <meta itemprop="description" content="Resolve your doubts related to registrations, memberships, pass activation, how it works, facility queries and pass types."/>
        <meta name="twitter:title" content="Frequently Asked Questions | Fitato"/>
        <meta name="twitter:description" content="Resolve your doubts related to registrations, memberships, pass activation, how it works, facility queries and pass types."/>
        <meta property="og:title" content="Frequently Asked Questions | Fitato"/>
        <meta property="og:description" content="Resolve your doubts related to registrations, memberships, pass activation, how it works, facility queries and pass types."/>
        <link rel="canonical" href="https://www.fitato.fit/faqs/"/>
      </Helmet>
      <div className="faq-page" style={{paddingTop: '50px', paddingBottom: '50px'}}>
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Let&apos;s help you step by step.</p>
          <Accordion>
  
            <AccordionItem title="What is Fitato? What do I buy?" titleTag="h4" className="accordion-item" expandedClassName="accordion-item-active">
              <img src={withPrefix('/static/fitato-one-pass-to-all.jpg')} alt="fitato one pass to all" />
              <p>Fitato is a single fitness pass that gives you access to workout at over 250 gyms &amp; fitness studios around Pune. We have partnered with studios providing activities like CrossFit, Zumba, Yoga, MMA, Swimming, and many more apart from your regular gym. Through the Fitato pass, you can go to the gym one day, yoga the other, swimming on the weekend or whichever way you like, without having to pay extra anywhere.</p>
            </AccordionItem>
            <AccordionItem title="What are the benefits of Fitato over any other fitness membership?" titleTag="h4" className="accordion-item" expandedClassName="accordion-item-active">
              <p>Out of the people who buy yearly gym memberships, 90% of them drop out within a month, primarily because of boredom and lack of motivation. Fitato on the other hand believes in making fitness fun and achievable through short terms goals. For this purpose, we have partnered with a variety of fitness activities all around the city so that you never get bored while also making sure that our passes are more affordable.</p>
              <p>#MakeFitnessYourPlayground</p>
            </AccordionItem>
            <AccordionItem title="Where do I buy the Fitato Membership from?" titleTag="h4" className="accordion-item" expandedClassName="accordion-item-active">
              <p>You can activate your pass by <Link to="/download/">downloading the Fitato app</Link> from the Google Playstore or App Store.</p>
              <ol>
                <li><Link to="/download/a">Download the Fitato App</Link></li>
                <li>Signup / Login through Facebook</li><li>Browse partner facilities &amp; timings</li>
                <li>The "Home Screen " has a "Buy Pass" section, click on it</li>
                <li>Select the membership that suits you</li><li>Pay via Debit/Credit Card, Net Banking or Mobile Wallets</li>
                <li>Your pass will be activated, just reserve an activity &amp; give your "Check In Code" at the facility</li>
                <li>Check In code is at the top right corner in the profile section of the app</li>
              </ol>
              <p>You have revolutionised fitness now.</p>
            </AccordionItem>
            <AccordionItem title="What kind of memberships does Fitato offer?" titleTag="h4" className="accordion-item" expandedClassName="accordion-item-active">
              <p>We have 4 different types of passes:</p>
              <ol>
                <li>One Week All Access Pass – Gives you work out access at all our partner gyms and studios for 7 days</li>
                <li>Flexi All Access Pass - Gives you work out access at all our partner gyms and studios for 10 sessions that are valid for a period of 30 days</li>
                <li>Monthly All Access Pass - Gives you work out access at all our partner gyms and studios for 30 days</li>
                <li>Quarterly All Access Pass - Gives you work out access at all our partner gyms and studios for 90 days</li>
              </ol>
            </AccordionItem>
            <AccordionItem title="How does the Fitato pass work? How do I reserve an activity?" titleTag="h4" className="accordion-item" expandedClassName="accordion-item-active">
              <p>Your Fitato pass is activated the moment you purchase it on the app. Follow these simple steps to successfully reserve your workout:</p>
              <ol>
                <li>Select the category of workout you want to do.</li>
                <li>You will see a list of Gyms/Studios offering that workout, click one the one you like.</li>
                <li>Click On "Reserve Workout" button and you are good to go.</li>
                <li>Give your "Access Code" in the "Profile Section" of the app at the facility counter.</li>
              </ol>
            </AccordionItem>
            <AccordionItem title="Can I Cancel an activity after reserving it?" titleTag="h4" className="accordion-item" expandedClassName="accordion-item-active">
              <p>Yes, you can cancel an activity any time before the scheduled class ends. To cancel an activity - Click on the “Calendar Icon” on the app to see your upcoming reservations and press “Cancel Reservation” on the activity that you want to cancel.</p>
            </AccordionItem>
            <AccordionItem title="Is it necessary to reserve an activity every time I go for a workout?" titleTag="h4" className="accordion-item" expandedClassName="accordion-item-active">
              <p>Reserving an activity helps Fitato and our partners keep a track of your workouts at different places and therefore it is compulsory to make a booking prior to each workout. We strongly recommend booking at least 4-6 hours prior to an activity so that we can update you in case of a class cancellation. However, the Fitato app lets you book a class as early as 7 days in advance and as late as 5 minutes before a class. It also gives you an option to book a class for each of the upcoming 7 days at once, just scroll on the dates on top of each activity.</p>
            </AccordionItem>
            <AccordionItem title="Can I buy a pass now and activate it later?" titleTag="h4" className="accordion-item" expandedClassName="accordion-item-active">
              <p>In case you want to buy your Fitato pass or have already bought it, but want to activate it on a later date, please get in touch with our Customer Relations Executive at <a href="tel:+918448448546">+91 8448448546</a> or write to us at <a href="mailto:connect@fitato.fit">connect@fitato.fit</a></p>
            </AccordionItem>
            <AccordionItem title="Can I go to any class, any number of times?" titleTag="h4" className="accordion-item" expandedClassName="accordion-item-active">
              <p>Most of the classes and places on the app can be visited any number of times through the Fitato pass. Only a few of our partners have a limited monthly access, which has been mentioned in the description of these classes on the app. Note that you can only book up to 1 class in a day.</p>
            </AccordionItem>
            <AccordionItem title="What is Fitato’s refund policy?" titleTag="h4" className="accordion-item" expandedClassName="accordion-item-active">
              <p>Fitato does not initiate refunds under any circumstances.</p>
            </AccordionItem>
            <AccordionItem title="Can the fitato membership be frozen or put on hold?" titleTag="h4" className="accordion-item" expandedClassName="accordion-item-active">
              <p>No, you cannot put your fitato membership oh hold or pause it.</p>
            </AccordionItem>
            <AccordionItem title="How does Fitato referral & wallet work? I want my friends to experience Fitato." titleTag="h4" className="accordion-item" expandedClassName="accordion-item-active">
              <p>Step 1</p>
              <p>Head to the profile section of your app and share your referral code with friends via WhatsApp, SMS or Email. First step to building your clan.</p>
              <p>Step 2</p>
              <p>When your buddy purchases using your code, the both of you get a 20% Fitato cashback. Your friend also gets a 20% off on their first pass. Your clan is now ready!</p>
              <p>Step 3</p>
              <p>You can use 50% of you Fitato wallet balance on subsequent purchases and turn fitness into the lifestyle that you have always wanted.</p>
              <p>*Valid only for new users.</p>
            </AccordionItem>
            <AccordionItem title="Can my friends/relatives use my pass on my behalf?" titleTag="h4" className="accordion-item" expandedClassName="accordion-item-active">
              <p>Fitato passes are non-transferrable from one person to another and therefore can’t be used by your friends, relatives, etc.</p>
            </AccordionItem>
            <AccordionItem title="I want a particular studio to be listed on Fitato. Is it possible?" titleTag="h4" className="accordion-item" expandedClassName="accordion-item-active">
              <p>Yes Absolutely, Just tell us the name and location of this facility by mailing us on <a href="mailto:partners@fitato.fit">partners@fitato.fit</a> or contacting us on <a href="tel:+917875152685">+91 7875152685</a> and we will try our best to make them part of the Fitato family.</p>
            </AccordionItem>
  
          </Accordion>

          <style dangerouslySetInnerHTML={{
            __html: `.accordion-item>h4::before,.accordion-item>h3::before{content: url('${withPrefix('/static/icons/arrow-down.svg')}');}.accordion-item-active>h4::before,.accordion-item-active>h3::before{content: url('${withPrefix('/static/icons/arrow-up.svg')}');}`
            }}>
          </style>
        </div>
      </div>
    </Layout>
  )

export default FAQPage
