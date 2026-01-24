'use client';

import { useEffect, useState } from 'react';

export default function BackgroundOrbs() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/10 rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-[128px] animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-[128px] animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[128px] animate-pulse" style={{animationDelay: '4s'}}></div>
    </div>
  );
}
