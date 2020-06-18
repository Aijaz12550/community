import React from 'react'
import '../../../styles/contactUs/ContactUsForm.scss';

export const ContactUsForm = () => {
  return (
    <div className='contact-us-form'>
      <span className='contact-us-heading'>
        Please use this form to contact us
       </span>

      <div className='contact-us-input-container'>

        <input type='text' placeholder='Enter Your Full Name' />
        <input type='text' placeholder='Enter Your Full Name' />
        <input type='text' placeholder='Enter Your Full Name' />
        <textarea>Hello</textarea>
      </div>

      <button> Send Message</button>
    </div>
  )
}