'use client'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/features', label: 'Features' },
    { href: '/free-tools', label: 'Free Tools' },
    { href: '/roadmap', label: 'Roadmap' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/demo', label: 'Demo' },
  ]

  return (
    <nav className="bg-[#0a0a0a] shadow-lg fixed top-0 left-0 right-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Now links to home */}
         <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
  <svg viewBox="0 0 80 60" className="h-10 md:h-12 w-auto">
    {/* O - Circle */}
    <circle cx="20" cy="30" r="18" fill="none" stroke="#38bdf8" strokeWidth="6"/>
    {/* C - Flipped, slight overlap, thicker */}
    <path d="M 54 12 A 18 18 0 1 0 54 48" fill="none" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round"/>
  </svg>
  <span className="text-2xl font-bold text-[#38bdf8]">OwnerClone</span>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#38bdf8] font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Login Button - Blue outlined style */}
            <Link 
              href="/login" 
              className="px-6 py-2 bg-transparent text-[#38bdf8] font-bold text-sm rounded-lg border-2 border-[#0ea5e9] hover:border-[#38bdf8] hover:bg-[#38bdf8]/10 transition-all duration-300"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-[#38bdf8]"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-[#38bdf8] font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Login Button */}
              <Link
                href="/login"
                className="px-6 py-2 bg-transparent text-[#38bdf8] font-bold text-sm rounded-lg border-2 border-[#0ea5e9] hover:border-[#38bdf8] hover:bg-[#38bdf8]/10 transition-all duration-300 text-center"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
