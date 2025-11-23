import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      year: '2024 - Present',
      title: 'QA Specialist (Lead)',
      company: 'Antikode - Digital Agency',
      description: 'Responsible for defining and managing the entire Quality Assurance (QA) strategy for digital projects, ensuring that all websites, applications, and campaigns are functionally sound and meet high quality standards before launch. I personally lead the testing process and serve as the critical bridge between the development team and the client\'s expectations, acting as the final quality authority.'
    },
    {
      year: '2022 - 2024',
      title: 'QA Engineer',
      company: 'Appsensi - HRIS',
      description: 'Led the QA team in a high-profile project, ensuring the successful implementation of a robust Human Resources Information System (HRIS) solution. Collaborated closely with cross-functional teams to identify and address potential issues, resulting in a 20% increase in employee satisfaction. Implemented a comprehensive testing strategy, including unit tests, integration tests, and end-to-end tests, to validate the functionality and performance of the system. Actively participated in the development process, providing feedback and suggestions to drive continuous improvement.'
    },
    {
      year: '2020 - 2022',
      title: 'QA Engineer',
      company: 'Prudential Indonesia - Insurance',
      description: 'Led the QA team in a high-profile project, ensuring the successful implementation of a robust Insurance Information System (INS) solution. Collaborated closely with cross-functional teams to identify and address potential issues, resulting in a 20% increase in customer satisfaction. Implemented a comprehensive testing strategy, including unit tests, integration tests, and end-to-end tests, to validate the functionality and performance of the system. Actively participated in the development process, providing feedback and suggestions to drive continuous improvement.'
    },
    {
      year: '2018 - 2020',
      title: 'Manual QA',
      company: 'IDStar - Outsourcing',
      description: 'Worked as a Manual QA Engineer for an outsourcing company, responsible for testing and validating software applications. Collaborated with cross-functional teams to identify and address potential issues, ensuring the quality and functionality of the software. Conducted thorough testing activities, including functional testing, regression testing, and usability testing, to meet the client\'s requirements. Provided detailed bug reports and documentation, facilitating effective communication with the development team. Actively participated in the software development lifecycle, contributing to the delivery of high-quality software products.'
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