import React from 'react'

const WorkplaceMCForm = () => (
  <div id="mc_embed_signup" className="partial-workplace-mc-form">
    <form action="https://fit.us18.list-manage.com/subscribe/post?u=c70dd7220cee163ff5b3fa95d&amp;id=13392e4199" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
      <div id="mc_embed_signup_scroll">
    
        <div className="mc-field-group">
          <label htmlFor="mce-FULLNAME">Your Name </label>
          <input type="text" name="FULLNAME" className="required" id="mce-FULLNAME" placeholder="John Doe" />
        </div>
        <div className="mc-field-group">
          <label htmlFor="mce-CNAME">Company Name </label>
          <input type="text" name="CNAME" className="required" id="mce-CNAME" placeholder="Doe Corp." />
        </div>
        <div className="mc-field-group size1of2">
          <label htmlFor="mce-PHONE">Phone Number </label>
          <input type="text" name="PHONE" className="required" id="mce-PHONE" placeholder="9876543210" />
        </div>
        <div className="mc-field-group">
          <label htmlFor="mce-EMAIL">Business Email </label>
          <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" placeholder="name@company.com" />
        </div>
        <div className="mc-field-group size1of2">
          <label htmlFor="mce-TEAMSIZE">Team Size </label>
          <input type="number" name="TEAMSIZE" className="required" id="mce-TEAMSIZE" placeholder="15" />
        </div>
        <div id="mce-responses" className="clear">
          <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
          <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
        </div>
        <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_c70dd7220cee163ff5b3fa95d_13392e4199" tabIndex="-1" value="" /></div>
        <div className="clear"><input type="submit" value="Get in touch" style={{marginLeft: '0'}} name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
      </div>
    </form>
  </div>
)

export default WorkplaceMCForm