import { useEffect, useRef, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const sectionRef = useRef<HTMLElement>(null);

  const contactInfo = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      label: 'Email',
      value: 'deeprajsinghsisodia@gmail.com',
      href: 'mailto:deeprajsinghsisodia@gmail.com',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      label: 'Phone',
      value: '+91-8118806431',
      href: 'tel:+918118806431',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      label: 'Location',
      value: 'Jhalawar, Rajasthan, India',
      href: '#',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      ),
      label: 'Status',
      value: 'Open for Opportunities',
      href: '#',
      isStatus: true,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    setTimeout(() => {
      setFormStatus('sent');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

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
    <section className="section contact-section" id="contact" ref={sectionRef}>
      <div className="section-header">
        <span className="section-subtitle">Get in Touch</span>
        <h2 className="section-title">
          Let's <span>Connect</span>
        </h2>
        <div className="section-line"></div>
        <p className="contact-intro">
          Ready for new opportunities! Drop a message or reach out directly.
        </p>
      </div>

      <div className={`contact-content ${isVisible ? 'visible' : ''}`}>
        <div className="contact-info">
          {contactInfo.map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              className="contact-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="contact-icon">{item.icon}</div>
              <div className="contact-details">
                <span className="contact-label">{item.label}</span>
                <span className={`contact-value ${item.isStatus ? 'status' : ''}`}>
                  {item.value}
                </span>
              </div>
            </a>
          ))}
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Subject" />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message..." rows={5} required></textarea>
          </div>
          <button 
            type="submit" 
            className={`submit-btn ${formStatus}`}
            disabled={formStatus !== 'idle'}
          >
            {formStatus === 'idle' && (
              <>
                Send Message
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </>
            )}
            {formStatus === 'sending' && 'Sending...'}
            {formStatus === 'sent' && (
              <>
                Message Sent!
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
