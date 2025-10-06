import React from 'react';
import '../styles/Portofolio.css';
import appsensiImage from '../assets/images/appsensi_logo.png';
import antikodeImage from '../assets/images/antikode_logo.jpg';
import danantaraImage from '../assets/images/prudential_logo.jpg';

const Portfolio = () => {
  const projects = [
    {
      title: 'Antikode',
      category: 'Digital Agency',
      description: 'Antikode is a digital customer experience agency that enables businesses to foster growth through innovative strategies in user experience design, data, and technology',
      tech: ['Playwright', 'Selenium', 'JMeter', 'AI Implementation'],
      image: antikodeImage,
      link: '#'
    },
    {
      title: 'Appsensi Tiga Ribu',
      category: 'HRIS',
      description: 'Appsensi is an HR and attendance app for the mobile generation. Using a SAAS business model, Appsensi aspires to help UMKM\'s in managing their workforce while also available in assisting corporations handling their HR requirements.',
      tech: ['Selenium', 'Katalon Studio', 'API Testing'],
      image: appsensiImage,
      link: '#'
    },
    {
      title: 'Prudential Indonesia',
      category: 'Insurance',
      description: 'PT Prudential Life Assurance (Prudential Indonesia) is part of Prudential plc, a leading financial services group in the United Kingdom. As part of a Group with over 175 years of experience in the life insurance industry, Prudential Indonesia has a commitment to develop its business in Indonesia.',
      tech: ['Selenium'],
      image: danantaraImage,
      link: '#'
    }
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">My work</p>
          <h2 className="section-title">Recent Projects</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <a href={project.link} className="view-project-btn">
                    View Project →
                  </a>
                </div>
              </div>
              <div className="project-content">
                <p className="project-category">{project.category}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;