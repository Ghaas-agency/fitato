import React from 'react'
import { Link } from 'gatsby'

const GetStarted = () => (
  <div className="partial-get-started">
    <div className="container">
      <div className="partial-get-started__text">
        <h2 style={{marginBottom: '0'}}><span className="red">Ready to get started?</span></h2>
      </div>
      <div className="partial-get-started__cta">
        <Link to="/download/" className="button">Download Fitato App</Link>
        <Link to="/contact/" className="button-inverted">Contact us</Link>
      </div>
    </div>
  </div>
)

export default GetStarted
