import React from 'react';
import PropTypes from 'prop-types';

const Plans = ({ tag }) => (
  <div className="partial-plans">
    <div className="container">
      {tag === 'h1' ? (
        <h1>Choose Your Membership Plan</h1>
      ) : (
        <h2>Choose Your Membership Plan</h2>
      )}
      {/* <p className="offer"><a href="http://rakhi.fitato.fit">Check out exclusive offer</a></p> */}
      <div className="partial-plans__items">
        <div className="partial-plans__item">
          <div className="partial-plans__item--title">
            <h3>
              Quarterly Pass
              <br />
              <small>(3 months)</small>
            </h3>
          </div>
          <div className="partial-plans__item--content">
            <p>
              Purchase the Fitato Quarterly pass and get unlimited access to
              every Fitato partner facility for 3 months!
            </p>
            <p className="partial-plans__item--price">&#8377;6,599</p>
          </div>
          <div className="partial-plans__item--cta">
            <a
              href="https://imjo.in/UAt7PD"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-fluid">
              Buy Now
            </a>
          </div>
        </div>
        <div className="partial-plans__item">
          <div className="partial-plans__item--title">
            <h3>
              Bi-Monthly Pass
              <br />
              <small>(2 months)</small>
            </h3>
          </div>
          <div className="partial-plans__item--content">
            <p>
              Purchase the Fitato Bi-Monthly pass and get unlimited access to
              every Fitato partner facility for 2 months!
            </p>
            <p className="partial-plans__item--price">&#8377;4,599</p>
          </div>
          <div className="partial-plans__item--cta">
            <a
              href="https://imjo.in/6hbX9E"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-fluid">
              Buy Now
            </a>
          </div>
        </div>
        <div className="partial-plans__item">
          <div className="partial-plans__item--title">
            <h3>
              Monthly Pass
              <br />
              <small>(1 month)</small>
            </h3>
          </div>
          <div className="partial-plans__item--content">
            <p>
              Purchase the Fitato Monthly pass and get unlimited access to every
              Fitato partner facility for 1 month!
            </p>
            <p className="partial-plans__item--price">&#8377;2,499</p>
          </div>
          <div className="partial-plans__item--cta">
            <a
              href="https://imjo.in/wjZhss"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-fluid">
              Buy Now
            </a>
          </div>
        </div>
      </div>
      <div className="partial-plans__speak">
        <p style={{ marginBottom: '0' }}>
          You&apos;ll receive a confirmation call and email as soon as your
          payment is processed. Need recommendations or a crafted plan, please
          reach out to us at&nbsp;
          <a href="tel:+918448448546">+91 8448448546.</a>
        </p>
      </div>
      {/* <div className="partial-plans__fitquad">
        {(props.tag === 'h1') ? <h2>Looking for more than one pass?</h2> : <h3>Looking for more than one pass?</h3>}
        <Link to="/fit-squad/" className="button">View Fit Squad Plans</Link>
      </div> */}
    </div>
  </div>
);

Plans.propTypes = {
  tag: PropTypes.string,
};

export default Plans;
