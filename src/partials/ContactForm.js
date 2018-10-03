import React from 'react'

const ContactForm = () => (
  <form action="https://formspree.io/connect@fitato.fit" method="POST" className="partial-contact-form">
    <div>
      <input 
        type="text" 
        name="name" 
        placeholder="Name"
        required
      />
    </div>
    <div>
      <input 
        type="tel" 
        name="phone" 
        placeholder="Phone" 
        required
      />
    </div>
    <div>
      <input 
        type="email" 
        name="_replyto" 
        placeholder="Email" 
        required
      />
    </div>
    <input type="hidden" name="_subject" value="Contact form submission on Fitato website" />
    <input type="hidden" name="_cc" value="support@fitato.fit" />
    <div>
      <input type="submit" value="Submit" />
    </div>
  </form>
)

export default ContactForm
