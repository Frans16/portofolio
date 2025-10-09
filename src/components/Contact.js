import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const socialLinks = [
    { 
      icon: '✉️', 
      label: 'Email', 
      value: 'franstmarbun@gmail.com',
      link: 'mailto:franstmarbun@gmail.com',
      gradient: 'linear-gradient(135deg, #EA4335 0%, #C5221F 100%)'
    },
    { 
      icon: '💼', 
      label: 'LinkedIn', 
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/frans-togu-tua-marbun-934286170/',
      gradient: 'linear-gradient(135deg, #0077B5 0%, #005582 100%)'
    },
    { 
      icon: '💻', 
      label: 'GitHub', 
      value: 'View my projects',
      link: 'https://github.com/Frans16',
      gradient: 'linear-gradient(135deg, #6e5494 0%, #4a3768 100%)'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">LET'S CONNECT</p>
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            <b>Ready to collaborate?</b> Find my professional contact details and social media channels below to initiate a discussion or follow my journey in the industry.
          </p>
        </div>
        
        {/* Highlighted WhatsApp Card */}
        <div className="featured-contact">
          <a 
            href="https://wa.me/6281310002500"
            className="whatsapp-card-featured"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="featured-glow"></div>
            <div className="featured-icon-wrapper">
              <span className="featured-icon">📱</span>
            </div>
            <div className="featured-content">
              <h3 className="featured-label">WhatsApp</h3>
              <p className="featured-value">081310002500</p>
              <span className="featured-badge">Available Now</span>
            </div>
            <div className="featured-arrow">→</div>
          </a>
        </div>

        {/* Social Links Grid */}
        <div className="social-grid">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.link}
              className="social-card"
              target={social.link.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              style={{'--card-gradient': social.gradient}}
            >
              <div className="social-icon-wrapper">
                <span className="social-icon">{social.icon}</span>
              </div>
              <div className="social-content">
                <h4 className="social-label">{social.label}</h4>
                <p className="social-value">{social.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;