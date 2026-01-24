'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);

  const handleForgotPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoginOpen(false);
    setForgotPasswordOpen(true);
  };

  const handleBackToLogin = () => {
    setForgotPasswordOpen(false);
    setLoginOpen(true);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 nav-bg backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
<Link href="/" className="flex items-center space-x-2">
  <svg viewBox="-5 0 85 60" className="h-10 md:h-12 w-auto">
    {/* O circle */}
    <circle 
      cx="20" 
      cy="30" 
      r="18" 
      fill="none" 
      className="logo-color" 
      strokeWidth="10"
    />
    {/* White outline for light mode only - O circle */}
    <circle 
      cx="20" 
      cy="30" 
      r="18" 
      fill="none" 
      stroke="white"
      strokeWidth="3"
      style={{ opacity: 0 }}
      className="light-mode-outline"
    />
    
    {/* C circle */}
    <circle 
      cx="48" 
      cy="30" 
      r="18" 
      fill="none" 
      className="logo-color" 
      strokeWidth="10" 
      strokeDasharray="85 113" 
      transform="rotate(40, 48, 30)"
    />
    {/* White outline for light mode only - C circle */}
    <circle 
      cx="48" 
      cy="30" 
      r="18" 
      fill="none" 
      stroke="white"
      strokeWidth="3"
      strokeDasharray="85 113" 
      transform="rotate(40, 48, 30)"
      style={{ opacity: 0 }}
      className="light-mode-outline"
    />
  </svg>
  <span className="text-2xl font-black text-white">OwnerClone</span>
</Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/features" className="nav-text">
                Features
              </Link>
              
              {/* Free Tools Dropdown */}
              <div className="relative group">
                <button className="nav-text flex items-center gap-1">
                  Free Tools
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className="absolute top-full left-0 mt-2 w-72 dropdown-menu border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-2">
                    <Link href="/free-tools/food-cost" className="flex items-center gap-3 px-4 py-3 dropdown-item rounded-lg">
                      <span className="text-2xl">🥗</span>
                      <div>
                        <div className="font-semibold">Food Cost Calculator</div>
                        <div className="text-xs dropdown-item-desc">Calculate recipe costs</div>
                      </div>
                    </Link>
                    <Link href="/free-tools/prime-cost" className="flex items-center gap-3 px-4 py-3 dropdown-item rounded-lg">
                      <span className="text-2xl">📊</span>
                      <div>
                        <div className="font-semibold">Prime Cost Calculator</div>
                        <div className="text-xs dropdown-item-desc">Food + labor costs</div>
                      </div>
                    </Link>
                    <Link href="/free-tools/labor-cost" className="flex items-center gap-3 px-4 py-3 dropdown-item rounded-lg">
                      <span className="text-2xl">👥</span>
                      <div>
                        <div className="font-semibold">Labor Cost Calculator</div>
                        <div className="text-xs dropdown-item-desc">Staff cost analysis</div>
                      </div>
                    </Link>
                    <Link href="/free-tools/break-even" className="flex items-center gap-3 px-4 py-3 dropdown-item rounded-lg">
                      <span className="text-2xl">⚖️</span>
                      <div>
                        <div className="font-semibold">Break-Even Calculator</div>
                        <div className="text-xs dropdown-item-desc">Find your break-even point</div>
                      </div>
                    </Link>
                    <Link href="/free-tools/menu-pricing" className="flex items-center gap-3 px-4 py-3 dropdown-item rounded-lg">
                      <span className="text-2xl">🍽️</span>
                      <div>
                        <div className="font-semibold">Menu Pricing Calculator</div>
                        <div className="text-xs dropdown-item-desc">Optimize menu prices</div>
                      </div>
                    </Link>
                    <Link href="/free-tools/per-plate-pricing" className="flex items-center gap-3 px-4 py-3 dropdown-item rounded-lg">
                      <span className="text-2xl">🍱</span>
                      <div>
                        <div className="font-semibold">Per Plate Pricing</div>
                        <div className="text-xs dropdown-item-desc">Price per serving</div>
                      </div>
                    </Link>
                    <Link href="/free-tools/startup-cost" className="flex items-center gap-3 px-4 py-3 dropdown-item rounded-lg">
                      <span className="text-2xl">🚀</span>
                      <div>
                        <div className="font-semibold">Startup Cost Calculator</div>
                        <div className="text-xs dropdown-item-desc">Launch budget planner</div>
                      </div>
                    </Link>
                    <Link href="/free-tools/google-review" className="flex items-center gap-3 px-4 py-3 dropdown-item rounded-lg">
                      <span className="text-2xl">⭐</span>
                      <div>
                        <div className="font-semibold">Google Review Calculator</div>
                        <div className="text-xs dropdown-item-desc">Review impact analysis</div>
                      </div>
                    </Link>
                    <Link href="/free-tools/third-party-fees" className="flex items-center gap-3 px-4 py-3 dropdown-item rounded-lg">
                      <span className="text-2xl">💳</span>
                      <div>
                        <div className="font-semibold">Third Party Fees</div>
                        <div className="text-xs dropdown-item-desc">Delivery app costs</div>
                      </div>
                    </Link>
                    <Link href="/free-tools" className="block px-4 py-3 text-cyan-400 hover:bg-[#2a2a2a] border-t border-theme rounded-lg mt-1">
                      View All Tools →
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/pricing" className="nav-text">
                Pricing
              </Link>
              <Link href="/blog" className="nav-text">
                Blog
              </Link>
              <Link href="/roadmap" className="nav-text">
                Roadmap
              </Link>
              <Link href="/about" className="nav-text">
                About
              </Link>
              <Link href="/contact" className="nav-text">
                Contact
              </Link>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Login Button */}
              <button 
                onClick={() => setLoginOpen(true)}
                className="login-btn px-4 py-2 rounded-lg font-bold"
              >
                Login
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 nav-text"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t mobile-menu">
            <div className="px-4 py-3 space-y-3">
              <Link href="/features" className="block nav-text">
                Features
              </Link>
              <Link href="/free-tools" className="block nav-text">
                Free Tools
              </Link>
              <Link href="/pricing" className="block nav-text">
                Pricing
              </Link>
              <Link href="/blog" className="block nav-text">
                Blog
              </Link>
              <Link href="/roadmap" className="block nav-text">
                Roadmap
              </Link>
              <Link href="/about" className="block nav-text">
                About
              </Link>
              <Link href="/contact" className="block nav-text">
                Contact
              </Link>
              <div className="pt-3 border-t border-theme">
                <button 
                  onClick={() => setLoginOpen(true)}
                  className="block w-full text-center login-btn px-4 py-2 rounded-lg font-bold"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      {loginOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={() => setLoginOpen(false)}>
          <div className="bg-[#0a0a0a] border-2 border-[#38bdf8] rounded-2xl p-8 max-w-md w-full mx-4 shadow-[0_0_80px_rgba(56,189,248,0.3)]" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Login to <span className="text-[#38bdf8]">OwnerClone</span></h2>
              <button onClick={() => setLoginOpen(false)} className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#38bdf8] focus:outline-none text-white transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#38bdf8] focus:outline-none text-white transition-colors"
                  placeholder="••••••••"
                />
              </div>
              
              <div className="text-right">
                <button 
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-sm text-[#38bdf8] hover:text-[#0ea5e9] transition"
                >
                  Forgot password/username?
                </button>
              </div>
              
              <button type="submit" className="w-full bg-[#38bdf8] text-black px-6 py-3 rounded-lg font-bold hover:bg-[#0ea5e9] transition">
                Sign In
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Don't have an account? <Link href="/pricing" className="text-[#38bdf8] hover:text-[#0ea5e9] font-semibold">Join Early Access</Link>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Forgot Password Modal */}
      {forgotPasswordOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={() => setForgotPasswordOpen(false)}>
          <div className="bg-[#0a0a0a] border-2 border-[#38bdf8] rounded-2xl p-8 max-w-md w-full mx-4 shadow-[0_0_80px_rgba(56,189,248,0.3)]" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Reset <span className="text-[#38bdf8]">Password</span></h2>
              <button onClick={() => setForgotPasswordOpen(false)} className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            
            <p className="text-gray-300 mb-6">
              Enter your email address and we'll send you a link to reset your password along with your username.
            </p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#38bdf8] focus:outline-none text-white transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <button type="submit" className="w-full bg-[#38bdf8] text-black px-6 py-3 rounded-lg font-bold hover:bg-[#0ea5e9] transition">
                Send Recovery Email
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <button 
                onClick={handleBackToLogin}
                className="text-sm text-[#38bdf8] hover:text-[#0ea5e9] transition"
              >
                ← Back to Login
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
