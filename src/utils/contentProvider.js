import React from 'react'
import { Link, withPrefix } from 'gatsby'

export function getFaqs() {
  return [
    {
      id: 1,
      title: 'What is Fitato? What do I buy?',
      content: (
        <>
          <img
            src={withPrefix('/static/fitato-one-pass-to-all.jpg')}
            alt="fitato one pass to all"
          />
          <p>
            Fitato is a single fitness pass that gives you access to workout at
            over 250 gyms &amp; fitness studios around Pune. We have partnered
            with studios providing activities like CrossFit, Zumba, Yoga, MMA,
            Swimming, and many more apart from your regular gym. Through the
            Fitato pass, you can go to the gym one day, yoga the other, swimming
            on the weekend or whichever way you like, without having to pay
            extra anywhere.
          </p>
        </>
      ),
    },
    {
      id: 2,
      title:
        'What are the benefits of Fitato over any other fitness membership?',
      content: (
        <>
          <p>
            Out of the people who buy yearly gym memberships, 90% of them drop
            out within a month, primarily because of boredom and lack of
            motivation. Fitato on the other hand believes in making fitness fun
            and achievable through short terms goals. For this purpose, we have
            partnered with a variety of fitness activities all around the city
            so that you never get bored while also making sure that our passes
            are more affordable.
          </p>
          <p>#MakeFitnessYourPlayground</p>
        </>
      ),
    },
    {
      id: 3,
      title: 'Where do I buy the Fitato Membership from?',
      content: (
        <>
          <p>
            You can activate your pass by{' '}
            <Link to="/download/">downloading the Fitato app</Link> from the
            Google Playstore or App Store.
          </p>
          <ol>
            <li>
              <Link to="/download/">Download the Fitato App</Link>
            </li>
            <li>Signup / Login through Facebook</li>
            <li>Browse partner facilities &amp; timings</li>
            <li>The "Home Screen " has a "Buy Pass" section, click on it</li>
            <li>Select the membership that suits you</li>
            <li>Pay via Debit/Credit Card, Net Banking or Mobile Wallets</li>
            <li>
              Your pass will be activated, just reserve an activity &amp; give
              your "Check In Code" at the facility
            </li>
            <li>
              Check In code is at the top right corner in the profile section of
              the app
            </li>
          </ol>
          <p>You have revolutionised fitness now.</p>
        </>
      ),
    },
    {
      id: 4,
      title: 'What kind of memberships does Fitato offer?',
      content: (
        <>
          <p>We have 4 different types of passes:</p>
          <ol>
            <li>
              One Week All Access Pass – Gives you work out access at all our
              partner gyms and studios for 7 days
            </li>
            <li>
              Flexi All Access Pass - Gives you work out access at all our
              partner gyms and studios for 10 sessions that are valid for a
              period of 30 days
            </li>
            <li>
              Monthly All Access Pass - Gives you work out access at all our
              partner gyms and studios for 30 days
            </li>
            <li>
              Quarterly All Access Pass - Gives you work out access at all our
              partner gyms and studios for 90 days
            </li>
          </ol>
        </>
      ),
    },
    {
      id: 5,
      title: 'How does the Fitato pass work? How do I reserve an activity?',
      content: (
        <>
          <p>
            Your Fitato pass is activated the moment you purchase it on the app.
            Follow these simple steps to successfully reserve your workout:
          </p>
          <ol>
            <li>Select the category of workout you want to do.</li>
            <li>
              You will see a list of Gyms/Studios offering that workout, click
              one the one you like.
            </li>
            <li>Click On "Reserve Workout" button and you are good to go.</li>
            <li>
              Give your "Access Code" in the "Profile Section" of the app at the
              facility counter.
            </li>
          </ol>
        </>
      ),
    },
    {
      id: 6,
      title: 'Can I Cancel an activity after reserving it?',
      content: (
        <p>
          Yes, you can cancel an activity any time before the scheduled class
          ends. To cancel an activity - Click on the “Calendar Icon” on the app
          to see your upcoming reservations and press “Cancel Reservation” on
          the activity that you want to cancel.
        </p>
      ),
    },
    {
      id: 7,
      title: 'Can I Cancel an activity after reserving it?',
      content: (
        <p>
          Reserving an activity helps Fitato and our partners keep a track of
          your workouts at different places and therefore it is compulsory to
          make a booking prior to each workout. We strongly recommend booking at
          least 4-6 hours prior to an activity so that we can update you in case
          of a class cancellation. However, the Fitato app lets you book a class
          as early as 7 days in advance and as late as 5 minutes before a class.
          It also gives you an option to book a class for each of the upcoming 7
          days at once, just scroll on the dates on top of each activity.
        </p>
      ),
    },
    {
      id: 8,
      title: 'Can I buy a pass now and activate it later?',
      content: (
        <p>
          In case you want to buy your Fitato pass or have already bought it,
          but want to activate it on a later date, please get in touch with our
          Customer Relations Executive at{' '}
          <a href="tel:+918448448546">+91 8448448546</a> or write to us at{' '}
          <a href="mailto:connect@fitato.fit">connect@fitato.fit</a>
        </p>
      ),
    },
    {
      id: 9,
      title: 'Can I go to any class, any number of times?',
      content: (
        <p>
          Most of the classes and places on the app can be visited any number of
          times through the Fitato pass. Only a few of our partners have a
          limited monthly access, which has been mentioned in the description of
          these classes on the app. Note that you can only book up to 1 class in
          a day.
        </p>
      ),
    },
    {
      id: 10,
      title: 'What is Fitato’s refund policy?',
      content: <p>Fitato does not initiate refunds under any circumstances.</p>,
    },
    {
      id: 11,
      title: 'Can the fitato membership be frozen or put on hold?',
      content: (
        <p>No, you cannot put your fitato membership oh hold or pause it.</p>
      ),
    },
    {
      id: 12,
      title:
        'How does Fitato referral & wallet work? I want my friends to experience Fitato.',
      content: (
        <>
          <p>Step 1</p>
          <p>
            Head to the profile section of your app and share your referral code
            with friends via WhatsApp, SMS or Email. First step to building your
            clan.
          </p>
          <p>Step 2</p>
          <p>
            When your buddy purchases using your code, the both of you get a 20%
            Fitato cashback. Your friend also gets a 20% off on their first
            pass. Your clan is now ready!
          </p>
          <p>Step 3</p>
          <p>
            You can use 50% of you Fitato wallet balance on subsequent purchases
            and turn fitness into the lifestyle that you have always wanted.
          </p>
          <p>*Valid only for new users.</p>
        </>
      ),
    },
    {
      id: 13,
      title: 'Can my friends/relatives use my pass on my behalf?',
      content: (
        <p>
          Fitato passes are non-transferrable from one person to another and
          therefore can’t be used by your friends, relatives, etc.
        </p>
      ),
    },
    {
      id: 14,
      title:
        'I want a particular studio to be listed on Fitato. Is it possible?',
      content: (
        <p>
          Yes Absolutely, Just tell us the name and location of this facility by
          mailing us on{' '}
          <a href="mailto:partners@fitato.fit">partners@fitato.fit</a> or
          contacting us on <a href="tel:+917875152685">+91 7875152685</a> and we
          will try our best to make them part of the Fitato family.
        </p>
      ),
    },
    {
      id: 15,
      title: 'How many activities can I attend with a pass?',
      content: (
        <p>
          You can attend as many activities as you wish with a single pass
          across all our partner studios as long as it is one session a day.
          However, barely 10% of our partners limit the number of activities to
          10-15 in a month in order to ensure that the membership does not
          challenge their existing membership model. This also ensures that
          Fitato membership is not used as a cheaper getaway to facilities which
          have a much higher membership cost.
        </p>
      ),
    },
  ]
}
