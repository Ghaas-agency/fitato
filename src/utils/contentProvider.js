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
            &nbsp;from the Google Play Store or App Store.
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
              Bi-Monthly All-Access Pass - Gives you workout access to all our
              partner gyms and studios for 60 days
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
          at +91 8448448546 so that they can guide you through it. Do not
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
          <a href="tel:+919872456125">+91 9872456125</a>
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
    {
      id: 17,
      title: 'Can the Fitato Partners change after I purchase the membership?',
      content: (
        <p>
          Yes, our fitness partners may change over time. We keep adding new
          partners to the list, to expand the choices available to you.
          Sometimes existing partners may also be temporarily removed due to
          their business constraints or if we&apos;re working with them to
          ensure a seamless experience for members.
        </p>
      ),
    },
    {
      id: 18,
      title: 'Can the facility timings for activities and sessions change?',
      content: (
        <p>
          We regularly update the timings for classes, sessions and group
          activities on the app to ensure that you have a comfortable
          experience. However, there is a slight possibility that certain
          last-minute update timings are not conveyed by the facilities. In such
          a case, we&apos;d recommend you call the facility before confirming a
          session, especially group classes and activities.
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
          <a href="tel:+918448448546">+91 8448448546</a>
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

export function getIndexReviews() {
  return [
    {
      id: 1,
      name: 'Vishesh Parashar',
      imgSrc: '/static/index/testimonials/vishesh.jpg',
      content: (
        <>
          &quot;It makes fitness fun &amp; flexible, being a sports person and
          adventure junkie I hated being tied down to a particular gym. With
          Fitato, it&apos;s like a new adventure waiting for you every day,
          sheer variety in fitness with a single pass.&quot;
        </>
      ),
    },
    {
      id: 2,
      name: 'Karen Jophy',
      imgSrc: '/static/index/testimonials/karen.jpg',
      content: (
        <>
          &quot;The thing I love the most about Fitato is their community
          events. Fitato Exclusive Events are so fun and exciting. I try to be a
          part of all of them. From treks, friendly sport matches, games to yoga
          carnivals, rock-climbing workshops, they have it all. They are the
          favorite part of my weekends.&quot;
        </>
      ),
    },
    {
      id: 3,
      name: 'Aninda Verma',
      imgSrc: '/static/index/testimonials/aninda.jpg',
      content: (
        <>
          &quot;After paying gym fees for years and never getting my
          money&apos;s worth, I&apos;m happy I can fit in workouts I want, when
          I want.&quot;
        </>
      ),
    },
  ];
}

export function getIndexActivities() {
  return [
    {
      id: 1,
      title: 'Spinning',
      imgSrc: '/static/index/activities/spinning.png',
    },
    {
      id: 2,
      title: 'Gym',
      imgSrc: '/static/index/activities/gym.png',
    },
    {
      id: 3,
      title: 'Yoga',
      imgSrc: '/static/index/activities/yoga.png',
    },
    {
      id: 4,
      title: 'Meditation',
      imgSrc: '/static/index/activities/meditation.png',
    },
    {
      id: 5,
      title: 'Community Events',
      imgSrc: '/static/index/activities/community.png',
    },
    {
      id: 6,
      title: 'Swimming',
      imgSrc: '/static/index/activities/swimming.png',
    },
    {
      id: 7,
      title: 'Zumba',
      imgSrc: '/static/index/activities/zumba.png',
    },
    {
      id: 8,
      title: 'MMA',
      imgSrc: '/static/index/activities/mma.png',
    },
  ];
}

export function getIndexPartners() {
  return [
    {
      id: 1,
      title: 'Blitz Athletics',
      imgSrc: '/static/partners/featured/blitz-athletics.jpg',
    },
    {
      id: 2,
      title: 'Urbounce',
      imgSrc: '/static/partners/featured/urbounce.jpg',
    },
    {
      id: 3,
      title: 'Recomp Fitness',
      imgSrc: '/static/partners/featured/recomp.jpg',
    },
    {
      id: 4,
      title: 'Fitso Seals',
      imgSrc: '/static/partners/featured/fitso-seals.png',
    },
    {
      id: 5,
      title: <>Gold&apos;s Gym</>,
      imgSrc: '/static/partners/featured/golds-gym.jpg',
    },
    {
      id: 6,
      title: 'MultiFit',
      imgSrc: '/static/partners/featured/multifit.jpg',
    },
    {
      id: 7,
      title: 'Endure Fitness Club',
      imgSrc: '/static/partners/featured/endure-fitness-club.jpg',
    },
    {
      id: 8,
      title: 'Crossfit Graybar',
      imgSrc: '/static/partners/featured/crossfit-graybar.jpg',
    },
    {
      id: 9,
      title: <>Talkwalker&apos;s</>,
      imgSrc: '/static/partners/featured/talkwalkers.jpg',
    },
  ];
}

export function getIndexMedia() {
  return [
    {
      id: 1,
      href:
        'http://bwdisrupt.businessworld.in/article/Fitato-Aims-to-be-the-Umbrella-Brand-for-All-Niche-Fitness-Facilities-in-the-Country/14-02-2017-112929/',
      imgSrc: '/static/index/media/businessworld.jpg',
      title: 'Business World',
    },
    {
      id: 2,
      href:
        'http://www.indianweb2.com/2017/03/22/fitato-indias-classpass-fine-tuned-indian-market/',
      imgSrc: '/static/index/media/indianweb2.jpg',
      title: 'Indian Web 2',
    },
    {
      id: 3,
      href:
        'https://yourstory.com/mystory/97218e7c14-i-need-2-minutes-of-your-time-this-is-for-us-',
      imgSrc: '/static/index/media/yourstory.jpg',
      title: 'Your Story',
    },
    {
      id: 4,
      href: 'http://www.iamwire.com/2017/02/fitato-story/148767',
      imgSrc: '/static/index/media/iamwire.jpg',
      title: 'I Am Wire',
    },
    {
      id: 5,
      href:
        'http://www.letsintern.com/blog/weekly-spotlight-5-indian-start-ups-you-should-know-about-14/',
      imgSrc: '/static/index/media/letsintern.jpg',
      title: <>Let&apos;s Intern</>,
    },
  ];
}

export function getPartners() {
  return {
    pune: [
      {
        id: 0,
        title: 'Viman Nagar',
        src: '/static/partners/pune/viman-nagar.jpg',
      },
      {
        id: 1,
        title: 'Kalyani Nagar',
        src: '/static/partners/pune/kalyani-nagar.jpg',
      },
      {
        id: 2,
        title: 'Koregaon Park',
        src: '/static/partners/pune/koregaon-park.jpg',
      },
      {
        id: 3,
        title: 'Shivaji Nagar, Deccan, Law Road',
        src:
          '/static/partners/pune/shivaji-nagar-deccan-and-law-college-road.jpg',
      },
      {
        id: 4,
        title: 'Aundh',
        src: '/static/partners/pune/aundh.jpg',
      },
      {
        id: 5,
        title: 'Baner',
        src: '/static/partners/pune/baner.jpg',
      },
      {
        id: 6,
        title: 'Kothrud',
        src: '/static/partners/pune/kothrud.jpg',
      },
      {
        id: 7,
        title: 'Kondhwa',
        src: '/static/partners/pune/kondhwa.jpg',
      },
      {
        id: 8,
        title: 'Wanowrie & Camp',
        src: '/static/partners/pune/wanowrie-and-camp.jpg',
      },
      {
        id: 9,
        title: 'Pimpri Chinchwad',
        src: '/static/partners/pune/pimpri-chinchwad.jpg',
      },
      {
        id: 10,
        title: 'Pimple Saudagar',
        src: '/static/partners/pune/pimple-saudagar.jpg',
      },
      {
        id: 11,
        title: 'Wakad and Hinjewadi',
        src: '/static/partners/pune/wakad-and-hinjewadi.jpg',
      },
      {
        id: 12,
        title: 'Kharadi and Hadapsar',
        src: '/static/partners/pune/kharadi-and-hadapsar.jpg',
      },
      {
        id: 13,
        title: 'City Areas and Satara Road',
        src: '/static/partners/pune/city-areas-and-satara-road.jpg',
      },
      {
        id: 14,
        title: 'Sinhagadh Road and Nanded City',
        src: '/static/partners/pune/sinhagadh-road-and-nanded-city.jpg',
      },
    ],
    hyderabad: [
      {
        id: 0,
        title: 'Banjara Hills',
        src: '/static/partners/hyderabad/banjara-hills.jpg',
      },
      {
        id: 1,
        title: 'Jubilee Hills',
        src: '/static/partners/hyderabad/jubilee-hills.jpg',
      },
      {
        id: 2,
        title: 'Madhapur 1',
        src: '/static/partners/hyderabad/madhapur.jpg',
      },
      {
        id: 3,
        title: 'Madhapur 2',
        src: '/static/partners/hyderabad/madhapur2.jpg',
      },
      {
        id: 4,
        title: 'Kondapur',
        src: '/static/partners/hyderabad/kondapur.jpg',
      },
      {
        id: 5,
        title: 'Gachibowli',
        src: '/static/partners/hyderabad/gachibowli.jpg',
      },
      {
        id: 6,
        title: 'Tolichowki',
        src: '/static/partners/hyderabad/tolichowki.jpg',
      },
      {
        id: 7,
        title: 'Kukatpally',
        src: '/static/partners/hyderabad/kukatpally.jpg',
      },
      {
        id: 8,
        title: 'KPHB',
        src: '/static/partners/hyderabad/kphb.jpg',
      },
      {
        id: 9,
        title: 'Miyapur',
        src: '/static/partners/hyderabad/miyapur.jpg',
      },
      {
        id: 10,
        title: 'Ameerpet',
        src: '/static/partners/hyderabad/ameerpet.jpg',
      },
      {
        id: 11,
        title: 'Maredpally & Kharkhana',
        src: '/static/partners/hyderabad/maredpally-kharkhana.jpg',
      },
      {
        id: 12,
        title: 'Uppal, Tarnaka & Begumpet',
        src: '/static/partners/hyderabad/uppal-tarnaka-begumpet.jpg',
      },
      {
        id: 13,
        title: 'Sri Nagar Colony',
        src: '/static/partners/hyderabad/sri-nagar-colony.jpg',
      },
      {
        id: 14,
        title: 'Manikonda',
        src: '/static/partners/hyderabad/manikonda.jpg',
      },
      {
        id: 15,
        title: 'Somajiguda & Himayat Nagar',
        src: '/static/partners/hyderabad/somajiguda-himayat-nagar.jpg',
      },
      {
        id: 16,
        title: 'Sainikpuri & Tirumulgherry',
        src: '/static/partners/hyderabad/sainikpuri-tirumulgherry.jpg',
      },
      {
        id: 17,
        title: 'Suchitra, Kompally & Alwal',
        src: '/static/partners/hyderabad/suchitra-kompally-alwal.jpg',
      },
      {
        id: 18,
        title: 'Attapur & Rethibowli',
        src: '/static/partners/hyderabad/attapur-rethibowli.jpg',
      },
      {
        id: 19,
        title: 'Other Areas',
        src: '/static/partners/hyderabad/other.jpg',
      },
    ],
  };
}
