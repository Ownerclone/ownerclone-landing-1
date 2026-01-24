'use client';

import { useEffect, useState } from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  glowColor?: 'cyan' | 'purple' | 'green' | 'blue' | 'red' | 'yellow' | 'pink' | 'orange' | 'none';
  className?: string;
}

export default function GlassCard({ children, glowColor = 'cyan', className = '' }: GlassCardProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const colors = {
    cyan: {
      border: 'border-cyan-500/50',
      hoverBorder: 'hover:border-cyan-500',
      staticGlow: 'shadow-[0_0_20px_rgba(34,211,238,0.3)]',
      hoverGlow: 'hover:shadow-[0_0_50px_rgba(34,211,238,0.3)]'
    },
    purple: {
      border: 'border-purple-500/50',
      hoverBorder: 'hover:border-purple-500',
      staticGlow: 'shadow-[0_0_20px_rgba(168,85,247,0.3)]',
      hoverGlow: 'hover:shadow-[0_0_50px_rgba(168,85,247,0.3)]'
    },
    green: {
      border: 'border-green-500/50',
      hoverBorder: 'hover:border-green-500',
      staticGlow: 'shadow-[0_0_20px_rgba(16,185,129,0.3)]',
      hoverGlow: 'hover:shadow-[0_0_50px_rgba(16,185,129,0.3)]'
    },
    blue: {
      border: 'border-blue-500/50',
      hoverBorder: 'hover:border-blue-500',
      staticGlow: 'shadow-[0_0_20px_rgba(59,130,246,0.3)]',
      hoverGlow: 'hover:shadow-[0_0_50px_rgba(59,130,246,0.3)]'
    },
    red: {
      border: 'border-red-500/50',
      hoverBorder: 'hover:border-red-500',
      staticGlow: 'shadow-[0_0_20px_rgba(239,68,68,0.3)]',
      hoverGlow: 'hover:shadow-[0_0_50px_rgba(239,68,68,0.3)]'
    },
    yellow: {
      border: 'border-yellow-500/50',
      hoverBorder: 'hover:border-yellow-500',
      staticGlow: 'shadow-[0_0_20px_rgba(251,191,36,0.3)]',
      hoverGlow: 'hover:shadow-[0_0_50px_rgba(251,191,36,0.3)]'
    },
    pink: {
      border: 'border-pink-500/50',
      hoverBorder: 'hover:border-pink-500',
      staticGlow: 'shadow-[0_0_20px_rgba(236,72,153,0.3)]',
      hoverGlow: 'hover:shadow-[0_0_50px_rgba(236,72,153,0.3)]'
    },
    orange: {
      border: 'border-orange-500/50',
      hoverBorder: 'hover:border-orange-500',
      staticGlow: 'shadow-[0_0_20px_rgba(251,146,60,0.3)]',
      hoverGlow: 'hover:shadow-[0_0_50px_rgba(251,146,60,0.3)]'
    },
    none: {
      border: 'border-[#2a2a2a]',
      hoverBorder: '',
      staticGlow: '',
      hoverGlow: ''
    }
  };

  const color = colors[glowColor];

  if (isMobile) {
    return (
      <div className={`bg-[#0a0a0a] border-2 ${color.border} ${color.staticGlow} rounded-2xl transition-all duration-300 ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div className={`bg-[#0a0a0a]/60 backdrop-blur-xl border-2 ${color.border} ${color.hoverBorder} ${color.hoverGlow} rounded-2xl transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}
