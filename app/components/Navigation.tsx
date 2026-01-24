'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const freeTools = [
    { name: 'Food Cost Calculator', href: '/free-tools/food-cost', emoji: '🥘', description: 'Track ingredient costs' },
    { name: 'Prime Cost Calculator', href: '/free-tools/prime-cost', emoji: '💰', description: 'Calculate total prime cost' },
    { name: 'Labor Cost Calculator', href: '/free-tools/labor-cost', emoji: '👥', description: 'Optimize staffing costs' },
    { name: 'Break-Even Calculator', href: '/free-tools/break-even', emoji: '📊', description: 'Find your break-even point' },
    { name: 'Menu Pricing Calculator', href: '/free-tools/menu-pricing', emoji: '📋', description: 'Price menu items' },
    { name: 'Per Plate Pricing', href: '/free-tools/per-plate-pricing', emoji: '🍽️', description: 'Calculate per-plate costs' },
    { name: 'Startup Cost Calculator', href: '/free-tools/startup-cost', emoji: '🚀', description: 'Estimate startup costs' },
    { name: 'Google Review Calculator', href: '/free-tools/google-review', emoji: '⭐', description: 'Calculate review impact' },
    { name: 'Third Party Fees', href: '/free-tools/third-party-fees', emoji: '💳', description: 'Calculate delivery fees' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a] backdrop-blur-lg shadow-lg border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <svg viewBox="0 0 58 40" className="w-12 h-8">
                <circle cx="20" cy="20" r="18" fill="none" stroke="#38bdf8" strokeWidth="4"/>
                <circle cx="38" cy="20" r="18" fill="none" stroke="#38bdf8" strokeWidth="4" strokeDasharray="85 113" transform="rotate(-90, 38, 20)"/>
              </svg>
              <span className="text-2xl font-bold text-white">OwnerClone</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/features" className="text-gray-300 hover:text-cyan-400 transition">
                Features
              </Link>

              {/* Free Tools Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setToolsDropdownOpen(true)}
                onMouseLeave={() => setToolsDropdownOpen(false)}
              >
                <button className="text-gray-300 hover:text-cyan-400 transition flex items-center gap-1">
                  Free Tools
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {toolsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg shadow-xl py-2">
                    {freeTools.map((tool) => (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        className="block px-4 py-3 hover:bg-[#2a2a2a] transition"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">{tool.emoji}</span>
                          <div>
                            <div className="font-semibold text-white">{tool.name}</div>
                            <div className="text-sm text-gray-400">{tool.description}</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/pricing" className="text-gray-300 hover:text-cyan-400 transition">
                Pricing
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-cyan-400 transition">
                Blog
              </Link>
              <Link href="/roadmap" className="text-gray-300 hover:text-cyan-400 transition">
                Roadmap
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition">
                Contact
              </Link>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Login Button */}
              <button
                onClick={() => setShowLoginModal(true)}
                className="bg-cyan-400 text-black px-6 py-2 rounded-lg font-bold hover:bg-cyan-300 transition"
              >
                Login
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-4 md:hidden">
              <ThemeToggle />
              <button onClick={toggleMobileMenu} className="text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1a1a1a] border-t border-[#2a2a2a]">
            <div className="px-4 py-4 space-y-3">
              <Link href="/features" className="block text-gray-300 hover:text-cyan-400 py-2">
                Features
              </Link>
              <Link href="/free-tools" className="block text-gray-300 hover:text-cyan-400 py-2">
                Free Tools
              </Link>
              <Link href="/pricing" className="block text-gray-300 hover:text-cyan-400 py-2">
                Pricing
              </Link>
              <Link href="/blog" className="block text-gray-300 hover:text-cyan-400 py-2">
                Blog
              </Link>
              <Link href="/roadmap" className="block text-gray-300 hover:text-cyan-400 py-2">
                Roadmap
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-cyan-400 py-2">
                About
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-cyan-400 py-2">
                Contact
              </Link>
              <button
                onClick={() => { setShowLoginModal(true); setMobileMenuOpen(false); }}
                className="w-full bg-cyan-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-cyan-300 transition"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      {showLoginModal && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => { setShowLoginModal(false); setShowForgotPassword(false); }}
        >
          <div 
            className="bg-[#1a1a1a] border-2 border-[#2a2a2a] rounded-2xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {!showForgotPassword ? (
              <>
                <h2 className="text-3xl font-bold text-white mb-6">Login to OwnerClone</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">Password</label>
                    <input
                      type="password"
                      className="w-full bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
                      placeholder="••••••••"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="text-cyan-400 hover:text-cyan-300 text-sm"
                  >
                    Forgot password or username?
                  </button>
                  <button
                    type="submit"
                    className="w-full bg-cyan-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-cyan-300 transition"
                  >
                    Log In
                  </button>
                </form>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-white mb-6">Recover Account</h2>
                <p className="text-gray-300 mb-4">Enter your email and we'll send you recovery instructions.</p>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">Recovery Email</label>
                    <input
                      type="email"
                      className="w-full bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setShowForgotPassword(false)}
                      className="flex-1 bg-[#2a2a2a] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#3a3a3a] transition"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-cyan-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-cyan-300 transition"
                    >
                      Send Recovery Email
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
