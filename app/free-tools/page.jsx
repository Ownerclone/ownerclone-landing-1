'use client'

import Link from 'next/link'

export default function FreeToolsHub() {
  const calculators = [
    {
      name: 'Per Plate Food Costing',
      description: 'Build recipes ingredient-by-ingredient or quick-check a known cost. See exact plate costs and optimal pricing.',
      icon: '🍽️',
      color: 'emerald',
      href: '/free-tools/per-plate-food-costing'
    },
    {
      name: 'Labor Cost Calculator',
      description: 'Calculate TRUE labor costs including taxes on tips, benefits, and processing fees. Get accurate labor %.',
      icon: '👥',
      color: 'cyan',
      href: '/free-tools/labor-cost'
    },
    {
      name: 'Prime Cost Calculator',
      description: 'Track your most important profitability metric: Food + Labor. Target is 60% or less.',
      icon: '📊',
      color: 'purple',
      href: '/free-tools/prime-cost'
    },
    {
      name: 'Break-Even Calculator',
      description: 'Find out exactly how much revenue you need to cover all costs and start making profit.',
      icon: '🎯',
      color: 'green',
      href: '/free-tools/break-even'
    },
    {
      name: 'Menu Pricing Calculator',
      description: 'Price your menu items for maximum profit using cost-plus, competitive, and value-based strategies.',
      icon: '💵',
      color: 'violet',
      href: '/free-tools/menu-pricing'
    },
    {
      name: 'Startup Cost Calculator',
      description: 'Estimate total costs to open your restaurant based on size, location, and concept type.',
      icon: '🏗️',
      color: 'orange',
      href: '/free-tools/startup-cost'
    },
    {
      name: 'Google Review Calculator',
      description: 'See how negative reviews impact your rating and plan your recovery strategy to reach your goal.',
      icon: '⭐',
      color: 'pink',
      href: '/free-tools/google-review'
    },
    {
      name: 'Third Party Fees Calculator',
      description: 'Calculate the TRUE cost of DoorDash, Uber Eats, and GrubHub. See your real profit after all fees.',
      icon: '📱',
      color: 'red',
      href: '/free-tools/third-party-fees'
    },
    {
      name: 'Draft Beer Cost Calculator',
      description: 'Calculate pour cost per pint, profit per keg, and see how foam waste impacts your bottom line.',
      icon: '🍺',
      color: 'gold',
      href: '/free-tools/beer-cost'
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      emerald: 'border-[#10b981]/30 hover:border-[#10b981] hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]',
      cyan: 'border-[#06b6d4]/30 hover:border-[#06b6d4] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]',
      purple: 'border-[#a855f7]/30 hover:border-[#a855f7] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]',
      green: 'border-[#10b981]/30 hover:border-[#10b981] hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]',
      violet: 'border-[#8b5cf6]/30 hover:border-[#8b5cf6] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]',
      orange: 'border-[#f97316]/30 hover:border-[#f97316] hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]',
      pink: 'border-[#ec4899]/30 hover:border-[#ec4899] hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]',
      red: 'border-[#ef4444]/30 hover:border-[#ef4444] hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]',
      gold: 'border-[#f59e0b]/30 hover:border-[#f59e0b] hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]'
    }
    return colors[color] || colors.cyan
  }

  const getAccentColor = (color) => {
    const colors = {
      emerald: 'text-[#10b981]',
      cyan: 'text-[#06b6d4]',
      purple: 'text-[#a855f7]',
      green: 'text-[#10b981]',
      violet: 'text-[#8b5cf6]',
      orange: 'text-[#f97316]',
      pink: 'text-[#ec4899]',
      red: 'text-[#ef4444]',
      gold: 'text-[#f59e0b]'
    }
    return colors[color] || colors.cyan
  }

  return (
    <div className="min-h-screen text-white">
      <div className="relative py-24 px-4">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Free Restaurant <span className="text-[#38bdf8]">Calculators</span>
          </h1>
          <p className="text-xl text-gray-300">
            Professional tools used by thousands of restaurant owners to optimize profitability
          </p>
        </div>

        {/* MEGA Calculator - Featured at Top */}
        <div className="max-w-4xl mx-auto mb-12">
          <Link
            href="/free-tools/mega"
            className="block backdrop-blur-xl bg-gradient-to-r from-[#f59e0b]/10 to-[#fbbf24]/10 border-2 border-[#f59e0b] rounded-2xl p-8 hover:shadow-[0_0_50px_rgba(245,158,11,0.4)] transition-all duration-300 group"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-[#f59e0b] bg-[#f59e0b]/20 px-3 py-1 rounded-full">✨ NEW</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">🚀</span>
              <div>
                <h2 className="text-3xl md:text-4xl font-black group-hover:text-[#f59e0b] transition">
                  MEGA Calculator
                </h2>
                <p className="text-[#f59e0b] font-semibold">One Tool to Rule Them All</p>
              </div>
            </div>
            <p className="text-gray-300 text-lg mb-6">
              See how Food Cost, Labor, Prime Cost, Break-Even, and Pricing all work together in real-time. 
              Change one number and watch everything update instantly. This is how the pros analyze their business.
            </p>
            <div className="flex items-center text-[#f59e0b] font-semibold text-lg">
              <span>Try the MEGA Calculator</span>
              <svg className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Divider */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <span className="text-gray-500 text-sm font-semibold">OR USE INDIVIDUAL CALCULATORS</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
        </div>

        {/* Calculator Grid */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {calculators.map((calc) => (
            <Link
              key={calc.href}
              href={calc.href}
              className={`backdrop-blur-xl bg-white/5 border ${getColorClasses(calc.color)} rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group`}
            >
              <div className="text-4xl mb-3">{calc.icon}</div>
              <h3 className={`text-xl font-bold mb-2 group-hover:${getAccentColor(calc.color)} transition`}>
                {calc.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {calc.description}
              </p>
              <div className={`flex items-center ${getAccentColor(calc.color)} font-semibold text-sm`}>
                <span>Try Calculator</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 max-w-4xl mx-auto backdrop-blur-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Want These Calculations Automated?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            OwnerClone connects to your POS and invoices to calculate all of this automatically — updated daily with real data.
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
