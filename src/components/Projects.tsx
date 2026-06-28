import { useEffect, useRef, useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: 'E-Commerce Mobile App',
      description: 'Full-featured shopping app with product browsing, cart management, authentication & payment integration.',
      tags: ['E-Commerce', 'Mobile'],
      tech: ['React Native', 'Redux', 'Firebase Auth', 'REST API'],
      gradient: 'linear-gradient(135deg, #c41e3a 0%, #8b0000 100%)',
    },
    {
      title: 'Task & Productivity App',
      description: 'Task management app with categories, reminders, MMKV storage, and clean animated UI components.',
      tags: ['Productivity', 'Mobile'],
      tech: ['React Native', 'TypeScript', 'Zustand', 'MMKV'],
      gradient: 'linear-gradient(135deg, #d4af37 0%, #8b6914 100%)',
    },
    {
      title: 'Chat & Social App',
      description: 'Real-time messaging app with Firebase backend, authentication, push notifications & media sharing.',
      tags: ['Social', 'Real-time'],
      tech: ['React Native', 'Firebase', 'Context API', 'Reanimated'],
      gradient: 'linear-gradient(135deg, #1a1a1a 0%, #333333 100%)',
    },
    {
      title: 'Flutter Dashboard App',
      description: 'Admin dashboard mobile app built with Flutter & Dart featuring charts, user management & analytics.',
      tags: ['Flutter', 'Dashboard'],
      tech: ['Flutter', 'Dart', 'REST API', 'Provider'],
      gradient: 'linear-gradient(135deg, #02569b 0%, #013366 100%)',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section projects-section" id="projects" ref={sectionRef}>
      <div className="section-header">
        <span className="section-subtitle">Portfolio</span>
        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>
        <div className="section-line"></div>
      </div>

      <div className={`projects-grid ${isVisible ? 'visible' : ''}`}>
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="project-image" style={{ background: project.gradient }}>
              <div className="project-mockup">
                <div className="mockup-notch"></div>
                <div className="mockup-content">
                  <div className="mockup-line" style={{ width: '60%' }}></div>
                  <div className="mockup-line" style={{ width: '40%' }}></div>
                  <div className="mockup-block"></div>
                  <div className="mockup-line" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="project-overlay">
                <button className="overlay-btn">View Details</button>
              </div>
            </div>
            
            <div className="project-info">
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
