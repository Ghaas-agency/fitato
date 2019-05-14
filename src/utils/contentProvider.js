import React from 'react';
import { Link, withPrefix } from 'gatsby';

export function getFaqs() {
  return [
    {
      id: 1,
      title: 'What is Fitato? What do I get?',
      content: (
        <>
          <img
            src={withPrefix('/static/fitato-one-pass-to-all.jpg')}
            alt="Fitato one pass to fitness"
          />
          <p>
            Fitato is a single fitness pass that gives you access to workout at
            over 400 gyms &amp; fitness studios around Pune and Hyderabad. We
            have partnered with studios providing activities like CrossFit,
            Zumba, Yoga, MMA, Swimming, and many more activities along with your
            regular gym. Through the Fitato pass, you can go to the gym one day,
            yoga the other, swimming on the weekend or whichever way you like,
            without having to pay extra anywhere.
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
            motivation. Fitato, on the other hand, believes in making fitness
            fun and achievable through short term goals. For this purpose, we
            have partnered with a variety of fitness activities all around the
            city so that you never get bored while also making sure that our
            passes are more affordable.
          </p>
          <p>#MakeFitnessYourPlayground</p>
        </>
      ),
    },
    {
      id: 3,
      title: 'How can I get a Fitato Membership?',
      content: (
        <>
          <p>
            You can activate your pass by&nbsp;
            <Link to="/download/">downloading the Fitato app</Link>
            from the Google Play Store or App Store.
          </p>
          <ol>
            <li>
              <Link to="/download/">Download the Fitato App</Link>
            </li>
            <li>Signup / Login through Facebook</li>
            <li>Browse partner facilities &amp; timings</li>
            <li>
              The &quot;Home Screen&quot; has a &quot;Buy Pass&quot; section,
              click on it
            </li>
            <li>Select the membership that suits you</li>
            <li>Pay via Debit/Credit Card, Net Banking or Mobile Wallets</li>
            <li>
              Your pass will be activated, just reserve an activity &amp; give
              your &quot;Check In Code&quot; at the facility
            </li>
            <li>
              Check-in code is at the top right corner in the profile section of
              the app
            </li>
          </ol>
          <p>You have revolutionised fitness now.</p>
        </>
      ),
    },
    {
      id: 4,
      title: 'What are the different membership plans offered by Fitato?',
      content: (
        <>
          <p>We have 4 different types of passes:</p>
          <ol>
            <li>
              Flexi All Access Pass - Gives you work out access at all our
              partner gyms and studios for 10 sessions, valid for a period of 30
              days
            </li>
            <li>
              Monthly All-Access Pass - Gives you workout access to all our
              partner gyms and studios for 30 days
            </li>
            <li>
              Monthly All-Access Pass - Gives you workout access to all our
              partner gyms and studios for 30 days
            </li>
            <li>
              Quarterly All-Access Pass - Gives you workout access to all our
              partner gyms and studios for 90 days
            </li>
          </ol>
        </>
      ),
    },
    {
      id: 5,
      title: 'How many sessions can I take in a day?',
      content: <p>You can take one session per day.</p>,
    },
    {
      id: 6,
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
              on the facility you wish to workout at.
            </li>
            <li>
              Click On &quot;Reserve Workout&quot; button and you are good to
              go.
            </li>
            <li>
              Give your &quot;Access Code&quot; in the &quot;Profile
              Section&quot; of the app at the facility counter.
            </li>
          </ol>
        </>
      ),
    },
    {
      id: 7,
      title: 'Can I cancel an activity after reserving it?',
      content: (
        <p>
          Yes, you can cancel an activity anytime before the scheduled class
          ends. To cancel an activity - Click on the “Calendar Icon” on the app
          to see your upcoming reservations and press “Cancel Reservation” on
          the activity that you want to cancel.
        </p>
      ),
    },
    {
      id: 8,
      title:
        'Is it necessary to reserve an activity every time I go for a workout?',
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
      id: 9,
      title: 'Can I buy a pass now and activate it later?',
      content: (
        <p>
          In case you want to buy your Fitato pass and start on a later date of
          your choice, please get in touch with our Customer Relations Executive
          at +91 8866763239 so that they can guide you through it. Do not
          purchase it from the app. A pass bought from the app gets activated
          from that date itself.
        </p>
      ),
    },
    {
      id: 10,
      title: 'Can I go to any class, any number of times?',
      content: (
        <p>
          As long as you take one session a day, you can attend as many
          activities(any number of times) as you wish with a single pass across
          all our partner studios. However, barely 10% of our partners limit the
          number of activities to 10-15 in a month in order to ensure that the
          membership does not challenge their existing membership model. This is
          mentioned in the description of these classes on the app. This also
          ensures that Fitato membership is not used as a cheaper getaway to
          facilities which have a much higher membership cost.
        </p>
      ),
    },
    {
      id: 11,
      title: 'What is Fitato’s refund policy?',
      content: <p>Fitato does not initiate refunds under any circumstances.</p>,
    },
    {
      id: 12,
      title: 'Can the fitato membership be frozen or put on hold?',
      content: (
        <p>No, you cannot put your fitato membership oh hold or pause it.</p>
      ),
    },
    {
      id: 13,
      title:
        'How does Fitato referral & wallet work? I want my friends to experience Fitato.',
      content: (
        <>
          <p>
            To understand all about Fitato Referrals,&nbsp;
            <Link to="/how-to-refer/">check here.</Link>
          </p>
        </>
      ),
    },
    {
      id: 14,
      title: 'Can my friends/relatives use my pass on my behalf?',
      content: (
        <p>
          Fitato passes are non-transferrable from one person to another and
          therefore can’t be used by your friends, relatives, etc.
        </p>
      ),
    },
    {
      id: 15,
      title:
        'I want a particular studio to be listed on Fitato. Is it possible?',
      content: (
        <p>
          Yes Absolutely, Just tell us the name and location of this facility by
          emailing us on&nbsp;
          <a href="mailto:partners@fitato.fit">partners@fitato.fit</a>
          &nbsp;or contacting us on&nbsp;
          <a href="tel:+917875152685">+91 7875152685</a>
          &nbsp;and we will try our best to make them part of the Fitato family.
        </p>
      ),
    },
    {
      id: 16,
      title: 'Can I buy a pass using my Fitato wallet money?',
      content: (
        <p>
          You can use your 50% of your wallet money on every transaction you
          make on our app. So yes, you can buy a pass using your wallet money.
        </p>
      ),
    },
  ];
}

export function getPricingFaqs() {
  return [
    {
      id: 1,
      title: 'What is Fitato’s refund policy?',
      content: <p>Fitato does not initiate refunds under any circumstances.</p>,
    },
    {
      id: 2,
      title: 'Can the Fitato membership be frozen or put on hold?',
      content: (
        <p>No, you cannot put your Fitato membership on hold or pause it.</p>
      ),
    },
    {
      id: 3,
      title: 'Can I buy a pass now and activate it later?',
      content: (
        <p>
          In case you want to buy your Fitato pass and start on a later date of
          your choice, please get in touch with our Customer Relations Executive
          at&nbsp;
          <a href="tel:+918866763239">+91 8866763239</a>
          &nbsp;so that they can guide you through it. Do not purchase it from
          the app. A pass bought from the app gets activated from that date
          itself.
        </p>
      ),
    },
    {
      id: 4,
      title: 'What is a Fitato Wallet?',
      content: (
        <p>
          Fitato wallet is a digital wallet in which cashback from referrals and
          our offers is credited which you can later use to buy Fitato
          membership.
        </p>
      ),
    },
    {
      id: 5,
      title: 'Can I buy a pass using my Fitato wallet money?',
      content: (
        <p>
          You can use your 50% of your wallet money on every transaction you
          make on our app. So yes, you can buy a pass using your wallet money.
        </p>
      ),
    },
  ];
}
