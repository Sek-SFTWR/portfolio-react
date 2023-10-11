import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://gmail.com/">
            <i className="fab fa-twitter"></i>
            <p>Seksergelen470@gmail.com</p>
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Copyright All Right Reserved By Sek
        </p>
      </div>
    </footer>
  );
};

export default Footer;
