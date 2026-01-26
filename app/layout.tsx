import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OwnerClone - Restaurant Management Software',
  description: 'AI-powered restaurant management for independent owners',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Theme initialization - runs before page renders to prevent flash */}
        {/* DEFAULT IS DARK MODE */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Default to dark mode if no preference saved
                const savedPref = localStorage.getItem('ownerclone-dark-mode');
                const isDarkMode = savedPref === null ? true : savedPref === 'true';
                
                if (isDarkMode) {
                  document.documentElement.classList.add('dark-mode');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
        
        {/* Global Footer */}
        <footer className="footer relative z-10 py-16 px-4 border-t border-theme">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              
              {/* Logo + Tagline */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <svg viewBox="-5 0 85 60" className="h-10 w-auto">
                    <circle cx="20" cy="30" r="18" fill="none" className="logo-stroke" strokeWidth="10"/>
                    <circle cx="48" cy="30" r="18" fill="none" className="logo-stroke" strokeWidth="10" strokeDasharray="85 113" transform="rotate(40, 48, 30)"/>
                  </svg>
                  <span className="text-2xl font-black text-brand">OwnerClone</span>
                </div>
                <p className="text-theme-secondary mb-4">
                  AI-powered restaurant management for independent owners who refuse to lose money.
                </p>
                <p className="text-sm text-theme-muted">
                  © 2026 OwnerClone, Inc. All rights reserved.
                </p>
              </div>

              {/* Product */}
              <div>
                <h3 className="font-bold text-theme-primary mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><Link href="/features" className="text-theme-secondary hover:text-brand transition">Features</Link></li>
                  <li><Link href="/pricing" className="text-theme-secondary hover:text-brand transition">Pricing</Link></li>
                  <li><Link href="/roadmap" className="text-theme-secondary hover:text-brand transition">Roadmap</Link></li>
                  <li><Link href="/demo" className="text-theme-secondary hover:text-brand transition">Demo</Link></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="font-bold text-theme-primary mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><Link href="/blog" className="text-theme-secondary hover:text-brand transition">Blog</Link></li>
                  <li><Link href="/free-tools" className="text-theme-secondary hover:text-brand transition">Free Tools</Link></li>
                  <li><Link href="/about" className="text-theme-secondary hover:text-brand transition">About</Link></li>
                  <li><Link href="/contact" className="text-theme-secondary hover:text-brand transition">Contact</Link></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="font-bold text-theme-primary mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><Link href="/terms" className="text-theme-secondary hover:text-brand transition">Terms</Link></li>
                  <li><Link href="/privacy" className="text-theme-secondary hover:text-brand transition">Privacy</Link></li>
                  <li><Link href="/security" className="text-theme-secondary hover:text-brand transition">Security</Link></li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-theme text-center text-sm text-theme-muted">
              <p>Built by restaurant owners, for restaurant owners. 🍽️</p>
            </div>
          </div>
        </footer>

        {/* Simplified Theme System Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // ============================================
              // OWNERCLONE THEME SYSTEM - SIMPLIFIED
              // Default: Dark Mode
              // Toggle: Sky Themes (time + weather based)
              // ============================================

              const WEATHER_API_KEY = '2e7d6101714e4db79e3170726262601';

              const ThemeManager = {
                init() {
                  // Check saved preference, default to dark mode
                  const savedPref = localStorage.getItem('ownerclone-dark-mode');
                  const isDarkMode = savedPref === null ? true : savedPref === 'true';
                  
                  if (isDarkMode) {
                    this.enableDarkMode();
                  } else {
                    this.enableSkyMode();
                  }
                  
                  // Fetch weather for sky themes
                  this.fetchWeather();
                },

                enableDarkMode() {
                  // Remove all theme classes
                  const themeClasses = Array.from(document.body.classList).filter(c => c.startsWith('theme-'));
                  themeClasses.forEach(c => document.body.classList.remove(c));
                  
                  // Add dark mode
                  document.body.classList.add('dark-mode');
                  localStorage.setItem('ownerclone-dark-mode', 'true');
                  
                  this.updateGreeting('dark');
                },

                enableSkyMode() {
                  document.body.classList.remove('dark-mode');
                  localStorage.setItem('ownerclone-dark-mode', 'false');
                  
                  this.applyTimeBasedTheme();
                },

                applyTimeBasedTheme() {
                  const hour = new Date().getHours();
                  let timePeriod = 'midday';
                  
                  if (hour >= 6 && hour < 9) timePeriod = 'sunrise';
                  else if (hour >= 9 && hour < 17) timePeriod = 'midday';
                  else if (hour >= 17 && hour < 20) timePeriod = 'sunset';
                  else timePeriod = 'night';
                  
                  // Get weather
                  const weather = this.getCurrentWeather();
                  
                  // Remove old theme classes
                  const oldClasses = Array.from(document.body.classList).filter(c => c.startsWith('theme-'));
                  oldClasses.forEach(c => document.body.classList.remove(c));
                  
                  // Add new theme
                  document.body.classList.add('theme-' + timePeriod + '-' + weather);
                  
                  this.updateGreeting(timePeriod);
                },

                getCurrentWeather() {
                  try {
                    const cached = localStorage.getItem('ownerclone-weather');
                    if (cached) {
                      const { data } = JSON.parse(cached);
                      if (data?.condition) {
                        const condition = data.condition.toLowerCase();
                        if (condition.includes('storm') || condition.includes('thunder') || condition.includes('heavy')) {
                          return 'stormy';
                        } else if (condition.includes('rain') || condition.includes('cloud') || condition.includes('overcast') || condition.includes('mist') || condition.includes('fog')) {
                          return 'rainy';
                        }
                      }
                    }
                  } catch (e) {}
                  return 'clear';
                },

                async fetchWeather() {
                  try {
                    const res = await fetch('https://api.weatherapi.com/v1/current.json?key=' + WEATHER_API_KEY + '&q=auto:ip');
                    if (!res.ok) return;
                    const data = await res.json();
                    
                    const weatherData = {
                      temp: Math.round(data.current.temp_f),
                      condition: data.current.condition.text,
                      icon: data.current.condition.icon
                    };
                    
                    localStorage.setItem('ownerclone-weather', JSON.stringify({ data: weatherData, timestamp: Date.now() }));
                    
                    // Update weather widget if exists
                    this.updateWeatherWidget(weatherData);
                    
                    // If in sky mode, refresh theme
                    if (!document.body.classList.contains('dark-mode')) {
                      this.applyTimeBasedTheme();
                    }
                  } catch (e) {
                    console.error('Weather fetch failed:', e);
                  }
                },

                updateWeatherWidget(data) {
                  const widget = document.querySelector('.weather-widget');
                  if (!widget || !data) return;
                  
                  widget.innerHTML = '<img src="https:' + data.icon + '" alt="" width="24" height="24" style="width:24px;height:24px;"><span>' + data.temp + '°F</span><span style="opacity:0.5">•</span><span>' + this.simplifyCondition(data.condition) + '</span>';
                  widget.style.display = 'inline-flex';
                },

                simplifyCondition(condition) {
                  if (!condition) return '';
                  const lower = condition.toLowerCase();
                  if (lower.includes('thunder') || lower.includes('storm')) return 'Stormy';
                  if (lower.includes('heavy rain')) return 'Heavy Rain';
                  if (lower.includes('rain') || lower.includes('drizzle')) return 'Rainy';
                  if (lower.includes('snow') || lower.includes('blizzard')) return 'Snowy';
                  if (lower.includes('overcast')) return 'Overcast';
                  if (lower.includes('cloudy') || lower.includes('cloud')) return 'Cloudy';
                  if (lower.includes('fog') || lower.includes('mist')) return 'Foggy';
                  if (lower.includes('sunny') || lower.includes('clear')) return 'Clear';
                  return condition.split(' ').slice(0, 2).join(' ');
                },

                updateGreeting(timePeriod) {
                  const greetings = {
                    sunrise: '🌅 Good Morning',
                    midday: '☀️ Good Afternoon',
                    sunset: '🌇 Good Evening',
                    night: '🌙 Good Night',
                    dark: '👋 Welcome'
                  };
                  
                  const el = document.querySelector('.greeting-text');
                  if (el) el.textContent = greetings[timePeriod] || greetings.midday;
                },

                toggleDarkMode() {
                  if (document.body.classList.contains('dark-mode')) {
                    this.enableSkyMode();
                  } else {
                    this.enableDarkMode();
                  }
                }
              };

              // Initialize on DOM ready
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => ThemeManager.init());
              } else {
                ThemeManager.init();
              }

              // Expose for toggle button
              window.OwnerCloneTheme = {
                toggleDarkMode: () => ThemeManager.toggleDarkMode(),
                enableDarkMode: () => ThemeManager.enableDarkMode(),
                enableSkyMode: () => ThemeManager.enableSkyMode(),
                disableDarkMode: () => ThemeManager.enableSkyMode(),
                refresh: () => ThemeManager.applyTimeBasedTheme()
              };
            `,
          }}
        />
      </body>
    </html>
  )
}
