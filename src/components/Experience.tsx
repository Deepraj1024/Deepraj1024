import { useEffect, useRef, useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const experiences = [
    {
      period: 'Jan 2026 — Present',
      role: 'React Native / Flutter Developer',
      company: 'Kriscent Techno Hub Pvt. Ltd.',
      location: 'Kota, Rajasthan',
      description: [
        'Working on frontend and mobile application development using React Native',
        'Building and maintaining scalable UI components and application features',
        'Collaborating with backend teams for API integration and application flow',
      ],
    },
    {
      period: 'July 2025 — Dec 2025',
      role: 'React Native Developer',
      company: 'Macco Tech Company',
      location: 'Remote',
      description: [
        'Developed cross-platform mobile apps using React Native (JS/TS) for Android & iOS',
        'Built responsive UIs with View, Text, FlatList, TouchableOpacity, and Image',
        'Implemented layouts using Flexbox and StyleSheet for consistent UI design',
        'Integrated REST APIs using Axios/Fetch with JWT/Firebase Auth & error handling',
      ],
    },
    {
      period: 'March 2025 — June 2025',
      role: 'React Native Developer',
      company: 'Tribond Infosystem Pvt. Ltd.',
      location: 'Kota, Rajasthan',
      description: [
        'Learned and implemented cross-platform mobile applications using React Native',
        'Worked on navigation, styling, and UI components using Flexbox',
        'Gained experience in API integration, state management (Context API / Redux)',
        'Understood end-to-end app flow including authentication & performance optimization',
      ],
    },
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
    <section className="section experience-section" id="experience" ref={sectionRef}>
      <div className="section-header">
        <span className="section-subtitle">Career Journey</span>
        <h2 className="section-title">
          Work <span>Experience</span>
        </h2>
        <div className="section-line"></div>
      </div>

      <div className={`timeline ${isVisible ? 'visible' : ''}`}>
        <div className="timeline-line"></div>
        
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-period">{exp.period}</span>
              <h3 className="timeline-role">{exp.role}</h3>
              <p className="timeline-company">{exp.company}</p>
              <p className="timeline-location">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {exp.location}
              </p>
              <ul className="timeline-description">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
