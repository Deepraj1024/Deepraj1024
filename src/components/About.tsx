import { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section about-section" id="about" ref={sectionRef}>
      <div className={`about-content ${isVisible ? 'visible' : ''}`}>
        <div className="about-text">
          <div className="section-header" style={{ textAlign: 'left' }}>
            <span className="section-subtitle">About Me</span>
            <h2 className="section-title">
              Passionate <span>Developer</span>
            </h2>
          </div>
          
          <p className="about-description">
            I'm a dedicated React Native Developer with over 2 years of experience in building 
            high-performance cross-platform mobile applications. My journey in mobile development 
            has equipped me with expertise in both React Native and Flutter, allowing me to deliver 
            seamless user experiences across Android and iOS platforms.
          </p>
          
          <p className="about-description">
            I specialize in creating scalable, maintainable codebases with clean architecture, 
            efficient state management, and smooth animations. My approach combines technical 
            excellence with a keen eye for design, ensuring that every application I build is 
            not just functional, but also visually appealing.
          </p>
          
          <div className="about-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div className="highlight-text">
                <h4>Cross-Platform Expert</h4>
                <p>React Native & Flutter proficiency</p>
              </div>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="highlight-text">
                <h4>Quick Learner</h4>
                <p>Adapting to new technologies</p>
              </div>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="highlight-text">
                <h4>Team Player</h4>
                <p>Collaborative development approach</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-visual">
          <div className="about-card">
            <div className="card-header">
              <span className="card-dot"></span>
              <span className="card-dot"></span>
              <span className="card-dot"></span>
            </div>
            <div className="card-content">
              <pre className="code-block">
{`const developer = {
  name: "Deepraj Singh",
  role: "React Native Developer",
  location: "Rajasthan, India",
  
  skills: [
    "React Native",
    "Flutter",
    "TypeScript",
    "JavaScript"
  ],
  
  passion: "Building amazing apps"
};`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
