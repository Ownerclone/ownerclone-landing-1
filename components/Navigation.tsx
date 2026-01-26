'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { 
  UtensilsCrossed, // Food Cost
  TrendingUp,      // Prime Cost  
  Users,           // Labor Cost
  Scale,           // Break-Even
  Calculator,      // Menu Pricing
  PieChart,        // Per Plate Pricing
  Rocket,          // Startup Cost
  Star,            // Google Review
  CreditCard       // Third Party Fees
} from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);

  const calculators = [
    {
      name: 'Food Cost Calculator',
      href: '/free-tools/food-cost',
      icon: UtensilsCrossed,
      description: 'Calculate recipe costs',
      color: 'text-cyan-400'
    },
    {
      name: 'Prime Cost Calculator',
      href: '/free-tools/prime-cost',
      icon: TrendingUp,
      description: 'Food + labor costs',
      color: 'text-green-400'
    },
    {
      name: 'Labor Cost Calculator',
      href: '/free-tools/labor-cost',
      icon: Users,
      description: 'Staff cost analysis',
      color: 'text-indigo-400'
    },
    {
      name: 'Break-Even Calculator',
      href: '/free-tools/break-even',
      icon: Scale,
      description: 'Find your break-even point',
      color: 'text-purple-400'
    },
    {
      name: 'Menu Pricing Calculator',
      href: '/free-tools/menu-pricing',
      icon: Calculator,
      description: 'Optimize menu prices',
      color: 'text-blue-400'
    },
    {
      name: 'Per Plate Pricing',
      href: '/free-tools/per-plate-pricing',
      icon: PieChart,
      description: 'Price per serving',
      color: 'text-orange-400'
    },
    {
      name: 'Startup Cost Calculator',
      href: '/free-tools/startup-cost',
      icon: Rocket,
      description: 'Launch budget planner',
      color: 'text-yellow-400'
    },
    {
      name: 'Google Review Calculator',
      href: '/free-tools/google-review',
      icon: Star,
      description: 'Review impact analysis',
      color: 'text-pink-400'
    },
    {
      name: 'Third Party Fees',
      href: '/free-tools/third-party-fees',
      icon: CreditCard,
      description: 'Delivery app costs',
      color: 'text-red-400'
    }
  ];

  // Navigation items with their paths
  const navItems = [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog', href: '/blog' },
    { label: 'Roadmap', href: '/roadmap' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  // Check if current path matches
  const isActive = (href: string) => pathname === href;
  
  // Check if Free Tools dropdown should be active
  const isFreeToolsActive = pathname?.startsWith('/free-tools');

  const handleForgotPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoginOpen(false);
    setForgotPasswordOpen(true);
  };

  const handleBackToLogin = () => {
    setForgotPasswordOpen(false);
    setLoginOpen(true);
  };

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
  };

  // Active indicator triangle component - uses CSS variable for color
  const ActiveTriangle = () => (
    <div 
      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 active-nav-triangle"
      style={{
        borderLeft: '6px solid transparent',
        borderRight: '6px solid transparent',
        borderBottom: '6px solid var(--brand-primary)',
        filter: 'drop-shadow(0 0 8px var(--brand-primary))'
      }}
    />
  );

  return (
    <>
      {/* GLASS NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-bg border-b" style={{ borderColor: 'var(--nav-border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
              <svg viewBox="-5 0 85 60" className="h-10 md:h-12 w-auto">
                <circle cx="20" cy="30" r="18" fill="none" className="logo-color" strokeWidth="10"/>
                <circle cx="48" cy="30" r="18" fill="none" className="logo-color" strokeWidth="10" strokeDasharray="85 113" transform="rotate(40, 48, 30)"/>
              </svg>
              <span className="text-2xl font-black text-white">OwnerClone</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.slice(0, 1).map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className="relative nav-text transition-colors"
                  style={{
                    color: isActive(item.href) ? 'var(--brand-primary)' : undefined
                  }}
                >
                  {item.label}
                  {isActive(item.href) && <ActiveTriangle />}
                </Link>
              ))}
              
              {/* Free Tools Dropdown */}
              <div className="relative group">
                <button 
                  className="nav-text flex items-center gap-1 transition-colors"
                  style={{
                    color: isFreeToolsActive ? 'var(--brand-primary)' : undefined
                  }}
                >
                  Free Tools
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  {isFreeToolsActive && <ActiveTriangle />}
                </button>
                
                {/* Glass Dropdown Menu */}
                <div className="absolute top-full left-0 pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="backdrop-blur-xl bg-black/60 border border-white/10 rounded-lg shadow-xl">
                    <div className="p-2">
                      {calculators.map((calc) => {
                        const Icon = calc.icon;
                        return (
                          <Link 
                            key={calc.href}
                            href={calc.href} 
                            className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg transition-colors"
                          >
                            <Icon className={`w-5 h-5 ${calc.color}`} />
                            <div>
                              <div className="font-semibold text-white">{calc.name}</div>
                              <div className="text-xs text-gray-400">{calc.description}</div>
                            </div>
                          </Link>
                        );
                      })}
                      <Link href="/free-tools" className="block px-4 py-3 hover:bg-white/10 border-t border-white/10 rounded-lg mt-1" style={{ color: 'var(--brand-primary)' }}>
                        View All Tools →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {navItems.slice(1).map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className="relative nav-text transition-colors"
                  style={{
                    color: isActive(item.href) ? 'var(--brand-primary)' : undefined
                  }}
                >
                  {item.label}
                  {isActive(item.href) && <ActiveTriangle />}
                </Link>
              ))}

              {/* Theme Toggle */}
              <ThemeToggle />
              {/* Login Button - Glass Style */}
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
              className="lg:hidden p-2 nav-text"
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

        {/* Mobile menu - GLASS EFFECT */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 backdrop-blur-xl bg-black/60">
            <div className="px-4 py-3 space-y-3">
              <Link 
                href="/features" 
                className="block nav-text"
                style={{ color: isActive('/features') ? 'var(--brand-primary)' : undefined, fontWeight: isActive('/features') ? 600 : undefined }}
                onClick={closeMobileMenu}
              >
                Features
              </Link>
              
              {/* Mobile Free Tools Dropdown */}
              <div>
                <button 
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="w-full flex items-center justify-between nav-text"
                  style={{ color: isFreeToolsActive ? 'var(--brand-primary)' : undefined, fontWeight: isFreeToolsActive ? 600 : undefined }}
                >
                  <span>Free Tools</span>
                  <svg 
                    className={`w-4 h-4 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Mobile dropdown items */}
                {mobileDropdownOpen && (
                  <div className="mt-2 ml-4 space-y-2 border-l-2 pl-4" style={{ borderColor: 'var(--brand-primary)' }}>
                    {calculators.map((calc) => {
                      const Icon = calc.icon;
                      return (
                        <Link 
                          key={calc.href}
                          href={calc.href} 
                          className="flex items-center gap-2 text-sm nav-text py-1" 
                          onClick={closeMobileMenu}
                        >
                          <Icon className={`w-4 h-4 ${calc.color}`} />
                          <span>{calc.name}</span>
                        </Link>
                      );
                    })}
                    <Link href="/free-tools" className="block text-sm py-1 font-semibold" style={{ color: 'var(--brand-primary)' }} onClick={closeMobileMenu}>
                      View All Tools →
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                href="/pricing" 
                className="block nav-text"
                style={{ color: isActive('/pricing') ? 'var(--brand-primary)' : undefined, fontWeight: isActive('/pricing') ? 600 : undefined }}
                onClick={closeMobileMenu}
              >
                Pricing
              </Link>
              <Link 
                href="/blog" 
                className="block nav-text"
                style={{ color: isActive('/blog') ? 'var(--brand-primary)' : undefined, fontWeight: isActive('/blog') ? 600 : undefined }}
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
              <Link 
                href="/roadmap" 
                className="block nav-text"
                style={{ color: isActive('/roadmap') ? 'var(--brand-primary)' : undefined, fontWeight: isActive('/roadmap') ? 600 : undefined }}
                onClick={closeMobileMenu}
              >
                Roadmap
              </Link>
              <Link 
                href="/about" 
                className="block nav-text"
                style={{ color: isActive('/about') ? 'var(--brand-primary)' : undefined, fontWeight: isActive('/about') ? 600 : undefined }}
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block nav-text"
                style={{ color: isActive('/contact') ? 'var(--brand-primary)' : undefined, fontWeight: isActive('/contact') ? 600 : undefined }}
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              <div className="pt-3 border-t border-white/10">
                <button 
                  onClick={() => {
                    setLoginOpen(true);
                    closeMobileMenu();
                  }}
                  className="block w-full text-center backdrop-blur-xl border rounded-lg px-4 py-2 font-bold transition-all"
                  style={{ 
                    backgroundColor: 'rgba(var(--brand-primary-rgb, 34, 211, 238), 0.2)',
                    borderColor: 'var(--brand-primary)',
                    color: 'var(--brand-primary)'
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Login Modal - GLASS EFFECT */}
      {loginOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={() => setLoginOpen(false)}>
          <div className="backdrop-blur-xl bg-white/10 border-2 rounded-2xl p-8 max-w-md w-full mx-4" style={{ borderColor: 'var(--brand-primary)', boxShadow: '0 0 80px rgba(34, 211, 238, 0.3)' }} onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Login to <span style={{ color: 'var(--brand-primary)' }}>OwnerClone</span></h2>
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
                  className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:outline-none text-white transition-colors"
                  style={{ '--tw-ring-color': 'var(--brand-primary)' } as React.CSSProperties}
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:outline-none text-white transition-colors"
                  placeholder="••••••••"
                />
              </div>
              
              <div className="text-right">
                <button 
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-sm transition"
                  style={{ color: 'var(--brand-primary)' }}
                >
                  Forgot password/username?
                </button>
              </div>
              
              <button type="submit" className="w-full text-black px-6 py-3 rounded-lg font-bold transition" style={{ backgroundColor: 'var(--brand-primary)' }}>
                Sign In
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Don&apos;t have an account? <Link href="/pricing" className="font-semibold" style={{ color: 'var(--brand-primary)' }}>Join Early Access</Link>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Forgot Password Modal - GLASS EFFECT */}
      {forgotPasswordOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={() => setForgotPasswordOpen(false)}>
          <div className="backdrop-blur-xl bg-white/10 border-2 rounded-2xl p-8 max-w-md w-full mx-4" style={{ borderColor: 'var(--brand-primary)', boxShadow: '0 0 80px rgba(34, 211, 238, 0.3)' }} onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Reset <span style={{ color: 'var(--brand-primary)' }}>Password</span></h2>
              <button onClick={() => setForgotPasswordOpen(false)} className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            
            <p className="text-gray-300 mb-6">
              Enter your email address and we&apos;ll send you a link to reset your password along with your username.
            </p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 backdrop-blur-xl bg-black/40 border-2 border-white/10 rounded-lg focus:outline-none text-white transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <button type="submit" className="w-full text-black px-6 py-3 rounded-lg font-bold transition" style={{ backgroundColor: 'var(--brand-primary)' }}>
                Send Recovery Email
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <button 
                onClick={handleBackToLogin}
                className="text-sm transition"
                style={{ color: 'var(--brand-primary)' }}
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
