import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const texts = [
    'Mobile Applications',
    'Cross-Platform Solutions',
    'Seamless User Experiences',
    'Production-Ready Code',
  ];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypedText(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        
        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for Opportunities
          </div>
          
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">
            Deepraj <span>Singh</span>
          </h1>
          <h2 className="hero-title">React Native Developer</h2>
          
          <p className="hero-description">
            I craft <span className="typed-text">{typedText}</span>
            <span className="cursor">|</span>
          </p>
          
          <p className="hero-location">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            Jhalawar, Rajasthan, India
          </p>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View My Work
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-container">
            <div className="hero-ring hero-ring-1"></div>
            <div className="hero-ring hero-ring-2"></div>
            <div className="hero-image">
<div className="hero-avatar">
              <img src="/images/avatar.png" alt="Deepraj Singh" className="avatar-img" />
            </div>
            </div>
            <div className="hero-status">
              <span className="status-dot"></span>
              <span>Available for Work</span>
            </div>
          </div>
          
          <div className="floating-elements">
            <div className="float-item float-1">⚛️</div>
            <div className="float-item float-2">📱</div>
            <div className="float-item float-3">🚀</div>
            <div className="float-item float-4">💻</div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-line">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
