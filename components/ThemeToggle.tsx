'use client';

import { useState, useEffect } from 'react';

type ThemeMode = 'day' | 'dusk' | 'dark';

export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>('day');

  // Get time-based theme for Day mode
  const getTimeBasedTheme = (): string => {
    const hour = new Date().getHours();
    
    if (hour >= 6 && hour < 9) return 'theme-sunrise-clear';
    if (hour >= 9 && hour < 17) return 'theme-midday-clear';
    if (hour >= 17 && hour < 20) return 'theme-sunset-clear';
    return 'theme-night-clear';
  };

  // Apply theme to document
  const applyTheme = (themeClass: string) => {
    const body = document.body;
    
    // Remove all theme classes
    body.classList.remove('dark-mode');
    body.className = body.className.replace(/theme-[\w-]+/g, '').trim();
    
    // Add new theme class
    body.classList.add(themeClass);
  };

  // Initialize on mount
  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode') as ThemeMode | null;
    
    if (savedMode) {
      setMode(savedMode);
      
      if (savedMode === 'day') {
        applyTheme(getTimeBasedTheme());
      } else if (savedMode === 'dusk') {
        applyTheme('theme-sunset-clear');
      } else {
        applyTheme('dark-mode');
      }
    } else {
      // Default: auto based on time
      setMode('day');
      applyTheme(getTimeBasedTheme());
    }
  }, []);

  // Update time-based theme periodically when in Day mode
  useEffect(() => {
    if (mode !== 'day') return;
    
    const interval = setInterval(() => {
      applyTheme(getTimeBasedTheme());
    }, 60000); // Check every minute
    
    return () => clearInterval(interval);
  }, [mode]);

  // Cycle through modes: day -> dusk -> dark -> day
  const cycleMode = () => {
    let newMode: ThemeMode;
    
    if (mode === 'day') {
      newMode = 'dusk';
      applyTheme('theme-sunset-clear');
    } else if (mode === 'dusk') {
      newMode = 'dark';
      applyTheme('dark-mode');
    } else {
      newMode = 'day';
      applyTheme(getTimeBasedTheme());
    }
    
    setMode(newMode);
    localStorage.setItem('themeMode', newMode);
  };

  // Get icon based on current mode
  const getIcon = () => {
    switch (mode) {
      case 'day':
        // Sun icon
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case 'dusk':
        // Half sun / sunset icon
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 12a5 5 0 01-10 0" />
            <line x1="4" y1="19" x2="20" y2="19" strokeWidth={2} strokeLinecap="round" />
          </svg>
        );
      case 'dark':
        // Moon icon
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        );
    }
  };

  // Get tooltip text
  const getTooltip = () => {
    switch (mode) {
      case 'day': return 'Auto (time-based)';
      case 'dusk': return 'Dusk mode';
      case 'dark': return 'Dark mode';
    }
  };

  return (
    <button
      onClick={cycleMode}
      className="p-2 rounded-lg hover:bg-white/10 transition-colors"
      aria-label={getTooltip()}
      title={getTooltip()}
      style={{ color: 'var(--text-secondary)' }}
    >
      {getIcon()}
    </button>
  );
}
