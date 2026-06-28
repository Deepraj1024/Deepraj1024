import { useEffect, useRef, useState } from 'react';
import './Education.css';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const education = [
    {
      icon: '🎓',
      degree: 'B.Tech — Electrical Engineering',
      school: 'Modi Institute of Technology, Kota',
      year: '2020 — 2023',
      score: '80%',
    },
    {
      icon: '📜',
      degree: 'Diploma — Electronics Engineering',
      school: 'Govt. Polytechnic College, Kota',
      year: '2016 — 2019',
      score: '60%',
    },
  ];

  const certifications = [
    {
      title: 'React Native Developer Training',
      description: '3 Months intensive hands-on training program',
      verified: true,
    },
    {
      title: 'React Native Developer Internship',
      description: '2 Months real-world project internship experience',
      verified: true,
    },
  ];

  const achievements = [
    { icon: '🏢', title: '3 Companies Conquered', desc: 'Worked at Tribond, Macco Tech & Kriscent' },
    { icon: '📱', title: 'Cross-Platform Expert', desc: 'Building apps for both Android & iOS' },
    { icon: '⚡', title: 'Dual Framework Master', desc: 'Proficient in React Native & Flutter' },
    { icon: '🔐', title: 'Auth Implementation', desc: 'JWT, Firebase & Better-Auth systems' },
    { icon: '🎨', title: 'Smooth Animations', desc: 'React Native Reanimated for 60fps UIs' },
    { icon: '🎓', title: 'B.Tech Graduate', desc: '80% score from Modi Institute' },
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
    <section className="section education-section" id="education" ref={sectionRef}>
      <div className="section-header">
        <span className="section-subtitle">Background</span>
        <h2 className="section-title">
          Education & <span>Achievements</span>
        </h2>
        <div className="section-line"></div>
      </div>

      <div className={`education-content ${isVisible ? 'visible' : ''}`}>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="edu-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <span className="edu-icon">{edu.icon}</span>
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-school">{edu.school}</p>
              <p className="edu-year">{edu.year}</p>
              <span className="edu-score">Score: {edu.score}</span>
            </div>
          ))}
        </div>

        <div className="certifications-section">
          <h3 className="sub-section-title">Certifications</h3>
          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="cert-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <div className="cert-info">
                  <h4>{cert.title}</h4>
                  <p>{cert.description}</p>
                </div>
                {cert.verified && (
                  <span className="cert-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Verified
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="achievements-section">
          <h3 className="sub-section-title">Key Achievements</h3>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card" style={{ animationDelay: `${index * 0.08}s` }}>
                <span className="achievement-icon">{achievement.icon}</span>
                <div className="achievement-info">
                  <h4>{achievement.title}</h4>
                  <p>{achievement.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
