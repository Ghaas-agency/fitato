import React from 'react';
import { withPrefix } from 'gatsby';
import Slider from 'react-slick';
import './slick/slick.css';

const TentimonialsCarousel = () => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div>
      <h2>What Our Members Have to Say</h2>
      <Slider {...settings}>
        <div className="index-section-testimonials__testimonial">
          <p>
            <em>
              “It makes fitness fun &amp; flexible, being a sportsperson and
              adventure junkie I hated being tied down to a particular gym. With
              Fitato, it's like a new adventure waiting for you every day, sheer
              variety in fitness with a single pass.”
            </em>
          </p>
          <img
            src={withPrefix('/static/index/testimonials/vishesh.jpg')}
            alt="vishesh parashar"
          />
          <p className="index-section-testimonials__testimonial--name">
            Vishesh Parashar
          </p>
          <p>Aundh, MAERSK</p>
        </div>
        <div className="index-section-testimonials__testimonial">
          <p>
            <em>
              “Without the Fitato pass, I would never have been able to attend
              Pilates classes, Yoga studios or the other vastly available
              fitness options, that too at a very nominal price. Fitato makes it
              possible &amp; I have finally found activities I love.”
            </em>
          </p>
          <img
            src={withPrefix('/static/index/testimonials/karen.jpg')}
            alt="karen jophy"
          />
          <p className="index-section-testimonials__testimonial--name">
            Karen Jophy
          </p>
          <p>Viman Nagar, Reliance</p>
        </div>
        <div className="index-section-testimonials__testimonial">
          <p>
            <em>
              “It makes fitness fun &amp; flexible, being a sportsperson and
              adventure junkie I hated being tied down to a particular gym. With
              Fitato, it's like a new adventure waiting for you every day, sheer
              variety in fitness with a single pass.”
            </em>
          </p>
          <img
            src={withPrefix('/static/index/testimonials/aninda.jpg')}
            alt="aninda verma"
          />
          <p className="index-section-testimonials__testimonial--name">
            Aninda Verma
          </p>
          <p>Shivaji Nagar, PR Consultant</p>
        </div>
      </Slider>
    </div>
  );
};

export default TentimonialsCarousel;
