

import React from 'react';
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaLinkedin } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import "./contact.css";

const Contact = () => {
  const handleMailClick = () => {
    window.location.href = 'mailto:dhanush21110456@snuchennai.edu.in';
  };

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
          <p className="contact__decription"></p>
          <div className="contact__info">
            <div className="info__item" onClick={handleMailClick}>
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
      </div>
    </section>
  );
};

export default Contact;