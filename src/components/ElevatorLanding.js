import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const ElevatorLanding = ({ onAnimationComplete }) => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const stairGroupRef = useRef(null);
  const animationIdRef = useRef(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0a1628, 15, 60);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1.5, 8);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;

    // Enhanced lighting setup
    const ambientLight = new THREE.AmbientLight(0x1a2332, 0.4);
    scene.add(ambientLight);
    
    const mainLight = new THREE.DirectionalLight(0x00d4ff, 1.2);
    mainLight.position.set(8, 20, 15);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;
    scene.add(mainLight);
    
    const rimLight = new THREE.DirectionalLight(0x0099cc, 0.8);
    rimLight.position.set(-5, 10, -10);
    scene.add(rimLight);

    // Create professional stairs
    const stairGroup = new THREE.Group();
    stairGroupRef.current = stairGroup;
    const numSteps = 25;
    
    const stepMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a2332,
      metalness: 0.7,
      roughness: 0.2,
      emissive: 0x0a1628,
      emissiveIntensity: 0.1
    });
    
    const edgeMaterial = new THREE.MeshStandardMaterial({
      color: 0x00d4ff,
      metalness: 0.9,
      roughness: 0.1,
      emissive: 0x0099cc,
      emissiveIntensity: 0.3
    });

    for (let i = 0; i < numSteps; i++) {
      const stepGroup = new THREE.Group();
      
      const step = new THREE.Mesh(new THREE.BoxGeometry(4, 0.3, 1.4), stepMaterial);
      step.castShadow = true;
      step.receiveShadow = true;
      stepGroup.add(step);
      
      const edge = new THREE.Mesh(new THREE.BoxGeometry(4.1, 0.05, 1.5), edgeMaterial);
      edge.position.y = 0.175;
      stepGroup.add(edge);
      
      stepGroup.position.set(0, i * 0.5, -i * 1.8);
      stairGroup.add(stepGroup);
    }
    scene.add(stairGroup);

    // Enhanced floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 300;
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 50;
      positions[i + 1] = Math.random() * 50;
      positions[i + 2] = (Math.random() - 0.5) * 100;
      velocities[i] = (Math.random() - 0.5) * 0.02;
      velocities[i + 1] = Math.random() * 0.01;
      velocities[i + 2] = (Math.random() - 0.5) * 0.02;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x00d4ff,
      size: 0.1,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Create 3D ELEVATOR text
    const createElevatorText = () => {
      const canvas = document.createElement('canvas');
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = 2048 * dpr;
      canvas.height = 512 * dpr;
      const ctx = canvas.getContext('2d');
      
      ctx.scale(dpr, dpr);
      const width = 2048;
      const height = 512;

      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, '#ffffff');
      gradient.addColorStop(0.2, '#00d4ff');
      gradient.addColorStop(0.5, '#ffffff');
      gradient.addColorStop(0.8, '#0099cc');
      gradient.addColorStop(1, '#ffffff');

      ctx.font = `${120 * dpr}px "Helvetica Neue", Helvetica, Arial, sans-serif`;
      ctx.fontWeight = '100';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      ctx.shadowColor = '#00d4ff';
      ctx.shadowBlur = 30;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      
      ctx.fillStyle = gradient;
      ctx.fillText('ELEVATOR', width/2, height/2);

      ctx.shadowBlur = 0;
      const innerGradient = ctx.createLinearGradient(0, height * 0.2, 0, height * 0.8);
      innerGradient.addColorStop(0, '#ffffff');
      innerGradient.addColorStop(0.5, 'rgba(255,255,255,0.3)');
      innerGradient.addColorStop(1, '#ffffff');
      
      ctx.globalCompositeOperation = 'overlay';
      ctx.fillStyle = innerGradient;
      ctx.fillText('ELEVATOR', width/2, height/2);

      const texture = new THREE.CanvasTexture(canvas);
      texture.generateMipmaps = false;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      
      const material = new THREE.MeshBasicMaterial({ 
        map: texture, 
        transparent: true,
        alphaTest: 0.1
      });
      const geometry = new THREE.PlaneGeometry(15, 3.75);

      const elevatorText = new THREE.Mesh(geometry, material);
      elevatorText.position.set(0, numSteps*0.5 + 3, -numSteps*1.8 - 15);
      scene.add(elevatorText);
      return elevatorText;
    };

    const elevatorText = createElevatorText();

    // Animation timing
    const climbDuration = 5000;
    const textApproachDuration = 3000;
    const finalFocusDuration = 2000;
    const stairsFadeOutDuration = 1000;
    const startTime = Date.now();

    // Easing functions
    const easeInOutQuart = (t) => t < 0.5 ? 8*t*t*t*t : 1 - Math.pow(-2*t+2, 4)/2;
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    const easeInOutExpo = (t) => t === 0 ? 0 : t === 1 ? 1 : t < 0.5 
      ? Math.pow(2, 20*t-10) / 2 
      : (2 - Math.pow(2, -20*t+10)) / 2;
    const easeInQuart = (t) => t*t*t*t;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const totalDuration = climbDuration + textApproachDuration + finalFocusDuration;

      // Animate particles
      const positions = particles.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += velocities[i];
        positions[i + 1] += velocities[i + 1];
        positions[i + 2] += velocities[i + 2];
        
        if (positions[i + 1] > 50) positions[i + 1] = -10;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      if (elapsed < climbDuration) {
        // Climbing phase
        const t = easeInOutQuart(elapsed / climbDuration);
        const targetY = 1.5 + t * numSteps * 0.5;
        const targetZ = 8 - t * numSteps * 1.8;
        
        camera.position.set(0, targetY, targetZ);
        camera.lookAt(0, targetY, targetZ - 8);
        
      } else if (elapsed < climbDuration + textApproachDuration) {
        // Text approach phase
        const t = easeOutCubic((elapsed - climbDuration) / textApproachDuration);
        const startY = numSteps * 0.5 + 1.5;
        const startZ = 8 - numSteps * 1.8;
        const finalY = numSteps * 0.5 + 3;
        const finalZ = -numSteps * 1.8 - 8;
        
        const currentY = startY + (finalY - startY) * t;
        const currentZ = startZ + (finalZ - startZ) * t;
        
        camera.position.set(0, currentY, currentZ);
        camera.lookAt(0, finalY, -numSteps*1.8 - 15);
        
      } else if (elapsed < totalDuration) {
        // Final focus phase
        const t = easeInOutExpo((elapsed - climbDuration - textApproachDuration) / finalFocusDuration);
        const startZ = -numSteps * 1.8 - 8;
        const endZ = -numSteps * 1.8 - 6;
        const currentZ = startZ + (endZ - startZ) * t;
        
        camera.position.set(0, numSteps * 0.5 + 3, currentZ);
        camera.lookAt(0, numSteps * 0.5 + 3, -numSteps*1.8 - 15);
        
      } else if (elapsed < totalDuration + stairsFadeOutDuration) {
        // Stairs fade out phase
        const t = easeInQuart((elapsed - totalDuration) / stairsFadeOutDuration);
        
        // Smoothly fade out and scale down stairs
        stairGroup.scale.set(1 - t * 0.3, 1 - t * 0.5, 1 - t * 0.3);
        stairGroup.position.y = -t * 10;
        
        // Fade out materials
        stairGroup.children.forEach(stepGroup => {
          stepGroup.children.forEach(mesh => {
            if (mesh.material) {
              mesh.material.opacity = 1 - t;
              mesh.material.transparent = true;
            }
          });
        });
        
        // Fade out text
        elevatorText.material.opacity = 1 - t;
        
        // Fade out particles
        particles.material.opacity = 0.6 * (1 - t);
        
      } else {
        // Animation complete
        if (!animationComplete) {
          setAnimationComplete(true);
          setFadeOut(true);
          
          // Clean up Three.js objects
          setTimeout(() => {
            if (onAnimationComplete) {
              onAnimationComplete();
            }
          }, 500);
        }
      }

      if (!animationComplete || elapsed < totalDuration + stairsFadeOutDuration) {
        renderer.render(scene, camera);
        animationIdRef.current = requestAnimationFrame(animate);
      }
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (renderer) {
        renderer.dispose();
      }
    };
  }, [onAnimationComplete, animationComplete]);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(135deg, #0a1628 0%, #1a2332 30%, #0f1419 100%)',
        overflow: 'hidden',
        zIndex: fadeOut ? 1 : 1000,
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.5s ease-out',
        pointerEvents: fadeOut ? 'none' : 'all'
      }}
    >
      <canvas 
        ref={canvasRef}
        style={{ display: 'block' }}
      />
      
      {/* Overlay UI */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 100
      }}>
        <div style={{
          position: 'absolute',
          top: '50px',
          left: '60px',
          fontSize: '1.6rem',
          fontWeight: '300',
          color: '#ffffff',
          opacity: 0,
          animation: 'fadeInLogo 2.5s cubic-bezier(0.4, 0.0, 0.2, 1) 4.5s forwards',
          letterSpacing: '6px',
          textTransform: 'uppercase'
        }}>
          Elevator
        </div>
        
        <div style={{
          position: 'absolute',
          bottom: '80px',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          color: '#ffffff',
          opacity: 0,
          animation: 'fadeInTagline 3s cubic-bezier(0.4, 0.0, 0.2, 1) 6s forwards'
        }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: '200',
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 50%, #0066ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '8px',
            textTransform: 'uppercase',
            lineHeight: '1.2'
          }}>
            Rise Above
          </h1>
          <p style={{
            fontSize: '1.2rem',
            fontWeight: '300',
            opacity: 0.8,
            letterSpacing: '2px',
            color: '#b0c4de'
          }}>
            Elevating experiences beyond expectations
          </p>
        </div>
        
        <div style={{
          position: 'absolute',
          bottom: '30px',
          right: '60px',
          color: '#ffffff',
          opacity: 0,
          animation: 'fadeInScroll 2.5s cubic-bezier(0.4, 0.0, 0.2, 1) 7s forwards, pulse 3s infinite 9s',
          fontSize: '0.9rem',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          fontWeight: '300'
        }}>
          Scroll to Explore
        </div>
        
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '2px',
          background: 'linear-gradient(90deg, #00d4ff, #0099cc)',
          opacity: 0.6,
          transform: 'scaleX(0)',
          transformOrigin: 'left',
          animation: 'progressFill 8s cubic-bezier(0.4, 0.0, 0.2, 1) forwards',
          width: '100%'
        }} />
      </div>

      <style jsx>{`
        @keyframes fadeInLogo { 
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 0.9; transform: translateY(0); }
        }
        
        @keyframes fadeInTagline { 
          0% { opacity: 0; transform: translateX(-50%) translateY(30px); }
          100% { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        
        @keyframes fadeInScroll { 
          0% { opacity: 0; transform: translateX(20px); }
          100% { opacity: 0.7; transform: translateX(0); }
        }
        
        @keyframes pulse { 
          0%, 100% { opacity: 0.7; transform: translateX(0); } 
          50% { opacity: 0.4; transform: translateX(-5px); } 
        }
        
        @keyframes progressFill {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }

        @media (max-width: 768px) {
          /* Mobile responsive styles handled inline */
        }
      `}</style>
    </div>
  );
};

export default ElevatorLanding;
