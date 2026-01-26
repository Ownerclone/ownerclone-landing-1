'use client';

import { useState, useEffect, useRef } from 'react';

// Theme order for the slider (left to right)
const THEMES = [
  { id: 'dark-mode', name: 'Night', icon: '🌙', position: 0 },
  { id: 'theme-sunrise-clear', name: 'Sunrise', icon: '🌅', position: 25 },
  { id: 'theme-midday-clear', name: 'Midday', icon: '☀️', position: 50 },
  { id: 'theme-sunset-clear', name: 'Sunset', icon: '🌇', position: 75 },
  { id: 'dark-mode', name: 'Night', icon: '🌙', position: 100 },
];

// Weather variants for each time period
const WEATHER_VARIANTS: Record<string, string[]> = {
  sunrise: ['theme-sunrise-clear', 'theme-sunrise-rainy', 'theme-sunrise-stormy'],
  midday: ['theme-midday-clear', 'theme-midday-rainy', 'theme-midday-stormy'],
  sunset: ['theme-sunset-clear', 'theme-sunset-rainy', 'theme-sunset-stormy'],
  night: ['theme-night-clear', 'theme-night-rainy', 'theme-night-stormy'],
};

export default function ThemeSlider() {
  const [sliderValue, setSliderValue] = useState(0);
  const [currentTheme, setCurrentTheme] = useState('dark-mode');
  const [isDragging, setIsDragging] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const sliderRef = useRef<HTMLInputElement>(null);

  // Initialize from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const savedPosition = localStorage.getItem('themeSliderPosition');
    
    if (saved === 'dark' || saved === 'dark-mode' || !saved) {
      setSliderValue(0);
      setCurrentTheme('dark-mode');
      applyTheme('dark-mode');
    } else if (savedPosition) {
      const pos = parseInt(savedPosition);
      setSliderValue(pos);
      const theme = getThemeFromPosition(pos);
      setCurrentTheme(theme);
      applyTheme(theme);
    }
  }, []);

  // Get theme based on slider position
  const getThemeFromPosition = (position: number): string => {
    if (position <= 12) return 'dark-mode';
    if (position <= 37) return 'theme-sunrise-clear';
    if (position <= 62) return 'theme-midday-clear';
    if (position <= 87) return 'theme-sunset-clear';
    return 'dark-mode';
  };

  // Get display name for tooltip
  const getThemeName = (position: number): string => {
    if (position <= 12) return '🌙 Night';
    if (position <= 37) return '🌅 Sunrise';
    if (position <= 62) return '☀️ Midday';
    if (position <= 87) return '🌇 Sunset';
    return '🌙 Night';
  };

  // Apply theme to document
  const applyTheme = (themeClass: string) => {
    const body = document.body;
    
    // Remove all theme classes
    body.classList.remove('dark-mode');
    body.className = body.className.replace(/theme-[\w-]+/g, '').trim();
    
    // Add new theme class
    body.classList.add(themeClass);
    
    // Save to localStorage
    localStorage.setItem('theme', themeClass);
    localStorage.setItem('themeSliderPosition', sliderValue.toString());
  };

  // Handle slider change
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setSliderValue(value);
    
    const theme = getThemeFromPosition(value);
    if (theme !== currentTheme) {
      setCurrentTheme(theme);
      applyTheme(theme);
    }
  };

  // Snap to nearest theme position on release
  const handleSliderRelease = () => {
    setIsDragging(false);
    
    // Snap to nearest position
    let snapPosition: number;
    if (sliderValue <= 12) snapPosition = 0;
    else if (sliderValue <= 37) snapPosition = 25;
    else if (sliderValue <= 62) snapPosition = 50;
    else if (sliderValue <= 87) snapPosition = 75;
    else snapPosition = 100;
    
    setSliderValue(snapPosition);
    localStorage.setItem('themeSliderPosition', snapPosition.toString());
    
    // Hide tooltip after delay
    setTimeout(() => setShowTooltip(false), 1000);
  };

  return (
    <div 
      className="theme-slider-container relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => !isDragging && setShowTooltip(false)}
    >
      {/* Tooltip */}
      {showTooltip && (
        <div 
          className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs font-medium whitespace-nowrap"
          style={{
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            color: 'var(--text-primary)',
          }}
        >
          {getThemeName(sliderValue)}
        </div>
      )}
      
      {/* Slider Track Background */}
      <div className="absolute inset-0 flex items-center pointer-events-none">
        <div 
          className="w-full h-2 rounded-full"
          style={{
            background: 'linear-gradient(to right, #1e293b 0%, #fbbf24 25%, #38bdf8 50%, #fb923c 75%, #1e293b 100%)',
          }}
        />
      </div>
      
      {/* Slider Input */}
      <input
        ref={sliderRef}
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={handleSliderRelease}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={handleSliderRelease}
        className="theme-slider relative z-10 w-full cursor-pointer"
        style={{
          background: 'transparent',
        }}
        aria-label="Theme slider"
      />
      
      {/* Theme indicators */}
      <div className="absolute inset-0 flex items-center justify-between pointer-events-none px-1">
        {['🌙', '🌅', '☀️', '🌇', '🌙'].map((icon, i) => (
          <span 
            key={i} 
            className="text-xs opacity-60"
            style={{ fontSize: '10px' }}
          >
            {icon}
          </span>
        ))}
      </div>
    </div>
  );
}
