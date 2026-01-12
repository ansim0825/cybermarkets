"use client";

import React from 'react';

// Network nodes icon component
export const LogoIcon = ({ size = 40 }) => (
  <svg viewBox="0 0 64 64" width={size} height={size}>
    <defs>
      <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor:'#ef4444'}}/>
        <stop offset="50%" style={{stopColor:'#3b82f6'}}/>
        <stop offset="100%" style={{stopColor:'#a855f7'}}/>
      </linearGradient>
      <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{stopColor:'#ef4444'}}/>
        <stop offset="50%" style={{stopColor:'#3b82f6'}}/>
        <stop offset="100%" style={{stopColor:'#a855f7'}}/>
      </linearGradient>
    </defs>
    <g transform="translate(32, 32)">
      <circle cx="0" cy="0" r="11" fill="url(#nodeGrad)"/>
      <circle cx="-22" cy="-16" r="6" fill="#ef4444"/>
      <circle cx="22" cy="-13" r="6" fill="#3b82f6"/>
      <circle cx="24" cy="15" r="6" fill="#a855f7"/>
      <circle cx="-20" cy="20" r="6" fill="#8b5cf6"/>
      <circle cx="0" cy="-24" r="5" fill="#f97316"/>
      <line x1="-7" y1="-7" x2="-17" y2="-13" stroke="url(#lineGrad)" strokeWidth="2.5" opacity="0.5"/>
      <line x1="7" y1="-5" x2="17" y2="-11" stroke="url(#lineGrad)" strokeWidth="2.5" opacity="0.5"/>
      <line x1="8" y1="6" x2="19" y2="12" stroke="url(#lineGrad)" strokeWidth="2.5" opacity="0.5"/>
      <line x1="-7" y1="7" x2="-15" y2="15" stroke="url(#lineGrad)" strokeWidth="2.5" opacity="0.5"/>
      <line x1="0" y1="-11" x2="0" y2="-19" stroke="url(#lineGrad)" strokeWidth="2.5" opacity="0.5"/>
    </g>
  </svg>
);

// Full logo with text
export const Logo = ({ size = "default", showText = true }) => {
  const sizes = {
    small: { icon: 32, text: "text-xl" },
    default: { icon: 40, text: "text-2xl" },
    large: { icon: 56, text: "text-4xl" },
    hero: { icon: 80, text: "text-5xl" },
  };
  
  const s = sizes[size] || sizes.default;
  
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
        .font-caveat { font-family: 'Caveat', cursive; }
        .gradient-text {
          background: linear-gradient(90deg, #ef4444 0%, #3b82f6 50%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
      <div className="flex items-center gap-3">
        <LogoIcon size={s.icon} />
        {showText && (
          <span className={`font-caveat ${s.text} font-bold gradient-text`}>
            Won With Data
          </span>
        )}
      </div>
    </>
  );
};

// Centered/stacked version for hero sections
export const LogoStacked = ({ tagline }) => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
      .font-caveat { font-family: 'Caveat', cursive; }
      .gradient-text {
        background: linear-gradient(90deg, #ef4444 0%, #3b82f6 50%, #a855f7 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    `}</style>
    <div className="flex flex-col items-center">
      <LogoIcon size={80} />
      <span className="font-caveat text-5xl font-bold gradient-text mt-2">
        Won With Data
      </span>
      {tagline && (
        <span className="text-gray-500 text-sm tracking-wider mt-1">
          {tagline}
        </span>
      )}
    </div>
  </>
);

export default Logo;
