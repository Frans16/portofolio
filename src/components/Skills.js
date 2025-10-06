import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    { 
      name: 'Selenium', 
      level: 90, 
      icon: '🔧',
      description: 'Web Automation'
    },
    { 
      name: 'Katalon Studio', 
      level: 85, 
      icon: '⚡',
      description: 'Test Automation Platform'
    },
    { 
      name: 'Playwright', 
      level: 88, 
      icon: '🎭',
      description: 'Modern Web Testing'
    },
    { 
      name: 'JMeter', 
      level: 82, 
      icon: '📊',
      description: 'Performance Testing'
    },
    { 
      name: 'API Testing', 
      level: 85, 
      icon: '🔌',
      description: 'REST & GraphQL'
    },
    { 
      name: 'Test Management', 
      level: 80, 
      icon: '📋',
      description: 'Strategy & Planning'
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">My expertise</p>
          <h2 className="section-title">Skills & Tools</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon-wrapper">
                <span className="skill-icon">{skill.icon}</span>
              </div>
              <div className="skill-details">
                <div className="skill-title-row">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <p className="skill-description">{skill.description}</p>
                <div className="skill-bar-container">
                  <div 
                    className="skill-bar-fill" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;