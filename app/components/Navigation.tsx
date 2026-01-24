'use client'

import { useState } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <a href="/" className="flex items-center space-x-3">
              <svg viewBox="0 0 100 60" className="w-12 h-12">
                <circle cx="20" cy="30" r="18" fill="none" stroke="#38bdf8" strokeWidth="4"/>
                <path d="M 60 12 A 18 18 0 1 1 60 48" fill="none" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round"/>
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
            <a href="/roadmap" className="text-gray-400 hover:text-[#38bdf8] transition">Roadmap</a>
            <a href="/about" className="text-gray-400 hover:text-[#38bdf8] transition">About</a>
            <a href="/contact" className="text-gray-400 hover:text-[#38bdf8] transition">Contact</a>
            <a href="/demo" className="border-2 border-[#0ea5e9] text-[#0ea5e9] px-6 py-2 rounded-lg font-semibold hover:bg-[#0ea5e9]/10 transition">
              Request Demo
            </a>
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
              <a href="/roadmap" className="text-gray-400 hover:text-[#38bdf8] transition py-2">Roadmap</a>
              <a href="/about" className="text-gray-400 hover:text-[#38bdf8] transition py-2">About</a>
              <a href="/contact" className="text-gray-400 hover:text-[#38bdf8] transition py-2">Contact</a>
              <a href="/demo" className="border-2 border-[#0ea5e9] text-[#0ea5e9] px-6 py-2 rounded-lg font-semibold hover:bg-[#0ea5e9]/10 transition text-center mt-2">
                Request Demo
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
