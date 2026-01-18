
import React, { useMemo } from 'react';

const Shuriken = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" className="drop-shadow-[0_0_8px_rgba(255,154,0,0.6)]">
    <defs>
      <linearGradient id="shurikenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4a4a4a" />
        <stop offset="50%" stopColor="#ff9a00" />
        <stop offset="100%" stopColor="#222222" />
      </linearGradient>
    </defs>
    <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" fill="url(#shurikenGrad)" />
    <circle cx="50" cy="50" r="5" fill="black" />
  </svg>
);

const Kunai = () => (
  <svg width="45" height="45" viewBox="0 0 512 512" className="drop-shadow-[0_0_8px_rgba(255,154,0,0.6)]">
    <defs>
      <linearGradient id="kunaiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff9a00" />
        <stop offset="100%" stopColor="#333333" />
      </linearGradient>
    </defs>
    <path fill="url(#kunaiGrad)" d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l256-256c12.5-12.5 32.8-12.5 45.3 0zM160 352l-96 96L0 512l64-64 96-96-64-64L160 352z"/>
  </svg>
);

const NinjaBackground: React.FC = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      delay: `${Math.random() * 20}s`,
      duration: `${8 + Math.random() * 12}s`,
      type: Math.random() > 0.5 ? 'shuriken' : 'kunai',
      scale: 0.6 + Math.random() * 1.2,
      opacity: 0.2 + Math.random() * 0.4
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <div 
          key={p.id}
          className="ninja-weapon"
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            '--duration': p.duration,
            transform: `scale(${p.scale})`,
            opacity: p.opacity
          } as React.CSSProperties}
        >
          {p.type === 'shuriken' ? <Shuriken /> : <Kunai />}
        </div>
      ))}
    </div>
  );
};

export default NinjaBackground;
