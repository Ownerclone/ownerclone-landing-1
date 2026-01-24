'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <svg viewBox="-2 0 80 60" className="h-10 md:h-12 w-auto">
              <circle cx="20" cy="30" r="18" fill="none" stroke="#38bdf8" strokeWidth="6"/>
              <path d="M 52 12 A 18 18 0 1 0 52 48" fill="none" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round"/>
            </svg>
            <span className="text-2xl font-black text-white">OwnerClone</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            
            {/* Free Tools Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                Free Tools
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-48 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/free-tools/food-cost" className="block px-4 py-2 text-gray-300 hover:bg-[#2a2a2a] hover:text-white">
                  Food Cost Calculator
                </Link>
                <Link href="/free-tools/prime-cost" className="block px-4 py-2 text-gray-300 hover:bg-[#2a2a2a] hover:text-white">
                  Prime Cost Calculator
                </Link>
                <Link href="/free-tools/labor-cost" className="block px-4 py-2 text-gray-300 hover:bg-[#2a2a2a] hover:text-white">
                  Labor Cost Calculator
                </Link>
                <Link href="/free-tools" className="block px-4 py-2 text-cyan-400 hover:bg-[#2a2a2a] border-t border-[#2a2a2a]">
                  View All Tools →
                </Link>
              </div>
            </div>

            <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/roadmap" className="text-gray-300 hover:text-white transition-colors">
              Roadmap
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Login Button */}
            <Link 
              href="/app-login"
              className="bg-cyan-400 text-black px-4 py-2 rounded-lg font-bold hover:bg-cyan-300 transition-colors"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
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
        <div className="md:hidden border-t border-[#2a2a2a] bg-black">
          <div className="px-4 py-3 space-y-3">
            <Link href="/features" className="block text-gray-300 hover:text-white">
              Features
            </Link>
            <Link href="/free-tools" className="block text-gray-300 hover:text-white">
              Free Tools
            </Link>
            <Link href="/pricing" className="block text-gray-300 hover:text-white">
              Pricing
            </Link>
            <Link href="/blog" className="block text-gray-300 hover:text-white">
              Blog
            </Link>
            <Link href="/roadmap" className="block text-gray-300 hover:text-white">
              Roadmap
            </Link>
            <Link href="/about" className="block text-gray-300 hover:text-white">
              About
            </Link>
            <Link href="/contact" className="block text-gray-300 hover:text-white">
              Contact
            </Link>
            <div className="pt-3 border-t border-[#2a2a2a]">
              <Link 
                href="/app-login"
                className="block w-full text-center bg-cyan-400 text-black px-4 py-2 rounded-lg font-bold"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
