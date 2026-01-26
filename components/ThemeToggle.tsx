'use client';
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode (your existing site)
  const [showThemePicker, setShowThemePicker] = useState(false);

  // All available sky themes for manual selection
  const skyThemes = [
    { id: 'sunrise-clear', label: '🌅 Sunrise Clear', time: '6-9am' },
    { id: 'sunrise-rainy', label: '🌅 Sunrise Rainy', time: '6-9am' },
    { id: 'sunrise-stormy', label: '🌅 Sunrise Stormy', time: '6-9am' },
    { id: 'midday-clear', label: '☀️ Midday Clear', time: '9am-5pm' },
    { id: 'midday-rainy', label: '☀️ Midday Rainy', time: '9am-5pm' },
    { id: 'midday-stormy', label: '☀️ Midday Stormy', time: '9am-5pm' },
    { id: 'sunset-clear', label: '🌇 Sunset Clear', time: '5-7pm' },
    { id: 'sunset-rainy', label: '🌇 Sunset Rainy', time: '5-7pm' },
    { id: 'sunset-stormy', label: '🌇 Sunset Stormy', time: '5-7pm' },
    { id: 'night-clear', label: '🌙 Night Clear', time: '7pm-6am' },
    { id: 'night-rainy', label: '🌙 Night Rainy', time: '7pm-6am' },
    { id: 'night-stormy', label: '🌙 Night Stormy', time: '7pm-6am' },
  ];

  // Initialize theme state on mount
  useEffect(() => {
    // Check if user previously enabled light mode (sky themes)
    const lightModeEnabled = localStorage.getItem('ownerclone-dark-mode') === 'false';
    setIsDarkMode(!lightModeEnabled);
  }, []);

  const toggleTheme = () => {
    const newIsDarkMode = !isDarkMode;
    
    if (newIsDarkMode) {
      // Enable dark mode (your existing site)
      if (typeof window !== 'undefined' && window.OwnerCloneTheme) {
        window.OwnerCloneTheme.enableDarkMode();
      } else {
        document.body.classList.add('dark-mode');
        // Remove any sky theme classes
        const classes = document.body.classList;
        Array.from(classes).forEach(c => {
          if (c.startsWith('theme-')) classes.remove(c);
        });
        localStorage.setItem('ownerclone-dark-mode', 'true');
      }
      setShowThemePicker(false); // Close picker when going dark
    } else {
      // Enable light mode (sky themes)
      if (typeof window !== 'undefined' && window.OwnerCloneTheme) {
        window.OwnerCloneTheme.disableDarkMode();
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('ownerclone-dark-mode', 'false');
      }
    }
    
    setIsDarkMode(newIsDarkMode);
  };

  const selectTheme = (themeId: string) => {
    if (typeof window !== 'undefined' && window.OwnerCloneTheme) {
      window.OwnerCloneTheme.setTheme(themeId);
    } else {
      // Fallback: manually set the theme class
      const body = document.body;
      const classes = Array.from(body.classList);
      classes.forEach(c => {
        if (c.startsWith('theme-') || c === 'dark-mode') {
          body.classList.remove(c);
        }
      });
      body.classList.add(`theme-${themeId}`);
    }
    setShowThemePicker(false);
  };

  const setAutoTheme = () => {
    if (typeof window !== 'undefined' && window.OwnerCloneTheme) {
      window.OwnerCloneTheme.refresh();
    }
    setShowThemePicker(false);
  };

  return (
    <div className="relative">
      {/* Main Toggle Button */}
      <div className="flex items-center gap-1">
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label="Toggle theme"
          title={isDarkMode ? 'Switch to Light Mode (Sky Themes)' : 'Switch to Dark Mode'}
        >
          {isDarkMode ? (
            // Moon icon (in dark mode - click for light/sky)
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          ) : (
            // Sun icon (in light/sky mode - click for dark)
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
        </button>

        {/* Theme Picker Toggle (only shows in light/sky mode) */}
        {!isDarkMode && (
          <button
            onClick={() => setShowThemePicker(!showThemePicker)}
            className="theme-toggle"
            aria-label="Choose sky theme"
            title="Choose sky theme"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>

      {/* Theme Picker Dropdown */}
      {showThemePicker && !isDarkMode && (
        <div className="absolute top-full right-0 mt-2 w-64 backdrop-blur-xl bg-black/70 border border-white/20 rounded-xl shadow-2xl overflow-hidden z-50">
          <div className="p-2">
            {/* Auto Option */}
            <button
              onClick={setAutoTheme}
              className="w-full flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-lg transition-colors text-left"
            >
              <span className="text-lg">⏰</span>
              <div>
                <div className="font-semibold text-white text-sm">Auto (Time + Weather)</div>
                <div className="text-xs text-gray-400">Updates automatically</div>
              </div>
            </button>
            
            <div className="border-t border-white/10 my-2"></div>
            
            {/* Manual Theme Options */}
            <div className="max-h-64 overflow-y-auto">
              {skyThemes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => selectTheme(theme.id)}
                  className="w-full flex items-center justify-between px-3 py-2 hover:bg-white/10 rounded-lg transition-colors text-left"
                >
                  <span className="text-white text-sm">{theme.label}</span>
                  <span className="text-xs text-gray-500">{theme.time}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// TypeScript declaration for global theme API
declare global {
  interface Window {
    OwnerCloneTheme?: {
      toggleDarkMode: () => void;
      enableDarkMode: () => void;
      disableDarkMode: () => void;
      setTheme: (theme: string) => void;
      setWeather: (condition: string) => void;
      refresh: () => void;
    };
  }
}
