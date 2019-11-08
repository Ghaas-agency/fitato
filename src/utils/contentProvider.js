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

export const partnersImages = {
  pune: [
    'multifit',
    'urbounce',
    'recomp',
    'golds-gym',
    'talwalkars',
    'firstfitt',
  ],
  hyderabad: [
    'functional45',
    'chisel',
    'fitso-seals',
    'golds-gym',
    'beats',
    'anahata',
  ],
};

export const partners = {
  pune: [
    {
      id: 1,
      facilityName: '40DegreeStudio, Hot Yoga',
      locality: 'Viman Nagar',
      activities: 'Hot Yoga',
    },
    {
      id: 2,
      facilityName: 'A.K Group Griffines Swimming Training Centre',
      locality: 'Yerwada',
      activities: 'Swimming',
    },
    {
      id: 3,
      facilityName: 'AadinathYoga Studio',
      locality: 'Pashan',
      activities: 'Yoga',
    },
    {
      id: 4,
      facilityName: 'Aarogya Siddhi Yog',
      locality: 'Aundh',
      activities: 'Yoga',
    },
    {
      id: 5,
      facilityName: 'Abstract Moodz In Choreo Dance Academy',
      locality: 'Kharadi',
      activities: 'Zumba,Freestyle',
    },
    {
      id: 6,
      facilityName: 'Acronym Fitness',
      locality: 'Pimple Nilakh',
      activities: 'Gym,Zumba,MMA',
    },
    {
      id: 7,
      facilityName: 'Adwita Yoga & Meditation Centre',
      locality: 'Kondhwa',
      activities: 'Yoga',
    },
    {
      id: 8,
      facilityName: "Ady's Gym",
      locality: 'Baner',
      activities: 'Gym,Zumba,Yoga,Funtional,Core,HIIT',
    },
    {
      id: 9,
      facilityName: 'Air Life Studio',
      locality: 'Aundh',
      activities: 'Gym',
    },
    {
      id: 10,
      facilityName: "Amar's Dance Fit Studio",
      locality: 'Hadapsar',
      activities: '',
    },
    {
      id: 11,
      facilityName: 'Amida Fitness Club,Sihagad Road',
      locality: 'Sinhagad Road',
      activities: 'Yoga, Zumba',
    },
    {
      id: 12,
      facilityName: 'Anahat Yoga',
      locality: 'New Sanghvi',
      activities: 'Yoga',
    },
    {
      id: 13,
      facilityName: 'Angels Fitness Club',
      locality: 'Nigdi',
      activities: 'Gym,Zumba,Funtional,Yoga',
    },
    {
      id: 14,
      facilityName: 'Apple Fitness',
      locality: 'Sinhagad Road',
      activities: 'Gym,Aerobics,Functional,Spinning,MMA,Core',
    },
    {
      id: 15,
      facilityName: 'ARS Fitness Club',
      locality: 'Wanowrie',
      activities: 'Gym,Core,Yoga,Zumba',
    },
    {
      id: 16,
      facilityName: 'Art4Fun',
      locality: 'Aundh',
      activities: 'Zumba,Freestyle,Pilates,Yoga',
    },
    {
      id: 17,
      facilityName: 'Artangle Studio',
      locality: 'Baner',
      activities: 'Zumba',
    },
    {
      id: 18,
      facilityName: 'Balanced Bodies',
      locality: 'Pimple Saudagar',
      activities: 'Yoga',
    },
    {
      id: 19,
      facilityName: 'Beat Busters',
      locality: 'Hinjewadi',
      activities: 'Zumba',
    },
    {
      id: 20,
      facilityName: 'Being Fit',
      locality: 'Nigdi',
      activities: 'Gym',
    },
    {
      id: 21,
      facilityName: "Being Fit'n'Fine",
      locality: 'Bhosari',
      activities: 'Gym,Functional,Yoga,Zumba,Core',
    },
    {
      id: 22,
      facilityName: 'Body Fuel',
      locality: 'Kothrud',
      activities: 'Gym,Zumba,Functional,MMA,Dance',
    },
    {
      id: 23,
      facilityName: 'Body Guru',
      locality: 'Ghorpadi',
      activities: 'Gym,Yoga,Dance',
    },
    {
      id: 24,
      facilityName: 'BodyPower Studio',
      locality: 'Wanowrie',
      activities: 'Gym,Zumba,Yoga,Core,Functional,MMA',
    },
    {
      id: 25,
      facilityName: 'Cadence Indoor Cycling',
      locality: 'Kothrud',
      activities: 'Spinning',
    },
    {
      id: 26,
      facilityName: 'Capoeira Brasil Pune',
      locality: 'Kalyani Nagar',
      activities: 'MMA',
    },
    {
      id: 27,
      facilityName: 'Chaithanya Yog',
      locality: 'Kothrud',
      activities: 'Yoga',
    },
    {
      id: 28,
      facilityName: "Champion's Aquatic Club",
      locality: 'Shivajinagar',
      activities: 'Swimming',
    },
    {
      id: 29,
      facilityName: "Cheatan's Danza",
      locality: 'Pimple Saudagar',
      activities: 'Dance',
    },
    {
      id: 30,
      facilityName: 'Club 29',
      locality: 'Wakad',
      activities: 'Gym,Swimming',
    },
    {
      id: 31,
      facilityName: 'Core Fitness, Viman Nagar',
      locality: 'Viman Nagar',
      activities: 'Gym,Yoga,Functional,Zumba',
    },
    {
      id: 32,
      facilityName: 'CoreYourGraph',
      locality: 'Kharadi',
      activities: 'Functional,Tabata,Core',
    },
    {
      id: 33,
      facilityName: 'Dance Floor Studio',
      locality: 'Pimple Saudagar',
      activities: 'Zumba,Dance',
    },
    {
      id: 34,
      facilityName: 'Dancing Devils Dance Studio',
      locality: 'Wakad',
      activities: 'Zumba,Dance',
    },
    {
      id: 35,
      facilityName: 'DanzoFit',
      locality: 'Kalyani Nagar',
      activities: 'Zumba',
    },
    {
      id: 36,
      facilityName: 'Defense Sports Academy',
      locality: 'Pimpri Chinchwad (Nigdi)',
      activities: 'MMA,Yoga,Meditation',
    },
    {
      id: 37,
      facilityName: 'Dot Fit',
      locality: 'Baner',
      activities: 'Gym,Yoga,Functional,Core,Zumba,Aerobics',
    },
    {
      id: 38,
      facilityName: 'Dot Fit, Pimple Nilakh',
      locality: 'Pimple Nilakh',
      activities: 'Gym,Yoga,Functional',
    },
    {
      id: 39,
      facilityName: "Dr Kavita's Yoga",
      locality: 'Baner',
      activities: 'Yoga',
    },
    {
      id: 40,
      facilityName: 'Elite fitness club',
      locality: 'Katraj',
      activities: 'Gym,Yoga,Functional',
    },
    {
      id: 41,
      facilityName: 'Empower Gym & Zumba Fitness',
      locality: 'Wanowrie',
      activities: 'Yoga,Gym,Functional',
    },
    {
      id: 42,
      facilityName: 'Endure Fitness Club',
      locality: 'Satara Road',
      activities: 'Gym,Yoga,MMA,Tabata,Functional,Animal Flow',
    },
    {
      id: 43,
      facilityName: 'ENDURE FITNESS CLUB AMBEGAON',
      locality: 'Ambegaon',
      activities: 'Gym,Yoga,Core,Zumba,Tabata,Animal Flow',
    },
    {
      id: 44,
      facilityName: 'Energy Fitness Club',
      locality: 'Kondhwa',
      activities: 'Gym',
    },
    {
      id: 45,
      facilityName: 'Evolv Fitness',
      locality: 'Pimple Saudagar',
      activities: 'Zumba,Toning',
    },
    {
      id: 46,
      facilityName: 'F3 Fit Lounge',
      locality: 'Kharadi',
      activities: 'Gym,Zumba,Yoga,Core,Aerobics,Dance',
    },
    {
      id: 47,
      facilityName: 'Fab & Fit Aerobics',
      locality: 'Hinjewadi',
      activities: 'Aerobics',
    },
    {
      id: 48,
      facilityName: 'FCS',
      locality: 'Kothrud',
      activities: 'Functional',
    },
    {
      id: 49,
      facilityName: 'First Fitt, Dhanori',
      locality: 'Dhanori',
      activities: 'Gym,Yoga,Functional,Core,Fusion',
    },
    {
      id: 50,
      facilityName: 'First Fitt, Viman Nagar',
      locality: 'Viman Nagar',
      activities: 'Gym,Spinning,Functional,Dance,Yoga,Pilates',
    },
    {
      id: 51,
      facilityName: 'Fit 7 By M.S. Dhoni',
      locality: 'Vishrantwadi',
      activities: 'Gym,Functional,Yoga,Aerobics,Crossfit,Core,Tabata',
    },
    {
      id: 52,
      facilityName: 'Fit Freak Gym',
      locality: 'Aundh',
      activities: 'Gym,Zumba,Core,Functiconal,Yoga',
    },
    {
      id: 53,
      facilityName: 'FitBeingz',
      locality: 'Camp',
      activities: 'Zumba,Yoga,Core,MMA,Gym',
    },
    {
      id: 54,
      facilityName: 'Fitbox 2X Fitness',
      locality: 'Pimpri Chinchwad',
      activities: 'Yoga,Functional,Gym',
    },
    {
      id: 55,
      facilityName: 'Fitbox Gym, Sangvi',
      locality: 'New Sanghvi',
      activities: 'Gym',
    },
    {
      id: 56,
      facilityName: 'Fitness 365',
      locality: 'Kothrud',
      activities: 'Gym,Zumba,Yoga,Functional,MMA,Kickboxing',
    },
    {
      id: 57,
      facilityName: 'Fitness Craze',
      locality: 'PCMC',
      activities: 'Gym,Zumba,Yoga,Functional',
    },
    {
      id: 58,
      facilityName: 'Fitness Factory',
      locality: 'Pimple Saudagar',
      activities: 'Gym,Yoga,Zumba,Core',
    },
    {
      id: 59,
      facilityName: 'Fitness Factory, Kharadi',
      locality: 'Kharadi',
      activities: 'Gym,Yoga,Aerobics,Core,Functional,Cycling,MMA',
    },
    {
      id: 60,
      facilityName: 'Fitness Fera',
      locality: 'Baner',
      activities: 'Zumba',
    },
    {
      id: 61,
      facilityName: 'Fitness Forever',
      locality: 'Wadgaon Sheri',
      activities: 'Gym',
    },
    {
      id: 62,
      facilityName: 'FITNESS PLUS',
      locality: 'Hadapsar',
      activities: 'Gym',
    },
    {
      id: 63,
      facilityName: 'Fitranger Gym',
      locality: 'Kothrud',
      activities: 'Gym,Functional ,Yoga,Core,Dance',
    },
    {
      id: 64,
      facilityName: 'Flames School of Dance',
      locality: 'Viman Nagar',
      activities: 'Zumba,Kathak,Free Dance',
    },
    {
      id: 65,
      facilityName: 'Folk Fitness with Ketaki',
      locality: 'Shukrawar Peth',
      activities: 'Folk Fitness,Zumba',
    },
    {
      id: 66,
      facilityName: 'Folk Fitness with Nivedita',
      locality: 'Kothrud',
      activities: 'Folk Fitness',
    },
    {
      id: 67,
      facilityName: 'Freedom Fitness',
      locality: 'Pimple Saudagar',
      activities: 'Gym,Yoga,Zumba,Core,Aerobics,Functional',
    },
    {
      id: 68,
      facilityName: 'Funk and Fusion Dance Academy',
      locality: 'Aundh',
      activities: 'Dance,Zumba',
    },
    {
      id: 69,
      facilityName: 'Funky Feet Dance Academy',
      locality: 'Kothrud',
      activities: 'Zumba',
    },
    {
      id: 70,
      facilityName: 'G J FITNESS',
      locality: 'NIBM',
      activities: 'Gym',
    },
    {
      id: 71,
      facilityName: "Gold's Gym Moshi",
      locality: 'Moshi',
      activities: 'Gym',
    },
    {
      id: 72,
      facilityName: "Gold's Gym Wakad",
      locality: 'Wakad',
      activities: 'Gym,Zumba,Tabata,Core,Functional,Circuit Training,Dance',
    },
    {
      id: 73,
      facilityName: "Gold's Gym, Akurdi",
      locality: 'Akurdi',
      activities: 'Gym,Piloxing,Zumba,Functional,Aerobics,Pound',
    },
    {
      id: 74,
      facilityName: "Gold's Gym, Hinjawadi",
      locality: 'Hinjewadi',
      activities: 'Gym,Zumba,Spinning,Core,Functional,Circuit Training,Dance',
    },
    {
      id: 75,
      facilityName: "Gold's Gym,Model Colony",
      locality: 'Model Colony',
      activities: 'Gym,Yoga,Functional,MMA,Spinning',
    },
    {
      id: 76,
      facilityName: 'Golden Fitness Club',
      locality: 'Akurdi',
      activities: 'Gym,Zumba,Crossfit',
    },
    {
      id: 77,
      facilityName: 'GrayBar',
      locality: 'Viman Nagar',
      activities: 'Crossfit',
    },
    {
      id: 78,
      facilityName: 'GT Fitness Club',
      locality: 'Shivajinagar',
      activities: 'Gym',
    },
    {
      id: 79,
      facilityName: 'Gym Town',
      locality: 'Pimpri Chinchwad',
      activities: 'Gym,Zumba,Yoga',
    },
    {
      id: 80,
      facilityName: 'Harmony Aquatic Club',
      locality: 'Kothrud',
      activities: 'Swimming',
    },
    {
      id: 81,
      facilityName: 'Health Mantra Fitness',
      locality: 'Wakad',
      activities: 'Gym,Aerobics',
    },
    {
      id: 82,
      facilityName: 'HighFit Fitness Club',
      locality: 'Wakad',
      activities: 'Gym,Core,Yoga,Zumba,Functional,Dance',
    },
    {
      id: 83,
      facilityName: 'HighFit Fitness Club Balewadi',
      locality: 'Baner',
      activities: 'Gym,Core,Yoga,Zumba,Functional',
    },
    {
      id: 84,
      facilityName: 'HighFit Fitness New Sangvi',
      locality: 'New Sanghvi',
      activities: 'Gym',
    },
    {
      id: 85,
      facilityName: 'Impulse Fitness',
      locality: 'Kondhwa',
      activities: 'Gym,Yoga,Zumba,Functional',
    },
    {
      id: 86,
      facilityName: 'Indian Martial Art Training centre',
      locality: 'Shukrawar Peth',
      activities: 'MMA',
    },
    {
      id: 87,
      facilityName: 'Infinity Fitness',
      locality: 'New Sanghvi',
      activities: 'Gym,Zumba,Core,Aerobics',
    },
    {
      id: 88,
      facilityName: 'Kaizen Wellness & Fitness Club, Swargate',
      locality: 'Swargate',
      activities: 'Gym',
    },
    {
      id: 89,
      facilityName: 'Kaizen Wellness & Fitness, Wakad',
      locality: 'Wakad',
      activities: 'Gym,Aerobics,Dance,Zumba,Functional',
    },
    {
      id: 90,
      facilityName: "Kaizen's Wellness & Fitness, Kondhwa",
      locality: 'Kondhwa',
      activities: 'Gym',
    },
    {
      id: 91,
      facilityName: "Kalamkar's Health Club",
      locality: 'Wakad',
      activities: 'Gym',
    },
    {
      id: 92,
      facilityName: 'KettleBell Gym',
      locality: 'Kothrud',
      activities: 'Gym,Functional',
    },
    {
      id: 93,
      facilityName: 'Khalsa Gym & Swimming',
      locality: 'Viman Nagar',
      activities: 'Gym,Swimming,',
    },
    {
      id: 94,
      facilityName: 'Kiran Dagade Sports Complex',
      locality: 'Bavdhan',
      activities: 'Gym,Functional,Tennis',
    },
    {
      id: 95,
      facilityName: 'KLVSP Boxing Club',
      locality: 'Bhawani Peth',
      activities: 'Boxing',
    },
    {
      id: 96,
      facilityName: 'La Fit',
      locality: 'Camp',
      activities: 'Gym,Zumba,Yoga,Aerobics',
    },
    {
      id: 97,
      facilityName: 'La Fit Satara Road',
      locality: 'Satara Road',
      activities: 'Gym,Zumba,Yoga,Core',
    },
    {
      id: 98,
      facilityName: 'Latin Dreamers Dance Project',
      locality: 'Koregaon Park',
      activities: 'Zumba',
    },
    {
      id: 99,
      facilityName: "Let's Burn The Fitness hub",
      locality: 'Wadgaon Sheri',
      activities: 'Gym,Functional,Crossfit',
    },
    {
      id: 100,
      facilityName: 'LifePro Fitness',
      locality: 'Pashan',
      activities: 'Gym,Aerobics,Functional,Yoga,Zumba',
    },
    {
      id: 101,
      facilityName: 'Lions MMA Club',
      locality: 'Baner',
      activities: 'MMA',
    },
    {
      id: 102,
      facilityName: 'LyfeFit',
      locality: 'Kothrud',
      activities: 'Spinning',
    },
    {
      id: 103,
      facilityName: 'LyfeFit Outdoor Training',
      locality: 'Karve Nagar',
      activities: 'Functional',
    },
    {
      id: 104,
      facilityName: 'Maximus Your Fitness Zone',
      locality: 'Pimpri Chinchwad',
      activities: 'Gym,Yoga,Zumba,Aerobics',
    },
    {
      id: 105,
      facilityName: 'MetaFit, Pimple Saudagar',
      locality: 'Pimple Saudagar',
      activities: 'Gym,Yoga,Aerobics,Zumba,Functional',
    },
    {
      id: 106,
      facilityName: 'Metafit, Wakad',
      locality: 'Wakad',
      activities: 'Gym,Yoga,Aerobics,Zumba,Functional',
    },
    {
      id: 107,
      facilityName: 'Metrocity Fitness Hub',
      locality: 'Kothrud',
      activities: 'Zumba,Yoga,Dance,MMA',
    },
    {
      id: 108,
      facilityName: 'Metrocity Sports and Health Club',
      locality: 'Kothrud',
      activities: 'Gym,Swimming,Tennis,Zumba',
    },
    {
      id: 109,
      facilityName: 'Metrocity Sports Club',
      locality: 'Kothrud',
      activities: 'Tennis',
    },
    {
      id: 110,
      facilityName: 'MK Fitness',
      locality: 'Mundhwa',
      activities: 'Gym,Aerobics,Dance,Kickboxing,Core',
    },
    {
      id: 111,
      facilityName: 'Movementoe The Dance Illusion Power Garba',
      locality: 'Wakad',
      activities: 'Power Garba',
    },
    {
      id: 112,
      facilityName: 'Movez Dance & Fitness Studio',
      locality: 'Wakad',
      activities: 'Zumba,Dance,Yoga,Functional',
    },
    {
      id: 113,
      facilityName: 'Mrudang Dance Academy',
      locality: 'Kothrud',
      activities: 'Dance',
    },
    {
      id: 114,
      facilityName: 'MultiFit Baner',
      locality: 'Baner',
      activities: 'Functional',
    },
    {
      id: 115,
      facilityName: 'Multifit Sinhagad Road',
      locality: 'Sinhagad Road',
      activities: 'Functional',
    },
    {
      id: 116,
      facilityName: 'MultiFit Viman Nagar',
      locality: 'Viman Nagar',
      activities: 'Gym,Functional,Zumba,Yoga,Spinning,Dance',
    },
    {
      id: 117,
      facilityName: 'MultiFit, Satara Road',
      locality: 'Satara Road',
      activities: 'Functional',
    },
    {
      id: 118,
      facilityName: 'Muscle Time Fitness',
      locality: 'Pimple Gaurav',
      activities: 'Gym,Yoga,Zumba,Dance,Core',
    },
    {
      id: 119,
      facilityName: 'Nanashree Fitness Club',
      locality: 'Wagholi',
      activities: 'Gym',
    },
    {
      id: 120,
      facilityName: 'Natraj Studio',
      locality: 'Viman Nagar',
      activities: 'Dance,Zumba',
    },
    {
      id: 121,
      facilityName: "Niranjan's Transformation Studio",
      locality: 'Kothrud',
      activities: 'Functional',
    },
    {
      id: 122,
      facilityName: "Niranjan's Transformtion Studio 2.0",
      locality: 'Kothrud',
      activities: 'Functional',
    },
    {
      id: 123,
      facilityName: 'Nucleus Fitness',
      locality: 'Kharadi',
      activities: 'Gym,Yoga,Spinning,Core,Functional',
    },
    {
      id: 124,
      facilityName: 'O Yoga Universal',
      locality: 'Koregaon Park',
      activities: 'Yoga',
    },
    {
      id: 125,
      facilityName: 'Om Studio',
      locality: 'Shivajinagar',
      activities: 'Yoga,Areial Yoga',
    },
    {
      id: 126,
      facilityName: 'On 8 Inc',
      locality: 'NIBM',
      activities: 'Dance',
    },
    {
      id: 127,
      facilityName: 'Orient Combat Arts',
      locality: 'Koregaon Park',
      activities: 'MMA',
    },
    {
      id: 128,
      facilityName: 'Orion Fitness',
      locality: 'Sinhagad Road',
      activities: 'Gym,Aerobics,Functional',
    },
    {
      id: 129,
      facilityName: 'P40X',
      locality: 'Shivajinagar',
      activities: 'Functional,Yoga',
    },
    {
      id: 130,
      facilityName: 'Paradise Fitness Club',
      locality: 'Hadapsar',
      activities: 'Gym,Yoga,Zumba',
    },
    {
      id: 131,
      facilityName: 'Passion Fitness',
      locality: 'Aundh',
      activities: 'Gym,Zumba,Yoga',
    },
    {
      id: 132,
      facilityName: 'Pause n Learn Yoga studio',
      locality: 'Kharadi',
      activities: 'Yoga',
    },
    {
      id: 133,
      facilityName: 'Ph Prime Hot Yoga',
      locality: 'Kondhwa',
      activities: 'Hot Yoga',
    },
    {
      id: 134,
      facilityName: "Pharaoh's Health Club",
      locality: 'Swargate',
      activities: 'Gym,Swimming',
    },
    {
      id: 135,
      facilityName: 'Physc Gym Bhosari',
      locality: 'Bhosari',
      activities: 'Gym,Zumba,Yoga,Aerobics,Core,Spinning',
    },
    {
      id: 136,
      facilityName: 'PhySC Gym Chinchwad',
      locality: 'Pimpri Chinchwad',
      activities: 'Gym,Zumba,Yoga,Aerobics,Core,Spinning',
    },
    {
      id: 137,
      facilityName: 'PhySC Gym Hadapsar',
      locality: 'Hadapsar',
      activities: 'Gym,Zumba,Yoga,Aerobics,Core,Spinning',
    },
    {
      id: 138,
      facilityName: 'PhySC Gym Pimpri',
      locality: 'Pimpri Chinchwad',
      activities: 'Gym',
    },
    {
      id: 139,
      facilityName: 'Pilates with Nidhi, Magarpatta',
      locality: 'Magarpatta',
      activities: 'Pilates,Yoga',
    },
    {
      id: 140,
      facilityName: 'Planet Health Centre',
      locality: 'Hinjewadi',
      activities: 'Gym,Zumba,MMA,Core,Yoga,Dance',
    },
    {
      id: 141,
      facilityName: 'Platinum Gym',
      locality: 'Moshi',
      activities: 'Gym',
    },
    {
      id: 142,
      facilityName: 'Poona Parsi Gymkhana',
      locality: 'Camp',
      activities: 'Gym,Swimming',
    },
    {
      id: 143,
      facilityName: 'Postures Yoga Art Studio',
      locality: 'Viman Nagar',
      activities: 'Yoga',
    },
    {
      id: 144,
      facilityName: 'Pratyahara Yoga',
      locality: 'Satara Road',
      activities: 'Yoga',
    },
    {
      id: 145,
      facilityName: 'Pro Performance Strength and Conditioning',
      locality: 'Kalyani Nagar',
      activities: 'Functional',
    },
    {
      id: 146,
      facilityName: 'Pune Fitness Club',
      locality: 'Kharadi',
      activities: 'Gym',
    },
    {
      id: 147,
      facilityName: 'R Fitness & Swimming Pool',
      locality: 'Kasarwadi',
      activities: 'Swimming',
    },
    {
      id: 148,
      facilityName: 'Raga Dance Studio, Hinjewadi',
      locality: 'Hinjewadi',
      activities: 'Dance',
    },
    {
      id: 149,
      facilityName: 'Raga Dance Studio,Bhumkar Chowk',
      locality: 'Wakad',
      activities: 'Dance',
    },
    {
      id: 150,
      facilityName: 'Raga Dance Studio,Dange Chowk',
      locality: 'Hinjewadi',
      activities: 'Dance',
    },
    {
      id: 151,
      facilityName: 'Raw 7 Fitness',
      locality: 'Magarpatta',
      activities: 'Gym',
    },
    {
      id: 152,
      facilityName: "RC's Fitness Club & CrossFit",
      locality: 'Wagholi',
      activities: 'Gym',
    },
    {
      id: 153,
      facilityName: 'Recomp Fitness',
      locality: 'Koregaon Park',
      activities: 'Gym',
    },
    {
      id: 154,
      facilityName: 'Refit Studio',
      locality: 'Khadki',
      activities: 'Yoga,Zumba',
    },
    {
      id: 155,
      facilityName: 'Rhydhun Dance Academy',
      locality: 'Sinhagad Road',
      activities: 'Dance,Zumba',
    },
    {
      id: 156,
      facilityName: 'Rungz Multi Activity Studio',
      locality: 'Kharadi',
      activities: 'Dance,Zumba,Yoga',
    },
    {
      id: 157,
      facilityName: 'Runiq Wellness',
      locality: 'Sinhagad Road',
      activities: 'Functional',
    },
    {
      id: 158,
      facilityName: 'Ryan Dance Studio',
      locality: 'Pimpri Chinchwad (Nigdi)',
      activities: 'Dance,Zumba',
    },
    {
      id: 159,
      facilityName: 'Sammy Fitness Club',
      locality: 'Sadashiv Peth',
      activities: 'Functional',
    },
    {
      id: 160,
      facilityName: 'Sanatoriym Gym',
      locality: 'Nigdi',
      activities: 'Gym',
    },
    {
      id: 161,
      facilityName: 'Sawakar Gym',
      locality: 'Nigdi',
      activities: 'Gym',
    },
    {
      id: 162,
      facilityName: 'Sculpt Fitness Centre',
      locality: 'Vishrantwadi',
      activities: 'Gym,Yoga,Aerobics,Zumba,Functional',
    },
    {
      id: 163,
      facilityName: 'Shree Dance Academy',
      locality: 'Viman Nagar',
      activities: 'Zumba,Dance',
    },
    {
      id: 164,
      facilityName: 'Shree Vishwayog Yogalaya',
      locality: 'Baner',
      activities: 'Yoga',
    },
    {
      id: 165,
      facilityName: 'Silver Fitness Club, Dhayari',
      locality: 'Dhayari',
      activities: 'Gym,Zumba,Core,Yoga,MMA',
    },
    {
      id: 166,
      facilityName: 'Silver Fitness Club, Tathawade',
      locality: 'Pimpri Chinchwad',
      activities: 'Gym,Dance,Functional,Aerobics,Zumba',
    },
    {
      id: 167,
      facilityName: 'SLTC Wanowrie',
      locality: 'Wanowrie',
      activities: 'Swimming',
    },
    {
      id: 168,
      facilityName: "Smith's Breathe Fitness",
      locality: 'Bavdhan',
      activities: 'Gym,Zumba,Dance,Yoga',
    },
    {
      id: 169,
      facilityName: 'Snap Fitness',
      locality: 'Pimpri Chinchwad',
      activities: 'Gym,Aerobics,Circuit,',
    },
    {
      id: 170,
      facilityName: 'Soul Fitness',
      locality: 'Sahakar Nagar',
      activities: 'Gym,Core,Functional,Swimming',
    },
    {
      id: 171,
      facilityName: 'Soulbeats Dance & Fitness Studio',
      locality: 'Viman Nagar',
      activities: 'Zumba,Yoga,Dance',
    },
    {
      id: 172,
      facilityName: 'Spartah Fitness Club Bavdhan',
      locality: 'Bavdhan',
      activities: 'Gym',
    },
    {
      id: 173,
      facilityName: 'Spartah Fitness Club NIBM',
      locality: 'NIBM',
      activities: 'Gym,Zumba,Yoga,MMA,Dance',
    },
    {
      id: 174,
      facilityName: 'Spartns Fitness',
      locality: 'Hadapsar',
      activities: 'Gym,Core,Functional,Aerobics,Spinning',
    },
    {
      id: 175,
      facilityName: 'Speed Fitness',
      locality: 'Wanowrie',
      activities: 'Functional',
    },
    {
      id: 176,
      facilityName: 'Spiritual Fitness',
      locality: 'Kondhwa',
      activities: 'Functional,Yoga',
    },
    {
      id: 177,
      facilityName: 'Studio FM',
      locality: 'Baner',
      activities: 'Zumba',
    },
    {
      id: 178,
      facilityName: "Sunny Durge's Rhythm Studio",
      locality: 'Kothrud',
      activities: 'Zumba',
    },
    {
      id: 179,
      facilityName: "Swapnil's Dance Studio",
      locality: 'Wakad',
      activities: 'Dance',
    },
    {
      id: 180,
      facilityName: 'Symphony Club Swimming',
      locality: 'Baner',
      activities: 'Swimming',
    },
    {
      id: 181,
      facilityName: 'Symphony Health Club',
      locality: 'Pashan',
      activities: 'Gym,Sports',
    },
    {
      id: 182,
      facilityName: "Talwalkar's HiFi Gym",
      locality: 'Kondhwa',
      activities: 'Gym,Yoga,Zumba',
    },
    {
      id: 183,
      facilityName: 'Talwalkars, Koregaon Park',
      locality: 'Koregaon Park',
      activities: 'Gym,Yoga,Zumba,Dance,Core,Functional',
    },
    {
      id: 184,
      facilityName: 'Talwalkars, Kothrud',
      locality: 'Kothrud',
      activities: 'Gym,Yoga,Aerobics,Dance',
    },
    {
      id: 185,
      facilityName: 'Talwalkars, Lulla Nagar',
      locality: 'Kondhwa',
      activities: 'Gym,Zumba,Yoga,Dance',
    },
    {
      id: 186,
      facilityName: 'Talwalkars, Sahakar Nagar',
      locality: 'Sahakar Nagar',
      activities: 'Gym',
    },
    {
      id: 187,
      facilityName: 'Talwalkars, Viman Nagar',
      locality: 'Viman Nagar',
      activities: 'Gym',
    },
    {
      id: 188,
      facilityName: 'Team J Bars',
      locality: 'Kothrud',
      activities: 'Functional',
    },
    {
      id: 189,
      facilityName: 'Tejas Dance Studio',
      locality: 'Kothrud',
      activities: 'Zumba,Functional',
    },
    {
      id: 190,
      facilityName: 'The Champions Club',
      locality: 'Kothrud',
      activities: 'Gym,Swimming',
    },
    {
      id: 191,
      facilityName: 'The Feet Circus',
      locality: 'Koregaon Park',
      activities: 'Zumba,Yoga,Dance',
    },
    {
      id: 192,
      facilityName: 'The Fitness Space',
      locality: 'Narhe',
      activities: 'Gym',
    },
    {
      id: 193,
      facilityName: 'The Forbidden Kingdom Dance Crew',
      locality: 'Pimpri Chinchwad',
      activities: 'Dance',
    },
    {
      id: 194,
      facilityName: 'The Hilife Fitness',
      locality: 'Kothrud',
      activities: 'Gym,Zumba,Core,Functional',
    },
    {
      id: 195,
      facilityName: 'The Place Dance & Fitness Studio',
      locality: 'Aundh',
      activities: 'Zumba',
    },
    {
      id: 196,
      facilityName: 'The Primate Movement',
      locality: 'Hadapsar',
      activities: 'Areobics',
    },
    {
      id: 197,
      facilityName: 'The Steel Core Martial Arts Club',
      locality: 'Kothrud',
      activities: 'MMA',
    },
    {
      id: 198,
      facilityName: 'The World Fitness',
      locality: 'Kondhwa',
      activities: 'Gym,Zumba,MMA,Aerobics',
    },
    {
      id: 199,
      facilityName: 'Universal Fitness Club',
      locality: 'Wagholi',
      activities: 'Gym,Zumba,Aerobics,Core',
    },
    {
      id: 200,
      facilityName: 'Universal Yoga Studio',
      locality: 'Kharadi',
      activities: 'Yoga',
    },
    {
      id: 201,
      facilityName: 'UrBounce',
      locality: 'Baner',
      activities: 'Gym,Zumba,Functional,Yoga,Spinning,MMA',
    },
    {
      id: 202,
      facilityName: 'Vaishnavi Dance Studio',
      locality: 'Wakad',
      activities: 'Dance',
    },
    {
      id: 203,
      facilityName: 'Veeryog Studio',
      locality: 'Kharadi',
      activities: 'Yoga',
    },
    {
      id: 204,
      facilityName: 'Vellocity Fitness and Dance Studio',
      locality: 'Wakad',
      activities: 'Zumba,Dance,Pilates',
    },
    {
      id: 205,
      facilityName: 'Vibrant Learning Spaces',
      locality: 'Baner',
      activities: 'Dance',
    },
    {
      id: 206,
      facilityName: 'VinsFit',
      locality: 'Viman Nagar',
      activities: 'Functional',
    },
    {
      id: 207,
      facilityName: "VJ's Fitness Club",
      locality: 'Baner',
      activities: 'Gym,Yoga,Zumba',
    },
    {
      id: 208,
      facilityName: 'Wildcard Fitness Club',
      locality: 'Karve Nagar',
      activities: 'Gym,Functional,Zumba,Core',
    },
    {
      id: 209,
      facilityName: 'WorkOut Club',
      locality: 'Ravet',
      activities: 'Gym,Yoga,Zumba,Aerobics',
    },
    {
      id: 210,
      facilityName: 'WOW Fitness Club, Kondhwa',
      locality: 'Kondhwa',
      activities: 'Gym,Yoga,Functional,MMA,Zumba,Dance,Core',
    },
    {
      id: 211,
      facilityName: 'Wow Fitness Club, Kothrud',
      locality: 'Kothrud',
      activities: 'Gym,Yoga,Functional,MMA,Zumba,Dance,Core',
    },
    {
      id: 212,
      facilityName: 'Xmenia RELODED Fitness Club',
      locality: 'Kothrud',
      activities: 'Gym,Functional,Yoga,Zumba,Core',
    },
    {
      id: 213,
      facilityName: 'Xtrim Fitness',
      locality: 'Pimple Saudagar',
      activities: 'Gym,Zumba,Yoga,Swimming,Aerobics',
    },
    {
      id: 214,
      facilityName: 'Xtrim Fitness Gym',
      locality: 'Nigdi',
      activities: 'Gym,Yoga,Zumba,Bombay Jam',
    },
    {
      id: 215,
      facilityName: "Y'phoria",
      locality: 'Viman Nagar',
      activities: 'Yoga',
    },
    {
      id: 216,
      facilityName: 'Yoga Bliss',
      locality: 'Hadapsar',
      activities: 'Yoga',
    },
    {
      id: 217,
      facilityName: 'Yoga Life Studio',
      locality: 'Viman Nagar',
      activities: 'Yoga',
    },
    {
      id: 218,
      facilityName: 'Yoga with Anshu',
      locality: 'Kharadi',
      activities: 'Yoga',
    },
    {
      id: 219,
      facilityName: 'Yoga with Prashant Pandey',
      locality: 'Koregaon Park',
      activities: 'Yoga',
    },
    {
      id: 220,
      facilityName: 'Yoga with Pravin Jagtap',
      locality: 'Kondhwa',
      activities: 'Yoga',
    },
    {
      id: 221,
      facilityName: 'Yogvishwa',
      locality: 'Karve Nagar',
      activities: 'Yoga',
    },
    {
      id: 222,
      facilityName: 'Zeus Fitness Zone',
      locality: 'Karve Nagar',
      activities: 'Gym',
    },
    {
      id: 223,
      facilityName: 'Zumba Fitness with Zin Disha',
      locality: 'Pimple Saudagar',
      activities: 'Zumba',
    },
    {
      id: 224,
      facilityName: 'Zumba Fitness with ZIN Satyaki',
      locality: 'Koregaon Park',
      activities: 'Zumba',
    },
    {
      id: 225,
      facilityName: 'Zumba With Darshan',
      locality: 'Pimpri Chinchwad (Nigdi)',
      activities: 'Zumba',
    },
  ],
  hyderabad: [
    {
      id: 1,
      facilityName: 'Infinity Fitness',
      locality: 'Abids',
      activities: 'Gym',
    },
    {
      id: 2,
      facilityName: 'Pulse8 Gym Abids',
      locality: 'Abids',
      activities: 'Gym',
    },
    {
      id: 3,
      facilityName: 'Bodhi Yoga Fitness Studio, Alwal',
      locality: 'Alwal',
      activities: 'Yoga',
    },
    {
      id: 4,
      facilityName: 'NexGen Cricket and Fitness Academy',
      locality: 'Alwal',
      activities: 'Gym, Functional Training, CrossFit',
    },
    {
      id: 5,
      facilityName: 'Hustle Hut (The Fitness Factory)',
      locality: 'Alwal',
      activities: 'Gym, Functional Training, CrossFit, Zumba, Spinning',
    },
    {
      id: 6,
      facilityName: 'Pump and Pose Gym and Fitness Centre, Ameerpet',
      locality: 'Ameerpet',
      activities: 'Gym',
    },
    {
      id: 7,
      facilityName: 'Abhyasa Yoga Institute, Ameerpet',
      locality: 'Ameerpet',
      activities: 'Yoga',
    },
    {
      id: 8,
      facilityName: 'Fit & Fit Fitness Studio',
      locality: 'Ameerpet',
      activities: 'Gym',
    },
    {
      id: 9,
      facilityName: "Sagar's Gym and Fitness Studio",
      locality: 'Ameerpet',
      activities: 'Dance, Zumba',
    },
    {
      id: 10,
      facilityName: "Chandu's Dream Dance Studio Ameerpet",
      locality: 'Ameerpet',
      activities: 'Dance, Zumba',
    },
    {
      id: 11,
      facilityName: 'Fitso SEALs Swimming Academy @Glendale Academy',
      locality: 'Attapur',
      activities: 'Swimming',
    },
    {
      id: 12,
      facilityName: 'SK9 Fitness',
      locality: 'Attapur',
      activities: 'Gym, Functional Training',
    },
    {
      id: 13,
      facilityName: 'Bodhi Yoga Fitness Studio',
      locality: 'Attapur',
      activities: 'Yoga',
    },
    {
      id: 14,
      facilityName: 'V60 Fitness Center',
      locality: 'Attapur',
      activities: 'Gym, Functional Training, CrossFit',
    },
    {
      id: 15,
      facilityName: 'Bodyline Bachupally',
      locality: 'Bachupally',
      activities: 'Gym',
    },
    {
      id: 16,
      facilityName: 'Bodyline Kausalya Nagar Colony',
      locality: 'Bachupally',
      activities: 'Gym',
    },
    {
      id: 17,
      facilityName: 'Tone Fitness Bachupally',
      locality: 'Bachupally',
      activities: 'Gym',
    },
    {
      id: 18,
      facilityName: 'Bodhi Yoga Fitness Studio',
      locality: 'Bachupally',
      activities: 'Yoga',
    },
    {
      id: 19,
      facilityName: "Azzu's Gym",
      locality: 'Banjara Hills',
      activities: 'Gym',
    },
    {
      id: 20,
      facilityName: 'Body n Soul Fitness',
      locality: 'Banjara Hills',
      activities: 'Gym',
    },
    {
      id: 21,
      facilityName: 'Fitness Freak',
      locality: 'Banjara Hills',
      activities: 'Gym, CrossFit, Aerial Yoga, Zumba, Pilates',
    },
    {
      id: 22,
      facilityName: 'Fitness Fusion',
      locality: 'Banjara Hills',
      activities: 'Gym',
    },
    {
      id: 23,
      facilityName: 'JS Yoga Studio, Banjara Hills',
      locality: 'Banjara Hills',
      activities: 'Yoga',
    },
    {
      id: 24,
      facilityName: 'O2 Gym',
      locality: 'Banjara Hills',
      activities: 'Gym',
    },
    {
      id: 25,
      facilityName: 'Oyster Swimming Pool',
      locality: 'Banjara Hills',
      activities: 'Swimming',
    },
    {
      id: 26,
      facilityName: 'Progressive Yoga, Banjara Hills',
      locality: 'Banjara Hills',
      activities: 'Yoga',
    },
    {
      id: 27,
      facilityName: "Roy's Dumbbells and Dreams",
      locality: 'Banjara Hills',
      activities: 'Gym',
    },
    {
      id: 28,
      facilityName: 'Pulse8 gym Barkatpura',
      locality: 'Barkatpura',
      activities: 'Gym',
    },
    {
      id: 29,
      facilityName: 'Muscletech Unisex Gym',
      locality: 'Beeramguda',
      activities: 'Gym',
    },
    {
      id: 30,
      facilityName: 'Tone Fitness Beeramguda',
      locality: 'Beeramguda',
      activities: 'Gym',
    },
    {
      id: 31,
      facilityName: 'F45 Training, Sindhi Colony, Begumpet',
      locality: 'Begumpet',
      activities: 'Functional Training',
    },
    {
      id: 32,
      facilityName: 'JS Yoga Studio',
      locality: 'Begumpet',
      activities: 'Yoga',
    },
    {
      id: 33,
      facilityName: 'Progressive Yoga, Begumpet',
      locality: 'Begumpet',
      activities: 'Yoga',
    },
    {
      id: 34,
      facilityName: 'Pump and Pose Gym and Fitness Centre, Begumpet',
      locality: 'Begumpet',
      activities: 'Gym',
    },
    {
      id: 35,
      facilityName: 'Sim Lion Fitness, Boduppal',
      locality: 'Boduppal',
      activities: 'Gym',
    },
    {
      id: 36,
      facilityName: 'Sportive Indoor Swimming Pool',
      locality: 'Bolarum',
      activities: 'Swimming',
    },
    {
      id: 37,
      facilityName: 'Elite Fitness Club',
      locality: 'Bolarum',
      activities: 'Gym',
    },
    {
      id: 38,
      facilityName: 'F7 Fitness Studio',
      locality: 'Bolarum',
      activities: 'Gym',
    },
    {
      id: 39,
      facilityName: 'Fitness9, Borabanda',
      locality: 'Borabanda',
      activities: 'Gym',
    },
    {
      id: 40,
      facilityName: 'Abhyasa Yoga, Bowenpally',
      locality: 'Bowenpally',
      activities: 'Yoga',
    },
    {
      id: 41,
      facilityName: 'FitLifez Gym and Spa, Hasmathpet',
      locality: 'Bowenpally',
      activities: 'Gym',
    },
    {
      id: 42,
      facilityName: 'Fitlifez Gym and Spa, Mansarovar Heights',
      locality: 'Bowenpally',
      activities: 'Gym',
    },
    {
      id: 43,
      facilityName: 'FitLifez Gym and Spa, New Bowenpally',
      locality: 'Bowenpally',
      activities: 'Gym',
    },
    {
      id: 44,
      facilityName: 'Hayath Fitness, Bowenpally',
      locality: 'Bowenpally',
      activities: 'Gym',
    },
    {
      id: 45,
      facilityName: 'Urban Dance World',
      locality: 'Bowenpally',
      activities: 'Dance, Zumba',
    },
    {
      id: 46,
      facilityName: 'Bodhi Yoga Fitness Studio, Chanda Nagar',
      locality: 'Chanda Nagar',
      activities: 'Yoga',
    },
    {
      id: 47,
      facilityName: 'Naren CrossFit, Chanda Nagar',
      locality: 'Chanda Nagar',
      activities: 'CrossFit',
    },
    {
      id: 48,
      facilityName: 'Tone Fitness Chandanagar',
      locality: 'Chanda Nagar',
      activities: 'Gym',
    },
    {
      id: 49,
      facilityName: 'Raghavendra Dance Music and Fitness Studio',
      locality: 'Chanda Nagar',
      activities:
        'Pro-Zumba, Pilates, Pounding, Strong by zumba, Garba, Bhangra',
    },
    {
      id: 50,
      facilityName: 'Venkatadri STAR Indoor Swimming Pool',
      locality: 'Chanda Nagar',
      activities: 'Swimming',
    },
    {
      id: 51,
      facilityName: 'SR Indoor Swimming Pool',
      locality: 'Chanda Nagar',
      activities: 'Swimming',
    },
    {
      id: 52,
      facilityName: 'Gym Town',
      locality: 'Chanda Nagar',
      activities: 'Gym',
    },
    {
      id: 53,
      facilityName: 'STAR Gym Fitness',
      locality: 'Dilshuknagar',
      activities: 'Gym',
    },
    {
      id: 54,
      facilityName: 'Star Gym Fitness',
      locality: 'Dilshuknagar',
      activities: 'Gym',
    },
    {
      id: 55,
      facilityName: 'Pump and Pose Gym and Fitness Centre, Erragadda',
      locality: 'Erragadda',
      activities: 'Gym',
    },
    {
      id: 56,
      facilityName: '24 by 7 Fitness',
      locality: 'Gachibowli',
      activities: 'Gym',
    },
    {
      id: 57,
      facilityName: 'Fitso SEALs Swimming Academy @Dolphin Swimming',
      locality: 'Gachibowli',
      activities: 'Swimming',
    },
    {
      id: 58,
      facilityName: 'Bodhi Yoga Fitness Studio, Gachibowli',
      locality: 'Gachibowli',
      activities: 'Yoga',
    },
    {
      id: 59,
      facilityName: 'Body Homework',
      locality: 'Gachibowli',
      activities: 'Gym',
    },
    {
      id: 60,
      facilityName: 'Chisel',
      locality: 'Gachibowli',
      activities: 'Gym',
    },
    {
      id: 61,
      facilityName: 'Crag Sport Climbing, Gachibowli',
      locality: 'Gachibowli',
      activities: 'Climbing',
    },
    {
      id: 62,
      facilityName: 'Infiniti Fitness',
      locality: 'Gachibowli',
      activities: 'Gym',
    },
    {
      id: 63,
      facilityName: 'Krishna Dance Studio',
      locality: 'Gachibowli',
      activities: 'Dance',
    },
    {
      id: 64,
      facilityName: 'Nirvaana Yoga, Gachibowli',
      locality: 'Gachibowli',
      activities: 'Yoga',
    },
    {
      id: 65,
      facilityName: 'Fitness9, Gayathri Nagar',
      locality: 'Gayathri Nagar',
      activities: 'Gym',
    },
    {
      id: 66,
      facilityName: 'The Power House Gym, Gayatri Nagar',
      locality: 'Gayathri Nagar',
      activities: 'Gym',
    },
    {
      id: 67,
      facilityName: 'Breathe Yoga Studio',
      locality: 'Himayat Nagar',
      activities: 'Yoga',
    },
    {
      id: 68,
      facilityName: 'Rang Manch, Himayat Nagar',
      locality: 'Himayat Nagar',
      activities: 'Yoga, Zumba, Pounding',
    },
    {
      id: 69,
      facilityName: 'The Gym, Himayat Nagar',
      locality: 'Himayat Nagar',
      activities: 'Gym',
    },
    {
      id: 70,
      facilityName: 'American Martial Arts Center',
      locality: 'Jubilee Hills',
      activities: 'Martial Arts',
    },
    {
      id: 71,
      facilityName: 'Beats Fitness Studio, Jubilee Hills',
      locality: 'Jubilee Hills',
      activities: 'Functional Training',
    },
    {
      id: 72,
      facilityName: 'Soul Fitness',
      locality: 'Jubilee Hills',
      activities: 'Gym',
    },
    {
      id: 73,
      facilityName: 'Soul Fitness, Film Nagar',
      locality: 'Jubilee Hills',
      activities: 'Yoga',
    },
    {
      id: 74,
      facilityName: 'Shapeup Fitness Center & Gym',
      locality: 'Jubilee Hills',
      activities: 'Gym',
    },
    {
      id: 75,
      facilityName: 'Shapeup Fitness Center & Gym, Nizam Colony',
      locality: 'Jubilee Hills',
      activities: 'Gym',
    },
    {
      id: 76,
      facilityName: 'Virtu Fitness',
      locality: 'Jubilee Hills',
      activities: 'Functional Training',
    },
    {
      id: 77,
      facilityName: 'Yoga Infinity',
      locality: 'Jubilee Hills',
      activities: 'Yoga',
    },
    {
      id: 78,
      facilityName: 'Raw Combat Sports Academy, Kachiguda',
      locality: 'Kachiguda',
      activities: 'Gym, Martial Arts',
    },
    {
      id: 79,
      facilityName: 'Breathe Fitness Studio',
      locality: 'Karkhana',
      activities: 'Functional Training',
    },
    {
      id: 80,
      facilityName: 'Fitso SEALs Swimming Academy @Fit For Life',
      locality: 'Karkhana',
      activities: 'Swimming',
    },
    {
      id: 81,
      facilityName: 'FitLifez Gym and Spa, Karkhana',
      locality: 'Karkhana',
      activities: 'Gym',
    },
    {
      id: 82,
      facilityName: 'Star Fitness Studio International',
      locality: 'Karkhana',
      activities: 'Gym, CrossFit, Spinning',
    },
    {
      id: 83,
      facilityName: 'ProQuest Fitness',
      locality: 'Karkhana',
      activities: 'Gym, CrossFit, Spinning',
    },
    {
      id: 84,
      facilityName: '21/90 Fitness',
      locality: 'Karkhana',
      activities: 'Gym, CrossFit, Spinning',
    },
    {
      id: 85,
      facilityName: 'Bodhi Yoga Fitness Studio, Khairatabad',
      locality: 'Khairatabad',
      activities: 'Yoga',
    },
    {
      id: 86,
      facilityName: 'Marvelouz Zumba & Fitness Studio',
      locality: 'Kompally',
      activities: 'Dance, Zumba',
    },
    {
      id: 87,
      facilityName: 'Phantom Fitness Club',
      locality: 'Kompally',
      activities: 'Gym, Functional Training, Zumba',
    },
    {
      id: 88,
      facilityName: 'Funct.Fit.Studio',
      locality: 'Kompally',
      activities: 'Gym, Functional Training, Zumba',
    },
    {
      id: 89,
      facilityName: "Veeru's Workout Station",
      locality: 'Kompally',
      activities: 'Gym',
    },
    {
      id: 90,
      facilityName: '1 Life Fitness',
      locality: 'Kondapur',
      activities: 'Gym, CrossFit',
    },
    {
      id: 91,
      facilityName: 'Anahata Yoga Zone, Kondapur',
      locality: 'Kondapur',
      activities: 'Yoga',
    },
    {
      id: 92,
      facilityName: 'Bodhi Yoga, Kondapur',
      locality: 'Kondapur',
      activities: 'Yoga',
    },
    {
      id: 93,
      facilityName: 'Fit & Fit Fitness Studio, Kothaguda',
      locality: 'Kondapur',
      activities: 'Gym',
    },
    {
      id: 94,
      facilityName: 'Leads Fitness',
      locality: 'Kondapur',
      activities: 'Gym',
    },
    {
      id: 95,
      facilityName: 'Playtime Swimming Pool',
      locality: 'Kondapur',
      activities: 'Swimming',
    },
    {
      id: 96,
      facilityName: 'Prana Yoga',
      locality: 'Kondapur',
      activities: 'Yoga',
    },
    {
      id: 97,
      facilityName: 'Redefine Fitness',
      locality: 'Kondapur',
      activities: 'Gym, Zumba, Aerobics',
    },
    {
      id: 98,
      facilityName: 'The Fitness 4 Gym',
      locality: 'Kondapur',
      activities: 'Gym',
    },
    {
      id: 99,
      facilityName: 'Saad Studio, Kondapur',
      locality: 'Kondapur',
      activities: 'Dance, Zumba',
    },
    {
      id: 100,
      facilityName: 'Virtu Fitness, Kondapur',
      locality: 'Kondapur',
      activities: 'Functional Training',
    },
    {
      id: 101,
      facilityName: 'E Fitness Studio',
      locality: 'Kondapur',
      activities: 'Gym, CrossFit, Functional Training',
    },
    {
      id: 102,
      facilityName: "Erra's Fitness Studio",
      locality: 'Kondapur',
      activities: 'Gym',
    },
    {
      id: 103,
      facilityName: 'Bodhi Yoga Fitness Studio, KPHB',
      locality: 'KPHB',
      activities: 'Yoga',
    },
    {
      id: 104,
      facilityName: 'Fit & Fit Fitness Studio, KPHB',
      locality: 'KPHB',
      activities: 'Gym',
    },
    {
      id: 105,
      facilityName: 'Fit Max gym, KPHB',
      locality: 'KPHB',
      activities: 'Gym',
    },
    {
      id: 106,
      facilityName: 'Nirvaana Yoga, KPHB',
      locality: 'KPHB',
      activities: 'Yoga',
    },
    {
      id: 107,
      facilityName: 'Spin City Fitness Studio',
      locality: 'KPHB',
      activities: 'Gym',
    },
    {
      id: 108,
      facilityName: 'Stalwart Gym',
      locality: 'KPHB',
      activities: 'Gym',
    },
    {
      id: 109,
      facilityName: 'F45 Training, Kukatpally',
      locality: 'Kukatpally',
      activities: 'Functional Training',
    },
    {
      id: 110,
      facilityName: 'Cross Fitness Box',
      locality: 'Kukatpally',
      activities: 'Gym',
    },
    {
      id: 111,
      facilityName: 'Fit Max, Kukatpally',
      locality: 'Kukatpally',
      activities: 'Gym',
    },
    {
      id: 112,
      facilityName: 'FitLifez Gym and Spa, Kukatpally',
      locality: 'Kukatpally',
      activities: 'Gym',
    },
    {
      id: 113,
      facilityName: 'Flex Gym',
      locality: 'Kukatpally',
      activities: 'Gym',
    },
    {
      id: 114,
      facilityName: 'Pledge Fitness',
      locality: 'Kukatpally',
      activities: 'Gym',
    },
    {
      id: 115,
      facilityName: 'Robust 30',
      locality: 'Kukatpally',
      activities: 'Functional Training',
    },
    {
      id: 116,
      facilityName: 'Samis MMA',
      locality: 'Kukatpally',
      activities: 'Martial Arts',
    },
    {
      id: 117,
      facilityName: 'Samis MMA Pragathi nagar',
      locality: 'Kukatpally',
      activities: 'Martial Arts',
    },
    {
      id: 118,
      facilityName: 'TONE Fitness',
      locality: 'Kukatpally',
      activities: 'Gym',
    },
    {
      id: 119,
      facilityName: 'Sree Gayathri Pacific Blue Swimming Pool',
      locality: 'Kukatpally',
      activities: 'Swimming',
    },
    {
      id: 120,
      facilityName: '100 Feet Dance Studio',
      locality: 'Madhapur',
      activities: 'Dance, Zumba, Salsa',
    },
    {
      id: 121,
      facilityName: 'Abhyasa Yoga Institute',
      locality: 'Madhapur',
      activities: 'Yoga',
    },
    {
      id: 122,
      facilityName: "Akhil's Fitness World",
      locality: 'Madhapur',
      activities: 'Gym',
    },
    {
      id: 123,
      facilityName: 'Aruna Yoga',
      locality: 'Madhapur',
      activities: 'Yoga',
    },
    {
      id: 124,
      facilityName: 'B Fit, Madhapur',
      locality: 'Madhapur',
      activities: 'Gym',
    },
    {
      id: 125,
      facilityName: 'BCUBE Big Bang Boxing',
      locality: 'Madhapur',
      activities: 'Boxing',
    },
    {
      id: 126,
      facilityName: 'Bodhi Yoga Fitness Studio, Kakatiya Hills Madhapur',
      locality: 'Madhapur',
      activities: 'Yoga',
    },
    {
      id: 127,
      facilityName: 'Cross15 Gym',
      locality: 'Madhapur',
      activities: 'Gym',
    },
    {
      id: 128,
      facilityName: 'De Fun Plus Fit',
      locality: 'Madhapur',
      activities: 'Dance, Zumba',
    },
    {
      id: 130,
      facilityName: 'FB 12 Fitness',
      locality: 'Madhapur',
      activities: 'Functional Training, HIIT',
    },
    {
      id: 131,
      facilityName: 'Fit Republic',
      locality: 'Madhapur',
      activities: 'Gym',
    },
    {
      id: 132,
      facilityName: 'Fitso SEALs @Pearl Indoor Swimming Pool',
      locality: 'Madhapur',
      activities: 'Swimming',
    },
    {
      id: 133,
      facilityName: 'HY Dance Studios',
      locality: 'Madhapur',
      activities: 'Dance, Zumba',
    },
    {
      id: 134,
      facilityName: 'Kala Ashtanga Yoga',
      locality: 'Madhapur',
      activities: 'Yoga',
    },
    {
      id: 135,
      facilityName: 'Kalinga Martial Arts Academy, Madhapur',
      locality: 'Madhapur',
      activities: 'Martial Arts',
    },
    {
      id: 136,
      facilityName: 'Krish Fitness',
      locality: 'Madhapur',
      activities: 'Gym',
    },
    {
      id: 137,
      facilityName: 'Krish Fitness Pro',
      locality: 'Madhapur',
      activities: 'Gym',
    },
    {
      id: 138,
      facilityName: 'Nirvaana Yoga, Madhapur',
      locality: 'Madhapur',
      activities: 'Yoga',
    },
    {
      id: 139,
      facilityName: 'Oyster Indoor Swimming Club, Madhapur',
      locality: 'Madhapur',
      activities: 'Swimming',
    },
    {
      id: 140,
      facilityName: 'Pearl Indoor Swimming Pool',
      locality: 'Madhapur',
      activities: 'Swimming',
    },
    {
      id: 141,
      facilityName: "Ram's Step Up Dance Studio",
      locality: 'Madhapur',
      activities: 'Dance',
    },
    {
      id: 142,
      facilityName: 'Saad Studio, Madhapur',
      locality: 'Madhapur',
      activities: 'Dance, Zumba',
    },
    {
      id: 143,
      facilityName: 'Seasons Swimming Pool, Madhapur',
      locality: 'Madhapur',
      activities: 'Swimming',
    },
    {
      id: 144,
      facilityName: 'Shapeup Fitness Center and Gym',
      locality: 'Madhapur',
      activities: 'Gym',
    },
    {
      id: 145,
      facilityName: 'Studio MJ',
      locality: 'Madhapur',
      activities: 'Dance, Zumba',
    },
    {
      id: 146,
      facilityName: 'Yoga for all',
      locality: 'Madhapur',
      activities: 'Yoga',
    },
    {
      id: 147,
      facilityName: 'Gym Town',
      locality: 'Madinaguda',
      activities: 'Gym',
    },
    {
      id: 148,
      facilityName: 'AB Fitness Gym Pro',
      locality: 'Manikonda',
      activities: 'Gym',
    },
    {
      id: 149,
      facilityName: 'Abhyasa Yoga, Manikonda',
      locality: 'Manikonda',
      activities: 'Yoga',
    },
    {
      id: 150,
      facilityName: 'Bodhi Yoga Training Institute, Manikonda',
      locality: 'Manikonda',
      activities: 'Yoga',
    },
    {
      id: 151,
      facilityName: 'Fitness Reloaded',
      locality: 'Manikonda',
      activities: 'Gym',
    },
    {
      id: 152,
      facilityName: "Khan's Being Fit Fitness Studio",
      locality: 'Manikonda',
      activities: 'Gym',
    },
    {
      id: 153,
      facilityName: 'Mettle The Gym',
      locality: 'Manikonda',
      activities: 'Gym',
    },
    {
      id: 154,
      facilityName: 'Rise and Shine Dance Studio',
      locality: 'Manikonda',
      activities: 'Dance',
    },
    {
      id: 155,
      facilityName: 'Wild Iron The Gym',
      locality: 'Manikonda',
      activities: 'Gym',
    },
    {
      id: 156,
      facilityName: "Azaraiah's Gym, Maredpally",
      locality: 'Maredpally',
      activities: 'Gym',
    },
    {
      id: 157,
      facilityName: 'Pulse8 Gym, Maredpally',
      locality: 'Maredpally',
      activities: 'Gym',
    },
    {
      id: 158,
      facilityName: 'A to Z Fitness, Mehdipatnam',
      locality: 'Mehdipatnam',
      activities: 'Gym',
    },
    {
      id: 159,
      facilityName: 'Pulse8 Gym Mehdipatnam',
      locality: 'Mehdipatnam',
      activities: 'Gym',
    },
    {
      id: 160,
      facilityName: 'Bodyline Allwyn Colony',
      locality: 'Miyapur',
      activities: 'Gym',
    },
    {
      id: 161,
      facilityName: 'Bodyline Mayuri Nagar',
      locality: 'Miyapur',
      activities: 'Gym',
    },
    {
      id: 162,
      facilityName: 'Bodyline Miyapur',
      locality: 'Miyapur',
      activities: 'Gym',
    },
    {
      id: 163,
      facilityName: 'Naren CrossFit, Miyapur',
      locality: 'Miyapur',
      activities: 'CrossFit',
    },
    {
      id: 164,
      facilityName: 'Nirvaana Yoga, Miyapur',
      locality: 'Miyapur',
      activities: 'Yoga',
    },
    {
      id: 165,
      facilityName: "Chandu's Dream Dance Studio Moosapet",
      locality: 'Moosapet',
      activities: 'Dance, Zumba',
    },
    {
      id: 166,
      facilityName: 'B-Fit',
      locality: 'Moti Nagar',
      activities: 'Gym',
    },
    {
      id: 167,
      facilityName: 'Hayath Fitness, Moti Nagar',
      locality: 'Moti Nagar',
      activities: 'Gym',
    },
    {
      id: 168,
      facilityName: 'Kumar Dance Studio',
      locality: 'Moti Nagar',
      activities: 'Dance',
    },
    {
      id: 169,
      facilityName: 'Happy Fitness Gym & Fitness Center',
      locality: 'Nagole',
      activities: 'Gym. CrossFit',
    },
    {
      id: 170,
      facilityName: 'Ocean Swimming Pool',
      locality: 'Nagole',
      activities: 'Swimming',
    },
    {
      id: 171,
      facilityName: '360 Fitness Zone',
      locality: 'Nizampet',
      activities: 'Gym',
    },
    {
      id: 172,
      facilityName: 'Tone Fitness Nizampet',
      locality: 'Nizampet',
      activities: 'Gym',
    },
    {
      id: 173,
      facilityName: 'I Feel Good Unisex Gym, Panjagutta',
      locality: 'Panjagutta',
      activities: 'Gym',
    },
    {
      id: 174,
      facilityName: 'Indian Endurance',
      locality: 'Rethibowli',
      activities: 'Gym, Martial Arts',
    },
    {
      id: 175,
      facilityName: 'Infiniti Fitness',
      locality: 'Rethibowli',
      activities: 'Gym',
    },
    {
      id: 176,
      facilityName: 'Anahatha Yoga',
      locality: 'Sainikpuri',
      activities: 'Yoga',
    },
    {
      id: 177,
      facilityName: 'Anahata Yoga Zone Sainikpuri',
      locality: 'Sainikpuri',
      activities: 'Yoga',
    },
    {
      id: 178,
      facilityName: 'Bodhi Yoga Fitness Studio, Sainikpuri',
      locality: 'Sainikpuri',
      activities: 'Yoga',
    },
    {
      id: 179,
      facilityName: 'Fitness Stroke',
      locality: 'Sainikpuri',
      activities: 'Gym',
    },
    {
      id: 180,
      facilityName: 'Skies Fitness Studio',
      locality: 'Sainikpuri',
      activities: 'Gym',
    },
    {
      id: 181,
      facilityName: 'Target Fitness Studio',
      locality: 'Sainikpuri',
      activities: 'Gym, Martial Arts',
    },
    {
      id: 182,
      facilityName: 'Energizer Yoga, Somajiguda',
      locality: 'Somajiguda',
      activities: 'Yoga',
    },
    {
      id: 183,
      facilityName: 'Raw Combat Sports Academy, Somajiguda',
      locality: 'Somajiguda',
      activities: 'Gym, Martial Arts',
    },
    {
      id: 184,
      facilityName: 'SD Fitness, Somajiguda',
      locality: 'Somajiguda',
      activities: 'Gym',
    },
    {
      id: 185,
      facilityName: 'All About Eve',
      locality: 'SR Nagar',
      activities: 'Gym, Zumba, Martial Arts, Yoga',
    },
    {
      id: 186,
      facilityName: 'F45 Srinagar Colony',
      locality: 'Sri Nagar Colony',
      activities: 'Functional Training',
    },
    {
      id: 187,
      facilityName: 'Pulse8 Gym Srinagar Colony',
      locality: 'Sri Nagar Colony',
      activities: 'Gym',
    },
    {
      id: 188,
      facilityName: 'Shape and Strength',
      locality: 'Sri Nagar Colony',
      activities: 'Gym',
    },
    {
      id: 189,
      facilityName: 'Flex N Fit',
      locality: 'Sri Nagar Colony',
      activities: 'Gym',
    },
    {
      id: 190,
      facilityName: "Yo'Cures",
      locality: 'Sri Nagar Colony',
      activities: 'Yoga',
    },
    {
      id: 191,
      facilityName: 'Kshtr Health And Fitness For Women, Tarnaka',
      locality: 'Tarnaka',
      activities: 'Gym',
    },
    {
      id: 192,
      facilityName: 'Expert Martial Arts and Fitness Centre',
      locality: 'Tolichowki',
      activities: 'Martial Arts',
    },
    {
      id: 193,
      facilityName: 'International Martial Arts Academy',
      locality: 'Tolichowki',
      activities: 'Martial Arts',
    },
    {
      id: 194,
      facilityName: 'Kalinga Martial Arts Academy',
      locality: 'Tolichowki',
      activities: 'Martial Arts',
    },
    {
      id: 195,
      facilityName: 'Pulse8 Gym',
      locality: 'Tolichowki',
      activities: 'Gym',
    },
    {
      id: 196,
      facilityName: 'Nitro Fitness',
      locality: 'Tolichowki',
      activities: 'Gym',
    },
    {
      id: 197,
      facilityName: 'Super Flex Gym',
      locality: 'Tolichowki',
      activities: 'Gym',
    },
    {
      id: 198,
      facilityName: 'Anahata Yoga Zone Trimulgherry',
      locality: 'Trimulgherry',
      activities: 'Yoga',
    },
    {
      id: 199,
      facilityName: 'FitLifez Gym and Spa, Diamond Point',
      locality: 'Trimulgherry',
      activities: 'Gym',
    },
    {
      id: 200,
      facilityName: 'FitLifez Gym and Spa, Trimulgherry',
      locality: 'Trimulgherry',
      activities: 'Gym',
    },
    {
      id: 201,
      facilityName: 'Sim Lion Fitness, Uppal',
      locality: 'Uppal',
      activities: 'Gym',
    },
    {
      id: 202,
      facilityName: 'Leads Fitness, Vanasthalipuram',
      locality: 'Vanasthalipuran',
      activities: 'Gym',
    },
    {
      id: 203,
      facilityName: 'Fit & Fit Fitness Studio, Yousufguda',
      locality: 'Yousufguda',
      activities: 'Gym',
    },
    {
      id: 204,
      facilityName: 'Flex N Fit',
      locality: 'Yousufguda',
      activities: 'Gym',
    },
    {
      id: 205,
      facilityName: 'Lidaas kick boxing & Martial Arts',
      locality: 'Yousufguda',
      activities: 'Kick-boxing, Martial Arts',
    },
    {
      id: 206,
      facilityName: 'Myspace fitness and dance studio, Vengal Rao Nagar',
      locality: 'Yousufguda',
      activities: 'Dance, Zumba',
    },
    {
      id: 207,
      facilityName: 'Yodha gym and fitness center, Vengal Rao Nagar',
      locality: 'Yousufguda',
      activities: 'Yoga',
    },
    {
      id: 208,
      facilityName: "Erra's Fitness",
      locality: 'Q City',
      activities: 'Gym',
    },
    {
      id: 209,
      facilityName: 'Bodhi Yoga Fitness Studio',
      locality: 'LB Nagar',
      activities: 'Yoga',
    },
    {
      id: 210,
      facilityName: 'Gym Box',
      locality: 'Nizampet',
      activities: 'Gym, Functional Training, Kick Boxing, Sand Box',
    },
    {
      id: 211,
      facilityName: 'Fitness Trends',
      locality: 'Madhapur',
      activities: 'Gym',
    },
    {
      id: 212,
      facilityName: 'Prana Yoga Shala @Playtime',
      locality: 'Kondapur',
      activities: 'Yoga',
    },
    {
      id: 213,
      facilityName: 'Yhodha Combat Martial Arts',
      locality: 'Sindhi Colony',
      activities: 'Shaolin KungFu, Kravmaga, MMA, Kick Boxing',
    },
    {
      id: 214,
      facilityName: 'Ultimate Gym',
      locality: 'Sindhi Colony',
      activities: 'Gym',
    },
    {
      id: 215,
      facilityName: 'Zumba with ZIN Jyoti Sukumar',
      locality: 'Kachiguda',
      activities: 'Zumba',
    },
  ],
};
