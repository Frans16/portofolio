import React from 'react';
import '../styles/About.css';
import cvFile from '../assets/docs/Frans_Marbun_CV.pdf';

const About = () => {
  const stats = [
    { number: '6+', label: 'Years Experience', icon: '🎯' },
    { number: '50+', label: 'Projects Done', icon: '🚀' },
    { number: '2+', label: 'Years Lead QA', icon: '👨‍💼' },
    { number: '5+', label: 'Years Automation', icon: '🤖' }
  ];

  const skills = [
    'Test Automation',
    'Manual Testing',
    'API Testing',
    'Performance Testing',
    'CI/CD Integration',
    'Agile/Scrum'
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Frans_Marbun_CV.pdf';
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
                <span className="highlight">Highly skilled Quality Assurance Engineer</span> with 
                <strong> 6+ years of experience</strong> driving superior product quality and 
                engineering excellence. Proven ability to design and implement robust, 
                end-to-end testing strategies, expertly leveraging advanced automation 
                to maximize efficiency and precision.
              </p>
              <p className="about-paragraph">
                Successfully managed comprehensive functional and non-functional testing efforts, 
                ensuring deep alignment with complex product requirements and business goals. 
                Brings a blend of strong technical acumen and an unwavering commitment 
                to delivering products that consistently exceed customer expectations 
                and quality benchmarks.
              </p>
            </div>

            <div className="skills-tags">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>

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

            <div className="experience-card">
              <div className="experience-header">
                <div className="experience-icon">💼</div>
                <div>
                  <h3 className="experience-title">Professional Journey</h3>
                  <p className="experience-subtitle">Building quality software since 2018</p>
                </div>
              </div>
              <div className="experience-list">
                <div className="experience-item">
                  <div className="experience-dot"></div>
                  <div>
                    <p className="experience-role">QA Specialist (Lead)</p>
                    <p className="experience-company">Digital Agency [2024 - Present]</p>
                  </div>
                </div>
                <div className="experience-item">
                  <div className="experience-dot"></div>
                  <div>
                    <p className="experience-role">Mid. QA Engineer</p>
                    <p className="experience-company">HRIS [2022 - 2024]</p>
                  </div>
                </div>
                <div className="experience-item">
                  <div className="experience-dot"></div>
                  <div>
                    <p className="experience-role">QA Engineer</p>
                    <p className="experience-company">Insurance [2020 - 2022]</p>
                  </div>
                </div>
                <div className="experience-item">
                  <div className="experience-dot"></div>
                  <div>
                    <p className="experience-role">Manual QA</p>
                    <p className="experience-company">Outsourcing [2018 - 2020]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;