import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  // Check if current time is between 09:00 - 17:00
  const checkAvailability = () => {
    const now = new Date();
    const hours = now.getHours();
    return hours >= 9 && hours < 17;
  };

  const isAvailable = checkAvailability();

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
            href="https://wa.me/6281262058978"
            className="whatsapp-card-featured"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="featured-glow"></div>
            <div className="featured-icon-wrapper">
              <svg className="featured-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor"/>
                <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.48-8.4zm-8.475 18.297c-1.778 0-3.518-.479-5.042-1.383l-.362-.214-3.75.977 1.005-3.645-.237-.374c-.99-1.576-1.512-3.396-1.512-5.26.003-5.45 4.458-9.884 9.935-9.884 2.654 0 5.145 1.035 7.021 2.91 1.875 1.876 2.909 4.361 2.909 7.009-.003 5.452-4.458 9.886-9.967 9.886z" fill="currentColor"/>
              </svg>
            </div>
            <div className="featured-content">
              <h3 className="featured-label">WhatsApp</h3>
              <p className="featured-value">081262058978</p>
              <span className={`featured-badge ${isAvailable ? 'available' : 'offline'}`}>
                <span className="status-dot"></span>
                {isAvailable ? 'Available Now' : 'Offline'}
              </span>
              {!isAvailable && (
                <p className="availability-hours">Available: 09:00 - 17:00 WIB</p>
              )}
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