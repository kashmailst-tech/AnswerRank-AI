import React from 'react';

interface LogoProps {
  className?: string;
  mode?: 'GEO' | 'SEO';
  showText?: boolean;
}

export function Logo({ className = "w-8 h-8", mode = 'GEO', showText = true }: LogoProps) {
  const isGeo = mode === 'GEO';
  const gradientId = `logo-gradient-${mode}`;

  return (
    <div className="flex items-center gap-2.5">
      <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-lg"
        >
          <defs>
            <linearGradient id="logo-gradient-GEO" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A855F7" /> {/* purple-500 */}
              <stop offset="50%" stopColor="#8B5CF6" /> {/* violet-500 */}
              <stop offset="100%" stopColor="#06B6D4" /> {/* cyan-500 */}
            </linearGradient>
            <linearGradient id="logo-gradient-SEO" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" /> {/* emerald-500 */}
              <stop offset="50%" stopColor="#0EA5E9" /> {/* sky-500 */}
              <stop offset="100%" stopColor="#3B82F6" /> {/* blue-500 */}
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          <g filter="url(#glow)">
            {/* Outer Orbit / Search Ring */}
            <circle 
              cx="50" cy="50" r="42" 
              stroke={`url(#${gradientId})`} 
              strokeWidth="3" 
              strokeOpacity="0.4" 
              strokeDasharray="12 8" 
              className="origin-center animate-spin"
              style={{ animationDuration: '20s' }}
            />
            
            {/* The 'A' / Upward Ranking Arrow */}
            <path 
              d="M 50 18 L 82 78 L 64 78 L 50 48 L 36 78 L 18 78 Z" 
              fill={`url(#${gradientId})`} 
            />
            
            {/* Neural Nodes */}
            <circle cx="50" cy="18" r="7" fill="#ffffff" />
            <circle cx="18" cy="78" r="5" fill="#ffffff" />
            <circle cx="82" cy="78" r="5" fill="#ffffff" />
            <circle cx="50" cy="48" r="6" fill="#ffffff" />
            
            {/* Central Data Stream */}
            <path d="M 50 48 L 50 85" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
            <circle cx="50" cy="85" r="4" fill="#ffffff" />
          </g>
        </svg>
      </div>
      
      {showText && (
        <div className="font-sans tracking-tight flex items-baseline select-none">
          <span className="text-xl md:text-2xl font-bold text-white tracking-tight">AnswerRank</span>
          <span className={`ml-1 text-xl md:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r ${isGeo ? 'from-purple-400 to-cyan-400' : 'from-emerald-400 to-blue-400'} drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]`}>
            AI
          </span>
        </div>
      )}
    </div>
  );
}
