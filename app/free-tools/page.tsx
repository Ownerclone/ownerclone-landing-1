export const metadata = {
  title: 'Free Restaurant Calculators | Food Cost, Prime Cost, Break-Even | OwnerClone',
  description: 'Professional restaurant financial calculators. Calculate food cost %, prime cost, break-even point, startup costs, and menu pricing. Free tools used by thousands of restaurant owners.',
  keywords: ['restaurant calculator', 'food cost calculator', 'prime cost calculator', 'restaurant startup cost calculator', 'break even calculator restaurant', 'menu pricing calculator'],
  openGraph: {
    title: 'Free Restaurant Calculators | OwnerClone',
    description: 'Professional restaurant financial calculators. Calculate food cost, prime cost, break-even, and more.',
    type: 'website',
    url: 'https://ownerclone.com/free-tools',
  },
};

export default function FreeToolsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-lg shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <a href="/" className="flex items-center space-x-3">
                <svg viewBox="0 0 100 60" className="w-12 h-12">
                  <circle cx="20" cy="30" r="18" fill="none" stroke="#1E9FF2" strokeWidth="4"/>
                  <path d="M 60 12 A 18 18 0 1 1 60 48" fill="none" stroke="#1E9FF2" strokeWidth="4" strokeLinecap="round"/>
                </svg>
                <span className="text-2xl font-bold">OwnerClone</span>
              </a>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/#features" className="text-gray-300 hover:text-blue-400 transition">Features</a>
              <a href="/free-tools" className="text-blue-400 font-semibold">Free Tools</a>
              <a href="/#pricing" className="text-gray-300 hover:text-blue-400 transition">Pricing</a>
              <a href="/blog" className="text-gray-300 hover:text-blue-400 transition">Blog</a>
              <a href="/demo" className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition">
                Join Early Access
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Free Restaurant <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Calculators</span>
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

      {/* Calculator Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Startup Cost Calculator - NOW WORKING! */}
            <a href="/free-tools/startup-cost" className="block bg-gray-800 rounded-2xl p-8 border border-gray-700 cursor-pointer hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-3">Startup Cost Calculator</h3>
              <p className="text-gray-400 mb-6">
                Estimate total costs to open your restaurant including build-out, equipment, inventory, and working capital.
              </p>
              <div className="flex items-center text-blue-400 font-semibold">
                <span>Try Calculator</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </a>

            {/* Food Cost Calculator */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 cursor-pointer hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300">
              <div className="text-5xl mb-4">🍽️</div>
              <h3 className="text-2xl font-bold mb-3">Food Cost Calculator</h3>
              <p className="text-gray-400 mb-6">
                Calculate food cost percentage for any recipe. See if you're hitting industry benchmarks (28-35%).
              </p>
              <div className="flex items-center text-blue-400 font-semibold">
                <span>Coming Soon</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

            {/* Prime Cost Calculator */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 cursor-pointer hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-3">Prime Cost Calculator</h3>
              <p className="text-gray-400 mb-6">
                Track your most important profitability metric: COGS + Labor. Target is 60% or less.
              </p>
              <div className="flex items-center text-blue-400 font-semibold">
                <span>Coming Soon</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

            {/* Break-Even Calculator */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 cursor-pointer hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3">Break-Even Calculator</h3>
              <p className="text-gray-400 mb-6">
                Find out exactly how many customers you need per day to break even and start making profit.
              </p>
              <div className="flex items-center text-blue-400 font-semibold">
                <span>Coming Soon</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

            {/* Menu Pricing Calculator */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 cursor-pointer hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300">
              <div className="text-5xl mb-4">💵</div>
              <h3 className="text-2xl font-bold mb-3">Menu Pricing Calculator</h3>
              <p className="text-gray-400 mb-6">
                Price your menu items for maximum profit using multiple pricing strategies and methods.
              </p>
              <div className="flex items-center text-blue-400 font-semibold">
                <span>Coming Soon</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

            {/* Coming Soon Card */}
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 border-dashed">
              <div className="text-5xl mb-4 opacity-50">⏳</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-500">More Coming Soon</h3>
              <p className="text-gray-500 mb-6">
                Labor cost calculator, inventory management, and more professional tools launching soon.
              </p>
              <div className="text-gray-600 font-semibold">
                Stay tuned
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why These Calculators Section */}
      <section className="py-16 px-4 bg-gray-800/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Restaurant Owners Love These Tools</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="text-xl font-bold mb-2">Industry-Standard Formulas</h3>
              <p className="text-gray-400">Built using benchmarks from the National Restaurant Association and Restaurant365. The same formulas used by successful operators.</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-bold mb-2">Instant Results</h3>
              <p className="text-gray-400">No waiting, no processing. Get your calculations immediately. Make decisions faster.</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-xl font-bold mb-2">100% Private</h3>
              <p className="text-gray-400">All calculations happen in your browser. We don't store or see your numbers. Your financial data stays yours.</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-xl font-bold mb-2">Mobile Friendly</h3>
              <p className="text-gray-400">Use these calculators on any device. Calculate costs while talking to vendors or visiting potential locations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Perfect For Every Stage</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-xl p-8 border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold mb-3">🚀 Pre-Launch</h3>
              <p className="text-gray-300 mb-4">Planning to open a restaurant? Use our calculators to:</p>
              <ul className="space-y-2 text-gray-400">
                <li>• Estimate total startup costs for your business plan</li>
                <li>• Calculate break-even point before signing a lease</li>
                <li>• Price your menu items for profitability from day one</li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold mb-3">🏃 New Operators</h3>
              <p className="text-gray-300 mb-4">First year of operations? These tools help you:</p>
              <ul className="space-y-2 text-gray-400">
                <li>• Track food cost % on every recipe you create</li>
                <li>• Monitor prime cost weekly to stay profitable</li>
                <li>• Adjust pricing based on actual costs vs projections</li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 border-l-4 border-green-500">
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
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Automate These Calculations?</h2>
            <p className="text-xl text-blue-100 mb-8">
              These calculators are great for one-time analysis. But what if you could track all these metrics automatically, every single day?
            </p>
            <p className="text-lg text-blue-200 mb-8">
              OwnerClone integrates with your POS system to automatically calculate food cost %, prime cost, detect theft, and forecast demand—without any manual data entry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/demo" className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition inline-block">
                Join Early Access
              </a>
              <a href="/#features" className="border-2 border-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition inline-block">
                See How It Works
              </a>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              ✓ 14-day free trial &nbsp;|&nbsp; ✓ No credit card required &nbsp;|&nbsp; ✓ Setup in 5 minutes
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12 px-4 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <svg viewBox="0 0 100 60" className="w-10 h-10">
                  <circle cx="20" cy="30" r="18" fill="none" stroke="#1E9FF2" strokeWidth="4"/>
                  <path d="M 60 12 A 18 18 0 1 1 60 48" fill="none" stroke="#1E9FF2" strokeWidth="4" strokeLinecap="round"/>
                </svg>
                <span className="text-xl font-bold">OwnerClone</span>
              </div>
              <p className="text-gray-400 text-sm">AI-powered restaurant management for smarter operations.</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Free Tools</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/free-tools" className="hover:text-blue-400 transition">All Calculators</a></li>
                <li><a href="/free-tools/startup-cost" className="hover:text-blue-400 transition">Startup Cost Calculator</a></li>
                <li><span className="text-gray-600">Food Cost Calculator</span></li>
                <li><span className="text-gray-600">Prime Cost Calculator</span></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/blog" className="hover:text-blue-400 transition">Blog</a></li>
                <li><a href="/guides" className="hover:text-blue-400 transition">Guides</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/about" className="hover:text-blue-400 transition">About</a></li>
                <li><a href="/demo" className="hover:text-blue-400 transition">Request Demo</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            © 2026 OwnerClone, Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
