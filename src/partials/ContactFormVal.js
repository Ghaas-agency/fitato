import React from 'react'

class ContactFormVal extends React.Component {
  state = {
    name: '',
    phone: '',
    email: '',
    error: ''
  }

  onFieldChange = e => this.setState({
    [e.target.name]: e.target.value
  })

  onFormSubmit = e => {
    e.preventDefault();
    const { name, phone, email } = this.state;

    if(name == '') {
      this.setState({
        error: 'Please enter a valid name.'
      });
      return;
    }

    var phtest = /^\d{10}$/.test(phone);

    if(phone == '' || !phtest) {
      this.setState({
        error: 'Please enter a valid phone number.'
      });
      return;
    }

    var emailtest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());

    if(email == '' || !emailtest) {
      this.setState({
        error: 'Please enter a valid email address.'
      });
      return;
    }
  }

  render() {
    const { name, phone, email, error } = this.props;
    return(
      <form onSubmit={this.onFormSubmit} className="partial-contact-form">
        <div>
          <input 
            type="text" 
            name="name" 
            placeholder="Name"
            value={name}
            onChange={this.onFieldChange}
          />
        </div>
        <div>
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone" 
            value={phone}
            onChange={this.onFieldChange}
          />
        </div>
        <div>
          <input 
            type="email" 
            name="_replyto" 
            placeholder="Email" 
            value={email}
            onChange={this.onFieldChange}
          />
        </div>
        <input type="hidden" name="_subject" value="Contact form submission on Fitato website" />
        {/* <input type="hidden" name="_cc" value="support@fitato.fit" /> */}
        <div>
          {(error) ? <small>error</small> : ''}
          <input type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

export default ContactFormVal
