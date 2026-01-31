import React, { useEffect, useRef } from 'react';
import '../styles/Hero.css';
import profilePicture from '../assets/images/profile_picture.jpeg';
import backgroundImage from '../assets/images/profile_picture.jpeg';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((particleA, indexA) => {
        particles.slice(indexA + 1).forEach(particleB => {
          const dx = particleA.x - particleB.x;
          const dy = particleA.y - particleB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 * (1 - distance / 120)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particleA.x, particleA.y);
            ctx.lineTo(particleB.x, particleB.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="particles-canvas"></canvas>
      
      <div className="hero-background">
        <div className="hero-background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        <div className="hero-gradient"></div>
      </div>

      {/* Floating shapes */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Available for opportunities
        </div>

        <div className="avatar">
          <div className="avatar-ring"></div>
          <img 
            src={profilePicture} 
            alt="Frans Togu Tua Marbun"
            className="avatar-image"
          />
        </div>
        
        <h1 className="hero-title">
          <span className="title-line">Frans Togu Tua</span>
          <span className="gradient-text">Marbun</span>
        </h1>
        
        <div className="hero-role-container">
          <div className="role-icon">🔍</div>
          <p className="hero-role">Software Quality Assurance</p>
        </div>
        
        <p className="hero-description">
          Crafting quality experiences through meticulous testing.<br/>
          <strong>7+ years</strong> of expertise in ensuring software excellence.
        </p>
        
        <div className="hero-buttons">
          <button 
            onClick={() => scrollToSection('portfolio')} 
            className="btn btn-primary"
          >
            <span>View My Work</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="btn btn-secondary"
          >
            <span>Get In Touch</span>
          </button>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('about')}
        className="scroll-indicator"
        aria-label="Scroll down"
      >
      </button>
    </section>
  );
};

export default Hero;