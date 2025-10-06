import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const socialLinks = [
    { icon: '✉️', label: 'Email', link: 'mailto:franstmarbun@gmail.com' },
    { icon: '💼', label: 'LinkedIn', link: 'https://www.linkedin.com/in/frans-togu-tua-marbun-934286170/' },
    { icon: '💻', label: 'GitHub', link: 'https://github.com/Frans16' }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Let's connect</p>
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            <b>Ready to collaborate?</b> Find my professional contact details and social media channels below to initiate a discussion or follow my journey in the industry.
          </p>
        </div>
        
        <div className="contact-card">
          <a 
            href="mailto:7facthistory@gmail.com" 
            className="email-card"
          >
            <span className="email-icon">✉️</span>
            <div className="email-info">
              <div className="email-label">Email</div>
              <div className="email-value">franstmarbun@gmail.com</div>
            </div>
          </a>
        </div>
        
        <div className="social-links">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.link}
              className="social-link"
              target={social.link.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <span className="social-icon">{social.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;