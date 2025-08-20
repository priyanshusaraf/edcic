import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SplashCursor from '../components/SplashCursor';
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
  const [showInteractiveSequence, setShowInteractiveSequence] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [textKey, setTextKey] = useState(0);

  const loadingTexts = [
    "Running Verifications...",
    'Evaluating Skills...',
    'Assessing Potential...',
    'Measuring Vibes...',
    "Finalizing Decision...",
    "Let's see if you made it."
  ];

  const interactiveMessages = [
    "We've seen your potential",
    "It's time to prove it.",
    "We call ourselves a family",
    "And now...",
    "You're a part of it.",
    "It's time to see yourself in an EDCIC T-shirt"

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

    // Start interactive sequence after expansion animation
    setTimeout(() => {
      setShowInteractiveSequence(true);
      // Start first message
      setTimeout(() => {
        setShowButton(true);
      }, 500);
    }, 17000); // 1.5 seconds for expansion animation
  }, []);

  const handleButtonClick = () => {
    setShowButton(false);
    
    if (currentMessageIndex < interactiveMessages.length - 1) {
      setCurrentMessageIndex(prev => prev + 1);
      setTextKey(prev => prev + 1); // Force text re-animation
      setTimeout(() => {
        setShowButton(true);
      }, 300); // Short delay for smooth transition
    } else {
      // All messages shown, reveal final content
      setShowFinalContent(true);
    }
  };

  return (
    <div className="recruited-container">
      
      {!showFinalContent ? (
        <>
          {/* Loading Screen with Expansion Animation */}
          <div className="loading-screen">
            <div className="loading-content">
              {!isExpanding && !showInteractiveSequence && (
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
              {isExpanding && !showInteractiveSequence && (
                <div className="expanding-bar-container">
                  <div className="expanding-bar"></div>
                </div>
              )}
            </div>
          </div>

          {/* Interactive Sequence Overlay */}
          {showInteractiveSequence && (
            <div className="interactive-overlay">
              <SplashCursor />
              
              <div className="message-display">
                <h2 
                  key={textKey}
                  className="interactive-message fade-in"
                >
                  {interactiveMessages[currentMessageIndex]}
                </h2>
              </div>
              
              {showButton && (
                <div className="button-container">
                  <svg style={{position: 'absolute', width: 0, height: 0}}>
                    <filter width="3000%" x="-1000%" height="3000%" y="-1000%" id="unopaq">
                      <feColorMatrix
                        values="1 0 0 0 0 
                              0 1 0 0 0 
                              0 0 1 0 0 
                              0 0 0 3 0"
                      ></feColorMatrix>
                    </filter>
                  </svg>
                  <div className="backdrop"></div>
                  <button className="glowing-button" onClick={handleButtonClick}>
                    <div className="a l"></div>
                    <div className="a r"></div>
                    <div className="a t"></div>
                    <div className="a b"></div>
                    <div className="text">Continue</div>
                  </button>
                </div>
              )}
            </div>
          )}
        </>
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
Congratulations.           </p>
            </div>

            {/* Afterparty Ticket */}
            <div className="ticket-container">
              <div className="ticket">
                <div className="ticket-header">
                  <div className="ticket-logo">EDCIC</div>
                  <div className="ticket-type">ONCE-IN-A-LIFETIME ACCESS</div>
                </div>
                
                <div className="ticket-main">
                  <h2 className="ticket-title">Exclusive Access Pass</h2>
                  <p className="ticket-description">
                  Join us in creating the finest events, working with visionary founders and attending the craziest afterparties,                  </p>
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

              </div>
            </div>

            {/* Next Steps */}
            <div className="next-steps">
              <h3>What's Next?</h3>
              <div className="steps-grid">
                <div className="step-item">
                  <div className="step-number">01</div>
                  <div className="step-content">
                    <h4>Reply to the Email</h4>
                    <p>and acknowledge your acceptance</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-number">02</div>
                  <div className="step-content">
                    <h4>Own your next move</h4>
                    <p>Your goals, your pace. We’re here to keep you moving.</p>
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
