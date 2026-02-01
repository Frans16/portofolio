import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      year: '2024 - Present',
      title: 'QA Specialist (Lead)',
      company: 'Antikode - Digital Agency',
      description: 'Own and drive the end-to-end Quality Assurance strategy across multiple digital projects, ensuring websites, applications, and campaigns are delivered with high reliability and quality. Lead and execute functional, automation, API, and performance testing, while acting as the primary quality authority bridging engineering teams and client expectations. Proactively identify quality risks, align QA efforts with delivery timelines, and ensure products meet both technical standards and business objectives before release.'
    },
    {
      year: '2022 - 2024',
      title: 'QA Engineer',
      company: 'Appsensi - HRIS',
      description: 'Played a key role in ensuring the quality and reliability of a Human Resources Information System (HRIS) by leading QA activities and collaborating closely with cross-functional teams. Defined and executed end-to-end testing strategies, including functional, integration, automation, and performance testing, to validate system stability and scalability. Actively contributed to the development process by identifying quality risks early and providing actionable feedback to support continuous product improvement.'
    },
    {
      year: '2021 - 2022',
      title: 'QA Engineer',
      company: 'Prudential Indonesia - Insurance',
      description: 'Contributed to the quality assurance of core insurance systems by executing and maintaining end-to-end testing across critical business flows. Collaborated closely with product and engineering teams to identify risks, validate system integrations, and ensure stable delivery of policy-related features. Supported continuous improvement by providing early QA feedback and ensuring releases met both technical and regulatory standards.'
    },
    {
      year: '2018 - 2021',
      title: 'Manual QA',
      company: 'IDStar - Outsourcing',
      description: 'Supported quality assurance activities across multiple client projects by executing manual testing and validating application functionality against business requirements. Performed functional, regression, and usability testing, while documenting defects clearly to ensure effective collaboration with development teams. Contributed to the software development lifecycle by ensuring delivered solutions met agreed quality standards.'
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">My journey</p>
          <h2 className="section-title">Work Experience</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">{exp.year}</span>
                <h3 className="timeline-title">{exp.title}</h3>
                <p className="timeline-company">{exp.company}</p>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;