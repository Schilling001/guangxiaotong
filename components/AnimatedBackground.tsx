import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <defs>
          {/* Base Grid Pattern */}
          <pattern id="grid-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
          </pattern>
          
          {/* Dot Pattern for Texture */}
          <pattern id="dot-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
             <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.05)" />
          </pattern>

          {/* Gradients */}
          <linearGradient id="beam-grad-h" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#ff4d00" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          
          <linearGradient id="beam-grad-v" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#ff4d00" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          <radialGradient id="glow-center" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,77,0,0.03)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* 1. Base Texture Layer */}
        <rect width="100%" height="100%" fill="url(#grid-pattern)" mask="url(#fade-mask)" />
        <rect width="100%" height="100%" fill="url(#dot-pattern)" opacity="0.5" />
        
        {/* Center Glow */}
        <rect width="100%" height="100%" fill="url(#glow-center)" />

        {/* 2. Artistic Composition (SVG Elements) */}
        
        {/* Large Decorative Arcs - Top Right */}
        <g opacity="0.1" transform="translate(100, -100)">
           <circle cx="80%" cy="20%" r="300" fill="none" stroke="white" strokeWidth="1" strokeDasharray="20 40" className="animate-spin-slower origin-[80%_20%]" />
           <circle cx="80%" cy="20%" r="250" fill="none" stroke="white" strokeWidth="0.5" className="animate-spin-reverse-slower origin-[80%_20%]" />
        </g>

        {/* Floating Design Elements - Left Side */}
        <g opacity="0.1" className="animate-float">
            <rect x="10%" y="30%" width="100" height="100" fill="none" stroke="white" strokeWidth="1" transform="rotate(15 200 400)" />
            <rect x="8%" y="35%" width="60" height="60" fill="rgba(255,255,255,0.1)" transform="rotate(45 150 450)" />
        </g>

        {/* Abstract Process Lines - Curve across screen */}
        <path d="M 0 600 C 400 500, 800 800, 1200 500 S 2000 400, 2400 600" 
              fill="none" 
              stroke="url(#beam-grad-h)" 
              strokeWidth="2" 
              strokeDasharray="10 30" 
              opacity="0.15"
              className="animate-pulse"
        />

        {/* Technical Markings */}
        <g opacity="0.2">
             {/* Bottom Left Crosshairs */}
            <path d="M 50 800 L 90 800 M 70 780 L 70 820" stroke="white" />
            <circle cx="70" cy="800" r="15" fill="none" stroke="white" />
            
            {/* Top Right Measurement */}
            <path d="M 90% 100 L 90% 150" stroke="white" />
            <path d="M calc(90% - 5px) 100 L calc(90% + 5px) 100" stroke="white" />
            <path d="M calc(90% - 5px) 150 L calc(90% + 5px) 150" stroke="white" />
            <text x="92%" y="130" fill="white" fontSize="10" fontFamily="monospace" style={{writingMode: 'vertical-rl'}}>PROCESS</text>
        </g>

        {/* 3. Dynamic Beams (Movement) */}
        <rect x="0" y="25%" width="150" height="1" fill="url(#beam-grad-h)" className="animate-beam-horz" style={{ animationDuration: '7s' }} />
        <rect x="0" y="65%" width="200" height="1" fill="url(#beam-grad-h)" className="animate-beam-horz" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        
        <rect x="15%" y="0" width="1" height="150" fill="url(#beam-grad-v)" className="animate-beam-vert" style={{ animationDuration: '8s', animationDelay: '1s' }} />
        <rect x="85%" y="0" width="1" height="200" fill="url(#beam-grad-v)" className="animate-beam-vert" style={{ animationDuration: '12s', animationDelay: '3s' }} />

        {/* 4. Masking for Fade out */}
        <mask id="fade-mask">
          <radialGradient id="fade-grad" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="white" stopOpacity="1"/>
            <stop offset="70%" stopColor="white" stopOpacity="0.5"/>
            <stop offset="100%" stopColor="black" stopOpacity="0"/>
          </radialGradient>
          <rect width="100%" height="100%" fill="url(#fade-grad)"/>
        </mask>
      </svg>
    </div>
  );
};

export default AnimatedBackground;