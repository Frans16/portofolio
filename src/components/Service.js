import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Test Automation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu.'
    },
    {
      icon: '💼',
      title: 'Manual Testing',
      description: 'Quisque congue porttitor ullamcorper. Proin vitae mi sed velit tempus ultricies.'
    },
    {
      icon: '🏆',
      title: 'Performance Testing',
      description: 'Sed lobortis est non quam tempor, nec congue orci molestie. Morbi tincidunt arcu.'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">What I do</p>
          <h2 className="section-title">My Services</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;