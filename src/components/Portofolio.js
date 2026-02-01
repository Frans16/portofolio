import React, { useState } from 'react';
import '../styles/Portofolio.css';

import appsensiImage from '../assets/images/appsensi_logo.png';
import antikodeImage from '../assets/images/antikode_logo.jpg';
import danantaraImage from '../assets/images/prudential_logo.jpg';
import sepatuCompassWebsite from '../assets/images/sepatuCompass/sepatu-compass-logo.jpg';
import xlWebsite from '../assets/images/xl.co.id/xl-logo.png';
import makeOverWebsite from '../assets/images/makeover/makeover-logo.png';
import arkaRewards from '../assets/images/arka-rewards/arka-rewards.png';

import appsensi1 from '../assets/images/appsensi/appsensi1.jpg';
import appsensi2 from '../assets/images/appsensi/appsensi2.jpg';

import prudential1 from '../assets/images/prudential/prudential1.png';
import prudential2 from '../assets/images/prudential/prudential2.jpg';

import compassNFC from '../assets/images/antikode/compassNFC.jpg';
import rsBunda from '../assets/images/antikode/rsbunda.jpg';

const Portofolio = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const companies = [
    {
      id: 1,
      name: 'Antikode',
      logo: antikodeImage,
      type: 'Digital Agency',
      period: 'Mar 2024 - Present',
      description: 'A digital customer experience agency that enables businesses to foster growth through innovative strategies in user experience design, data, and technology.',
      projects: [
        {
          id: 1,
          title: 'Sepatu Compass Website',
          client: 'Sepatu Compass',
          description: 'The official e-commerce website of Sepatu Compass, an Indonesian footwear brand, designed as the primary digital sales and brand engagement platform. The website allows customers to explore product collections, access detailed product information, purchase items directly online, and participate in exclusive releases and campaign-based launches.',
          images: [
            sepatuCompassWebsite
          ],
          tools: [
            'Selenium',
            'JMeter',
            'JIRA',
            'Shopify'
          ],
          features: [
            'End-to-end regression testing after platform migration to Shopify',
            'Validation of critical e-commerce flows including product browsing, checkout, payment, and order management',
            'Performance testing using JMeter to ensure stability during high-traffic campaign periods',
            'Automation regression testing using Selenium to validate production safety before live releases',
            'Defect tracking, test case management, and release coordination using JIRA'
          ],
          projectType: 'Website',
          url: 'https://sepatucompass.com'
        },
        {
        id: 2,
        title: 'xl.co.id Website',
        client: 'XL Group',
        description: 'xl.co.id is the official corporate and customer-facing website of XL Axiata, one of Indonesia’s leading telecommunications providers. The website serves as a central platform for customers to explore mobile products and services, manage subscriptions, access promotions, and obtain customer support information, while also supporting high traffic from nationwide users.',
        images: [
          xlWebsite
        ],
        tools: [
          'Selenium',
          'Click Up'
        ],
        features: [
          'Regression testing to ensure stability of critical customer journeys and service information',
          'Validation of core website functionalities including product pages, service flows, and user interactions',
          'API testing to verify data consistency between frontend and backend services',
          'Cross-browser and responsive testing to ensure consistent user experience across devices',
          'Defect tracking and test coordination using Click Up'
        ],
        projectType: 'Website',
        url: 'https://www.xl.co.id'
      },
      {
        id: 3,
        title: 'Make Over Website',
        client: 'Make Over',
        description: 'The official website of Make Over Cosmetics, a professional beauty brand in Indonesia, serving as a digital platform for product discovery, brand campaigns, and customer engagement. The website supports frequent feature updates and high-traffic promotional campaigns, making stability and performance critical to the business.',
        images: [
          makeOverWebsite
        ],
        tools: [
          'JMeter',
          'Lark',
        ],
        features: [
          'Regression testing to ensure stability of existing features across frequent updates',
          'System Integration Testing (SIT) for newly developed features before release',
          'Performance testing using JMeter to validate website readiness during campaign periods',
          'Validation of core user journeys including product browsing and promotional flows',
          'Defect tracking and release coordination using Lark'
        ],
        projectType: 'Website',
        url: 'https://www.makeoverforall.com'
      },
      {
        id: 4,
        title: 'Arka Rewards',
        client: 'Arka Group',
        description: 'Arka Rewards is a loyalty program platform designed to increase customer engagement and retention through a points-based reward system. The platform enables users to earn points from transactions, redeem rewards such as vouchers, participate in campaigns, and unlock benefits through tiered membership levels.',
        images: [
          arkaRewards
        ],
        tools: [
          'JMeter',
          'Postman',
          'Lark',
          'Selenium'
        ],
        features: [
          'End-to-end testing of loyalty flows including point accumulation, voucher redemption, and transaction validation',
          'Validation of reward benefits, tiering logic, and eligibility rules',
          'Testing of campaign-based loyalty programs and promotional mechanics',
          'Regression testing to ensure stability of core loyalty features across releases',
          'Verification of data consistency between transactions, points, and rewards'
        ],
         projectType: 'Mobile App',
        url: "https://www.arkagroup.id/arka-rewards/"
      }

      ]
    },
    {
      id: 2,
      name: 'Appsensi',
      logo: appsensiImage,
      type: 'HR Tech',
      period: 'Mar 2022 - Mar 2024',
      description: 'Appsensi is a digital mobile attendance and payroll application developed by PT Appsensi Tiga Ribu. It is designed as a comprehensive HR management solution for businesses of all sizes.',
      projects: [
        {
          id: 3,
          title: 'Attendance Management System',
          client: 'Multi-Corporate Clients',
          description: 'A mobile-first attendance management system designed to help companies manage employee attendance, leave, and payroll processes digitally. The system replaces traditional attendance methods by enabling employees to clock in and out via smartphones, supported by GPS-based geofencing and face recognition to ensure data accuracy and prevent misuse.',
          images: [
            appsensi1,
            appsensi2
          ],
          tools: ['Appium', 'Selenium', 'Gitlab', 'Jira'],
          features: [
            'Validated GPS-based check-in/out accuracy across multiple locations and real-world usage scenarios',
            'Tested face recognition flows to ensure reliability, edge-case handling, and fraud prevention',
            'Executed regression testing to maintain stability across frequent feature updates',
            'Performed system integration testing for attendance, leave, and payroll data flows',
            'Collaborated closely with developers and product teams to identify risks before production releases'
          ],
          projectType: 'Mobile App',
          url: 'https://appsensi.com'
        }
      ]
    },
    {
      id: 3,
      name: 'Prudential Indonesia',
      logo: danantaraImage,
      type: 'Insurance',
      period: 'Mar 2020 - Mar 2022',
      description: 'A leading insurance and financial services company providing digital group insurance solutions for corporate clients across Indonesia.',
      projects: [
        {
          id: 4,
          title: 'PRUWorks',
          client: 'Prudential Indonesia',
          description: 'PRUWorks is a digital group insurance platform designed for corporate customers to manage employee insurance coverage, claims, and policy information through a centralized system.',
          images: [
            prudential1,
            prudential2
          ],
          tools: ['Selenium', 'Bitbucket', 'Jira'],
           features: [
            'Regression testing to ensure stability of core insurance and claim flows',
            'Validation of online claim submission and document handling processes',
            'System integration testing across claims, policy data, and reporting modules',
            'Automation testing using Selenium to improve regression efficiency',
            'Defect tracking and collaboration with development teams using JIRA'
          ],
          projectType: 'Website',
          url: 'https://www.prudential.co.id/id/enterprise/pruworks/'
        }
      ]
    }
  ];

  // Get all unique tools from all projects in a company
  const getAllCompanyTools = (company) => {
    const allTools = company.projects.flatMap(project => project.tools);
    return [...new Set(allTools)]; // Remove duplicates
  };

  const openCompanyModal = (company) => {
    setSelectedCompany(company);
    document.body.style.overflow = 'hidden';
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedCompany(null);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const backToCompany = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">MY WORK</p>
          <h2 className="section-title">Project Experience</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Explore my professional journey showcasing expertise in <br /><b>Software Quality Assurance</b> across leading companies.
          </p>
        </div>

        {/* Companies Grid */}
        <div className="projects-grid">
          {companies.map((company) => (
            <div 
              key={company.id}
              onClick={() => openCompanyModal(company)}
              className="project-card"
            >
              <div className="project-image-wrapper">
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="project-image company-logo"
                />
                <div className="project-overlay">
                  <span className="view-details">View Projects →</span>
                </div>
              </div>
              <div className="project-info">
                <div className="project-header-row">
                  <h3 className="project-title">{company.name}</h3>
                </div>
                <div className="project-meta">
                  <span className="project-category">{company.type}</span>
                  <span className="project-date">{company.period}</span>
                </div>
                <p className="project-description">{company.description}</p>
                
                {/* Tools Summary */}
                <div className="tools-summary">
                  <div className="tools-summary-label">Tools Used:</div>
                  <div className="tools-summary-list">
                    {getAllCompanyTools(company).slice(0, 4).map((tool, index) => (
                      <span key={index} className="tool-chip">{tool}</span>
                    ))}
                    {getAllCompanyTools(company).length > 4 && (
                      <span className="tool-chip more">+{getAllCompanyTools(company).length - 4}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Company Projects List Modal */}
      {selectedCompany && !selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content company-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header-content">
                <img src={selectedCompany.logo} alt={selectedCompany.name} className="modal-company-logo" />
                <div>
                  <h2 className="modal-title">{selectedCompany.name}</h2>
                  <p className="modal-subtitle">{selectedCompany.type} • {selectedCompany.period}</p>
                </div>
              </div>
              <button onClick={closeModal} className="modal-close">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h3 className="section-heading">Projects ({selectedCompany.projects.length})</h3>
                <div className="company-projects-grid">
                  {selectedCompany.projects.map((project) => (
                    <div 
                      key={project.id}
                      className="company-project-card"
                      onClick={() => openProjectModal(project)}
                    >
                      <div className="company-project-image">
                        <img src={project.images[0]} alt={project.title} />
                        <div className="company-project-overlay">
                          <span>View Details →</span>
                        </div>
                      </div>
                      <div className="company-project-info">
                        <h4>{project.title}</h4>
                        <div className="company-project-meta">
                          <span className="role-badge">{project.client}</span>
                          <span className="duration-text">{project.projectType}</span>
                        </div>
                        <p>{project.description.substring(0, 100)}...</p>
                        
                        {/* Project Tools */}
                        <div className="project-tools-list">
                          {project.tools.map((tool, index) => (
                            <span key={index} className="project-tool-tag">{tool}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header-with-back">
                <button onClick={backToCompany} className="back-button">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                  Back
                </button>
                <h2 className="modal-title">{selectedProject.title}</h2>
              </div>
              <button onClick={closeModal} className="modal-close">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Image Gallery */}
            <div className="modal-gallery">
              <img 
                src={selectedProject.images[currentImageIndex]} 
                alt={selectedProject.title}
                className="gallery-image"
              />
              {selectedProject.images.length > 1 && (
                <>
                  <button onClick={prevImage} className="gallery-nav gallery-prev">
                    ‹
                  </button>
                  <button onClick={nextImage} className="gallery-nav gallery-next">
                    ›
                  </button>
                  <div className="gallery-indicators">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              {/* Meta Info */}
              <div className="modal-meta">
                <div className="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>{selectedProject.client}</span>
                </div>
                <div className="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>{selectedProject.projectType}</span>
                </div>
              </div>

              {/* Description */}
              <div className="modal-section">
                <h3 className="section-heading">About Project</h3>
                <p className="section-text">{selectedProject.description}</p>
              </div>

              {/* Tools & Technologies */}
              <div className="modal-section">
                <h3 className="section-heading">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12.89 1.45l8 4A2 2 0 0122 7.24v9.53a2 2 0 01-1.11 1.79l-8 4a2 2 0 01-1.78 0l-8-4a2 2 0 01-1.11-1.8V7.24a2 2 0 011.11-1.79l8-4a2 2 0 011.78 0z"/>
                    <polyline points="2.32 6.16 12 11 21.68 6.16"/>
                    <line x1="12" y1="22.76" x2="12" y2="11"/>
                  </svg>
                  Tools & Technologies
                </h3>
                <div className="tech-stack">
                  {selectedProject.tools.map((tool, index) => (
                    <span key={index} className="tech-badge">{tool}</span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="modal-section">
                <h3 className="section-heading">Key Features Tested</h3>
                <ul className="features-list">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="modal-actions">
                <a 
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn primary"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portofolio;