'use client'

import Link from 'next/link'

export default function FreeToolsHub() {
  const calculators = [
    {
      name: 'Food Cost Calculator',
      description: 'Calculate food cost percentage for any recipe and see if you\'re hitting industry benchmarks.',
      icon: '🍽️',
      color: 'emerald',
      href: '/free-tools/food-cost'
    },
    {
      name: 'Prime Cost Calculator',
      description: 'Track your most important profitability metric: COGS + Labor. Target is 60% or less.',
      icon: '📊',
      color: 'blue',
      href: '/free-tools/prime-cost'
    },
    {
      name: 'Break-Even Calculator',
      description: 'Find out exactly how many customers you need per day to break even and start making profit.',
      icon: '🎯',
      color: 'cyan',
      href: '/free-tools/break-even'
    },
    {
      name: 'Labor Cost Calculator',
      description: 'Calculate your labor cost percentage and optimize staffing to hit the 25-35% target.',
      icon: '👥',
      color: 'indigo',
      href: '/free-tools/labor-cost'
    },
    {
      name: 'Menu Pricing Calculator',
      description: 'Price your menu items for maximum profit using multiple pricing strategies and methods.',
      icon: '💵',
      color: 'purple',
      href: '/free-tools/menu-pricing'
    },
    {
      name: 'Per Plate Pricing Calculator',
      description: 'Calculate exact ingredient costs per plate and see how portion control impacts profitability.',
      icon: '🍴',
      color: 'teal',
      href: '/free-tools/per-plate-pricing'
    },
    {
      name: 'Startup Cost Calculator',
      description: 'Estimate total investment needed to open your restaurant including equipment, buildout, and working capital.',
      icon: '🏪',
      color: 'orange',
      href: '/free-tools/startup-cost'
    },
    {
      name: 'Google Review Calculator',
      description: 'Calculate how many 5-star reviews you need to improve your overall Google rating.',
      icon: '⭐',
      color: 'amber',
      href: '/free-tools/google-review'
    },
    {
      name: 'Third Party Fees Calculator',
      description: 'See the REAL fees you\'re paying DoorDash, Uber Eats & Grubhub after all costs add up.',
      icon: '📱',
      color: 'rose',
      href: '/free-tools/third-party-fees'
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      emerald: 'border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-emerald-500/20',
      blue: 'border-blue-500/20 hover:border-blue-500/50 hover:shadow-blue-500/20',
      cyan: 'border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-cyan-500/20',
      indigo: 'border-indigo-500/20 hover:border-indigo-500/50 hover:shadow-indigo-500/20',
      purple: 'border-purple-500/20 hover:border-purple-500/50 hover:shadow-purple-500/20',
      teal: 'border-teal-500/20 hover:border-teal-500/50 hover:shadow-teal-500/20',
      orange: 'border-orange-500/20 hover:border-orange-500/50 hover:shadow-orange-500/20',
      amber: 'border-amber-500/20 hover:border-amber-500/50 hover:shadow-amber-500/20',
      rose: 'border-rose-500/20 hover:border-rose-500/50 hover:shadow-rose-500/20'
    }
    return colors[color] || colors.emerald
  }

  return (
    <div className="min-h-screen relative text-white">
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/bg-glow.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-8 max-w-4xl">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Free Restaurant <span className="text-cyan-400">Calculators</span>
          </h1>
          <p className="text-xl text-gray-300">
            Professional financial tools to help you start, manage, and optimize your restaurant business.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calculators.map((calc) => (
            <Link
              key={calc.href}
              href={calc.href}
              className={`backdrop-blur-xl bg-white/5 border ${getColorClasses(calc.color)} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group`}
            >
              <div className="text-5xl mb-4">{calc.icon}</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition">
                {calc.name}
              </h3>
              <p className="text-gray-400 mb-6">
                {calc.description}
              </p>
              <div className="flex items-center text-cyan-400 font-semibold">
                <span>Try Calculator</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 max-w-4xl mx-auto backdrop-blur-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-300/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Want These Calculations Automated?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            OwnerClone automatically tracks all these metrics in real-time using AI to analyze your invoices, POS data, and operations.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/25"
          >
            See OwnerClone Demo
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
