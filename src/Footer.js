  import React from 'react';
  import './Footer.css';

  const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="footer">
        <div className="container-fluid">
          <div className=" social-media">
            <a href="https://github.com/hemanthyaka" className='git-hub' target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/yaka-hemanth-ba111227a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='linke' target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://x.com/Yaka_hemanth?t=ZsGE1A5degIx09U4DJ5lwg&s=09" className='tweet' target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/_hemanth_yaka_?igsh=MWV0ZXZvczljN2tpeQ==" className='insta' target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <p className="copyright">
            &copy; {currentYear} Yaka Hemanth. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };

  export default Footer;
