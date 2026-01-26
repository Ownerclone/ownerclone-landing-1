'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true) // Default to dark mode
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Check localStorage for saved preference, default to dark mode (true)
    const savedDarkMode = localStorage.getItem('ownerclone-dark-mode')
    const shouldBeDark = savedDarkMode === null ? true : savedDarkMode === 'true'
    
    setIsDarkMode(shouldBeDark)
    
    if (shouldBeDark) {
      document.body.classList.add('dark-mode')
      // Remove any sky theme classes
      const themeClasses = Array.from(document.body.classList).filter(c => c.startsWith('theme-'))
      themeClasses.forEach(c => document.body.classList.remove(c))
    } else {
      document.body.classList.remove('dark-mode')
      // Apply time-based theme
      applyTimeBasedTheme()
    }
  }, [])

  const applyTimeBasedTheme = () => {
    const hour = new Date().getHours()
    let timePeriod = 'midday'
    
    if (hour >= 6 && hour < 9) timePeriod = 'sunrise'
    else if (hour >= 9 && hour < 17) timePeriod = 'midday'
    else if (hour >= 17 && hour < 20) timePeriod = 'sunset'
    else timePeriod = 'night'
    
    // Get weather from localStorage if available
    let weather = 'clear'
    try {
      const cached = localStorage.getItem('ownerclone-weather')
      if (cached) {
        const { data } = JSON.parse(cached)
        if (data?.condition) {
          const condition = data.condition.toLowerCase()
          if (condition.includes('storm') || condition.includes('thunder') || condition.includes('heavy')) {
            weather = 'stormy'
          } else if (condition.includes('rain') || condition.includes('cloud') || condition.includes('overcast') || condition.includes('mist')) {
            weather = 'rainy'
          }
        }
      }
    } catch (e) {
      console.error('Error reading weather:', e)
    }
    
    // Remove old theme classes and add new one
    const oldClasses = Array.from(document.body.classList).filter(c => c.startsWith('theme-'))
    oldClasses.forEach(c => document.body.classList.remove(c))
    document.body.classList.add(`theme-${timePeriod}-${weather}`)
  }

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)
    localStorage.setItem('ownerclone-dark-mode', String(newDarkMode))
    
    if (newDarkMode) {
      // Switch to dark mode
      document.body.classList.add('dark-mode')
      const themeClasses = Array.from(document.body.classList).filter(c => c.startsWith('theme-'))
      themeClasses.forEach(c => document.body.classList.remove(c))
    } else {
      // Switch to sky theme
      document.body.classList.remove('dark-mode')
      applyTimeBasedTheme()
    }
  }

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <button className="p-2 rounded-lg transition-all" aria-label="Toggle theme">
        <Moon className="w-5 h-5 text-gray-400" />
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg transition-all hover:bg-white/10 group"
      aria-label={isDarkMode ? 'Switch to Sky Mode' : 'Switch to Dark Mode'}
      title={isDarkMode ? 'Switch to Sky Mode' : 'Switch to Dark Mode'}
    >
      {isDarkMode ? (
        <Sun className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
      ) : (
        <Moon className="w-5 h-5 text-blue-300 group-hover:text-blue-200 transition-colors" />
      )}
    </button>
  )
}
