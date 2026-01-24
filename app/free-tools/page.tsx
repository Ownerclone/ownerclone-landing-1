export const metadata = {
  title: 'Free Restaurant Calculators | Food Cost, Prime Cost, Break-Even | OwnerClone',
  description: 'Professional restaurant financial calculators. Calculate food cost %, prime cost, break-even point, startup costs, labor costs, and menu pricing. Free tools used by thousands of restaurant owners.',
  keywords: ['restaurant calculator', 'food cost calculator', 'prime cost calculator', 'restaurant startup cost calculator', 'break even calculator restaurant', 'menu pricing calculator', 'labor cost calculator'],
  openGraph: {
    title: 'Free Restaurant Calculators | OwnerClone',
    description: 'Professional restaurant financial calculators. Calculate food cost, prime cost, break-even, and more.',
    type: 'website',
    url: 'https://ownerclone.com/free-tools',
  },
};

export default function FreeToolsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#0ea5e9] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#38bdf8] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Navigation */}
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
              <a href="/#features" className="text-gray-400 hover:text-[#38bdf8] transition">Features</a>
              <a href="/free-tools" className="text-[#38bdf8] font-semibold">Free Tools</a>
              <a href="/#pricing" className="text-gray-400 hover:text-[#38bdf8] transition">Pricing</a>
              <a href="/blog" className="text-gray-400 hover:text-[#38bdf8] transition">Blog</a>
              <a href="/pricing" className="border-2 border-[#0ea5e9] text-[#0ea5e9] px-6 py-2 rounded-lg font-semibold hover:bg-[#0ea5e9]/10 transition">
                Join Early Access
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1419] to-transparent pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Free Restaurant <span className="text-[#38bdf8]">Calculators</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional financial tools to help you start, manage, and optimize your restaurant. 
            No signup required. 100% free.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span>✓ Used by 10,000+ restaurant owners</span>
            <span>✓ Instant results</span>
            <span>✓ No email required</span>
          </div>
        </div>
      </section>

      {/* Calculator Grid - 9 CALCULATORS TOTAL */}
      <section className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1. Startup Cost Calculator - CYAN GLOW */}
            <a href="/free-tools/startup-cost" className="block bg-gradient-to-br from-[#1e1e1e] via-[#2a2a2a] to-[#1e1e1e] border border-[#3a3a3a] rounded-2xl p-8 hover:border-[#38bdf8] hover:shadow-lg hover:shadow-[#38bdf8]/50 transition-all duration-300 group">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-[#38bdf8] transition">Startup Cost Calculator</h3>
              <p className="text-gray-400 mb-6">
                Estimate total costs to open your restaurant including build-out, equipment, inventory, and working capital.
              </p>
              <div className="flex items-center text-[#38bdf8] font-semibold">
                <span>Try Calculator</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </a>

            {/* 2. Food Cost Calculator - GREEN GLOW */}
            <a href="/free-tools/food-cost" className="block bg-gradient-to-br from-[#1e1e1e] via-[#2a2a2a] to-[#1e1e1e] border border-[#3a3a3a] rounded-2xl p-8 hover:border-[#10b981] hover:shadow-lg hover:shadow-[#10b981]/50 transition-all duration-300 group">
              <div className="text-5xl mb-4">🍽️</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-[#10b981] transition">Food Cost Calculator</h3>
              <p className="text-gray-400 mb-6">
                Calculate food cost percentage for any recipe. See if you're hitting industry benchmarks (28-35%).
              </p>
              <div className="flex items-center text-[#10b981] font-semibold">
                <span>Try Calculator</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </a>

            {/* 3. Prime Cost Calculator - PURPLE GLOW */}
            <a href="/free-tools/prime-cost" className="block bg-gradient-to-br from-[#1e1e1e] via-[#2a2a2a] to-[#1e1e1e] border border-[#3a3a3a] rounded-2xl p-8 hover:border-[#a855f7] hover:shadow-lg hover:shadow-[#a855f7]/50 transition-all duration-300 group">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-[#a855f7] transition">Prime Cost Calculator</h3>
              <p className="text-gray-400 mb-6">
                Track your most important profitability metric: COGS + Labor. Target is 60% or less.
              </p>
              <div className="flex items-center text-[#a855f7] font-semibold">
                <span>Try Calculator</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </a>

            {/* 4. Labor Cost Calculator - BLUE GLOW */}
            <a href="/free-tools/labor-cost" className="block bg-gradient-to-br from-[#1e1e1e] via-[#2a2a2a] to-[#1e1e1e] border border-[#3a3a3a] rounded-2xl p-8 hover:border-[#3b82f6] hover:shadow-lg hover:shadow-[#3b82f6]/50 transition-all duration-300 group">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-[#3b82f6] transition">Labor Cost Calculator</h3>
              <p className="text-gray-400 mb-6">
                Calculate true labor costs including wages, tip taxes, benefits, and payroll fees.
              </p>
              <div className="flex items-center text-[#3b82f6] font-semibold">
                <span>Try Calculator</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </a>

            {/* 5. Break-Even Calculator - YELLOW GLOW */}
            <a href="/free-tools/break-even" className="block bg-gradient-to-br from-[#1e1e1e] via-[#2a2a2a] to-[#1e1e1e] border border-[#3a3a3a] rounded-2xl p-8 hover:border-[#fbbf24] hover:shadow-lg hover:shadow-[#fbbf24]/50 transition-all duration-300 group">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-[#fbbf24] transition">Break-Even Calculator</h3>
              <p className="text-gray-400 mb-6">
                Find out exactly how many customers you need per day to break even and start making profit.
              </p>
              <div className="flex items-center text-[#fbbf24] font-semibold">
                <span>Try Calculator</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </a>

            {/* 6. Menu Pricing Calculator - ORANGE GLOW */}
            <a href="/free-tools/menu-pricing" className="block bg-gradient-to-br from-[#1e1e1e] via-[#2a2a2a] to-[#1e1e1e] border border-[#3a3a3a] rounded-2xl p-8 hover:border-[#f97316] hover:shadow-lg hover:shadow-[#f97316]/50 transition-all duration-300 group">
              <div className="text-5xl mb-4">💵</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-[#f97316] transition">Menu Pricing Calculator</h3>
              <p className="text-gray-400 mb-6">
                Price your menu items for maximum profit using multiple pricing strategies and methods.
              </p>
              <div className="flex items-center text-[#f97316] font-semibold">
                <span>Try Calculator</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </a>

            {/* 7. Per Plate Pricing Calculator - PINK GLOW */}
            <a href="/free-tools/per-plate-pricing" className="block bg-gradient-to-br from-[#1e1e1e] via-[#2a2a2a] to-[#1e1e1e] border border-[#3a3a3a] rounded-2xl p-8 hover:border-[#ec4899] hover:shadow-lg hover:shadow-[#ec4899]/50 transition-all duration-300 group">
              <div className="text-5xl mb-4">🍴</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-[#ec4899] transition">Per Plate Pricing Calculator</h3>
              <p className="text-gray-400 mb-6">
                Calculate ingredient costs and see how portion control impacts your profitability and annual savings.
              </p>
              <div className="flex items-center text-[#ec4899] font-semibold">
                <span>Try Calculator</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </a>

            {/* 8. Google Review Calculator - PURPLE GLOW (different shade) */}
            <a href="/free-tools/google-review" className="block bg-gradient-to-br from-[#1e1e1e] via-[#2a2a2a] to-[#1e1e1e] border border-[#3a3a3a] rounded-2xl p-8 hover:border-[#8b5cf6] hover:shadow-lg hover:shadow-[#8b5cf6]/50 transition-all duration-300 group relative">
              <div className="absolute top-4 right-4 bg-[#8b5cf6] text-white px-3 py-1 rounded-full text-xs font-bold">NEW</div>
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-[#8b5cf6] transition">Google Review Calculator</h3>
              <p className="text-gray-400 mb-6">
                Calculate review impact, plan recovery from bad reviews, and set rating goals with proven strategies.
              </p>
              <div className="flex items-center text-[#8b5cf6] font-semibold">
                <span>Try Calculator</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </a>

            {/* 9. Third Party Fees Calculator - RED GLOW */}
            <a href="/free-tools/third-party-fees" className="block bg-gradient-to-br from-[#1e1e1e] via-[#2a2a2a] to-[#1e1e1e] border border-[#3a3a3a] rounded-2xl p-8 hover:border-[#ef4444] hover:shadow-lg hover:shadow-[#ef4444]/50 transition-all duration-300 group relative">
              <div className="absolute top-4 right-4 bg-[#ef4444] text-white px-3 py-1 rounded-full text-xs font-bold">NEW</div>
              <div className="text-5xl mb-4">💸</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-[#ef4444] transition">Third Party True Fees</h3>
              <p className="text-gray-400 mb-6">
                See the REAL cost of DoorDash, Uber Eats, and GrubHub. Calculate annual losses and ROI for direct ordering.
              </p>
              <div className="flex items-center text-[#ef4444] font-semibold">
                <span>Try Calculator</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* Why These Calculators Section */}
      <section className="relative py-16 px-4">
        <div className="absolute inset-0 bg-[#0f1419]/30 pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Why Restaurant Owners Love <span className="text-[#38bdf8]">These Tools</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-6">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="text-xl font-bold mb-2">Industry-Standard Formulas</h3>
              <p className="text-gray-400">Built using benchmarks from the National Restaurant Association and Restaurant365. The same formulas used by successful operators.</p>
            </div>

            <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-bold mb-2">Instant Results</h3>
              <p className="text-gray-400">No waiting, no processing. Get your calculations immediately. Make decisions faster.</p>
            </div>

            <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-6">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-xl font-bold mb-2">100% Private</h3>
              <p className="text-gray-400">All calculations happen in your browser. We don't store or see your numbers. Your financial data stays yours.</p>
            </div>

            <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-6">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-xl font-bold mb-2">Mobile Friendly</h3>
              <p className="text-gray-400">Use these calculators on any device. Calculate costs while talking to vendors or visiting potential locations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Perfect For <span className="text-[#38bdf8]">Every Stage</span>
          </h2>
          
          <div className="space-y-6">
            <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-8 border-l-4 border-l-[#38bdf8]">
              <h3 className="text-2xl font-bold mb-3">🚀 Pre-Launch</h3>
              <p className="text-gray-300 mb-4">Planning to open a restaurant? Use our calculators to:</p>
              <ul className="space-y-2 text-gray-400">
                <li>• Estimate total startup costs for your business plan</li>
                <li>• Calculate break-even point before signing a lease</li>
                <li>• Price your menu items for profitability from day one</li>
              </ul>
            </div>

            <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-8 border-l-4 border-l-[#a855f7]">
              <h3 className="text-2xl font-bold mb-3">🏃 New Operators</h3>
              <p className="text-gray-300 mb-4">First year of operations? These tools help you:</p>
              <ul className="space-y-2 text-gray-400">
                <li>• Track food cost % on every recipe you create</li>
                <li>• Monitor prime cost weekly to stay profitable</li>
                <li>• Adjust pricing based on actual costs vs projections</li>
              </ul>
            </div>

            <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-8 border-l-4 border-l-[#10b981]">
              <h3 className="text-2xl font-bold mb-3">💪 Established Owners</h3>
              <p className="text-gray-300 mb-4">Running successfully? Optimize further with:</p>
              <ul className="space-y-2 text-gray-400">
                <li>• Quick menu pricing analysis for seasonal changes</li>
                <li>• Prime cost tracking across multiple locations</li>
                <li>• Break-even analysis for new concept validation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#0ea5e9]/20 to-[#a855f7]/20 border border-[#38bdf8] rounded-3xl p-12 text-center backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-[#38bdf8]">Automate</span> These Calculations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              These calculators are great for one-time analysis. But what if you could track all these metrics automatically, every single day?
            </p>
            <p className="text-lg text-gray-400 mb-8">
              OwnerClone integrates with your POS system to automatically calculate food cost %, prime cost, detect theft, and forecast demand—without any manual data entry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/pricing" className="bg-[#38bdf8] text-black px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#0ea5e9] transition inline-block">
                Join Early Access
              </a>
              <a href="/#features" className="border-2 border-[#38bdf8] text-[#38bdf8] px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#38bdf8]/10 transition inline-block">
                See How It Works
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              ✓ 14-day free trial &nbsp;|&nbsp; ✓ No credit card required &nbsp;|&nbsp; ✓ Setup in 5 minutes
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a] py-12 px-4 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <svg viewBox="0 0 100 60" className="w-10 h-10">
                  <circle cx="20" cy="30" r="18" fill="none" stroke="#38bdf8" strokeWidth="4"/>
                  <path d="M 60 12 A 18 18 0 1 1 60 48" fill="none" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round"/>
                </svg>
                <span className="text-xl font-bold">OwnerClone</span>
              </div>
              <p className="text-gray-400 text-sm">AI-powered restaurant management for smarter operations.</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Free Tools</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/free-tools" className="hover:text-[#38bdf8] transition">All Calculators</a></li>
                <li><a href="/free-tools/startup-cost" className="hover:text-[#38bdf8] transition">Startup Cost Calculator</a></li>
                <li><a href="/free-tools/food-cost" className="hover:text-[#10b981] transition">Food Cost Calculator</a></li>
                <li><a href="/free-tools/prime-cost" className="hover:text-[#a855f7] transition">Prime Cost Calculator</a></li>
                <li><a href="/free-tools/google-review" className="hover:text-[#8b5cf6] transition">Google Review Calculator</a></li>
                <li><a href="/free-tools/third-party-fees" className="hover:text-[#ef4444] transition">Third Party Fees Calculator</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/blog" className="hover:text-[#38bdf8] transition">Blog</a></li>
                <li><a href="/guides" className="hover:text-[#38bdf8] transition">Guides</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/about" className="hover:text-[#38bdf8] transition">About</a></li>
                <li><a href="/pricing" className="hover:text-[#38bdf8] transition">Request Demo</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#1a1a1a] pt-8 text-center text-sm text-gray-400">
            © 2026 OwnerClone, Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
