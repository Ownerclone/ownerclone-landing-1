'use client';
import { useEffect, useState } from 'react';

export default function WeatherGreeting() {
  const [greeting, setGreeting] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Set initial greeting based on time
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour >= 6 && hour < 9) {
        setGreeting('🌅 Good Morning');
      } else if (hour >= 9 && hour < 17) {
        setGreeting('☀️ Good Afternoon');
      } else if (hour >= 17 && hour < 19) {
        setGreeting('🌇 Good Evening');
      } else {
        setGreeting('🌙 Good Night');
      }
    };

    updateGreeting();
    
    // Update every minute
    const interval = setInterval(updateGreeting, 60000);
    return () => clearInterval(interval);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div className="greeting-section">
      <p className="greeting-text">{greeting}</p>
      <div className="greeting-divider"></div>
      <div className="weather-widget">
        {/* Populated by theme-system JS */}
      </div>
    </div>
  );
}
