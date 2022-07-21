import React from 'react'
import './contact.css'
import {SiGmail} from 'react-icons/si'
import {FaFacebookMessenger} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hiibjq6', 'template_c150gcv', form.current, 'UIk7oPgWAjgLu8OEs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <SiGmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>akshatpatel0706@gmail.com</h5>
            <a href="mailto:akshatpatel0706@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact_option">
            <FaFacebookMessenger className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Akshat Patel</h5>
            <a href="https://m.me/akshat.patel" target="_blank">Send a message</a>
          </article>

          <article className="contact_option">
            <IoLogoWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp.com/send?phone=+919920138382" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required/>
          <input type="text" name='email' placeholder='Email' required/>
          <textarea name="message" id="message" rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact