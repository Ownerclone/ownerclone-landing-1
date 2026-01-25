// app/free-tools/page.tsx
// Free Tools Hub Page with Lucide React Icons

import Link from 'next/link';
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

export default function FreeToolsPage() {
  const calculators = [
    {
      name: 'Food Cost Calculator',
      description: 'Calculate food cost percentage for any recipe. Track ingredient costs down to the gram.',
      href: '/free-tools/food-cost',
      icon: UtensilsCrossed,
      color: 'cyan',
      borderColor: 'border-cyan-400/30',
      bgColor: 'bg-cyan-500/10',
      iconColor: 'text-cyan-400'
    },
    {
      name: 'Prime Cost Calculator',
      description: 'Your most important profitability metric. COGS + Labor in one powerful calculator.',
      href: '/free-tools/prime-cost',
      icon: TrendingUp,
      color: 'green',
      borderColor: 'border-green-400/30',
      bgColor: 'bg-green-500/10',
      iconColor: 'text-green-400'
    },
    {
      name: 'Labor Cost Calculator',
      description: 'Analyze labor costs as a percentage of sales. Optimize scheduling and staffing.',
      href: '/free-tools/labor-cost',
      icon: Users,
      color: 'indigo',
      borderColor: 'border-indigo-400/30',
      bgColor: 'bg-indigo-500/10',
      iconColor: 'text-indigo-400'
    },
    {
      name: 'Break-Even Calculator',
      description: 'Find out exactly how many customers you need per day to start making profit.',
      href: '/free-tools/break-even',
      icon: Scale,
      color: 'purple',
      borderColor: 'border-purple-400/30',
      bgColor: 'bg-purple-500/10',
      iconColor: 'text-purple-400'
    },
    {
      name: 'Menu Pricing Calculator',
      description: 'Price your menu items perfectly with multiple pricing strategies and cost analysis.',
      href: '/free-tools/menu-pricing',
      icon: Calculator,
      color: 'blue',
      borderColor: 'border-blue-400/30',
      bgColor: 'bg-blue-500/10',
      iconColor: 'text-blue-400'
    },
    {
      name: 'Per Plate Pricing',
      description: 'Calculate exact cost per serving with ingredient tracking and portion control.',
      href: '/free-tools/per-plate-pricing',
      icon: PieChart,
      color: 'orange',
      borderColor: 'border-orange-400/30',
      bgColor: 'bg-orange-500/10',
      iconColor: 'text-orange-400'
    },
    {
      name: 'Startup Cost Calculator',
      description: 'Estimate total costs to open your restaurant. Build-out, equipment, inventory, and more.',
      href: '/free-tools/startup-cost',
      icon: Rocket,
      color: 'yellow',
      borderColor: 'border-yellow-400/30',
      bgColor: 'bg-yellow-500/10',
      iconColor: 'text-yellow-400'
    },
    {
      name: 'Google Review Calculator',
      description: 'See how negative reviews impact your rating and plan your recovery strategy.',
      href: '/free-tools/google-review',
      icon: Star,
      color: 'pink',
      borderColor: 'border-pink-400/30',
      bgColor: 'bg-pink-500/10',
      iconColor: 'text-pink-400'
    },
    {
      name: 'Third Party Fees Calculator',
      description: 'Calculate the true cost of delivery apps. DoorDash, Uber Eats, Grubhub fees revealed.',
      href: '/free-tools/third-party-fees',
      icon: CreditCard,
      color: 'red',
      borderColor: 'border-red-400/30',
      bgColor: 'bg-red-500/10',
      iconColor: 'text-red-400'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Fixed SVG Background */}
      <div 
        className="fixed inset-0 z-0" 
        style={{
          backgroundImage: 'url(/bg-glow.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }} 
      />

      {/* Content Layer */}
      <div className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-12 text-center">
            <h1 className="text-5xl font-bold text-cyan-400 mb-4">
              Free Restaurant Tools
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional calculators built by restaurant owners, for restaurant owners. 
              No signup required. No credit card. Just useful tools to help you succeed.
            </p>
          </div>

          {/* Calculator Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {calculators.map((calc) => {
              const Icon = calc.icon;
              return (
                <Link
                  key={calc.href}
                  href={calc.href}
                  className={`backdrop-blur-xl bg-white/5 border ${calc.borderColor} rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group`}
                >
                  {/* Icon */}
                  <div className={`inline-flex p-3 ${calc.bgColor} border ${calc.borderColor} rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 ${calc.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-200 mb-3 group-hover:text-white transition">
                    {calc.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-4">
                    {calc.description}
                  </p>

                  {/* Arrow */}
                  <div className={`flex items-center ${calc.iconColor} font-semibold`}>
                    <span>Try Calculator</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="backdrop-blur-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-300/30 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Want These Calculations Automated?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-lg">
              OwnerClone automatically tracks all these metrics in real-time using AI 
              to analyze your invoices, POS data, and operations. No more manual spreadsheets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className="backdrop-blur-xl bg-cyan-500/30 border border-cyan-300/50 text-white hover:bg-cyan-500/40 px-8 py-4 rounded-xl font-bold transition-all inline-flex items-center justify-center gap-2"
              >
                <span>See OwnerClone Demo</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="/pricing"
                className="backdrop-blur-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-bold transition-all"
              >
                Join Early Access
              </Link>
            </div>
          </div>

          {/* Why Use These Tools */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="backdrop-blur-xl bg-white/5 border border-green-400/30 rounded-2xl p-6">
              <div className="inline-flex p-3 bg-green-500/10 border border-green-400/30 rounded-xl mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-200 mb-2">100% Free Forever</h3>
              <p className="text-gray-400">
                No signup, no credit card, no catch. Use these tools as much as you want.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-purple-400/30 rounded-2xl p-6">
              <div className="inline-flex p-3 bg-purple-500/10 border border-purple-400/30 rounded-xl mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-200 mb-2">Built by Owners</h3>
              <p className="text-gray-400">
                Created by a restaurant owner with 10 years of experience. Real-world tested.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-blue-400/30 rounded-2xl p-6">
              <div className="inline-flex p-3 bg-blue-500/10 border border-blue-400/30 rounded-xl mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-200 mb-2">Industry Standards</h3>
              <p className="text-gray-400">
                All calculations use current restaurant industry benchmarks and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
