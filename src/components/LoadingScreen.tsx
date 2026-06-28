import { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <span className="loading-initial">D</span>
          <div className="loading-ring"></div>
        </div>
        <h2 className="loading-name">Deepraj Singh</h2>
        <p className="loading-title">React Native Developer</p>
        <div className="loading-bar-container">
          <div className="loading-bar" style={{ width: `${Math.min(progress, 100)}%` }}></div>
        </div>
        <span className="loading-percent">{Math.min(Math.floor(progress), 100)}%</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
