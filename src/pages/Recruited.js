import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../styles/recruited.css';

const Recruited = () => {
  const [searchParams] = useSearchParams();
  const letssee = searchParams.get('letssee');
  const [loadingStage, setLoadingStage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [isExpanding, setIsExpanding] = useState(false);
  const [showFinalContent, setShowFinalContent] = useState(false);

  const loadingTexts = [
    'Are you that smart?',
    'Analysing answers...',
    'Party animal huh?',
    'Got it.',
    'Great.'
  ];

  useEffect(() => {
    // Loading sequence - 15 seconds total
    const stages = [
      { delay: 0, duration: 3000, progress: 20, text: loadingTexts[0] },
      { delay: 3000, duration: 3000, progress: 40, text: loadingTexts[1] },
      { delay: 6000, duration: 3000, progress: 60, text: loadingTexts[2] },
      { delay: 9000, duration: 3000, progress: 80, text: loadingTexts[3] },
      { delay: 12000, duration: 3000, progress: 100, text: loadingTexts[4] }
    ];

    // Set up each stage with its own timer
    stages.forEach((stage, index) => {
      // Set text
      setTimeout(() => {
        setCurrentText(stage.text);
      }, stage.delay);

      // Animate progress for this stage
      setTimeout(() => {
        const startProgress = index === 0 ? 0 : stages[index - 1].progress;
        const targetProgress = stage.progress;
        const steps = 60; // 60 steps over 3 seconds = 50ms per step
        const increment = (targetProgress - startProgress) / steps;
        
        let currentStep = 0;
        const progressInterval = setInterval(() => {
          currentStep++;
          const newProgress = startProgress + (increment * currentStep);
          setProgress(Math.min(newProgress, targetProgress));
          
          if (currentStep >= steps) {
            clearInterval(progressInterval);
            setProgress(targetProgress);
          }
        }, stage.duration / steps);
      }, stage.delay);
    });

    // Start expansion animation after all stages complete
    setTimeout(() => {
      setIsExpanding(true);
      // Hide loading text during expansion
      setCurrentText('');
    }, 15500); // 15 seconds + 500ms buffer

    // Show final content after expansion animation
    setTimeout(() => {
      setShowFinalContent(true);
    }, 17000); // 1.5 seconds for expansion animation
  }, []);

  return (
    <div className="recruited-container">
      {!showFinalContent ? (
        // Loading Screen with Expansion Animation
        <div className="loading-screen">
          <div className="loading-content">
            {!isExpanding && (
              <>
                <div className="loading-text">{currentText}</div>
                <div className="progress-container">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <div className="progress-percentage">{Math.round(progress)}%</div>
                </div>
              </>
            )}
            
            {/* Expanding Bar Animation */}
            {isExpanding && (
              <div className="expanding-bar-container">
                <div className="expanding-bar"></div>
              </div>
            )}
          </div>
        </div>
      ) : (
        // Main Content
        <div className="main-content">
          <div className="content-wrapper">
            {/* Acceptance Header */}
            <div className="acceptance-header">
              <div className="status-indicator">
                <div className="status-dot"></div>
                <span>Accepted</span>
              </div>
              <h1 className="welcome-title">Welcome to EDCIC</h1>
              <p className="welcome-subtitle">
Congratulations. Next up, clear probations               </p>
            </div>

            {/* Afterparty Ticket */}
            <div className="ticket-container">
              <div className="ticket">
                <div className="ticket-header">
                  <div className="ticket-logo">EDCIC</div>
                  <div className="ticket-type">AFTERPARTY ACCESS</div>
                </div>
                
                <div className="ticket-main">
                  <h2 className="ticket-title">Exclusive Access Pass</h2>
                  <p className="ticket-description">
                    Join us for networking events, workshops, and exclusive gatherings
                  </p>
                </div>

                <div className="ticket-details">
                  <div className="detail-item">
                    <span className="detail-label">Valid From</span>
                    <span className="detail-value">{new Date().getFullYear()}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Member ID</span>
                    <span className="detail-value">EDC{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</span>
                  </div>
                </div>

                <div className="ticket-footer">
                  <div className="qr-placeholder">
                    <div className="qr-code"></div>
                  </div>
                  <div className="ticket-info">
                    <p>Present this pass for exclusive access</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="next-steps">
              <h3>What's Next?</h3>
              <div className="steps-grid">
                <div className="step-item">
                  <div className="step-number">01</div>
                  <div className="step-content">
                    <h4>Join Our WhatsApp group</h4>
                    <p>Someone will send you the link shortly</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-number">02</div>
                  <div className="step-content">
                    <h4>Get ready for substance abuse</h4>
                    <p>Or help abuse others if you're into that</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recruited;
