import React from 'react'

const MCForm = () => (
  <div id="mc_embed_signup" className="partial-mc-form">
    <form action="https://fit.us18.list-manage.com/subscribe/post?u=c70dd7220cee163ff5b3fa95d&amp;id=537f4ff9ae" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
      <div id="mc_embed_signup_scroll" className="partial-mc-form__main">
      
        <div className="mc-field-group">
          <label htmlFor="mce-FULLNAME">Name</label>
          <input type="text" name="FULLNAME" className="required" id="mce-FULLNAME" placeholder="Enter your name" />
        </div>
        <div className="mc-field-group size1of2">
          <label htmlFor="mce-PHONE">Phone</label>
          <input type="text" name="PHONE" className="required" id="mce-PHONE" placeholder="Enter your contact number" />
        </div>
        <div className="mc-field-group">
          <label htmlFor="mce-EMAIL">Email</label>
          <input type="email" name="EMAIL" className="required email" placeholder="Enter your email address" id="mce-EMAIL" />
        </div>
        <div className="mc-field-group input-group">
          <label>City</label>
          <ul className="partial-mc-form__main--radio">
            <li>
              <input type="radio" value="Pune" name="CITY" id="mce-CITY-0"/>
              <label htmlFor="mce-CITY-0">Pune</label>
            </li>
            <li>
              <input type="radio" value="Hyderabad" name="CITY" id="mce-CITY-1"/>
              <label htmlFor="mce-CITY-1">Hyderabad</label>
            </li>
          </ul>
        </div>
        <div className="clear mc-form-submit-btn">
          <div id="mce-responses" className="clear" style={{margin: '0'}}>
            <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
            <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
          </div>
          <div style={{position: 'absolute', left: '-5000px', margin: '0'}} aria-hidden="true">
            <input type="text" name="b_c70dd7220cee163ff5b3fa95d_537f4ff9ae" tabIndex="-1" />
          </div>
          <input type="submit" value="Submit" name="subscribe" id="mc-embedded-subscribe" className="button" style={{marginLeft: '0px'}} />
        </div>
      </div>
    </form>
  </div>
)
  
export default MCForm