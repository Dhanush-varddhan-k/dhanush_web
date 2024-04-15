import React from 'react'
import{
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedin,
  

} from 'react-icons/fa';

import { FiSend } from 'react-icons/fi'
import "./contact.css"
const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        My <span>Contact</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">
            Wan'na hire me
          </h3>
          <p className="contact__decription">
            Open to discuss new topics and different project ideas.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon'/>
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">dhanush21110456@snuchennai.edu.in</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon'/>
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+91 6381562738</h4>
              </div>
            </div>




          </div>

          <div className="contact__socials">
            <a href="https://www.linkedin.com/in/dhanush-varddhan-712594249/" className="contact__social-link">
            <FaLinkedin />
            </a>
          </div>
        </div>
        {/* <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input type="text" placeholder='Your Name' className="from__control" />  
            </div>
            <div className="form__input-div">
              <input type="email" placeholder='Your Email' className="from__control" />
            </div>  
            <div className="form__input-div">
              <input type="text" placeholder='Subject' className="from__control" />
            </div>          
          </div>
          <div className="form__input-div">
              <textarea placeholder='Your Message' className="form__control textarea">
              </textarea>
            </div>
             <button className="button">
               Send Message
               <span className="button__icon contact__button-icon">
                 <FiSend/>
               </span>
            </button>
        </form> */}
      </div>

    </section>
  )
}

export default Contact
