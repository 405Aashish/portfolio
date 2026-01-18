
import React from 'react';

const SharinganEye: React.FC<{ size?: string; className?: string }> = ({ size = "w-full h-full", className = "" }) => {
  return (
    <div className={`relative ${size} ${className} animate-sharingan-container`}>
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_50px_rgba(255,0,0,0.9)]">
        <defs>
          <radialGradient id="eyeGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#ff4d4d" />
            <stop offset="40%" stopColor="#ff0000" />
            <stop offset="80%" stopColor="#800000" />
            <stop offset="100%" stopColor="#330000" />
          </radialGradient>
          <radialGradient id="irisRing" cx="50%" cy="50%" r="50%">
            <stop offset="90%" stopColor="transparent" />
            <stop offset="100%" stopColor="#ff9a00" stopOpacity="0.5" />
          </radialGradient>
          <filter id="sharinganGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Extra Large Outer Glow Rings */}
        <circle cx="100" cy="100" r="99" fill="none" stroke="#ff4500" strokeWidth="0.5" strokeOpacity="0.3" />
        <circle cx="100" cy="100" r="95" fill="none" stroke="#ff0000" strokeWidth="2" strokeOpacity="0.1" />
        
        <g className="animate-sharingan origin-center">
          {/* Main Eye Body with Rich Gradient */}
          <circle cx="100" cy="100" r="88" fill="url(#eyeGradient)" filter="url(#sharinganGlow)" />
          
          {/* Subtle Outer Iris Ring */}
          <circle cx="100" cy="100" r="88" fill="url(#irisRing)" />
          
          {/* Internal Connective Rings - Characteristic of Sharingan */}
          <circle cx="100" cy="100" r="60" fill="none" stroke="black" strokeWidth="2.5" strokeOpacity="0.4" />
          <circle cx="100" cy="100" r="62" fill="none" stroke="#ff0000" strokeWidth="0.5" strokeOpacity="0.2" />
          
          {/* Central Pupil - Darker and more defined */}
          <circle cx="100" cy="100" r="22" fill="#000" />
          <circle cx="92" cy="92" r="5" fill="white" fillOpacity="0.4" /> {/* Reflection */}
          
          {/* Tomoe 1 - Scaled up for visibility */}
          <g transform="rotate(0 100 100) translate(0 -60)">
             <path d="M0 0 C 20 -10, 30 20, 10 35 C -10 20, -10 10, 0 0" fill="black" transform="rotate(-30 0 0) scale(0.9)"/>
             <circle cx="0" cy="0" r="13" fill="black" />
          </g>
          
          {/* Tomoe 2 */}
          <g transform="rotate(120 100 100) translate(0 -60)">
             <path d="M0 0 C 20 -10, 30 20, 10 35 C -10 20, -10 10, 0 0" fill="black" transform="rotate(-30 0 0) scale(0.9)"/>
             <circle cx="0" cy="0" r="13" fill="black" />
          </g>

          {/* Tomoe 3 */}
          <g transform="rotate(240 100 100) translate(0 -60)">
             <path d="M0 0 C 20 -10, 30 20, 10 35 C -10 20, -10 10, 0 0" fill="black" transform="rotate(-30 0 0) scale(0.9)"/>
             <circle cx="0" cy="0" r="13" fill="black" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default SharinganEye;
