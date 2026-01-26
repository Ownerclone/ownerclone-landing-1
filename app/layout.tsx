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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Check for dark mode preference
                const isDarkMode = localStorage.getItem('ownerclone-dark-mode') === 'true';
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

        {/* Theme System Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // ============================================
              // OWNERCLONE DYNAMIC SKY THEME SYSTEM
              // ============================================

              const THEME_CONFIG = {
                weatherApiKey: 'YOUR_NEW_API_KEY_HERE',
                weatherUpdateInterval: 30 * 60 * 1000,
                
                timeRanges: {
                  sunrise: { start: 6, end: 9 },
                  midday: { start: 9, end: 17 },
                  sunset: { start: 17, end: 19 },
                  night: { start: 19, end: 6 }
                },
                
                weatherMappings: {
                  clear: ['sunny', 'clear', 'partly cloudy', 'fair'],
                  rainy: ['cloudy', 'overcast', 'mist', 'fog', 'light rain', 'light drizzle', 'patchy rain', 'haze'],
                  stormy: ['rain', 'heavy rain', 'moderate rain', 'thunderstorm', 'thunder', 'heavy snow', 'blizzard', 'snow', 'sleet']
                },
                
                greetings: {
                  sunrise: '🌅 Good Morning',
                  midday: '☀️ Good Afternoon',
                  sunset: '🌇 Good Evening',
                  night: '🌙 Good Night',
                  dark: '👋 Welcome'
                }
              };

              const ThemeManager = {
                currentTheme: null,
                currentWeather: 'clear',
                isDarkMode: localStorage.getItem('ownerclone-dark-mode') === 'true',

                init() {
                  if (this.isDarkMode) {
                    this.enableDarkMode();
                  } else {
                    this.updateTheme();
                  }
                  setInterval(() => { if (!this.isDarkMode) this.updateTheme(); }, 60000);
                },

                getTimePeriod() {
                  const hour = new Date().getHours();
                  const { timeRanges } = THEME_CONFIG;
                  if (hour >= timeRanges.sunrise.start && hour < timeRanges.sunrise.end) return 'sunrise';
                  if (hour >= timeRanges.midday.start && hour < timeRanges.midday.end) return 'midday';
                  if (hour >= timeRanges.sunset.start && hour < timeRanges.sunset.end) return 'sunset';
                  return 'night';
                },

                mapWeatherCondition(condition) {
                  if (!condition) return 'clear';
                  const lower = condition.toLowerCase();
                  if (THEME_CONFIG.weatherMappings.stormy.some(w => lower.includes(w))) return 'stormy';
                  if (THEME_CONFIG.weatherMappings.rainy.some(w => lower.includes(w))) return 'rainy';
                  return 'clear';
                },

                updateTheme() {
                  const time = this.getTimePeriod();
                  const weather = this.currentWeather || 'clear';
                  const themeName = time + '-' + weather;
                  if (this.currentTheme === themeName) return;
                  this.setTheme(themeName);
                },

                setTheme(themeName) {
                  const body = document.body;
                  const classes = [
                    'theme-sunrise-clear', 'theme-sunrise-rainy', 'theme-sunrise-stormy',
                    'theme-midday-clear', 'theme-midday-rainy', 'theme-midday-stormy',
                    'theme-sunset-clear', 'theme-sunset-rainy', 'theme-sunset-stormy',
                    'theme-night-clear', 'theme-night-rainy', 'theme-night-stormy',
                    'dark-mode'
                  ];
                  classes.forEach(c => body.classList.remove(c));
                  body.classList.add('theme-' + themeName);
                  this.currentTheme = themeName;
                  this.updateGreeting(themeName.split('-')[0]);
                },

                setWeather(condition) {
                  const mapped = this.mapWeatherCondition(condition);
                  if (this.currentWeather !== mapped) {
                    this.currentWeather = mapped;
                    if (!this.isDarkMode) this.updateTheme();
                  }
                },

                enableDarkMode() {
                  const classes = [
                    'theme-sunrise-clear', 'theme-sunrise-rainy', 'theme-sunrise-stormy',
                    'theme-midday-clear', 'theme-midday-rainy', 'theme-midday-stormy',
                    'theme-sunset-clear', 'theme-sunset-rainy', 'theme-sunset-stormy',
                    'theme-night-clear', 'theme-night-rainy', 'theme-night-stormy'
                  ];
                  classes.forEach(c => document.body.classList.remove(c));
                  document.body.classList.add('dark-mode');
                  this.isDarkMode = true;
                  localStorage.setItem('ownerclone-dark-mode', 'true');
                  this.updateGreeting('dark');
                  this.updateToggleIcon(true);
                },

                disableDarkMode() {
                  document.body.classList.remove('dark-mode');
                  this.isDarkMode = false;
                  localStorage.setItem('ownerclone-dark-mode', 'false');
                  this.updateTheme();
                  this.updateToggleIcon(false);
                },

                toggleDarkMode() {
                  this.isDarkMode ? this.disableDarkMode() : this.enableDarkMode();
                },

                updateGreeting(time) {
                  const el = document.querySelector('.greeting-text');
                  if (el) el.textContent = THEME_CONFIG.greetings[time] || THEME_CONFIG.greetings.midday;
                },

                updateToggleIcon(isDark) {
                  const sun = document.querySelector('.theme-toggle .sun-icon');
                  const moon = document.querySelector('.theme-toggle .moon-icon');
                  if (sun && moon) {
                    sun.style.display = isDark ? 'block' : 'none';
                    moon.style.display = isDark ? 'none' : 'block';
                  }
                }
              };

              const WeatherWidget = {
                data: null,

                async init() {
                  const cached = this.getCachedWeather();
                  if (cached) {
                    this.data = cached;
                    this.render();
                    ThemeManager.setWeather(cached.condition);
                  }
                  await this.fetchWeather();
                  setInterval(() => this.fetchWeather(), THEME_CONFIG.weatherUpdateInterval);
                },

                async fetchWeather() {
                  if (THEME_CONFIG.weatherApiKey === 'YOUR_NEW_API_KEY_HERE') return;
                  
                  try {
                    const url = 'https://api.weatherapi.com/v1/current.json?key=' + THEME_CONFIG.weatherApiKey + '&q=auto:ip';
                    const res = await fetch(url);
                    if (!res.ok) throw new Error('API error');
                    const data = await res.json();
                    
                    this.data = {
                      temp: Math.round(data.current.temp_f),
                      condition: data.current.condition.text,
                      icon: data.current.condition.icon
                    };
                    
                    localStorage.setItem('ownerclone-weather', JSON.stringify({ data: this.data, timestamp: Date.now() }));
                    this.render();
                    ThemeManager.setWeather(this.data.condition);
                  } catch (e) {
                    console.error('Weather fetch failed:', e);
                  }
                },

                render() {
                  const el = document.querySelector('.weather-widget');
                  if (!el || !this.data) return;
                  el.innerHTML = '<img src="https:' + this.data.icon + '" alt="" width="24" height="24" style="width:24px;height:24px;"><span class="weather-temp">' + this.data.temp + '°F</span><span style="opacity:0.5">•</span><span class="weather-condition">' + this.data.condition + '</span>';
                  el.style.display = 'inline-flex';
                },

                getCachedWeather() {
                  try {
                    const cached = localStorage.getItem('ownerclone-weather');
                    if (!cached) return null;
                    const { data, timestamp } = JSON.parse(cached);
                    if (Date.now() - timestamp < THEME_CONFIG.weatherUpdateInterval) return data;
                    return null;
                  } catch { return null; }
                }
              };

              // Initialize on DOM ready
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', init);
              } else {
                init();
              }

              function init() {
                ThemeManager.init();
                WeatherWidget.init();
                
                const toggle = document.querySelector('.theme-toggle');
                if (toggle) {
                  toggle.addEventListener('click', () => ThemeManager.toggleDarkMode());
                  ThemeManager.updateToggleIcon(ThemeManager.isDarkMode);
                }
              }

              window.OwnerCloneTheme = {
                toggleDarkMode: () => ThemeManager.toggleDarkMode(),
                enableDarkMode: () => ThemeManager.enableDarkMode(),
                disableDarkMode: () => ThemeManager.disableDarkMode(),
                setTheme: (t) => ThemeManager.setTheme(t),
                setWeather: (c) => ThemeManager.setWeather(c),
                refresh: () => ThemeManager.updateTheme()
              };
            `,
          }}
        />
      </body>
    </html>
  )
}
