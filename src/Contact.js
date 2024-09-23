import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact-section" className="contact-section">
      <div className="container-fluid  contact">
        <h2 className='text-uppercase'>Contact Me</h2>
        <p>
          I’m always open to connecting! Feel free to reach out via email or follow me on my social media channels.
        </p>
        <div className="contact-info">
          <div className="email">
            <h3>Email</h3>
            <a href="mailto:yakahemanth3@gmail.com">yakahemanth3@gmail.com</a>
          </div>
          <div className="social-mediaa">
            <h3>Follow Me</h3>
            <ul className="social-links">
              <li>
                <a href="https://github.com/hemanthyaka" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/yaka-hemanth-ba111227a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://x.com/Yaka_hemanth?t=ZsGE1A5degIx09U4DJ5lwg&s=09" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/_hemanth_yaka_?igsh=MWV0ZXZvczljN2tpeQ==" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
