'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <svg viewBox="0 0 100 60" className="w-12 h-12">
              <circle
                cx="20"
                cy="30"
                r="18"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="4"
              />
              <path
                d="M 60 12 A 18 18 0 1 1 60 48"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-2xl font-bold text-white">OwnerClone</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-gray-300 hover:text-blue-400 transition">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-blue-400 transition">
              Pricing
            </Link>
            <Link href="/free-tools" className="text-gray-300 hover:text-blue-400 transition">
              Free Tools
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-blue-400 transition">
              Blog
            </Link>
            <Link
              href="/early-access"
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-lg font-semibold text-white hover:shadow-lg transition"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-4 py-4 space-y-3">
            <Link href="/features" className="block py-2 text-gray-300 hover:text-blue-400">
              Features
            </Link>
            <Link href="/pricing" className="block py-2 text-gray-300 hover:text-blue-400">
              Pricing
            </Link>
            <Link href="/free-tools" className="block py-2 text-gray-300 hover:text-blue-400">
              Free Tools
            </Link>
            <Link href="/blog" className="block py-2 text-gray-300 hover:text-blue-400">
              Blog
            </Link>
            <Link
              href="/early-access"
              className="block bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg font-semibold text-white text-center"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
