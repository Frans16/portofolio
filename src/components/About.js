import React from 'react';
import '../styles/About.css';
import cvFile from '../assets/docs/Frans_Togu_Marbun_CV.pdf';

const About = () => {
  const stats = [
    { number: '7+', label: 'Years Experience', icon: '🎯' },
    { number: '20+', label: 'Projects Done', icon: '🚀' },
    { number: '3+', label: 'Years Lead QA', icon: '👨‍💼' },
    { number: '5+', label: 'Years Automation', icon: '🤖' }
  ];

  // const skills = [
  //   'AI-Driven Workflow Automation',
  //   'Test Automation Strategy & Framework Design',
  //   'QA Process Improvement & Quality Governance',
  //   'Performance Testing & Optimization',
  // ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Frans_Togu_Marbun_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="about-section">
      {/* Background Effects */}
      <div className="about-background">
        <div className="about-shape about-shape-1"></div>
        <div className="about-shape about-shape-2"></div>
      </div>

      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span className="badge-icon">👋</span>
            Get to know
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-description">
            Passionate about quality and excellence in software engineering
          </p>
        </div>
        
        <div className="about-grid">
          <div className="about-content">
            <div className="about-text">
              <p className="about-paragraph">
                <span className="highlight">Senior Quality Assurance Engineer and QA Lead</span> with 
                <strong> 7+ years of experience</strong> driving product quality and engineering excellence across diverse industries. 
                Proven ability to <strong>define and execute end-to-end QA strategies</strong>, combining test automation, manual testing,
                API, and performance testing to maximize efficiency, reliability, and release confidence.
              </p>
              <p className="about-paragraph">
                Experienced in <strong>leading QA teams</strong>, managing resources and timelines across multi-project environments, 
                and ensuring testing efforts align with complex product requirements and business objectives. 
                Brings a strong blend of <strong>hands-on technical expertise</strong>, strategic quality ownership, 
                and a commitment to delivering scalable, high-quality products that consistently exceed customer expectations.
              </p>
            </div>

            {/* <div className="skills-tags">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div> */}

            <button onClick={handleDownloadCV} className="btn btn-primary btn-download">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Download CV</span>
            </button>
          </div>
          
          <div className="stats-container">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

              
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;