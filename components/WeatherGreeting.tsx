'use client'

import { useEffect, useState } from 'react'

export default function WeatherGreeting() {
  const [greeting, setGreeting] = useState('👋 Welcome')
  const [weather, setWeather] = useState<{
    temp: number | null
    condition: string | null
    icon: string | null
  }>({ temp: null, condition: null, icon: null })

  useEffect(() => {
    // Update greeting based on time
    const updateGreeting = () => {
      const hour = new Date().getHours()
      if (hour >= 5 && hour < 12) {
        setGreeting('☀️ Good Morning')
      } else if (hour >= 12 && hour < 17) {
        setGreeting('☀️ Good Afternoon')
      } else if (hour >= 17 && hour < 21) {
        setGreeting('🌇 Good Evening')
      } else {
        setGreeting('🌙 Good Night')
      }
    }

    updateGreeting()
    const greetingInterval = setInterval(updateGreeting, 60000)

    // Get weather from localStorage (set by the theme script in layout.tsx)
    const getWeather = () => {
      try {
        const cached = localStorage.getItem('ownerclone-weather')
        if (cached) {
          const { data } = JSON.parse(cached)
          if (data) {
            setWeather({
              temp: data.temp,
              condition: simplifyCondition(data.condition),
              icon: data.icon
            })
          }
        }
      } catch (e) {
        console.error('Error reading weather:', e)
      }
    }

    // Simplify weather condition to user-friendly text
    function simplifyCondition(condition: string): string {
      if (!condition) return ''
      const lower = condition.toLowerCase()
      
      // Stormy conditions
      if (lower.includes('thunder') || lower.includes('storm')) return 'Stormy'
      if (lower.includes('heavy rain') || lower.includes('torrential')) return 'Heavy Rain'
      
      // Rainy conditions
      if (lower.includes('rain') || lower.includes('drizzle') || lower.includes('shower')) return 'Rainy'
      
      // Snowy conditions  
      if (lower.includes('snow') || lower.includes('blizzard') || lower.includes('sleet')) return 'Snowy'
      
      // Cloudy conditions
      if (lower.includes('overcast')) return 'Overcast'
      if (lower.includes('cloudy') || lower.includes('clouds')) return 'Cloudy'
      if (lower.includes('partly cloudy') || lower.includes('partly')) return 'Partly Cloudy'
      
      // Foggy/misty
      if (lower.includes('fog') || lower.includes('mist') || lower.includes('haze')) return 'Foggy'
      
      // Windy (if mentioned)
      if (lower.includes('wind')) return 'Windy'
      
      // Clear conditions
      if (lower.includes('sunny') || lower.includes('clear')) return 'Clear'
      
      // Default - return cleaned up version
      return condition.split(' ').slice(0, 2).join(' ')
    }

    getWeather()
    const weatherInterval = setInterval(getWeather, 30000) // Check every 30 seconds

    return () => {
      clearInterval(greetingInterval)
      clearInterval(weatherInterval)
    }
  }, [])

  return (
    <div className="greeting-section flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
      {/* Greeting */}
      <span className="greeting-text text-lg font-medium" style={{ color: 'var(--text-secondary)' }}>
        {greeting}
      </span>
      
      {/* Divider - show when we have weather */}
      {weather.temp && (
        <span className="hidden sm:inline" style={{ color: 'var(--text-muted)' }}>|</span>
      )}
      
      {/* Weather Display - ALWAYS show on all modes */}
      {weather.temp && (
        <div className="weather-widget flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
          {weather.icon && (
            <img 
              src={`https:${weather.icon}`} 
              alt={weather.condition || 'weather'} 
              width={24} 
              height={24}
              className="w-6 h-6"
            />
          )}
          <span className="weather-temp font-semibold">{weather.temp}°F</span>
          {weather.condition && (
            <>
              <span style={{ color: 'var(--text-muted)' }}>•</span>
              <span className="weather-condition">{weather.condition}</span>
            </>
          )}
        </div>
      )}
    </div>
  )
}
