import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          © {currentYear} Frans Togu Tua Marbun. All rights reserved.
        </p>
        <p className="footer-tagline">
          Designed & Built with ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;