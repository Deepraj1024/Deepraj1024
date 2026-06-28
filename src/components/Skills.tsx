import { useEffect, useRef, useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'React Native', level: 95, icon: '⚛️', color: '#61dafb' },
    { name: 'JavaScript / TypeScript', level: 90, icon: '📜', color: '#f7df1e' },
    { name: 'API Integration', level: 88, icon: '🔗', color: '#22c55e' },
    { name: 'State Management', level: 85, icon: '🗃️', color: '#764abc' },
    { name: 'UI / Animations', level: 85, icon: '🎨', color: '#ff6b6b' },
    { name: 'Flutter / Dart', level: 80, icon: '💙', color: '#02569b' },
  ];

  const technologies = [
    { name: 'React Native', icon: '⚛️' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Kotlin', icon: '🎯' },
    { name: 'Flutter', icon: '💙' },
    { name: 'Dart', icon: '🐦' },
    { name: 'Redux', icon: '🗃️' },
    { name: 'Zustand', icon: '🐻' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'REST APIs', icon: '🌐' },
    { name: 'Axios', icon: '📡' },
    { name: 'Reanimated', icon: '🎬' },
    { name: 'MMKV', icon: '💾' },
    { name: 'JWT', icon: '🔐' },
    { name: 'Git', icon: '📦' },
    { name: 'Zod', icon: '🛡️' },
  ];

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
    <section className="section skills-section" id="skills" ref={sectionRef}>
      <div className="section-header">
        <span className="section-subtitle">My Expertise</span>
        <h2 className="section-title">
          Skills & <span>Technologies</span>
        </h2>
        <div className="section-line"></div>
      </div>

      <div className={`skills-content ${isVisible ? 'visible' : ''}`}>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="skill-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    background: `linear-gradient(90deg, var(--red-primary), ${skill.color})`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="tech-section">
          <h3 className="tech-title">Technologies I Work With</h3>
          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div 
                key={tech.name} 
                className="tech-item"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="tech-icon">{tech.icon}</span>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
