'use client'

import { useState } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false)

  const handleForgotPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setLoginOpen(false)
    setForgotPasswordOpen(true)
  }

  const handleBackToLogin = () => {
    setForgotPasswordOpen(false)
    setLoginOpen(true)
  }

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <a href="/" className="flex items-center space-x-3">
                <svg viewBox="0 0 60 60" className="w-12 h-12">
                  <circle cx="20" cy="30" r="18" fill="none" stroke="#38bdf8" strokeWidth="5"/>
                  <path d="M 56 30 A 18 18 0 0 0 38 12 A 18 18 0 0 0 38 48 A 18 18 0 0 0 56 30" fill="none" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round"/>
                </svg>
                <span className="text-2xl font-bold">OwnerClone</span>
              </a>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/features" className="text-gray-400 hover:text-[#38bdf8] transition">Features</a>
              
              {/* Free Tools Dropdown */}
              <div className="relative group">
                <a href="/free-tools" className="text-gray-400 hover:text-[#38bdf8] font-semibold flex items-center space-x-1 transition">
                  <span>Free Tools</span>
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </a>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-72 bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-2">
                    <a href="/free-tools/startup-cost" className="block px-4 py-3 rounded-lg hover:bg-[#1a1a1a] transition group/item">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">💰</span>
                        <div>
                          <div className="font-semibold text-white group-hover/item:text-[#38bdf8] transition">Startup Cost</div>
                          <div className="text-xs text-gray-500">Total opening costs</div>
                        </div>
                      </div>
                    </a>
                    
                    <a href="/free-tools/food-cost" className="block px-4 py-3 rounded-lg hover:bg-[#1a1a1a] transition group/item">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🍽️</span>
                        <div>
                          <div className="font-semibold text-white group-hover/item:text-[#10b981] transition">Food Cost %</div>
                          <div className="text-xs text-gray-500">Recipe cost percentage</div>
                        </div>
                      </div>
                    </a>
                    
                    <a href="/free-tools/prime-cost" className="block px-4 py-3 rounded-lg hover:bg-[#1a1a1a] transition group/item">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">📊</span>
                        <div>
                          <div className="font-semibold text-white group-hover/item:text-[#a855f7] transition">Prime Cost</div>
                          <div className="text-xs text-gray-500">COGS + Labor</div>
                        </div>
                      </div>
                    </a>
                    
                    <a href="/free-tools/labor-cost" className="block px-4 py-3 rounded-lg hover:bg-[#1a1a1a] transition group/item">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">👥</span>
                        <div>
                          <div className="font-semibold text-white group-hover/item:text-[#3b82f6] transition">Labor Cost</div>
                          <div className="text-xs text-gray-500">True labor expenses</div>
                        </div>
                      </div>
                    </a>
                    
                    <a href="/free-tools/break-even" className="block px-4 py-3 rounded-lg hover:bg-[#1a1a1a] transition group/item">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🎯</span>
                        <div>
                          <div className="font-semibold text-white group-hover/item:text-[#fbbf24] transition">Break-Even</div>
                          <div className="text-xs text-gray-500">Daily customer target</div>
                        </div>
                      </div>
                    </a>
                    
                    <a href="/free-tools/menu-pricing" className="block px-4 py-3 rounded-lg hover:bg-[#1a1a1a] transition group/item">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">💵</span>
                        <div>
                          <div className="font-semibold text-white group-hover/item:text-[#f97316] transition">Menu Pricing</div>
                          <div className="text-xs text-gray-500">Optimal price points</div>
                        </div>
                      </div>
                    </a>
                    
                    <a href="/free-tools/per-plate-pricing" className="block px-4 py-3 rounded-lg hover:bg-[#1a1a1a] transition group/item">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🍴</span>
                        <div>
                          <div className="font-semibold text-white group-hover/item:text-[#ec4899] transition">Per Plate Pricing</div>
                          <div className="text-xs text-gray-500">Ingredient costing</div>
                        </div>
                      </div>
                    </a>
                    
                    <a href="/free-tools/google-review" className="block px-4 py-3 rounded-lg hover:bg-[#1a1a1a] transition group/item">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">⭐</span>
                        <div>
                          <div className="font-semibold text-white group-hover/item:text-[#8b5cf6] transition">Google Reviews</div>
                          <div className="text-xs text-gray-500">Rating recovery plan</div>
                        </div>
                      </div>
                    </a>
                    
                    <a href="/free-tools/third-party-fees" className="block px-4 py-3 rounded-lg hover:bg-[#1a1a1a] transition group/item">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">💸</span>
                        <div>
                          <div className="font-semibold text-white group-hover/item:text-[#ef4444] transition">Third Party Fees</div>
                          <div className="text-xs text-gray-500">Real delivery costs</div>
                        </div>
                      </div>
                    </a>
                    
                    <div className="border-t border-[#1a1a1a] mt-2 pt-2">
                      <a href="/free-tools" className="block px-4 py-3 rounded-lg hover:bg-[#1a1a1a] transition">
                        <div className="text-sm font-semibold text-[#38bdf8] hover:text-[#0ea5e9]">View All Calculators →</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <a href="/pricing" className="text-gray-400 hover:text-[#38bdf8] transition">Pricing</a>
              <a href="/blog" className="text-gray-400 hover:text-[#38bdf8] transition">Blog</a>
              <a href="/roadmap" className="text-gray-400 hover:text-[#38bdf8] transition">Roadmap</a>
              <a href="/about" className="text-gray-400 hover:text-[#38bdf8] transition">About</a>
              <a href="/contact" className="text-gray-400 hover:text-[#38bdf8] transition">Contact</a>
              <button 
                onClick={() => setLoginOpen(true)}
                className="border-2 border-[#0ea5e9] text-[#0ea5e9] px-6 py-2 rounded-lg font-semibold hover:bg-[#0ea5e9]/10 transition"
              >
                Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-400 hover:text-[#38bdf8]" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                <a href="/features" className="text-gray-400 hover:text-[#38bdf8] transition py-2">Features</a>
                <a href="/free-tools" className="text-gray-400 hover:text-[#38bdf8] transition py-2">Free Tools</a>
                <a href="/pricing" className="text-gray-400 hover:text-[#38bdf8] transition py-2">Pricing</a>
                <a href="/blog" className="text-gray-400 hover:text-[#38bdf8] transition py-2">Blog</a>
                <a href="/roadmap" className="text-gray-400 hover:text-[#38bdf8] transition py-2">Roadmap</a>
                <a href="/about" className="text-gray-400 hover:text-[#38bdf8] transition py-2">About</a>
                <a href="/contact" className="text-gray-400 hover:text-[#38bdf8] transition py-2">Contact</a>
                <button 
                  onClick={() => setLoginOpen(true)}
                  className="border-2 border-[#0ea5e9] text-[#0ea5e9] px-6 py-2 rounded-lg font-semibold hover:bg-[#0ea5e9]/10 transition text-center mt-2"
                >
                  Login
                </button>
              </div>
            </div>
          )}
        </div>
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
                Don't have an account? <a href="/pricing" className="text-[#38bdf8] hover:text-[#0ea5e9] font-semibold">Join Early Access</a>
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
  )
}
