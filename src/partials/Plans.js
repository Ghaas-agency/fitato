import React from 'react'
import { Link } from 'gatsby'

const Plans = props => (
  <div className="partial-plans">
    <div className="container">
      {(props.tag === 'h1') ? <h1>Choose Your Membership Plan</h1> : <h2>Choose Your Membership Plan</h2>}
      {/* <p className="offer"><a href="http://rakhi.fitato.fit">Check out exclusive offer</a></p> */}
      <div className="partial-plans__items">
        <div className="partial-plans__item">
          <div className="partial-plans__item--title">
            <h3>Quarterly Pass<br /><small>(3 months)</small></h3>
          </div>
          <div className="partial-plans__item--content">
            <p>Purchase the Fitato Quarterly pass and get unlimited access to every Fitato partner facility for 3 months!</p>
            <p className="partial-plans__item--price">&#8377;5499</p>
          </div>
          <div className="partial-plans__item--cta">
            <a href="https://imjo.in/u76vFn" target="_blank" rel="noopener noreferrer" className="button button-fluid">Buy Now</a>
          </div>
        </div>
        <div className="partial-plans__item">
          <div className="partial-plans__item--title">
            <h3>Bi-Monthly Pass<br /><small>(2 months)</small></h3>
          </div>
          <div className="partial-plans__item--content">
            <p>Purchase the Fitato Bi-Monthly pass and get unlimited  access to every Fitato partner facility for 2 months!</p>
            <p className="partial-plans__item--price">&#8377;3899</p>
          </div>
          <div className="partial-plans__item--cta">
            <a href="https://imjo.in/TQqWQ9" target="_blank" rel="noopener noreferrer" className="button button-fluid">Buy Now</a>
          </div>
        </div>
        <div className="partial-plans__item">
          <div className="partial-plans__item--title">
            <h3>Monthly Pass<br /><small>(1 month)</small></h3>
          </div>
          <div className="partial-plans__item--content">
            <p>Purchase the Fitato Monthly pass and get unlimited access to every Fitato partner facility for  1 month!</p>
            <p className="partial-plans__item--price">&#8377;2199</p>
          </div>
          <div className="partial-plans__item--cta">
            <a href="https://imjo.in/wdS88s" target="_blank" rel="noopener noreferrer" className="button button-fluid">Buy Now</a>
          </div>
        </div>
      </div>
      <div className="partial-plans__speak">
        <p style={{marginBottom: '0'}}>You'll receive a confirmation call and email as soon as your payment is processed. Need recommendations or a crafted plan, please reach out to us at <a href="tel:+919607800533">+91 9607800533</a>.</p>
      </div>
      <div className="partial-plans__fitquad">
        {(props.tag === 'h1') ? <h2>Looking for more than one pass?</h2> : <h3>Looking for more than one pass?</h3>}
        <Link to="/fit-squad/" className="button">View Fit Squad Plans</Link>
      </div>
    </div>
  </div>
)

export default Plans
